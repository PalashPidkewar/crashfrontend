'use client';

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axiosInstance from "../../Auth/AxiosInstance";
import AdminLayout from "../Adminlayout/page";

const UpdateBlog = () => {
  const router = useRouter();
  const { id } = useParams();

  const [form, setForm] = useState({
    title: "",
    content: "",
    imageUrl: "",
    author: "",
    tags: "",
  });
  const [loading, setLoading] = useState(true);

  // ✅ Fetch existing blog details
  const fetchBlog = async () => {
    try {
      const res = await axiosInstance.get(`/api/blogs/${id}`);
      setForm(res.data);
    } catch (err) {
      console.error("Error fetching blog:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchBlog();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/api/blogs/${id}`, form);
      alert("✅ Blog updated successfully!");
      router.push("/all_blog_list");
    } catch (err) {
      console.error("Error updating blog:", err);
      alert("❌ Failed to update blog");
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center py-20 text-gray-600">Loading...</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">✏️ Update Blog</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Content"
            className="border p-2 rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="author"
            value={form.author}
            onChange={handleChange}
            placeholder="Author"
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="tags"
            value={form.tags}
            onChange={handleChange}
            placeholder="Tags (comma separated)"
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Update Blog
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default UpdateBlog;
