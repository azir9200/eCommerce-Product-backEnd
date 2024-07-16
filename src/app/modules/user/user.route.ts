import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/create-user", UserController.createUser);

router.get("/", UserController.getAllUsers);

router.use("/:id", UserController.getSingleUser);

router.delete("/:id", UserController.deleteUser);

export const userRouter = router;
