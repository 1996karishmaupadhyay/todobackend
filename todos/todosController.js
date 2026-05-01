import { createTodo } from "./todosService";

const addToDo=async(req,res)=>{
    try {
        const todo=await createTodo(req.body);
        res.status(200).json({
            success:true,
            message:"ToDo created successfully",
            data:todo,
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

export {addToDo}