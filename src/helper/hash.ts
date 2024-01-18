import * as jwt from "jsonwebtoken";
import { env } from "../config/env";

export const signJwt = (id?: string) => {
  return jwt.sign({ id }, env.JWT_SECRET as string, { expiresIn: "1d" });
};

export const verifyJwt = (token: string) => {
  return jwt.verify(token, env.JWT_SECRET as string);
};
