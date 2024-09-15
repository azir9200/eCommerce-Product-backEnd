import express from "express";
import { userValidations } from "./user.validation";
import { userController } from "./user.controller";
import validateRequest from "../../middleware/validationRequest";

const router = express.Router();

router.post(
  "/register",
  validateRequest(userValidations.userValidationSchema),
  userController.createUser
);

export const UserRoutes = router;
