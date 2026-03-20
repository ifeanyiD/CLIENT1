import EventCard from "./EventCard";

const EventGroup = ({ title, events, onEdit, onDelete }) => {
  if (!events?.length) return null;

  return (
    <div className="event-group">
      <h3>{title}</h3>

      <div className="event-grid">
        {events.map(event => (
          <EventCard
            key={event._id}
            event={event}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default EventGroup;