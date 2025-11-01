"use client";

import { useState, useEffect } from "react";
import axiosInstance from "../../Auth/AxiosInstance"; // adjust path as needed
import AdminLayout from "../Adminlayout/page"; // adjust path as needed

export default function CompanyEmailsend() {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [day, setDay] = useState(1);
  const [companies, setCompanies] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Fetch all companies
  const fetchCompanies = async () => {
    try {
      const res = await axiosInstance.get("/api/companies");
      setCompanies(res.data);
    } catch (err) {
      console.error("Fetch Companies Error:", err.response?.data || err.message);
      alert("❌ Failed to fetch companies. Check console.");
    }
  };

  // Fetch scheduled day
  const fetchSchedule = async () => {
    try {
      const res = await axiosInstance.get("/api/schedule");
      setDay(res.data.send_day);
    } catch (err) {
      console.error("Fetch Schedule Error:", err.response?.data || err.message);
      alert("❌ Failed to fetch schedule. Check console.");
    }
  };

  useEffect(() => {
    fetchCompanies();
    fetchSchedule();
  }, []);

  // Add new company
  const addCompany = async (e) => {
    e.preventDefault();
    if (!companyName || !email) return alert("Company Name and Email are required!");
    try {
      const res = await axiosInstance.post("/api/companies", {
        company_name: companyName,
        email,
      });
      console.log("Company Added:", res.data);
      setCompanyName("");
      setEmail("");
      fetchCompanies();
      alert("✅ Company added successfully!");
    } catch (err) {
      console.error("Add Company Error:", err.response?.data || err.message);
      alert("❌ Failed to add company. Check console for details.");
    }
  };

  // Set scheduled day
  const setSchedule = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/api/schedule", { send_day: day });
      console.log("Schedule Updated:", res.data);
      alert("📅 Schedule updated successfully!");
    } catch (err) {
      console.error("Set Schedule Error:", err.response?.data || err.message);
      alert("❌ Failed to update schedule. Check console.");
    }
  };

  // Save email content
  const saveEmailContent = async () => {
    if (!title || !description) return alert("Title & Description required");
    try {
      const res = await axiosInstance.post("/api/email/save", { title, description });
      console.log("Email Content Saved:", res.data);
      alert("💾 Email content saved!");
    } catch (err) {
      console.error("Save Email Content Error:", err.response?.data || err.message);
      alert("❌ Failed to save email content. Check console.");
    }
  };

  // Send emails now
  const sendNow = async () => {
    if (!title || !description) return alert("Title & Description required");
    try {
      const res = await axiosInstance.post("/api/email/send", { title, description });
      console.log("Emails Sent:", res.data);
      alert("📧 Emails sent immediately!");
    } catch (err) {
      console.error("Send Emails Error:", err.response?.data || err.message);
      alert("❌ Failed to send emails. Check console.");
    }
  };

  return (
    <AdminLayout>
      <div className="p-6 max-w-3xl mx-auto text-gray-500">
        <h1 className="text-3xl font-bold mb-6 text-center">Advertisement Email Dashboard</h1>

        {/* Add Company */}
        <form onSubmit={addCompany} className="flex flex-col md:flex-row gap-2 mb-4">
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="border px-3 py-2 rounded w-full md:w-1/2"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border px-3 py-2 rounded w-full md:w-1/2"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded mt-2 md:mt-0 hover:bg-blue-700 transition"
          >
            Add
          </button>
        </form>

        {/* Set Schedule */}
        <form onSubmit={setSchedule} className="flex items-center gap-2 mb-4">
          <label className="mr-2 font-medium">Send Day of Month:</label>
          <input
            type="number"
            min="1"
            max="31"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="border px-3 py-2 rounded w-20"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Set Schedule
          </button>
        </form>

        {/* Email Content */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Email Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border px-3 py-2 rounded w-full mb-2"
          />
          <textarea
            placeholder="Email Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border px-3 py-2 rounded w-full mb-2"
            rows={4}
          />
          <button
            onClick={saveEmailContent}
            className="bg-yellow-500 text-white px-4 py-2 rounded mr-2 hover:bg-yellow-600 transition"
          >
            Save Content
          </button>
          <button
            onClick={sendNow}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Send Now
          </button>
        </div>

        {/* Company List */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Companies</h2>
          <ul className="border rounded p-3 space-y-1">
            {companies.map((c) => (
              <li key={c.id} className="flex justify-between">
                <span className="font-semibold">{c.id}</span>
                <span>{c.company_name}</span>
                <span className="text-gray-600">{c.email}</span>
              </li>
            ))}
          </ul>
          {companies.length === 0 && (
            <p className="text-center text-gray-500 mt-4">No companies found.</p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
