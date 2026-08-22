import Experience from "../model/experience.model.js";
import Opportunity from '../model/opportunity.model.js'

const createExperience = async (req, res) => {
    try {
        const {
            opportunityId,
            stage,
            topics,
            difficulty,
            questions,
            experience
        } = req.body;

        
        const opportunity = await Opportunity.findById(opportunityId);

        if (!opportunity) {
            return res.status(404).json({
                message: "Opportunity not found"
            });
        }

        const existingExperience = await Experience.findOne({
            userId: req.user.id,
            opportunityId,
            stage
        });

        if (existingExperience) {
            return res.status(409).json({
                message: "You have already shared an experience for this stage"
            });
        }

       
        const newExperience = await Experience.create({
            userId: req.user.id,
            opportunityId,
            stage,
            topics,
            difficulty,
            questions,
            experience
        });

        return res.status(201).json({
            message: "Experience shared successfully",
            experience: newExperience
        });

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};

const getExperiencesByOpportunity = async (req, res) => {
    try {
        const { opportunityId } = req.params;
        const opportunity = await Opportunity.findById(opportunityId);

        if (!opportunity) {
            return res.status(404).json({
                message: "Opportunity not found"
            });
        }

        const experiences = await Experience.find({
            opportunityId
        }).populate("userId", "name");

        return res.status(200).json({
            count: experiences.length,
            experiences
        });

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};

const updateExperience = async (req, res) => {
    try {
        const experience = await Experience.findOne({
            _id: req.params.id,
            userId: req.user.id
        });

        if (!experience) {
            return res.status(404).json({
                message: "Experience not found"
            });
        }

        const {
            stage,
            topics,
            difficulty,
            questions,
            experience: experienceText
        } = req.body;

    
        if (stage !== undefined) experience.stage = stage;
        if (topics !== undefined) experience.topics = topics;
        if (difficulty !== undefined) experience.difficulty = difficulty;
        if (questions !== undefined) experience.questions = questions;
        if (experienceText !== undefined) {
            experience.experience = experienceText;
        }

        await experience.save();

        return res.status(200).json({
            message: "Experience updated successfully",
            experience
        });

    } catch (error) {
      
        if (error.code === 11000) {
            return res.status(409).json({
                message: "You already have an experience for this stage"
            });
        }

        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};

const deleteExperience = async (req, res) => {
    try {
        const experience = await Experience.findOneAndDelete({
            _id: req.params.id,
            userId: req.user.id
        });

        if (!experience) {
            return res.status(404).json({
                message: "Experience not found"
            });
        }

        return res.status(200).json({
            message: "Experience deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};

export {deleteExperience,updateExperience,getExperiencesByOpportunity,createExperience};