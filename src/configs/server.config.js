import express from "express";
import env from "#configs/env";
import connectDb from "#configs/database";

const server = express();

await connectDb(env.DB_URI);

server.use(express.json());

export default server;
