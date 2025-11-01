"use client";

import { useState, useEffect } from "react";
import axiosInstance from "../../Auth/AxiosInstance"; // ✅ adjust path as per your folder structure
import AdminLayout from "../Adminlayout/page"; // ✅ adjust import path

const NewsletterList = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSubscribers = async () => {
    try {
      const res = await axiosInstance.get("/api/subscribers");
      setSubscribers(res.data);
    } catch (err) {
      console.error("Error fetching subscribers:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  return (
    <AdminLayout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4">
            📨 Newsletter Subscribers
          </h1>

          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : subscribers.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {subscribers.map((sub, index) => (
                <li
                  key={index}
                  className="py-2 text-gray-700 text-center border-b last:border-none"
                >
                  {sub.email}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">No subscribers found.</p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default NewsletterList;
