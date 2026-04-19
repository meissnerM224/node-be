import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
const app = express();
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

export default app;
