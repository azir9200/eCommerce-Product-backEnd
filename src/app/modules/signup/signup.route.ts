import express from "express";
import { SignupController } from "./signup.controller";

const router = express.Router();

router.post("/create-signup", SignupController.createSignup);

export const signupRouter = router;
