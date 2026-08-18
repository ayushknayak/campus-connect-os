import User from "../model/user.model.js";

const getProfile=async(req,res)=>{
    try {
         const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        return res.status(201).json({
            message:'Profile Fetched Succesfully',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                college: user.college,
                branch: user.branch,
                graduationYear: user.graduationYear
            }
        });
    } catch (error) {
        return res.status(401).json({
            message:'Something went wrong'
        })
    }
}

const updateProfile = async (req, res) => {
    try {
        const { cgpa, skills } = req.body;

        const user = await User.findByIdAndUpdate(
            req.user.id,
            {
                cgpa,
                skills
            },
            {
                new: true
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
                skills: user.skills
            }
        });

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};

export  {getProfile,updateProfile};