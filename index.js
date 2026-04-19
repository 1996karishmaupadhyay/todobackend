import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/config.js";
dotenv.config()
const app=express();
connectDb();
const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`connected to port ${PORT}`)
})