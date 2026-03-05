import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import authRoutes from "./routes/auth.js";
import messageRoutes from "./routes/messageRoutes.js";
import Message from "./models/Message.js";
import { adminOnly } from "./middleware/adminMiddleware.js";
import router from "./routes/messageRoutes.js";
import cookieParser from "cookie-parser"
import { verifyToken } from "./config/verifyToken.js";
import eventRoutes from "./routes/eventRoute.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || origin.startsWith("http://localhost:5173")) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true
  }
});

app.use(express.json());
app.use(cookieParser())

// DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//Login, Register, Refresher
app.use("/api/auth", authRoutes);

// Protected Route
router.use(verifyToken, adminOnly);

// ROUTES
app.use("/api/messages", messageRoutes);


app.use("/api/events", eventRoutes)

// Socket.io
io.on("connection", (socket) => {
  console.log("Admin connected");

  socket.on("newMessage", async (data) => {
    const saved = await Message.create(data);
    io.emit("receiveMessage", saved);
  });
});

server.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);