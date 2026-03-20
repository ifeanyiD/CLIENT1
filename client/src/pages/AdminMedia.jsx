import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import EventGroup from "../components/EventGroup";
import EditModal from "../components/EditModal";
import "../styles/adminMedia.scss";

const AdminMedia = () => {
  const API = useAxios();

  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const fetchEvents = async () => {
    try {
      const res = await API.get("/events");
      setEvents(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Search filter
  const filtered = events.filter(e =>
    e.category.toLowerCase().includes(search.toLowerCase())
  );


  const nero = filtered.filter(e => e.type === "Nero");
  const portfolio = filtered.filter(e => e.type === "Portfolio");

  const handleDelete = async (id) => {
    try {
      await API.delete(`/events/${id}`);
      setEvents(prev => prev.filter(e => e._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="admin-media">
      <div className="top-bar">
        <h2>Media Library</h2>

        <input
          placeholder="Search events..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <EventGroup
        title="Nero"
        events={nero}
        onEdit={setSelectedEvent}
        onDelete={handleDelete}
      />

      <EventGroup
        title="Portfolio"
        events={portfolio}
        onEdit={setSelectedEvent}
        onDelete={handleDelete}
      />

      {selectedEvent && (
        <EditModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          refresh={fetchEvents}
        />
      )}
    </div>
  );
};

export default AdminMedia;