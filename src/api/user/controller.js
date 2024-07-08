import { UserModel } from "./model.js";

export const getUsers = async (req, res) => {
  try {
    const userData = await UserModel.find();
    res.json(userData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};
