import { Router } from "express";
import { get, create, update, deleteData } from "#controllers/section";
import { authentication } from "#middlewares/auth";

const router = Router();

router.route("/:id?").get(get).post(authentication, create).put(authentication, update).delete(authentication, deleteData);

export default router;
