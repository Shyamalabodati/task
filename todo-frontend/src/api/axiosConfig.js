import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api", // backend URL (we will connect later)
});

export default api;
