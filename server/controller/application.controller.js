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


export default Addapplication;