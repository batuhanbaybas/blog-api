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
    if (!token) {
      return res.status(403).json({
        status: false,
        message: "Forbidden access"
      });
    }

    const decoded = verifyJwt(token);
    const user = await prisma.user.findUnique({
      where: {
        id: decoded as string
      }
    });

    if (!user) {
      return res.status(401).json({
        status: false,
        message: "Unauthorized"
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: "Unauthorized"
    });
  }
};
