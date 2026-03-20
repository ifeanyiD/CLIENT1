import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import socket from "../config/socket";


const DashboardStats = () => {

  const axios = useAxios();
  const [stats, setStats] = useState([]);
  
  useEffect(()=>{
    const fetchStats = async () => {
      try {
        const res = await axios.get("/stats");
        setStats(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchStats();

    socket.on("dashboardUpdate", (data) => {
      setStats(prev => ({
        ...prev,
        ...data
      }));
    });
    return () => {
      socket.off("dashboardUpdate")
    }
  }, [])

  if (!stats) return <p>Loading...</p>
  console.log(stats)
  return (
    <div className="container stats">
       <div className="card">
        <h4>Total Event</h4>
        <span className="small-text">{stats?.totalEvents}</span>
      </div>

      <div className="card">
        <h4>Total Messages</h4>
        <span className="small-text">{stats?.totalMessages}</span>
      </div>

      <div className="card">
        <h4>Unread Messages</h4>
        <span className="small-text">{stats?.unreadMessages}</span>
      </div>

      <div className="card">
        <h4>Last Updated Image</h4>
        <span className="small-text">
            {
            stats?.lastImage 
              ? stats?.lastImage.url 
              : "No image"
            }
        </span>
      </div>

       <div className="card">
        <h4>Last Event</h4>
        <span className="small-text">
          {
            stats?.lastEvent 
              ? stats?.lastEvent.title 
              : "No event yet"
          }
        </span>
      </div>
    </div>
  );
};

export default DashboardStats;
