"use client";

import axios from "axios";

// ✅ Create axios instance with your backend URL
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://crashbackend-4.onrender.com",
});

// ✅ Add interceptor for attaching token (client-side only)
axiosInstance.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
}, (error) => Promise.reject(error));

export default axiosInstance;
