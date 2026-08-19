import Application from '../model/application.model.js';


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
export {Addapplication,getApplications,updateApplication,deleteApplication};