import express, { Router } from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  updatePost
} from "../controller/post-controller";
import { authMiddleware } from "../middleware/auth-middleware";

const router: Router = express.Router();

router.get("/all", getAllPosts);
router.post("/create", authMiddleware, createPost);
router.put("/update/:id", authMiddleware, updatePost);
router.delete("/delete/:id", authMiddleware, deletePost);
export default router;
