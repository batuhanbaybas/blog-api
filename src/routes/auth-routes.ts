import express, { Router } from "express";
import { getAllUser, login, register } from "../controller/auth-controller";

const router: Router = express.Router();

router.get("/all", getAllUser);
router.post("/register", register);
router.post("/login", login);
export default router;
