import mongoose from "mongoose";
import Event from "./models/Event.js";

await mongoose.connect(process.env.MONGO_URI);

await Event.insertMany([
  {
    title: "Luxury Wedding Lagos",
    category: "Wedding",
    location: "Lagos",
    year: 2025,
    description: "Elegant outdoor wedding.",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552"
    ]
  }
]);

console.log("Seeded!");
process.exit();