import todoModel from "./todosModel.js"

export const createTodo = async (todo) => {
    try {
        const existingToDo= await todoModel.
        findOne({title:todo.title});
        if(existingToDo){
            throw new Error("Already a ToDo with same title exists")
        }else{
            const newToDo=await todoModel.create(todo);
            return newToDo;
        }
    } catch (error) {
        throw new Error(error.message)
    }
}

export const getAllToDos=async(todos)=>{
    try {
        const todos=await todoModel.find();     
        return todos;
    } catch (error) {
        throw new Error(error.message)
    }  
}

export const deleteToDoById=async(id)=>{
    try {
        const deletedTodo = await todoModel.findByIdAndDelete(id);
        return deletedTodo;
    } catch (error) {
        throw new Error(error.message)
     }  
    }

    const updateToDoById=async(id,todo)=>{
        try {
            const updatedTodo=await todoModel.findByIdAndUpdate(id,todo,{new:true});
            return updatedTodo;
        } catch (error) {
            throw new Error(error.message)
        }   
}