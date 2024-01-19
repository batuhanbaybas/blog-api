import express, { Router } from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPostById,
  updatePost
} from "../controller/post-controller";
import { authMiddleware } from "../middleware/auth-middleware";
import { newPostValidator, updatePostValidator } from "../types/validator";
const router: Router = express.Router();

router.get("/all", getAllPosts);
router.get("/single/:id", getPostById);
router.post("/create", authMiddleware, newPostValidator, createPost);
router.put("/update/:id", authMiddleware, updatePostValidator, updatePost);
router.delete("/delete/:id", authMiddleware, deletePost);
export default router;
