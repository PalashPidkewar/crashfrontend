"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const AdminLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "All Newsletters", path: "/Dashboard/getallnewsletters" },
    { name: "Send Email All Newsletters", path: "/Dashboard/Sendemail_allnewsletter" },
    { name: "Add Blog", path: "/Dashboard/AddBlogpage" },
    { name: "Show & Delete Blogs", path: "/Dashboard/Edit_Delete_blog" },
    { name: "Update", path: "/Dashboard/Update_blog" },
    { name: "Add Gallery Picture", path: "/Dashboard/AddGalleryPhoto" },
    { name: "Delete Gallery Picture", path: "/Dashboard/DeleteGalleryPhoto" },
    { name: "Chatbot User Details", path: "/Dashboard/Chatbot_user_details" },
    { name: "Company Email Sends", path: "/Dashboard/Company_send_email" },
    { name: "Company Email Delete", path: "/Dashboard/Comapny_Email_Deleted" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-blue-500 text-white p-5 space-y-6 shadow-lg">
        <h1 className="text-2xl font-semibold border-b border-blue-300 pb-4 text-center">
          Admin Panel
        </h1>
        <nav className="flex flex-col space-y-3">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.path}
              className="py-2 px-3 rounded-md hover:bg-blue-600 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-2/3 bg-blue-500 text-white p-5 transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Admin Panel</h1>
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        <nav className="flex flex-col space-y-3">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.path}
              className="py-2 px-3 rounded-md hover:bg-blue-600 transition"
              onClick={() => setIsOpen(false)} // close sidebar on click
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-5">
        {/* Top Navbar for Mobile */}
        <div className="md:hidden flex items-center justify-between mb-5">
          <h1 className="text-xl font-semibold text-gray-800">Admin Panel</h1>
          <FaBars className="text-2xl cursor-pointer" onClick={toggleSidebar} />
        </div>

        {/* Page Content */}
        {children ? (
          <div>{children}</div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-gray-800 text-xl font-semibold mb-2">
              Welcome, Admin 👋
            </h2>
            <p className="text-gray-600">
              Select an option from the sidebar.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminLayout;
