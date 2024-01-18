import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { env } from "../config/env";

export const signJwt = (id?: string) => {
  return jwt.sign({ id }, env.JWT_SECRET as string, { expiresIn: "1d" });
};

export const verifyJwt = (token: string) => {
  return jwt.verify(token, env.JWT_SECRET as string);
};

export const bcryptHash = (password: string) => {
  return bcrypt.hashSync(password, 10);
};

export const bcryptCompare = (password: string, hash: string) => {
  return bcrypt.compareSync(password, hash);
};
