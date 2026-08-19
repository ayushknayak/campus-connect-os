import Opportunity from "../model/opportunity.model.js";


const addopportunity=async(req,res)=>{
    try {
        const {
            type,
            company,
            title,
            description,
            applicationLink,
            source,
            deadline,
            eligibility,
            location,
            skills
        } = req.body;

        const opportunity = await Opportunity.create({
            type,
            company,
            title,
            description,
            applicationLink,
            source,
            deadline,
            eligibility,
            location,
            skills,
            contributedBy: req.user.id
        });

        return res.status(201).json({
            message: "Opportunity added successfully",
            opportunity
        });
    } catch (error) {
        return res.status(500).json({
            message:"Something went wrong"
        })
    }
}

const getOpportunities = async (req, res) => {
    try {
        const opportunities = await Opportunity.find();

        return res.status(200).json({
            opportunities
        });

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};

const getOpportunityById = async (req, res) => {
    try {
        const opportunity = await Opportunity.findById(req.params.id);

        if (!opportunity) {
            return res.status(404).json({
                message: "Opportunity not found"
            });
        }

        return res.status(200).json({
            opportunity
        });

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};

const updateOpportunity = async (req, res) => {
    try {
        const opportunity = await Opportunity.findOneAndUpdate(
            {
                _id: req.params.id,
                contributedBy: req.user.id
            },
            req.body,
            {
                returnDocument: "after"
            }
        );

        if (!opportunity) {
            return res.status(404).json({
                message: "Opportunity not found or you are not authorized"
            });
        }

        return res.status(200).json({
            message: "Opportunity updated successfully",
            opportunity
        });

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};

const deleteOpportunity = async (req, res) => {
    try {
        const opportunity = await Opportunity.findOneAndDelete({
            _id: req.params.id,
            contributedBy: req.user.id
        });

        if (!opportunity) {
            return res.status(404).json({
                message: "Opportunity not found or you are not authorized"
            });
        }

        return res.status(200).json({
            message: "Opportunity deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};

export {addopportunity,getOpportunities,getOpportunityById,updateOpportunity,deleteOpportunity};