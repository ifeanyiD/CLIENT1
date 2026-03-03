import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

// Get all messages
router.get("/", async (req, res) => {
  const messages = await Message.find().sort({ createdAt: -1 });
  res.json(messages);
});

// Create message (from client form)
router.post("/", async (req, res) => {
  const newMessage = await Message.create(req.body);
  res.status(201).json(newMessage);
});

// Mark as read
router.put("/:id/read", async (req, res) => {
  const message = await Message.findByIdAndUpdate(
    req.params.id,
    { isRead: true },
    { new: true }
  );
  res.json(message);
});

// Delete message
router.delete("/:id", async (req, res) => {
  await Message.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;