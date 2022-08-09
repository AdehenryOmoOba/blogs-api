import express from "express";
import { homePageController } from "../controlllers/allController.js";

export const router = express.Router();

router.get("/", homePageController);
