import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

export const uploadImages = async (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: "No files uploaded" });
  }
  try {
    const uploadPromises = req.files.map(file => {

      return new Promise((resolve, reject) => {
        
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "events",
            transformation: [
              { width: 1200, crop: "limit" },
              { quality: "auto" }
            ]
          },
          (error, result) => {
            if (result){
              resolve({url : result.secure_url, public_id : result.public_id});
            } 
            else {
              reject(error);
            }
          }
        );

        streamifier.createReadStream(file.buffer).pipe(stream);

      });

    });

    const images = await Promise.all(uploadPromises);
    res.json({ images});

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Upload failed" });
  }
};


export const deleteImage = async (req, res) => {
  const { public_id} = req.params;
  try {
    await cloudinary.uploader.destroy(public_id);
    res.json({message : "Deleted succesfully"});
  } catch (error) {
    console.error(error)
    res.status(500).json({message : "Failed to delete"})
  }
}