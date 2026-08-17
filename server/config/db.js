import mongoose from "mongoose";

const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected");
    } catch (error) {
        console.log("Database connection failed:", error.message);
    }
};

export default dbconnect;