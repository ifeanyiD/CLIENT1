import { useEffect, useState } from "react";
import "../styles/imageUploader.scss";
import useAxios from "../hooks/useAxios";

export default function ImageUploader({ setImages, resetTrigger }) {
  const [preview, setPreview] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const API = useAxios();
  
  const handleUpload = (e) => {
    setError("");
    const files = Array.from(e.target.files);
    if (!files.length) return;

    // Show previews immediately
    const newPreviews = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
      public_id : null
    }));

    setPreview((prev) => [...prev, ...newPreviews]);

    const formData = new FormData();
    files.forEach((file) => formData.append("images", file));

    setUploading(true);
    API.post("/image/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    })
    .then((res)=>{
      const data = res.data
         
      //After upload response
      const uploaded  = data.images.map(img => ({
        url : img.url,
        public_id : img.public_id
      }));

      // Uploaded URLs to images
      setImages(uploaded);

      // Replace local previews with uploaded URLs
      setPreview(uploaded);
      })
      .catch(err=>{
        console.error("Upload failed:", err);
        setError("Failed to upload images. Please try again.");
      })
     .finally(()=>{
        setUploading(false);
     }) 
    e.target.value = null;
  };

  const handleDelete = async (index) => {
    const img = preview[index];
    if(img.public_id){
      try {
        await API.delete(`/image/delete/${encodeURIComponent(img.public_id)}`);
        console.log("Deleted from Cloudinary:", img.public_id);
    } catch (err) {
        console.error("Failed to delete from Cloudinary:", err);
    }
    }
    // Remove from preview
    const newPreview = [...preview];
    newPreview.splice(index, 1);
    setPreview(newPreview);

    // Remove from uploaded images if already uploaded
    setImages((prev) => {
      const newImages = [...prev];
      newImages.splice(index, 1);
      return newImages;
    });
  };

  useEffect(()=>{ 
    setPreview([])
  }, [resetTrigger])
  return (
    <div className="image-uploader">
      <input
        type="file"
        multiple
        onChange={handleUpload}
        disabled={uploading}
      />

      {uploading && <p>Uploading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="preview-grid">
        {preview.map((img, i) => (
          <div key={img.url} className="preview-wrapper">
            <img src={img.url} alt="Preview" className="preview-img" />
            <button
              type="button"
              className="delete-btn"
              onClick={() => handleDelete(i)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}