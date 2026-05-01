import express from 'express';
import { addToDo,
    // deleteToDo, getToDos, updateToDo
     } from './todosController.js';
const toDoRouter =express.Router();

toDoRouter.post('/add',addToDo);
// toDoRouter.get('/get',getToDos);
// toDoRouter.put('/update/:id',updateToDo);
// toDoRouter.delete('/delete/:id',deleteToDo);
 export default toDoRouter;