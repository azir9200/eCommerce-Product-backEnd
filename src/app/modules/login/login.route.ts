import express from "express";
import { LoginController } from "./login.controller";

const router = express.Router();

router.post("/create-login", LoginController.createLogin);

router.get("/", LoginController.getAllLogin);

router.get("/:id", LoginController.getSingleLogin);

router.delete("/:id", LoginController.deleteLogin);

router.patch("/:id", LoginController.updateLogin);

export const loginRouter = router;
