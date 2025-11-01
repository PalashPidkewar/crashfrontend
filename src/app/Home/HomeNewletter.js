"use client";

import { useState } from "react";
import axiosInstance from "../Auth/AxiosInstance"; // make sure this path is correct

export default function Newsletter_Email() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setStatus("❌ Please enter an email.");
      return;
    }

    setStatus("Submitting...");

    try {
      const res = await axiosInstance.post("/api/newsletter", { email });

      if (res.status === 200) {
        setStatus("✅ Subscription successful!");
        setEmail("");
      } else {
        setStatus(`❌ ${res.data.error || "Something went wrong."}`);
      }
    } catch (err) {
      setStatus(`❌ ${err.response?.data?.error || "Server error"}`);
    }
  };

  return (
    <> 
      <h2 className="text-3xl text-left  pl-5 lg:pl-18 pt-5 md:text-4xl font-bold text-[#0078AE] mb-4">
        NEWS LETTER <span className="text-orange-500">.</span>
      </h2>

      {/* Background Image Section */}
      <section
        className="bg-cover bg-center bg-no-repeat py-12 px-4 lg:mt-15 mt-8 relative"
        style={{
          backgroundImage: `url('/HomeImg/background imgaes.jpg')`,
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="relative z-0 flex flex-col lg:flex-row bg-green-200/90 rounded-lg overflow-visible shadow-lg">
            {/* Image */}
            <div className="w-full lg:w-1/2 relative flex items-start justify-center px-4 lg:pl-6">
              <div className="relative -mt-12 z-10 w-full max-w-md">
                <img
                  src="/HomeImg/crush barrier 1img.jpg"
                  alt="Newsletter"
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center mt-6 lg:mt-0">
              <h5 className="text-sm font-semibold tracking-widest uppercase text-blue-500">
                Newsletter
              </h5>
              <h2 className="text-2xl font-bold text-gray-900 mt-2">
                Receive the latest Path India Ltd news updates directly in your
                inbox.
              </h2>
              <p className="text-sm text-gray-700 mt-2">
                Get the Path India Ltd news first. Keep up with our latest news,
                investor updates, and media releases.
              </p>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="mt-6 flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-800 placeholder:text-gray-600 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-yellow-600 text-white font-semibold rounded-md hover:bg-yellow-700 transition"
                >
                  Subscribe
                </button>
              </form>

              {status && <p className="text-sm text-gray-800 mt-3">{status}</p>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

