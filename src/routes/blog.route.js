import { Router } from "express";
import { get, create, update, deleteData } from "#controllers/blog";

const router = Router();

router.route("/:id?").get(get).post(create).put(update).delete(deleteData);

export default router;
