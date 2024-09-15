import { Router } from "express";
import { LoginRoutes } from "../modules/auth/login.route";
import { UserRoutes } from "../modules/user/user.route";
import { ProductRoutes } from "../modules/product/product.route";
import { FacilityRoutes } from "../modules/facility/facility.route";
import { OrderRoutes } from "../modules/order/order.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/product",
    route: ProductRoutes,
  },
  {
    path: "/auth",
    route: LoginRoutes,
  },
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/facility",
    route: FacilityRoutes,
  },
  {
    path: "/order",
    route: OrderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
