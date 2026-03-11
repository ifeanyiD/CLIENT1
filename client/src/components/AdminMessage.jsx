import { useState, useMemo, useEffect } from "react";
// import { getMessages, deleteMessage, markAsRead } from "../api/messageService";
import { deleteMessage, getMessages, markAsRead } from "../api/api";
import socket from "../config/socket";
// const dummyMessages = [
//   { id: 1, name: "John Doe", subject: "Booking Inquiry", message: "I want to book an event hall.", isRead: false },
//   { id: 2, name: "Sarah Lee", subject: "Pricing", message: "What are your pricing packages?", isRead: true },
//   { id: 3, name: "Mike Brown", subject: "Availability", message: "Is the venue free this weekend?", isRead: false },
// ];


const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [reply, setReply] = useState("");
  

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await getMessages();
      setMessages([res.data]);
    };
    fetchMessages();

    socket.on("receiveMessage", (newMsg) => {
      setMessages(prev => [newMsg, ...prev]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const unreadCount = messages.filter(m => !m?.isRead)?.length;

  const filteredMessages = useMemo(() => {
    return messages?.filter(m =>
      m?.name.toLowerCase().includes(search.toLowerCase()) ||
      m?.subject.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, messages]);

  const handleSelect = async (msg) => {
    setSelected(msg);
    await markAsRead(msg)
    setMessages(prev =>
      prev.map(m =>
        m._id === msg._id ? { ...m, isRead: true } : m
      )
    );
  };

  const handleDelete = async (msg) => {
    await deleteMessage(msg);
    console.log("It stopped here")
    setMessages(prev => prev.filter(m => m._id !== msg._id));
    if (selected?._id === msg._id) setSelected(null);
  };

  const handleReply = ()=> {
    if (!reply.trim()) return;
    alert("Reply sent!");
    setReply("");
  };

  // const handleSelect = async (msg) => {
  //   setSelected(msg);
  //   await markAsRead(msg._id);
  //   fetchMessages();
  // };

  // const handleDelete = async (id) => {
  //   await deleteMessage(id);
  //   fetchMessages();
  //   setSelected(null);
  // };
  return (
    <div className="messages">
      {/* LEFT PANEL */}
      <div className="messages__list">
        <div className="messages__header">
          <h3>Inbox</h3>
          {unreadCount > 0 && <span className="small-text badge">{unreadCount}</span>}
        </div>

        <input
          type="text"
          placeholder="Search messages..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="search-input"
        />

        {filteredMessages?.length === 0 && (
          <div className="empty-state">No messages found</div>
        )}

        {filteredMessages?.map(msg => (
          <div
            key={msg._id}
            className={`message-item 
              ${!msg.isRead ? "unread" : ""} 
              ${selected?.id === msg.id ? "active" : ""}`}
            onClick={() => handleSelect(msg)}
          >
            <h4>{msg.name}</h4>
            <p>{msg.subject}</p>
          </div>
        ))}
      </div>

      {/* R IGHT PANEL */}
      <div className="messages__content">
        {!selected ? (
          <div className="empty-state large">
            Select a message to read
          </div>
        ) : (
          <>
            <div className="content-header">
              <h3>{selected.subject}</h3>
              <button
                className="delete-btn"
                onClick={() => handleDelete(selected.id)}
              >
                Delete
              </button>
            </div>

            <p className="message-body">{selected.message}</p>

            <div className="reply-box">
              <textarea
                placeholder="Write your reply..."
                value={reply}
                onChange={e => setReply(e.target.value)}
              />
              <button className="reply-btn" onClick={handleReply}>
                Send Reply
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminMessages;