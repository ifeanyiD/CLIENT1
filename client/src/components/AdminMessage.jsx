import { useState } from "react";

const dummyMessages = [
  { id: 1, name: "John", subject: "Booking Inquiry", message: "I want to book an event hall.", isRead: false },
  { id: 2, name: "Sarah", subject: "Pricing", message: "What are your pricing packages?", isRead: true }
];

const AdminMessages = () => {
  const [selected, setSelected] = useState(dummyMessages[0]);

  return (
    <div className="messages">
      <div className="messages__list">
        {dummyMessages.map(msg => (
          <div
            key={msg.id}
            className={`message-item ${!msg.isRead ? "unread" : ""}`}
            onClick={() => setSelected(msg)}
          >
            <h4>{msg.name}</h4>
            <p>{msg.subject}</p>
          </div>
        ))}
      </div>

      <div className="messages__content">
        <h3>{selected.subject}</h3>
        <p>{selected.message}</p>
        <button className="reply-btn">Reply</button>
      </div>
    </div>
  );
};

export default AdminMessages;
