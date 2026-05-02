import e from "cors";
import { Schema ,mongoose } from "mongoose";

const todos =new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    status:{
        type:Boolean,
        required:true,
        default:false,
    },
    category:{
        type:String,
        required:true,
        enu8m:["personal","work","home"],
    }

    
})
const todoModel = mongoose.model("todos",todos);
export default todoModel;