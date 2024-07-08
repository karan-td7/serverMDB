import express from "express";
import { getUsers } from "./controller.js";

const router = express.Router();

router.route("/getUsers").get(getUsers);

export default router;
