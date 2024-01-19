import { Request, Response } from "express";

import { prisma } from "../config/database";
import { bcryptCompare, bcryptHash, signJwt, verifyJwt } from "../helper/hash";
import { validationResult } from "express-validator";

export const register = async (req: Request, res: Response) => {
  const error = validationResult(req);
  const { email, password } = req.body;
  try {
    if (!error.isEmpty()) {
      return res.status(422).json({
        status: false,
        message: error.array()
      });
    }
    const hashed = await bcryptHash(password);
    const user = await prisma.user.create({
      data: {
        email: email,
        password: hashed
      }
    });
    const token = await signJwt(user.id);

    return res.status(200).json({
      status: true,
      message: "User created successfully",
      token: token
    });
  } catch (error: any) {
    return res.status(400).json({
      status: false,
      message: error.message
    });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    });

    const isValidPassword = await bcryptCompare(
      password,
      user?.password as string
    );

    if (!isValidPassword) {
      return res.status(400).json({
        status: false,
        message: "Password is incorrect"
      });
    }

    if (!user) {
      return res.status(400).json({
        status: false,
        message: "User not found"
      });
    }

    const token = await signJwt(user?.id);

    return res.status(200).json({
      status: true,
      message: "User logged in successfully",
      token: token
    });
  } catch (error: any) {
    return res.status(400).json({
      status: false,
      message: error.message
    });
  }
};
