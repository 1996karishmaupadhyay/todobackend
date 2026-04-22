import { registerUser } from "./userService.js";
import { loginUser } from "./userService.js";
export const signup=async(req,res)=>{
    console.log('4 :', req.body);
    console.log('5 :', registerUser);
    try {
        console.log("6. inside try block")
        const createUser=await registerUser(req.body);
        console.log("9",req.body);
        console.log('10 :', createUser);

        res.json({message:"User created successfully",user:createUser})
    } catch (error) {
        res.status(500).json({message:"Error creating user",error:error})
    }
}

export const login=async(req,res)=>{
   try {
    const user =await User.loginUser(req.body);
console.log('🍳 :', user);
    
    res.json({message:"User logged in successfully",user})
   } catch (error) {
    res.status(500).json({message:"Error logging in user",error:error})
   }
}