import cors from "cors";
import multer from "multer";
import express from "express";
import env from "#configs/env";
import router from "#routes/index";
import connectDb from "#configs/database";

const server = express();

await connectDb(env.DB_URI);

server.use(multer().any());
server.use(express.json());
server.use("/api", router);
server.use(
  cors({
    origin: "http://localhost:3000", // Allow frontend access
    methods: "GET,POST,PUT,DELETE",
    credentials: true, // If sending cookies or auth headers
  }),
);

export default server;
