import express, { Request, Response } from "express";
import notFound from "./app/middleware/notFound";
import globalErrorHandler from "./app/middleware/globalErrorhandler";
import router from "./app/routes";
const app = express();

app.use(express.json());

app.use("/api", router);

// app.use("/api/auth/signup", signupRouter);

// app.use("/api/auth/login", loginRouter);

// app.use("/api/facility", facilityRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hey welcome all you  World!");
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
