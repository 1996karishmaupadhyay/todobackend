import express from 'express';  // ✅ FIX THIS
import { login,signup } from './userController.js';

const userRouter= express.Router();

userRouter.post('/signup',signup);
userRouter.post('/login',login);

export default userRouter;