'use client';

import { useEffect, useState } from "react";
import axiosInstance from "../../Auth/AxiosInstance";
import AdminLayout from "../Adminlayout/page";

export default function ChatbotUserDetails() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await axiosInstance.get("/api/chat");
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Delete all users
  const handleClearAll = async () => {
    if (!window.confirm("⚠️ Are you sure you want to delete all users?")) return;

    try {
      const res = await axiosInstance.delete("/api/chat/clear");
      alert(res.data.message || "All users deleted!");
      fetchUsers(); // Refresh the list
    } catch (err) {
      console.error("Error clearing users:", err);
      alert("❌ Failed to delete users.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex justify-center items-center h-[60vh]">
          <p className="text-gray-600 text-lg font-medium">Loading users...</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto mt-10 px-4">
        {/* Header + Clear All Button */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Chatbot User Details
          </h1>

          <button
            onClick={handleClearAll}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-medium shadow-sm transition"
          >
            Delete All Users
          </button>
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-md">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-blue-100 text-gray-800">
              <tr>
                <th className="text-left py-3 px-4 border-b">ID</th>
                <th className="text-left py-3 px-4 border-b">Name</th>
                <th className="text-left py-3 px-4 border-b">Email</th>
                <th className="text-left py-3 px-4 border-b">Phone</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-gray-50 transition duration-150"
                  >
                    <td className="py-2 px-4 border-b">{user.id}</td>
                    <td className="py-2 px-4 border-b">{user.name}</td>
                    <td className="py-2 px-4 border-b">{user.email}</td>
                    <td className="py-2 px-4 border-b">{user.phone}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center py-6 text-gray-500 italic"
                  >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
