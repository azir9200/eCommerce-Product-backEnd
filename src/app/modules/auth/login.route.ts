import { Router } from "express";
import validateRequest from "../../middleware/validationRequest";
import { AuthControllers } from "./login.controller";
import { LoginValidations } from "./login.validation";
import { auth } from "../../middleware/auth";
import { UserRole } from "../user/user.constant";

const router = Router();

router.post(
  "/login",
  validateRequest(LoginValidations.loginValidationSchema),
  AuthControllers.userLogin
);
router.get("/me", auth(UserRole.admin, UserRole.user), AuthControllers.getMe);

export const LoginRoutes = router;
