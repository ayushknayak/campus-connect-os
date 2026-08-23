import User from "../model/user.model.js";

const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        return res.status(200).json({
            message: "Profile fetched successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                college: user.college,
                branch: user.branch,
                graduationYear: user.graduationYear,
                cgpa: user.cgpa,
                skills: user.skills,
                username: user.username,
                github: user.github,
                linkedin: user.linkedin,
                profileBio: user.profileBio,
                isPublic: user.isPublic,
                resume: user.resume
            }
        });

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};


const updateProfile = async (req, res) => {
    try {
        const {
            cgpa,
            skills,
            username,
            github,
            linkedin,
            profileBio,
            isPublic
        } = req.body;

        const user = await User.findByIdAndUpdate(
            req.user.id,
            {
                cgpa,
                skills,
                username,
                github,
                linkedin,
                profileBio,
                isPublic
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        return res.status(200).json({
            message: "Profile updated successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                college: user.college,
                branch: user.branch,
                graduationYear: user.graduationYear,
                cgpa: user.cgpa,
                skills: user.skills,
                username: user.username,
                github: user.github,
                linkedin: user.linkedin,
                profileBio: user.profileBio,
                isPublic: user.isPublic,
                resume: user.resume
            }
        });

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};

const getPublicProfile = async (req, res) => {
    try {
        const { username } = req.params;

        const user = await User.findOne({
            username: username,
            isPublic: true
        });

        if (!user) {
            return res.status(404).json({
                message: "Public profile not found"
            });
        }

        return res.status(200).json({
            message: "Public profile fetched successfully",
            user: {
                username: user.username,
                name: user.name,
                college: user.college,
                branch: user.branch,
                graduationYear: user.graduationYear,
                cgpa: user.cgpa,
                skills: user.skills,
                github: user.github,
                linkedin: user.linkedin,
                profileBio: user.profileBio
            }
        });

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};

export { getProfile, updateProfile ,getPublicProfile};