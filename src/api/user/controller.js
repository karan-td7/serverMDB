import { UserModel } from "./model.js";

export const getUsers = async (req, res) => {
  try {
    const userData = await UserModel.find();
    res.json(userData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, username, email, phone } = req.body;

    if (!name || !username || !email || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = new UserModel({ name, username, email, phone });

    await user.save();

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ message: "Duplicate field value entered", error });
    }
    res.status(500).json({ message: "Error creating user", error });
  }
};
