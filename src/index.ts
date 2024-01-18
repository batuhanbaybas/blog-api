import "dotenv/config";

import express, { Express } from "express";
import authRoutes from "./routes/auth-routes";
import postRoutes from "./routes/post-routes";
import { env } from "./config/env";
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);

app.listen(env.PORT, () => console.log("Server running"));
