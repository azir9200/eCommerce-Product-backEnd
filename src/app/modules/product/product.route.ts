import express from "express";
import { productController } from "./product.controller";
import { UserRole } from "../user/user.constant";
import { auth } from "../../middleware/auth";
import validateRequest from "../../middleware/validationRequest";
import { productValidation } from "./productValidation";

const router = express.Router();

router.post(
  "/create",
   auth(UserRole.admin),
  validateRequest(productValidation.productValidationSchema),
  productController.createProduct
);

router.get("/", productController.getAllService);

router.get("/:id", productController.getSingleService);

router.get("/:category", productController.getCategoryService);

router.put("/id", auth(UserRole.admin), productController.updateService);

router.delete("/id", auth(UserRole.admin), productController.deleteService);

export const ProductRoutes = router;
