import express from 'express';
import  {addToDo ,getToDos, deleteToDo} from './todosController.js';
const toDoRouter =express.Router();

toDoRouter.post('/add',addToDo);
toDoRouter.get('/get',getToDos);
// toDoRouter.put('/update/:id',updateToDo);
toDoRouter.post('/delete/:id',deleteToDo);
 export default toDoRouter;