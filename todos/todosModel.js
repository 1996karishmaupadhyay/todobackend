import { Schema } from "mongoose";

const todos =new Schema({
    title:String,
    description:String,
    status:Boolean,
    
})