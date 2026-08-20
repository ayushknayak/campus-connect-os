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


const findOrCreateOpportunity = async ({
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
    contributedBy,
    confirmSimilarDuplicate
}) => {

    const canonicalLink = normalizeLink(applicationLink);

    // Exact duplicate
    const existingOpportunity = await Opportunity.findOne({
        canonicalLink
    });

    if (existingOpportunity) {
        return {
            type: "existing",
            opportunity: existingOpportunity
        };
    }


    const duplicateKey = createDuplicateKey(
        company,
        title,
        type,
        location,
        deadline
    );

    // Similar duplicate
    const similarOpportunity = await Opportunity.findOne({
        duplicateKey
    });

    if (
        similarOpportunity &&
        !confirmSimilarDuplicate
    ) {
        return {
            type: "similar",
            opportunity: similarOpportunity
        };
    }


    // Create new opportunity
    const newOpportunity = await Opportunity.create({
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
        contributedBy
    });

    return {
        type: "created",
        opportunity: newOpportunity
    };
};


export {
    normalizeLink,
    createDuplicateKey,
    findOrCreateOpportunity
};