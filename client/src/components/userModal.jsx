import useAxios from "../hooks/useAxios";

const UserModal = ({ user, onClose, currentUser, refresh }) => {
  const API = useAxios();

  const handleDelete = async () => {
    if (!window.confirm("Delete this user?")) return;

    await API.delete(`/api/users/${user._id}`);
    refresh();
    onClose();
  };

  const handleRoleChange = async (role) => {
    await API.put(`/api/users/${user._id}/role`, {role});
    refresh();
  };

  return (
    <div className="modal">
      <div className="modal-content">

        <h3>{user?.name}</h3>
        <p>{user?.email}</p>

        {currentUser?.role === "admin" && (
          <>
            <select
              value={user?.role}
              onChange={(e) => handleRoleChange(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="vendor">Vendor</option>
              <option value="tech">Tech</option>
            </select>

            <button className="delete" onClick={handleDelete}>
              Delete User
            </button>
          </>
        )}

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UserModal;