import express, { Router } from "express";
import { getAllUsers, register } from "../controller/auth-controller";

const router: Router = express.Router();

router.post("/register", register);
router.get("/all", getAllUsers);
export default router;
