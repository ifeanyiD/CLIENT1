import Message from "../models/Message.js";

//CREATE MESSAGE
export const createMessage = async (req, res) => {
  try {
    const { name, subject, email, message } = req.body;
    await Message.create({
      name,
      subject,
      email,
      message,
    });

    res.status(201).json({message : "Sent!!"});

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET ALL MESSAGES
export const getAllMessages = async(req, res)=>{
    try {
      const messages = await Message.find().sort({ createdAt: -1 });
      res.json(messages);
    } catch (error) {
      console.log(error)
    }
}

//MARK READ MESSAGES
export const readMessages = async (req,res) =>{
     try {
        const message = await Message.findByIdAndUpdate(
          req.params.id,
          { isRead: true },
          { new: true }
        );
        console.log(message)
      res.json(message);
     } catch (error) {
      console.log(error)
      res.status(500).json({message : "Error occured"})
     }
}

//DELETE MESSAGES
export const deleteMessage = async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    console.log(error)
  }
};