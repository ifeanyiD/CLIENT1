import express from "express";
import { deleteEvent, getEvent, postEvent, updateEvent } from "../controller/event.js";
import { roleCheck } from "../middleware/roleCheck.js";

const router = express.Router();

router.get("/", getEvent);
router.post("/", postEvent);
router.put("/:id", roleCheck("admin", "vendor"), updateEvent);
router.delete("/:id", roleCheck("admin"), deleteEvent);


export default router;