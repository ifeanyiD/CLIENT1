import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { 
      type: String, 
      enum: ["Wedding", "Corporate", "Birthday", "Conference", "Private"],
      required: true
    },
    location: String,
    year: Number,
    description: String,
    images: [String],
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);