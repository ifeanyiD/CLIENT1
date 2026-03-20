import "../styles/eventCard.scss";

const EventCard = ({ event, onEdit, onDelete }) => {
  return (
    <div className="event-card">
      <div className="image-wrapper">
        <img
          src={event.images[0]?.url}
          alt={event.title}
          loading="lazy"
        />

        <div className="overlay">
          <button onClick={() => onEdit(event)}>Edit</button>
          <button onClick={() => onDelete(event._id)}>Delete</button>
        </div>
      </div>

      <div className="event-info">
        <h4>{event.title}</h4>
        <p>{event.category}</p>
        <span>{event.year}</span>
      </div>
    </div>
  );
};

export default EventCard;