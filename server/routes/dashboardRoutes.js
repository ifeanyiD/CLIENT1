import express from "express";
import { getStats } from "../controller/dashboard.js";

const router = express.Router();

router.get("/", getStats);


export default router;