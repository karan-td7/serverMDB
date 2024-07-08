// routes.js
import { Router } from "express";
import user from "./api/user/routes.js";

const router = Router();

router.use("/user", user);

export default router;
