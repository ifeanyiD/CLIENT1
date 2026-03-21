import { useState } from "react";
import useAxios from "../hooks/useAxios";
import "../styles/editModal.scss";

const EditModal = ({ event, onClose, refresh }) => {
  const [form, setForm] = useState(event);
  const API = useAxios();
 
  const handleUpdate = async () => {
    await API.put(`/api/events/${event._id}`, form);
    refresh();
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Edit Event</h3>

        <select
          value={form.type}
          onChange={(e)=>setForm({...form,type:e.target.value})}
        >
          <option>Nero</option>
          <option>Portfolio</option>
        </select>
       
        <input
          value={form.title}
          onChange={(e)=>setForm({...form, title:e.target.value})}
        />
        <textarea
          value={form.description}
          onChange={(e)=>setForm({...form,description:e.target.value})}
        />

       <div className="modal-actions">
            <button onClick={handleUpdate}>Save</button>
            <button onClick={onClose}>Close</button>
       </div>
      </div>
    </div>
  );
};

export default EditModal;