import { Router } from "express";
import validateRequest from "../../middleware/validationRequest";

import { AuthControllers } from "./login.controller";
import { LoginValidations } from "./login.validation";

const router = Router();

router.post(
  "/login",
  validateRequest(LoginValidations.loginValidationSchema),
  AuthControllers.userLogin
);

export const LoginRoutes = router;
