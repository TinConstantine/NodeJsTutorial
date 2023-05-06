import express, { request } from "express";
import * as dotenv from "dotenv";
import { userRouter, studentRouter } from "./routes/index.js";
dotenv.config(); //must have
const app = express();
app.use(express.json());
//router
app.use("/users", userRouter); //userRouter la ten cua router duoc dinh nghia lai, /users  de co the truy cap vao
app.use("/students", studentRouter);
app.get("/", (req, res) => {
  // mac dinh la send ve NSND VanTin
  res.send("NSND Van Tín");
});
const port = process.env.PORT ?? 3000;
app.listen(port, async () => {
  console.log("listening on port" + port);
});
