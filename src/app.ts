import express, { Request, Response } from "express";
import cors from "cors";
import router from "./app/router";
import globalErrorHendleing from "./app/middlewire/globalErrorHendleing";
import notFount from "./app/middlewire/notfound";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:4173"],
    credentials: true,
  }),
);

app.use(cookieParser());

//application
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(globalErrorHendleing);

app.use(notFount);

export default app;
