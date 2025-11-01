'use client';

import { useEffect, useState } from "react";
import axiosInstance from "../../Auth/AxiosInstance";
import AdminLayout from "../Adminlayout/page";

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch all photos
  const fetchPhotos = async () => {
    try {
      const res = await axiosInstance.get("/api/photos/show");
      setPhotos(res.data);
    } catch (error) {
      console.error("Error fetching photos:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Delete photo
  const deletePhoto = async (id) => {
    if (!window.confirm("🗑️ Delete this photo?")) return;
    try {
      await axiosInstance.delete(`/api/photos/${id}`);
      setPhotos((prev) => prev.filter((p) => p.id !== id));
      alert("✅ Photo deleted successfully!");
    } catch (error) {
      console.error("Error deleting photo:", error);
      alert("❌ Failed to delete photo!");
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <AdminLayout>
      <div className="min-h-screen flex justify-center bg-gray-100 p-6">
        <div className="w-full max-w-6xl">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">
            🖼️ Photo Gallery
          </h1>

          {loading ? (
            <p className="text-center text-gray-500">Loading photos...</p>
          ) : photos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {photos.map((p) => (
                <div
                  key={p.id}
                  className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
                >
                  <img
                    src={p.photoUrl?.startsWith("http") 
                      ? p.photoUrl 
                      : `http://localhost:5000${p.photoUrl}`}
                    alt={p.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3 flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-gray-700">{p.title}</h3>
                      <p className="text-sm text-gray-500">
                        {new Date(p.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <button
                      onClick={() => deletePhoto(p.id)}
                      className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-8">
              No photos found.
            </p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default PhotoList;
