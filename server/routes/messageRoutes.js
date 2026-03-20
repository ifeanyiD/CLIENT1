import express from "express";
import { createMessage, deleteMessage, getAllMessages, readMessages } from "../controller/messages.js";

export const router = express.Router();
export const authRouter = express.Router();

// Messages
router.post("/", createMessage);
authRouter.get("/", getAllMessages);
authRouter.put("/:id/read", readMessages);
authRouter.delete("/:id", deleteMessage);
