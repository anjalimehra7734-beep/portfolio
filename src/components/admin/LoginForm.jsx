"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";

export default function LoginForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await api.post("/admin/login", formData);

      localStorage.setItem("token", data.token);

      alert("Login Successful ✅");

      router.push("/admin/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#111827] p-8 shadow-2xl">
      {/* Heading */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-white">
          Admin Login
        </h1>

        <p className="mt-2 text-gray-400">
          Login to your Portfolio Dashboard
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-700 bg-[#1F2937] px-4 py-3 text-white outline-none focus:border-cyan-400"
          />
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-700 bg-[#1F2937] px-4 py-3 text-white outline-none focus:border-cyan-400"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white transition hover:scale-[1.02] disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>
    </div>
  );
}