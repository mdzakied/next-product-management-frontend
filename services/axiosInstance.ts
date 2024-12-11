// services/axiosInstance.ts
import axios from "axios";
import Cookies from "js-cookie";

// Create an instance of Axios
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

// Add request interceptor to add Authorization header
axiosInstance.interceptors.request.use(
  (config) => {
    // check token
    const token = Cookies.get("token"); // Get the token from cookies
    // console.log("Token in interceptor:", token); // Debugging

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Add token to headers
    } else {
      console.log("No token found!"); // Debugging when token is not found
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
