'use client';

import { useState } from "react";
import axiosInstance from "../../Auth/AxiosInstance";
import AdminLayout from "../Adminlayout/page";

const AddPhoto = () => {
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !photo) {
      alert("⚠️ Please add a title and photo!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("photo", photo);

    try {
      setLoading(true);
      await axiosInstance.post("/api/photos/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("✅ Photo uploaded successfully!");
      setTitle("");
      setPhoto(null);
      window.location.reload(); // optional, can be replaced with router.refresh()
    } catch (error) {
      console.error("Upload failed:", error);
      alert("❌ Upload failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="flex justify-center items-center min-h-[80vh] bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 shadow-md rounded-xl w-full max-w-md"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
            📸 Add Photo
          </h2>

          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
            className="mb-4 w-full text-gray-700"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded text-white font-medium transition ${
              loading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Uploading..." : "Upload Photo"}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddPhoto;
