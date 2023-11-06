import axios from "axios";

const taskApi = axios.create({
  baseURL: "https://todo-app-backend-edru.onrender.com/tasks/api/v1/task-list/",
});

export const getAllTasks = () => taskApi.get("/");

export const getTask = (id) => taskApi.get(`/${id}/`);

export const createTask = (task) => taskApi.post("/", task);

export const deleteTask = (id) => taskApi.delete(`/${id}/`);

export const updateTask = (id, task) => taskApi.put(`/${id}/`, task);