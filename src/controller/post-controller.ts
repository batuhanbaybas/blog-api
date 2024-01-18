import { Request, Response } from "express";
import { prisma } from "../config/database";

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: true
      }
    });
    return res.status(200).json({
      status: true,
      data: posts
    });
  } catch (error: any) {
    return res.status(400).json({
      status: false,
      message: error.message
    });
  }
};

export const getPostById = async (req: Request, res: Response) => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: req.params.id
      }
    });
    return res.status(200).json({
      status: true,
      data: post
    });
  } catch (error: any) {
    return res.status(400).json({
      status: false,
      message: error.message
    });
  }
};

export const createPost = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  try {
    const { userID } = req.headers;
    const post = await prisma.post.create({
      data: {
        title: title,
        content: content,
        authorId: userID as string
      }
    });
    return res.status(200).json({
      status: true,
      message: "Post created successfully",
      data: post
    });
  } catch (error: any) {
    return res.status(400).json({
      status: false,
      message: error.message
    });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  try {
    const post = await prisma.post.update({
      where: {
        id: req.params.id
      },
      data: {
        title: title,
        content: content
      }
    });
    return res.status(200).json({
      status: true,
      message: "Post updated successfully",
      data: post
    });
  } catch (error: any) {
    return res.status(400).json({
      status: false,
      message: error.message
    });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    await prisma.post.delete({
      where: {
        id: req.params.id
      }
    });
    return res.status(200).json({
      status: true,
      message: "Post deleted successfully"
    });
  } catch (error: any) {
    return res.status(400).json({
      status: false,
      message: error.message
    });
  }
};
