// services/authService.ts
import axiosInstance from "./axiosInstance";
import Cookies from "js-cookie";

// Login service
export const loginService = async (email: string, password: string) => {
  // Request login
  const response = await axiosInstance.post("/auth/login", { email, password });

  // Check if the response contains data with a token
  if (response.data && response.data.token) {
    // Save the token to localStorage
    localStorage.setItem("token", response.data.token);
    // Save the token to cookies
    Cookies.set("token", response.data.token, { expires: 1 });
  }

  // Return the response data
  return response.data;
};

// Logout service
export const logoutService = async () => {
  // Request logout
  const response = await axiosInstance.post("/auth/logout");

  // Remove the token from localStorage
  localStorage.removeItem("token");

  // Remove the token from cookies
  Cookies.remove("token");

  // Return the response data
  return response.data;
};
