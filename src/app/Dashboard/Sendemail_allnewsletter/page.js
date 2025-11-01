"use client";

import React, { useEffect, useState } from "react";
import axiosInstance from "../../Auth/AxiosInstance"; // ✅ adjust path if needed
import { FaPaperPlane, FaEnvelope, FaUsers } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import AdminLayout from "../Adminlayout/page"; // ✅ adjust path

const NewsletterManager = () => {
  const [email, setEmail] = useState("");
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // ✅ Fetch all subscribers
  const fetchSubscribers = async () => {
    try {
      const res = await axiosInstance.get("/api/subscribers");
      setSubscribers(res.data);
    } catch (error) {
      console.error("Error fetching subscribers:", error);
      toast.error("Failed to load subscribers.");
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  // ✅ Subscribe a new email
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.trim()) return toast.error("Please enter a valid email.");

    try {
      setLoading(true);
      const res = await axiosInstance.post("/api/newsletter", { email });
      toast.success(res.data.message);
      setEmail("");
      fetchSubscribers();
    } catch (err) {
      toast.error(err.response?.data?.error || "Subscription failed.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Send newsletter to all
  const handleSendNewsletter = async () => {
    if (subscribers.length === 0)
      return toast.error("No subscribers found to send newsletter.");

    if (!window.confirm("Send newsletter to all subscribers?")) return;

    try {
      setLoading(true);
      setProgress(0);
      const progressInterval = setInterval(() => {
        setProgress((p) => (p < 90 ? p + 10 : p));
      }, 500);

      const res = await axiosInstance.post("/api/send-all");
      clearInterval(progressInterval);
      setProgress(100);
      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to send newsletter.");
    } finally {
      setLoading(false);
      setTimeout(() => setProgress(0), 1000);
    }
  };

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gray-100 py-10 px-5 flex flex-col items-center">
        <Toaster position="top-center" reverseOrder={false} />

        <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl p-8 relative">
          <h1 className="text-3xl font-bold text-center text-[#0078AE] mb-6 flex items-center justify-center gap-2">
            <FaEnvelope /> Path India Ltd – Newsletter Management
          </h1>

          {/* ✅ Subscription Form */}
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-6"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter subscriber email"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-2/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 justify-center disabled:opacity-60"
            >
              {loading ? "Please wait..." : "Subscribe"}
            </button>
          </form>

          {/* ✅ Send Newsletter Button */}
          <div className="flex justify-center mb-6">
            <button
              onClick={handleSendNewsletter}
              disabled={loading}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2 justify-center disabled:opacity-60"
            >
              <FaPaperPlane />{" "}
              {loading ? "Sending..." : "Send Newsletter to All"}
            </button>
          </div>

          {/* ✅ Progress Bar */}
          {loading && progress > 0 && (
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-5">
              <div
                className="bg-green-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          )}

          {/* ✅ Subscribers Table */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
            <div className="flex items-center bg-blue-50 border-b border-gray-300 px-4 py-2">
              <FaUsers className="text-blue-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-700">
                Subscribed Emails
              </h2>
            </div>

            {subscribers.length === 0 ? (
              <p className="text-center py-5 text-gray-500">
                No subscribers found.
              </p>
            ) : (
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-100 text-gray-700">
                    <th className="py-2 px-4 border">#</th>
                    <th className="py-2 px-4 border text-left">Email</th>
                    <th className="py-2 px-4 border text-left">
                      Subscribed Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {subscribers.map((sub, index) => (
                    <tr key={sub._id || index} className="hover:bg-gray-100">
                      <td className="py-2 px-4 border text-center">
                        {index + 1}
                      </td>
                      <td className="py-2 px-4 border">{sub.email}</td>
                      <td className="py-2 px-4 border">
                        {new Date(sub.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default NewsletterManager;
