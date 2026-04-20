export const registerUser = async (userData) => {
  const { username, email, password } = userData;
  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    const createNewUser = await User.create({ username, email, password });
    return createNewUser;
  } else {
    throw new Error("User with this email already exists");
  }
};

export const loginUser = async (loginData) => {
  const { email, password } = loginData;
  const user = await User.findOne({ email });
  if (user) {
    if (user.password === password) {
      return user;
    } else {
      throw new Error("Invalid password");
    }
  } else {
    throw new Error("User not found");
  }
};
