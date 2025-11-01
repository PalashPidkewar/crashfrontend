"use client";

import { useEffect, useState } from "react";
import Link from "next/link"; // ✅ replaces react-router-dom Link
import axiosInstance from "../../Auth/AxiosInstance"; // ✅ adjust path if needed
import AdminLayout from "../Adminlayout/page"; // ✅ adjust path

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch all blogs
  const fetchBlogs = async () => {
    try {
      const res = await axiosInstance.get("/api/blogs");
      setBlogs(res.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Delete a blog
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      await axiosInstance.delete(`/api/blogs/${id}`);
      setBlogs((prev) => prev.filter((b) => b._id !== id));
    } catch (err) {
      console.error("Error deleting blog:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <AdminLayout>
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-md mt-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#0078AE]">
          📰 All Blogs
        </h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : blogs.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {blogs.map((b) => (
              <li
                key={b._id || b.id}
                className="py-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {b.imageUrl && (
                    <img
                      src={
                        b.imageUrl.startsWith("http")
                          ? b.imageUrl
                          : `http://localhost:5000${b.imageUrl}`
                      }
                      alt={b.title}
                      className="w-32 h-20 object-cover rounded-md shadow-sm"
                    />
                  )}
                  <div>
                    <h2 className="font-semibold text-lg">{b.title}</h2>
                    <p className="text-gray-500 text-sm">{b.author}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link
                    href={`/admin/update_delete/${b._id || b.id}`}
                    className="bg-blue-600 text-white py-1.5 px-4 rounded hover:bg-blue-700 transition"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(b._id || b.id)}
                    className="bg-red-600 text-white py-1.5 px-4 rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No blogs found.</p>
        )}
      </div>
    </AdminLayout>
  );
};

export default BlogList;
