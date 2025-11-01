"use client";

import { useEffect, useState } from "react";
import axiosInstance from "../../Auth/AxiosInstance";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axiosInstance.get("/api/blogs");
        setBlogs(res.data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-[#0078AE] text-center">
        Our Blogs
      </h1>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
            onClick={() => setSelectedBlog(blog)}
          >
            {/* Blog Image */}
            <div className="relative w-full h-56">
              <Image
                src={`${axiosInstance.defaults.baseURL}${blog.imageUrl}`}
                alt={blog.title}
                fill
                className="object-cover"
                unoptimized // to prevent Next.js domain blocking
              />
            </div>

            {/* Blog Info */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {blog.title}
              </h2>
              <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                <HiOutlineCalendarDateRange className="text-gray-500" />
                {new Date(blog.created_at).toLocaleDateString()}
              </p>

              <p className="text-gray-600 mt-2 line-clamp-1">{blog.content}</p>
              <button className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal / Detailed View */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-start pt-20 z-50 overflow-auto"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="bg-white rounded-xl max-w-3xl w-full mx-4 p-6 relative shadow-xl"
            >
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
              >
                ✕
              </button>

              <div className="relative w-full h-64">
                <Image
                  src={`${axiosInstance.defaults.baseURL}${selectedBlog.imageUrl}`}
                  alt={selectedBlog.title}
                  fill
                  className="object-cover rounded"
                  unoptimized
                />
              </div>

              <h2 className="text-2xl font-bold mt-4 text-gray-800">
                {selectedBlog.title}
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                {new Date(selectedBlog.created_at).toLocaleDateString()}
              </p>
              <p className="text-gray-700 mt-4 whitespace-pre-line">
                {selectedBlog.content}
              </p>
              <p className="text-gray-500 mt-4 italic">{selectedBlog.author}</p>
              <p className="text-gray-400 mt-2 text-sm">
                Tags: {selectedBlog.tags}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
