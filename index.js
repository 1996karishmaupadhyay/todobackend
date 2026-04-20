import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/config.js";
import userRouter from "./users/userRoute.js";
dotenv.config()
const app=express();
connectDb();
const PORT=process.env.PORT


app.use(express.json())
app.use("/api",userRouter)
app.listen(PORT,()=>{
    console.log(`connected to port ${PORT}`)
})