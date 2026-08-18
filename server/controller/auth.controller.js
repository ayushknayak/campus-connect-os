import User from '../model/user.model.js'
import bcrypt from "bcrypt"
import jsonwebtoken from 'jsonwebtoken'

const signup=async (req,res)=>{
    try {
    const {name,email,password,college,branch,graduationYear}=req.body;
    const existingUser=await User.findOne({email});
    if(existingUser){
        return res.status(401).json({
            message:'User Already Exist'
        })
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            college,
            branch,
            graduationYear
        });

      return res.status(201).json({
            message: "User created successfully",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                college: newUser.college,
                branch: newUser.branch,
                graduationYear: newUser.graduationYear
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};

const login=async(req,res)=>{
    try {
        const{email,password}=req.body;

        const user=await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message:'invalid email or password'
            })
        }
        const PasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!PasswordCorrect) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const token = jsonwebtoken.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        return res.status(200).json({
            message: "Login successful",
            token,
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
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
}


export { signup, login };