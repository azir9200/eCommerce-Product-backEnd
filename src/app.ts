import express, { Request, Response } from "express";
import { userRouter } from "./app/modules/user/user.route";
import { facilityRouter } from "./app/modules/facility/facility.route";
const app = express();

app.use(express.json());

// application routes
app.use("/api/users", userRouter);

app.use("/api/facility", facilityRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hey welcome all you  World!");
});

// app.use(notFound);

export default app;
