const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  isRead: { type: Boolean, default: false }
}, { timestamps: true });
