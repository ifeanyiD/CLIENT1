import API from "./axios";


export const checkAuth = API.get("/auth/me")


export const getMessages = () => API.get(API);
export const deleteMessage = (id) => API.delete(`${API}/${id}`);
export const markAsRead = (id) => API.put(`${API}/${id}/read`);