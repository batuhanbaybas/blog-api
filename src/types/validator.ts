import { body } from "express-validator";

export const registerValidator = [
  body("email", "Invalid Email Format").isEmail(),
  body("password", "Password is required").isLength({ min: 6 })
];

export const loginValidator = [
  body("email", "Email is required").isEmail(),
  body("password", "Password is required").isLength({ min: 6 })
];

export const newPostValidator = [
  body("title", "Title is required").isString(),
  body("body", "Body is required").isString()
];

export const updatePostValidator = [
  body("title", "Title is required").isString(),
  body("body", "Body is required").isString()
];
