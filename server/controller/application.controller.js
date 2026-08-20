import Application from '../model/application.model.js';
import { findOrCreateOpportunity } from '../service/opportunity.service.js';


const shareApplicationAsOpportunity = async (req, res) => {
    try {
        // Find application and verify ownership
        const application = await Application.findOne({
            _id: req.params.id,
            userId: req.user.id
        });

        if (!application) {
            return res.status(404).json({
                message: "Application not found"
            });
        }

        // Already linked?
        if (application.opportunityId) {
            return res.status(400).json({
                message:
                    "This application is already linked to an opportunity"
            });
        }

        const {
            type,
            description,
            source,
            deadline,
            eligibility,
            location,
            skills,
            confirmSimilarDuplicate
        } = req.body;

        const result = await findOrCreateOpportunity({
            type,
            company: application.company,
            title: application.role,
            description,
            applicationLink: application.applicationLink,
            source,
            deadline,
            eligibility,
            location,
            skills,
            contributedBy: req.user.id,
            confirmSimilarDuplicate
        });

        // Similar opportunity found
        if (result.type === "similar") {
            return res.status(409).json({
                message: "A similar opportunity already exists",
                isSimilar: true,
                opportunity: result.opportunity
            });
        }

        // Existing or newly created opportunity
        application.opportunityId = result.opportunity._id;

        await application.save();

        // Exact match already existed
        if (result.type === "existing") {
            return res.status(200).json({
                message:
                    "Application linked to existing opportunity",
                opportunity: result.opportunity,
                application
            });
        }

        // New opportunity was created
        return res.status(201).json({
            message:
                "Application shared and opportunity created successfully",
            opportunity: result.opportunity,
            application
        });

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};

const Addapplication=async(req,res)=>{
    try {
        const {company,role,source,applicationLink,status,appliedDate,notes} = req.body;

        const userId = req.user.id;

        const application = await Application.create({
            userId,
            company,
            role,
            source,
            applicationLink,
            status,
            appliedDate,
            notes
        });

        return res.status(201).json({
            message: "Application added successfully",
            application
        });
    } catch (error) {
        return res.status(401).json({
            message:'Something Went Wrong'
        })
    }
}

const getApplications = async (req, res) => {
    try {
        const applications = await Application.find({
            userId: req.user.id
        });

        return res.status(200).json({
            applications
        });

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};

const updateApplication=async(req,res)=>{
    try {
        const application=await Application.findOneAndUpdate(
            {
                _id: req.params.id,
                userId: req.user.id
            },
            req.body,
            {
                returnDocument: "after"
            }
        );
        if(!application){
            return res.status(404).json({
                message:"Application not found"
            });
        }
        return res.status(201).json({
            message:"Application Updated Succesfully",
            application
        });
    } catch (error) {
        return res.status(500).json({
            message:"Something went wrong"
        });
    }
}
const deleteApplication = async (req, res) => {
    try {
        const application = await Application.findOneAndDelete({
            _id: req.params.id,
            userId: req.user.id
        });

        if (!application) {
            return res.status(404).json({
                message: "Application not found"
            });
        }

        return res.status(200).json({
            message: "Application deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};
export {Addapplication,getApplications,updateApplication,deleteApplication,shareApplicationAsOpportunity};