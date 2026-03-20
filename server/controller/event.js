import cloudinary from "../config/cloudinary.js";
import Event from "../models/event.js";
import mongoose from "mongoose";


// Get all events
export const getEvent = ("/", async (req, res) => {
 try {
   const events = await Event.find().sort({ createdAt: -1 });
   res.json(events);
 } catch (error) {
  console.log(error)
 }
});

// Create event (admin only)
export const postEvent = ("/", async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({message : "Internal Error"})
  }
});

// UPDATE EVENT
export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json(updatedEvent);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// DELETE Event
export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }
    
    const event = await Event.findById(id);

    
    if(!event){
      return res.status(404).json({message : "Event not found"})
    }

    // Delete images from Cloudinary
    if(event.images && event.images.length > 0){
      for (const image of event.images) {
        await cloudinary.uploader.destroy(image.public_id)
      }
    }
    
    //Delete event from DB
    await Event.findByIdAndDelete(id);

    res.json({ message: "Event deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};