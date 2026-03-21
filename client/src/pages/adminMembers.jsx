import { useEffect, useState } from "react";
import UserModal from "../components/userModal";
import "../styles/adminMembers.scss";
import socket from "../config/socket";
import useAxios from "../hooks/useAxios";
import { useAuth } from "../hooks/useAuth";


const UsersPage = () => {
  const {user} = useAuth();


  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const API = useAxios();

  const fetchUsers = async () => {
    const {data} = await API.get(`/api/users?search=${search}&role=${roleFilter}&page=${page}`);
    setUsers(data.users);
    setPages(data.pages);
  };

  useEffect(() => {
    fetchUsers();
  }, [search, roleFilter, page]);

  // 🔔 REAL-TIME UPDATES
  useEffect(() => {
    socket.on("userUpdated", (updated) => {
      setUsers(prev =>
        prev.map(u => u._id === updated._id ? updated : u)
      );
    });

    socket.on("userDeleted", (id) => {
      setUsers(prev => prev.filter(u => u._id !== id));
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="users-page">
      <h2>User Management</h2>

      {/* 🔍 SEARCH + FILTER */}
      <div className="controls">
        <input
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setRoleFilter(e.target.value)}>
          <option value="">All Roles</option>
          <option value="admin">Admin</option>
          <option value="vendor">Vendor</option>
          <option value="tech">Tech</option>
        </select>
      </div>

      {/* TABLE */}
      <div className="table">
        {users.map(user => (
          <div
            key={user._id}
            className="row"
            onClick={() => setSelectedUser(user)}
          >
            <span>{user.name}</span>
            <span>{user.email}</span>
            <span className={`role ${user.role}`}>
              {user.role}
            </span>
          </div>
        ))}
      </div>

      {/* 📄 PAGINATION */}
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>
          Prev
        </button>
        <span>{page} / {pages}</span>
        <button disabled={page === pages} onClick={() => setPage(p => p + 1)}>
          Next
        </button>
      </div>

      {/* 🧩 MODAL */}
      {selectedUser && (
        <UserModal
          user={selectedUser}
          currentUser={user}
          onClose={() => setSelectedUser(null)}
          refresh={fetchUsers}
        />
      )}
    </div>
  );
};

export default UsersPage;