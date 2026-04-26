
import User from "./userModel.js";
import bcrypt from "bcrypt";
export const registerUser = async (userData) => {
  const { username, email, password } = userData;
console.log('😜 userData:', userData);
  const existingUser = await User.findOne({ email });
console.log('🎗 existingUser:', existingUser);
  if (!existingUser) {
    console.log("🔍 No existing user found, proceeding to create a new user");
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('🔐 hashedPassword:', hashedPassword)
    const createNewUser = await User.create({ username, email, password:hashedPassword });
console.log('🌞 createNewUser:', createNewUser);
    return createNewUser;
  } else {
    throw new Error("User with this email already exists");
  }
};

export const loginUser = async (loginData) => {
  const { email, password } = loginData;
  const user = await User.findOne({ email });
try {
  if(!user){
    throw new Error("User not found");
  }else{
    const passwordMatch=await bcrypt.compare(password,user.password);
    if(!passwordMatch){
      throw new Error("Invalid password");
    }else{
      return user;
    }
  }
} catch (error) {
  throw new Error(error.message);
}
};
