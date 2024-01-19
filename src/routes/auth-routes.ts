import { loginValidator, registerValidator } from "./../types/validator";
import express, { Router } from "express";
import { login, register } from "../controller/auth-controller";

const router: Router = express.Router();

router.post("/register", registerValidator, register);
router.post("/login", loginValidator, login);
export default router;
