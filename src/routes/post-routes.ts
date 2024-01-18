import express, { Router } from "express";
import { getAllPosts } from "../controller/post-controller";
import { authMiddleware } from "../middleware/auth-middleware";

const router: Router = express.Router();

router.get("/all", getAllPosts);
router.post("/create", authMiddleware, getAllPosts);
router.put("/update/:id", authMiddleware, getAllPosts);
router.delete("/delete/:id", authMiddleware, getAllPosts);
export default router;
