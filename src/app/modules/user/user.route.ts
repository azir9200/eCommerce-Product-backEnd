import express from "express";
import { UserController } from "./user.controller";
import { updateUerValidationSchema } from "./user.validation";
import validateRequest from "../../moddleware/validationRequest";

const router = express.Router();

router.post("/signup", UserController.createUser);

router.get("/", UserController.getAllUsers);

router.use("/:id", UserController.getSingleUser);

router.delete("/:id", UserController.deleteUser);

router.patch(
  "/userId",
  validateRequest(updateUerValidationSchema),
  UserController.updateUser
);

export const userRouter = router;
