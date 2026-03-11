import { useState } from "react";
import Uploader from "../components/imageLoader";
import "../styles/upload.scss"
import useAxios from "../hooks/useAxios";

  const initialForm = {
    title:"",
    category:"",
    location:"",
    year:"",
    description:"",
    images:[]
  };
const Upload= () => {
  const [form, setForm] = useState({initialForm});

  const API = useAxios();

  const handleSubmit =  (e)=>{
    e.preventDefault()
    API.post("/events", form)
    .then(()=>{
      setForm(initialForm);
      e.target.reset();
      alert("Event Created")
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="admin-add-event">
      <h2>Add New Event</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Event Title"
          onChange={(e)=>setForm({...form,title:e.target.value})}
        />

        <select
          onChange={(e)=>setForm({...form,category:e.target.value})}
        >
          <option>Select Category</option>
          <option>Wedding</option>
          <option>Corporate</option>
          <option>Birthday</option>
          <option>Conference</option>
        </select>

        <input
          placeholder="Location"
          onChange={(e)=>setForm({...form,location:e.target.value})}
        />

        <input
          placeholder="Year"
          onChange={(e)=>setForm({...form,year:e.target.value})}
        />

        <textarea
          placeholder="Event Description"
          onChange={(e)=>setForm({...form,description:e.target.value})}
        />
        <Uploader setImages={(imgs)=>setForm({...form, images : imgs})}/>
        <button className="save-btn">
          Save Event
        </button>
      </form>
    </div>
  )
};

export default Upload;
