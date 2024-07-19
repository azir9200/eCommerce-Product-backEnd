import express, { Request, Response } from "express";
import { facilityRouter } from "./app/modules/facility/facility.route";
import { loginRouter } from "./app/modules/login/login.route";
import { signupRouter } from "./app/modules/signup/signup.route";
const app = express();

app.use(express.json());

app.use("/api/auth/signup", signupRouter);

app.use("/api/auth/login", loginRouter);

app.use("/api/facility", facilityRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hey welcome all you  World!");
});

// app.use(notFound);

export default app;
