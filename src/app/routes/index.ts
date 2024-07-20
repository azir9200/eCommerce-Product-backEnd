import { Router } from "express";
import { loginRouter } from "../modules/login/login.route";
import { signupRouter } from "../modules/signup/signup.route";
import { facilityRouter } from "../modules/facility/facility.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/login",
    route: loginRouter,
  },
  {
    path: "/signup",
    route: signupRouter,
  },
  {
    path: "/facility",
    route: facilityRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
