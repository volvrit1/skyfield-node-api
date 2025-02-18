import cors from "cors";
import multer from "multer";
import express from "express";
import env from "#configs/env";
import router from "#routes/index";
import connectDb from "#configs/database";
import sessionMiddleware from "#middlewares/session";
import globalErrorHandler from "#utils/error";

const server = express();

await connectDb(env.DB_URI);

server.use(cors());
server.use(multer().any());
server.use(express.json());
server.use(sessionMiddleware);
server.use("/api", router);

server.use(globalErrorHandler);

export default server;
