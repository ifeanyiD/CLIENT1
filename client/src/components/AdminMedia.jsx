import { useEffect, useState } from "react";
import "../styles/adminMedia.scss";
import useAxios from "../hooks/useAxios";
// import { getEvents, deleteEvent, updateEvent } from "../api/api";

const AdminMedia = () => {
  const API = useAxios();
  const [events, setEvents] = useState([]);
  const [editing, setEditing] = useState(null);
  const [image, setImage] = useState(null);

  
  // const deleteMessage = (msg) => API.delete(`/messages/${msg._id}`);
  // const markAsRead = (msg) => API.put(`/messages/${msg._id}/read`);
 

  useEffect(() => {
     const fetchEvents = async () => {
        try {
          const {data} = await API.get("/events");
          console.log(data[0].images);
          setEvents(data);

        } catch (error) {
          console.log(error)
        }
     };
     fetchEvents()
  }, []);

  /* DELETE EVENT */

  const handleDelete = async (id) => {
    await deleteEvent(id);
    setEvents(prev => prev.filter(e => e._id !== id));
  };

  /* IMAGE UPLOAD */

  const handleImageUpload = async (id) => {

    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);

    await updateEvent(id, formData);

    setImage(null);
    fetchEvents();
  };

  return (
    <div className="adminMedia">

      <h2>Media Library</h2>

      <div className="adminMedia__grid">

        {events.map(event => (

          <div key={event._id} className="mediaCard">

            <img
              src={event.images?.[0].url || "/placeholder.jpg"}
              alt={event.title}
            />

            <div className="mediaCard__info">

              <h4>{event.title}</h4>
              <p>{event.category}</p>

              <div className="mediaCard__actions">

                <button
                  onClick={() => setEditing(event)}
                  className="edit"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(event._id)}
                  className="delete"
                >
                  Delete
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default AdminMedia;