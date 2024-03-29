import { NextFunction, Request, Response } from "express";
import { verifyJwt } from "../helper/hash";
import { prisma } from "../config/database";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const decoded = verifyJwt(token as string);
    if (!token) {
      return res.status(403).json({
        status: false,
        message: "Forbidden access"
      });
    }
    const user = await prisma.user.findUnique({
      where: {
        id: (
          decoded as {
            id: string;
          }
        ).id
      }
    });
    if (!user) {
      res.status(401).json({
        status: false,
        message: "Unauthorized"
      });
    }
    if (user) {
      req.headers.userID = user.id;
      next();
    }
  } catch (error: any) {
    res.status(401).json({
      status: false,
      message: error.message
    });
    next();
  }
};
