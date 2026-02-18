import { useState } from "react";

const AdminMedia = () => {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="media">
      <h2>Update Hero Image</h2>

      {preview && <img src={preview} alt="preview" className="preview" />}

      <input type="file" onChange={handleFileChange} />
      <button className="save-btn">Save Image</button>
    </div>
  );
};

export default AdminMedia;
