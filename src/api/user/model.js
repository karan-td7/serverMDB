import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
});

export const UserModel = mongoose.model("User", userSchema);
