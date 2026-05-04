import { createTodo } from "./todosService.js";

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


const getToDos=async(req,res)=>{
    try {
        const todos=await getAllToDos();
        res.status(200).json({
            success:true,
            message:"ToDos retrieved successfully",
            data:todos,
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}



const deleteToDo=async(req,res)=>{
    try {
        const id=req.params.id; 
        await deleteToDoById(id);
        res.status(200).json({
            success:true,
            message:"ToDo deleted successfully",
        })
    } catch (error) {
        res.status(400).json({
            success:false,  
            message:error.message
        })
    }   
} 
export default { addToDo, getToDos, deleteToDo };