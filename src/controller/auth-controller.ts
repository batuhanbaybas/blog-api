import { Request, Response } from "express";

import { prisma } from "../config/database";
import { signJwt } from "../config/hash";

export const register = async (req: Request, res: Response) => {
  const user = await prisma.user.create({
    data: {
      email: req.body.email,
      password: req.body.password
    }
  });
  const token = await signJwt(user.id);

  res.status(200).json({
    status: true,
    token: token
  });
};

export const login = async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({
    where: {
      email: req.body.email
    }
  });
  if (!user) {
    return res.status(400).json({
      status: false,
      message: "User not found"
    });
  }

  if (user?.password !== req.body.password) {
    return res.status(400).json({
      status: false,
      message: "Password is incorrect"
    });
  }

  const token = await signJwt(user?.id);

  res.status(200).json({
    status: true,
    token: token
  });
};
