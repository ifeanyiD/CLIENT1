const mediaSchema = new mongoose.Schema({
  section: String,   // hero, about, gallery
  imageUrl: String,
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin'
  }
}, { timestamps: true });
