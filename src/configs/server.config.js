import express from "express";
import router from "#routes/index";
import env from "#configs/env";
import connectDb from "#configs/database";

const server = express();

await connectDb(env.DB_URI);

server.use(express.json());
server.use("/api", router);

export default server;
