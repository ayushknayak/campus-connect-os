import Application from "../model/application.model.js";

const getDashboard = async (req, res) => {
    try {

        const applications = await Application.find({
            userId: req.user.id
        });

 
        const statusBreakdown = {
            Applied: 0,
            OA: 0,
            Interview: 0,
            "HR Round": 0,
            Selected: 0,
            Rejected: 0
        };

       
        applications.forEach((application) => {
            statusBreakdown[application.status]++;
        });

       
        const recentApplications = await Application.find({
            userId: req.user.id
        })
            .sort({ createdAt: -1 })
            .limit(5);

    
        const applicationsWithOpportunity = await Application.find({
            userId: req.user.id,
            opportunityId: { $ne: null }
        })
            .populate("opportunityId");

        const currentDate = new Date();

        const upcomingDeadlines = applicationsWithOpportunity
            .filter((application) => {
                return (
                    application.opportunityId &&
                    application.opportunityId.deadline &&
                    application.opportunityId.deadline >= currentDate
                );
            })
            .sort((a, b) => {
                return (
                    new Date(a.opportunityId.deadline) -
                    new Date(b.opportunityId.deadline)
                );
            })
            .slice(0, 5);

    
        return res.status(200).json({
            totalApplications: applications.length,
            statusBreakdown,
            recentApplications,
            upcomingDeadlines
        });

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};

export {
    getDashboard
};