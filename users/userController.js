import { registerUser } from "./userService.js";
import { loginUser } from "./userService.js";
export const signup=async(req,res)=>{
    try {
        const createUser=await registerUser(req.body)
        res.json({message:"User created successfully",user:createUser})
    } catch (error) {
        res.status(500).json({message:"Error creating user",error:error})
    }
}

export const login=async(req,res)=>{
   try {
    const user =await User.loginUser(req.body);
    res.json({message:"User logged in successfully",user})
   } catch (error) {
    res.status(500).json({message:"Error logging in user",error:error})
   }
}