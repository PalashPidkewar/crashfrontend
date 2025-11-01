"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ replaces react-router-dom's useNavigate
import axiosInstance from "../../Auth/AxiosInstance"; // ✅ adjust path if needed
import AdminLayout from "../Adminlayout/page"; // ✅ adjust path

const AddBlog = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    content: "",
    author: "",
    tags: "",
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", form.title);
    data.append("content", form.content);
    data.append("author", form.author);
    data.append("tags", form.tags);
    if (image) data.append("image", image);

    try {
      await axiosInstance.post("/api/blogs", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      router.push("/admin/all_blog_list"); // ✅ Next.js redirect
    } catch (err) {
      console.error("Error adding blog:", err);
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md mt-6">
        <h2 className="text-2xl font-bold mb-4 text-center">📝 Add New Blog</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Content"
            className="border border-gray-300 p-2 rounded-lg h-32 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            className="border border-gray-300 p-2 rounded-lg"
          />

          <input
            name="author"
            value={form.author}
            onChange={handleChange}
            placeholder="Author"
            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            name="tags"
            value={form.tags}
            onChange={handleChange}
            placeholder="Tags (comma separated)"
            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Add Blog
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddBlog;
