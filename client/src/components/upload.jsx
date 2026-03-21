import { useCallback, useState } from "react";
import Uploader from "../components/imageLoader";
import "../styles/upload.scss"
import useAxios from "../hooks/useAxios";

  const initialForm = {
    title:"",
    type : "",
    category:"",
    location:"",
    year:"",
    description:"",
    images:[]
  };
const Upload= () => {
  const [form, setForm] = useState(initialForm);
  const [resetTrigger, setResetTrigger] = useState(0);

  const API = useAxios();

  const setImagesHandler = useCallback((imgs)=> {
    setForm(prev => ({...prev, images : imgs}))
  }, [])

  const handleSubmit =  (e)=>{
    e.preventDefault()
    API.post("/api/events", form)
    .then(()=>{
      setForm(initialForm);
      setResetTrigger(prev => prev + 1)
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
          onChange={(e)=>setForm({...form,type:e.target.value})}
        >
          <option></option>
          <option>Nero</option>
          <option>Portfolio</option>
        </select>
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
        <Uploader 
          setImages={setImagesHandler}
          resetTrigger={resetTrigger}
        />
        <button className="save-btn">
          Save Event
        </button>
      </form>
    </div>
  )
};

export default Upload;
