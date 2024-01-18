import { Request, Response } from "express";

import { prisma } from "../config/database";

export const register = async (req: Request, res: Response) => {
  await prisma.user.create({
    data: {
      email: req.body.email,
      password: req.body.password
    }
  });

  res.status(200).json({
    status: true,
    message: "User created"
  });
};

export const login = async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({
    where: {
      email: req.body.email
    }
  });

  if (!user) {
    res.status(400).json({
      status: false,
      message: "User not found"
    });
  }

  if (user?.password !== req.body.password) {
    res.status(400).json({
      status: false,
      message: "Password is incorrect"
    });
  }

  res.status(200).json({
    status: true,
    message: "Logged in"
  });
};
