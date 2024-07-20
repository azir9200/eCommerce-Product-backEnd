import express from "express";
import { SignupController } from "./signup.controller";

const router = express.Router();

router.post("/create-signup", SignupController.createSignup);

router.get("/", SignupController.getAllSignup);

router.get("/:id", SignupController.getSingleSignup);

router.delete("/:id", SignupController.deleteLogin);

export const signupRouter = router;
