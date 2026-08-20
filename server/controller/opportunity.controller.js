import Opportunity from "../model/opportunity.model.js";


const normalizeLink = (link) => {
    const url = new URL(link);

    const trackingParams = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_term",
        "utm_content",
        "source",
        "ref"
    ];

    trackingParams.forEach((param) => {
        url.searchParams.delete(param);
    });

    url.hash = "";

    return url.toString().replace(/\/$/, "");
};


const createDuplicateKey = (
    company,
    title,
    type,
    location,
    deadline
) => {
    return [
        company,
        title,
        type,
        location || "",
        deadline || ""
    ]
        .map((value) =>
            value
                .toString()
                .trim()
                .toLowerCase()
                .replace(/\s+/g, " ")
        )
        .join("|");
};


const addOpportunity = async (req, res) => {
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
            skills,
            confirmSimilarDuplicate
        } = req.body;

        const canonicalLink = normalizeLink(applicationLink);

        const duplicateKey = createDuplicateKey(
            company,
            title,
            type,
            location,
            deadline
        );

        // Check exact duplicate
        const existingOpportunity = await Opportunity.findOne({
            canonicalLink
        });

        if (existingOpportunity) {
            return res.status(409).json({
                message: "This opportunity already exists",
                isDuplicate: true,
                opportunity: existingOpportunity
            });
        }

        // Check similar opportunity
        const similarOpportunity = await Opportunity.findOne({
            duplicateKey
        });

        if (
            similarOpportunity &&
            !confirmSimilarDuplicate
        ) {
            return res.status(409).json({
                message: "A similar opportunity already exists",
                isSimilar: true,
                opportunity: similarOpportunity
            });
        }

        const opportunity = await Opportunity.create({
            type,
            company,
            title,
            description,
            applicationLink,
            canonicalLink,
            duplicateKey,
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
            message: "Something went wrong"
        });
    }
};


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
        const opportunity = await Opportunity.findById(
            req.params.id
        );

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
        const opportunity = await Opportunity.findOne({
            _id: req.params.id,
            contributedBy: req.user.id
        });

        if (!opportunity) {
            return res.status(404).json({
                message: "Opportunity not found or you are not authorized"
            });
        }

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
            skills,
            confirmSimilarDuplicate
        } = req.body;

        // Use new values if provided.
        // Otherwise, keep existing values.

        const updatedType = type ?? opportunity.type;

        const updatedCompany =
            company ?? opportunity.company;

        const updatedTitle =
            title ?? opportunity.title;

        const updatedLocation =
            location ?? opportunity.location;

        const updatedDeadline =
            deadline ?? opportunity.deadline;

        const updatedApplicationLink =
            applicationLink ?? opportunity.applicationLink;


        // Regenerate duplicate fields

        const canonicalLink =
            normalizeLink(updatedApplicationLink);

        const duplicateKey = createDuplicateKey(
            updatedCompany,
            updatedTitle,
            updatedType,
            updatedLocation,
            updatedDeadline
        );


        // Check exact duplicate.
        // $ne means "not equal", so we don't compare
        // this opportunity with itself.

        const existingOpportunity =
            await Opportunity.findOne({
                canonicalLink,
                _id: { $ne: opportunity._id }
            });

        if (existingOpportunity) {
            return res.status(409).json({
                message:
                    "Another opportunity with this link already exists",
                isDuplicate: true,
                opportunity: existingOpportunity
            });
        }


        // Check similar opportunity

        const similarOpportunity =
            await Opportunity.findOne({
                duplicateKey,
                _id: { $ne: opportunity._id }
            });

        if (
            similarOpportunity &&
            !confirmSimilarDuplicate
        ) {
            return res.status(409).json({
                message:
                    "A similar opportunity already exists",
                isSimilar: true,
                opportunity: similarOpportunity
            });
        }


        // Update allowed fields

        opportunity.type = updatedType;

        opportunity.company = updatedCompany;

        opportunity.title = updatedTitle;

        if (description !== undefined) {
            opportunity.description = description;
        }

        opportunity.applicationLink =
            updatedApplicationLink;

        if (source !== undefined) {
            opportunity.source = source;
        }

        opportunity.deadline = updatedDeadline;

        if (eligibility !== undefined) {
            opportunity.eligibility = eligibility;
        }

        opportunity.location = updatedLocation;

        if (skills !== undefined) {
            opportunity.skills = skills;
        }


        // Update internal duplicate fields

        opportunity.canonicalLink = canonicalLink;

        opportunity.duplicateKey = duplicateKey;


        await opportunity.save();

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
        const opportunity =
            await Opportunity.findOneAndDelete({
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


export {
    addOpportunity,
    getOpportunities,
    getOpportunityById,
    updateOpportunity,
    deleteOpportunity
};