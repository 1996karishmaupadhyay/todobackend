import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`database connected to ${process.env.MONGO_URI}`)
    } catch (error) {
        console.log("database connection error")
    }
}

export default connectDb;