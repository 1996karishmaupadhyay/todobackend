import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDb from "./config/config.js";
import userRouter from "./users/userRoute.js";
import toDoRouter from "./todos/todosRoute.js";
dotenv.config()

const app=express();
app.use(cors()); 
connectDb();
const PORT=process.env.PORT


app.use(express.json())
app.use("/api",userRouter)
app.use("/api/todos",toDoRouter)
app.listen(PORT,()=>{
    console.log(`connected to port ${PORT}`)
})