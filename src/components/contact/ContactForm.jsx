"use client";

import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setStatus("");

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/contact`,
        formData
      );

      if (data.success) {
        setStatus("✅ Message sent successfully.");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (err) {
      setStatus(
        err.response?.data?.message ||
          "❌ Failed to send message."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
    >
      <h3 className="text-3xl font-bold text-white">
        Send a Message
      </h3>

      <p className="mt-3 text-zinc-400">
        Fill out the form below and I'll get back to you as soon as possible.
      </p>

      <div className="mt-10 space-y-6">

        {/* Name */}

        <div>
          <label className="mb-3 block text-sm font-medium text-zinc-300">
            Full Name
          </label>

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="John Doe"
            required
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-cyan-400 focus:bg-white/10"
          />
        </div>

        {/* Email */}

        <div>
          <label className="mb-3 block text-sm font-medium text-zinc-300">
            Email Address
          </label>

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="john@example.com"
            required
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-cyan-400 focus:bg-white/10"
          />
        </div>

        {/* Subject */}

        <div>
          <label className="mb-3 block text-sm font-medium text-zinc-300">
            Subject
          </label>

          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            type="text"
            placeholder="Project Discussion"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-cyan-400 focus:bg-white/10"
          />
        </div>

        {/* Message */}

        <div>
          <label className="mb-3 block text-sm font-medium text-zinc-300">
            Message
          </label>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            required
            placeholder="Tell me about your project..."
            className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-cyan-400 focus:bg-white/10"
          />
        </div>

        {/* Button */}

        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.98,
          }}
          disabled={loading}
          type="submit"
          className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_15px_45px_rgba(139,92,246,.35)] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}

          <Send
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </motion.button>

        {status && (
          <p
            className={`text-center font-medium ${
              status.startsWith("✅")
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {status}
          </p>
        )}

      </div>
    </motion.form>
  );
}