import express from "express";
import router from "#routes/index";
import env from "#configs/env";
import connectDb from "#configs/database";
import cors from "cors";

const server = express();

await connectDb(env.DB_URI);

server.use(express.json());
server.use("/api", router);
server.use(
    cors({
      origin: "http://localhost:3000", // Allow frontend access
      methods: "GET,POST,PUT,DELETE",
      credentials: true, // If sending cookies or auth headers
    })
  );
  


export default server;
