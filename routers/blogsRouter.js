import express from "express";
import { getAllBlogsController } from "../controlllers/allController.js";

export const router = express.Router();

router.get("/", getAllBlogsController);
