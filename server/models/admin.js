

const adminSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ['superadmin', 'editor'],
    default: 'editor'
  }
}, { timestamps: true });
