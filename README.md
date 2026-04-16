# Event Media Management Website

A full-stack web application for managing and showcasing events, including media uploads, categorization, and admin controls.

---

## Features

- 📂 Event Management
  - Create, update, and delete events
  - Categorize events (e.g., Nero, Portfolio)

- 🖼️ Media Upload
  - Upload images using Cloudinary
  - Store and retrieve media from database

- 🧑‍💻 Admin Dashboard
  - Overview statistics (total events, messages, etc.)
  - Manage uploaded content

- 📨 Message System
  - Users can send messages
  - Admin can view unread/read messages

- 🎨 Responsive UI
  - Modern React-based interface
  - Styled with SCSS

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- SCSS

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

### Media Storage
- Cloudinary (with Multer)

---

## 📁 Project Structure

```
client/
  ├── components/
  ├── pages/
  ├── styles/
  └── App.jsx

server/
  ├── controllers/
  ├── models/
  ├── routes/
  ├── middleware/
  └── server.js
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/ifeanyiD/CLIENT1.git
```

### Install dependencies

#### Client
```bash
cd client
npm install
```

#### Server
```bash
cd server
npm install
```

---

### Setup Environment Variables

Create a `.env` file in the `server` folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

### Run the app

#### Start backend
```bash
npm run dev
```

#### Start frontend
```bash
npm run dev
```

---

## 📌 API Endpoints (Sample)

| Method | Endpoint        | Description        |
|--------|---------------|--------------------|
| GET    | /events       | Get all events     |
| POST   | /events       | Create event       |
| PUT    | /events/:id   | Update event       |
| DELETE | /events/:id   | Delete event       |

---

## 🌐 Deployment

- Frontend: Netlify  
- Backend: Render  
- Database: MongoDB Atlas  

---

## 📷 Future Improvements

- Search & filter
- Analytics dashboard

---

## 📄 License

MIT License
