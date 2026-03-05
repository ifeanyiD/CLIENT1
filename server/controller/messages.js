import Message from "../models/Message.js";

//CREATE MESSAGE
export const createMessage = async (req, res) => {
  try {
    const { name, subject, message } = req.body;

    const newMessage = await Message.create({
      name,
      subject,
      email,
      message,
    });

    const io = req.app.get("io");
    io.emit("receiveMessage", newMessage);

    res.status(201).json(newMessage);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET ALL MESSAGES
export const getAllMessages = async(req, res)=>{
    if (process.env.NODE_ENV !== "production") {
        return res.status(200).json({
        _id: "dev-admin-1",
        sender: "admin",
        email : "engineerdavid@gmail.com",
        isRead : false,
        name : "David",
        subject : "Booking inquiry",
        message: "🚀 This is a DEV test admin message",
        createdAt: new Date()
        });
    }
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
}

//MARK READ MESSAGES
export const readMessages = async (req,res) =>{
     const message = await Message.findByIdAndUpdate(
        req.params.id,
        { isRead: true },
        { new: true }
      );
      res.json(message);
}

//DELETE MESSAGES
export const deleteMessage = async (req, res) => {
  console.log(req.params.id)
  await Message.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
};