import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are Important" });
    }
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(400).json({ message: "User already exists!" });
    }
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password,
    });
    res.status(201).json({
      message: "User registered!",
      user: { id: user._id, email: user.email, username: user.username },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please insert a username and password" });
    }
    const user = await User.findOne({ email: email.toLowerCase() });
    const isMatched = await user.comparePassword(password);
    if (isMatched) {
      return res.status(201).json({
        message: "User logged in",
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
        },
      });
    }
    return res.status(400).json({ message: "Invalid credentials!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
const logoutUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User logged out" });
    return;
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export { registerUser, loginUser, logoutUser };
