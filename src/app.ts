import express, {Application, Request, Response } from "express";
import notFound from "./app/middleware/notFound";
import globalErrorHandler from "./app/middleware/globalErrorhandler";
import router from "./app/routes";
import cors from "cors";

const app: Application = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hey welcome all you  World!");
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
