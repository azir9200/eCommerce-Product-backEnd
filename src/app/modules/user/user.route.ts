import express from "express";
import { userValidations } from "./user.validation";
import { userController } from "./user.controller";
import validateRequest from "../../middleware/validationRequest";
import { UserRole } from "./user.constant";
import { auth } from "../../middleware/auth";

const router = express.Router();

router.post(
  "/register",
  validateRequest(userValidations.userValidationSchema),
  userController.createUser
);
router.get("/me", auth(UserRole.admin, UserRole.user), userController.getMe);

export const UserRoutes = router;
