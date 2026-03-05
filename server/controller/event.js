import Event from "../models/event.js";

// Get all events
export const getEvent = ("/", async (req, res) => {
  const events = await Event.find().sort({ createdAt: -1 });
  res.json(events);
});

// Create event (admin only)
export const postEvent = ("/", async (req, res) => {
  const event = await Event.create(req.body);
  res.status(201).json(event);
});
