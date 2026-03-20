// import mongoose from "mongoose";
// import Event  from  "../models/event.js";
// import Message from  "../models/Message.js";

// import dotenv from "dotenv";

// dotenv.config();

// mongoose.connect(process.env.MONGO_URI)
//     .then(()=> console.log(`MongoDB connected: ${process.env.NODE_ENV || 'development'}`))
//     .catch(err => console.error(err));

// const eventCategories = ["Wedding", "Corporate", "Birthday", "Conference", "Private"];
// const eventLocations = ["Grand Hall", "Conference Room", "City Arena", "Beachside Venue", "Private Hall"];
// const firstNames = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
// const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Davis"];

// function getRandomInt(min, max){
//     return Math.floor(Math.random() * (max -min + 1)) + min;
// }

// function getRandomItem(array) {
//   return array[getRandomInt(0, array.length - 1)];
// }

// function generateEvent(i){
//     const images = [
//         { url: "https://images.unsplash.com/photo-1519741497674-611481863552" },
//         { url: "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d2" },
//         { url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" }
//     ];
//     return {
//         title: `${getRandomItem(firstNames)} Event #${i}`,
//         category: getRandomItem(eventCategories),
//         location: getRandomItem(eventLocations),
//         year: `${getRandomInt(2023, 2026)}`,
//         description: `This is a description for event #${i}.`,
//         images,
//         featured: Math.random() > 0.7,
//         lastImage: images[images.length - 1].url // precompute last image
//     }
// }

// function generateMessage(i, eventIds = []) {
//   const name = `${getRandomItem(firstNames)} ${getRandomItem(lastNames)}`;
//   const linkedEvent = eventIds.length ? getRandomItem(eventIds) : null;
//   return {
//     name,
//     email: `${name.split(" ").join("").toLowerCase()}@example.com`,
//     subject: `Subject for message #${i}`,
//     message: `This is the content of message #${i}.`,
//     isRead: Math.random() > 0.5,
//     event: linkedEvent // optional link
//   };
// }

// async function seed() {
//   const env = process.env.NODE_ENV || "development";

//   // Development: reset everything
//   if(env === "development") {
//     await Event.deleteMany({});
//     await Message.deleteMany({});

//     const events = Array.from({ length: 10 }, (_, i) => generateEvent(i + 1));
//     const insertedEvents = await Event.insertMany(events);

//     const eventIds = insertedEvents.map(e => e._id);
//     const messages = Array.from({ length: 10 }, (_, i) => generateMessage(i + 1, eventIds));
//     await Message.insertMany(messages);

//     console.log("Development database seeded with precomputed lastImage and linked messages!");
//   }

//   // Production: only seed if empty
//   if(env === "production") {
//     const eventCount = await Event.countDocuments();
//     const messageCount = await Message.countDocuments();

//     let insertedEvents = [];

//     if(eventCount === 0) {
//       const events = Array.from({ length: 5 }, (_, i) => generateEvent(i + 1));
//       insertedEvents = await Event.insertMany(events);
//       console.log("Production events seeded with lastImage.");
//     } else {
//       insertedEvents = await Event.find({});
//     }

//     const eventIds = insertedEvents.map(e => e._id);

//     if(messageCount === 0) {
//       const messages = Array.from({ length: 5 }, (_, i) => generateMessage(i + 1, eventIds));
//       await Message.insertMany(messages);
//       console.log("Production messages seeded with optional event links.");
//     }

//     // Precompute lastEvent for admin dashboard
//     const lastEvent = await Event.findOne().sort({ updatedAt: -1 });
//     console.log("Last event precomputed:", lastEvent.title);
//   }

//   mongoose.disconnect();
// }

// seed();