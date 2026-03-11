const DashboardStats = () => {
  return (
    <div className="container stats">
      <div className="card">
        <h4>Total Messages</h4>
        <span className="small-text">124</span>
      </div>

      <div className="card">
        <h4>Unread Messages</h4>
        <span className="small-text">12</span>
      </div>

      <div className="card">
        <h4>Last Updated Image</h4>
        <span className="small-text">Hero Banner</span>
      </div>
    </div>
  );
};

export default DashboardStats;
