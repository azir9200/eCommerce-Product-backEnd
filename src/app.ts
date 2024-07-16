import express, { Request, Response } from "express";
import { userRouter } from "./app/modules/user/user.route";
const app = express();

app.use(express.json());

// application routes
app.use("/api/users", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hey welcome all you  World!");
});

// app.use(notFound);

export default app;
