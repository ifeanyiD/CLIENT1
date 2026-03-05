import express from "express";
import { createMessage, deleteMessage, getAllMessages, readMessages } from "../controller/messages.js";

const router = express.Router();

// Messages
router.post("/", createMessage);
router.get("/", getAllMessages);
router.put("/:id/read", readMessages);
router.delete("/:id", deleteMessage);

export default router;