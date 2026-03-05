import API from "./axios";


export const authRefresher = API.get("/auth/refresh")


export const getMessages = () => API.get("/messages");
export const deleteMessage = (msg) => API.delete(`/messages/${msg._id}`);
export const markAsRead = (msg) => API.put(`/messages/${msg._id}/read`);