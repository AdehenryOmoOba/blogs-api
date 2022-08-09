import express from "express";
import { pageNotFoundController } from "../controlllers/allController.js";

export const router = express.Router();

router.get("/", pageNotFoundController);
