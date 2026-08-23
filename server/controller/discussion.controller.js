import Discussion from "../model/discussion.model.js";
import Opportunity from "../model/opportunity.model.js";
const addDiscussion = async (req, res) => {
    try {
        const { opportunityId } = req.params;
        const { content } = req.body;

        
        const opportunity = await Opportunity.findById(opportunityId);

        if (!opportunity) {
            return res.status(404).json({
                message: "Opportunity not found"
            });
        }

        
        const discussion = await Discussion.create({
            opportunityId,
            userId: req.user.id,
            content
        });

        return res.status(201).json({
            message: "Discussion added successfully",
            discussion
        });

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};

const getDiscussions = async (req, res) => {
    try {
        const { opportunityId } = req.params;

        const discussions = await Discussion.find({
            opportunityId
        })
        .populate("userId", "name username")
        .sort({ createdAt: -1 });

        return res.status(200).json({
            message: "Discussions fetched successfully",
            discussions
        });

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};

export { addDiscussion ,getDiscussions};