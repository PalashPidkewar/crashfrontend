"use client";

import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import axiosInstance from "../../Auth/AxiosInstance"; // adjust path as needed
import AdminLayout from "../Adminlayout/page"; // adjust path as needed

export default function CompanyListDeleted() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch all companies
  const fetchCompanies = async () => {
    try {
      const res = await axiosInstance.get("/api/companies");
      setCompanies(res.data);
    } catch (err) {
      console.error("Error fetching companies:", err);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Delete a company by ID
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this company?")) return;

    try {
      const res = await axiosInstance.delete(`/api/companies/${id}`);
      alert(res.data.message || "Company deleted successfully!");
      fetchCompanies(); // refresh list
    } catch (err) {
      console.error("Error deleting company:", err);
      alert("Failed to delete company");
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-lg font-semibold">Loading companies...</p>
      </div>
    );
  }

  return (
    <AdminLayout>
      <div className="w-full min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Company List
        </h2>

        {companies.length === 0 ? (
          <p className="text-gray-600 text-lg">No companies found.</p>
        ) : (
          <div className="w-full max-w-3xl bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <table className="w-full border-collapse">
              <thead className="bg-gray-100 text-gray-400">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">ID</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Company Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Email</th>
                  <th className="py-3 px-4 text-center font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company) => (
                  <tr
                    key={company.id}
                    className="border-t hover:bg-gray-50 transition text-gray-500"
                  >
                    <td className="py-3 px-4">{company.id}</td>
                    <td className="py-3 px-4">{company.company_name}</td>
                    <td className="py-3 px-4">{company.email}</td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => handleDelete(company.id)}
                        className="text-red-600 hover:text-red-800 transition"
                        title="Delete"
                      >
                        <FaTrashAlt className="inline text-xl" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
