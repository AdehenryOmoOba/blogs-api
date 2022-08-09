import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { router as blogsRouter } from "./routers/blogsRouter.js";
// import { router as homePageRouter } from "./routers/homePageRouter.js";
// import { router as pageNotFoundRouter } from "./routers/pageNotFound.js";

const PORT = 4500;
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/", blogsRouter);
// app.use("/api/blogs", blogsRouter);
// app.use("/*", pageNotFoundRouter);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
