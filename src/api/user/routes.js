import express from "express";
import { createUser, getUsers } from "./controller.js";

const router = express.Router();

router.route("/getUsers").get(getUsers);

router.route("/create").post(createUser);

export default router;
