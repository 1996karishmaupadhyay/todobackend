import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDb from "./config/config.js";
import toDoRouter from "./todos/todosRoute.js";
import userRouter from "./users/userRoute.js";
dotenv.config()

const app=express();
app.use(cors(
    {
        origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
    }
)); 
app.use(express.json())
connectDb();
app.use("/api",userRouter)
app.use("/api/todos",toDoRouter)
connectDb();
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`connected to port ${PORT}`)
})