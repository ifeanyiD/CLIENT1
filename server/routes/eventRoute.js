import express from "express";
import { getEvent, postEvent } from "../controller/event.js";


const router = express.Router();

router.get("/", getEvent);
router.post("/", postEvent);


export default router;