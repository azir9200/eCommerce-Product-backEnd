"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_route_1 = require("../modules/login/login.route");
const signup_route_1 = require("../modules/signup/signup.route");
const facility_route_1 = require("../modules/facility/facility.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/login",
        route: login_route_1.loginRouter,
    },
    {
        path: "/auth",
        route: login_route_1.loginRouter,
    },
    {
        path: "/signup",
        route: signup_route_1.signupRouter,
    },
    {
        path: "/facility",
        route: facility_route_1.facilityRouter,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
