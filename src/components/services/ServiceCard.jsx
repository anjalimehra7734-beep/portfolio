"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_20px_70px_rgba(34,211,238,.18)]"
    >
      {/* Glow */}

      <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-violet-600/10 blur-[80px] transition duration-500 group-hover:bg-cyan-500/20" />

      {/* Icon */}

      <div className="relative z-10 mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-400 text-white shadow-[0_15px_40px_rgba(139,92,246,.35)] transition duration-500 group-hover:rotate-6 group-hover:scale-110">

        <Icon size={36} />

      </div>

      {/* Title */}

      <h3 className="relative z-10 text-2xl font-bold text-white transition group-hover:text-cyan-300">
        {service.title}
      </h3>

      {/* Description */}

      <p className="relative z-10 mt-5 leading-8 text-zinc-400">
        {service.description}
      </p>

      {/* Divider */}

      <div className="relative z-10 my-8 h-px bg-gradient-to-r from-white/10 via-cyan-400/20 to-transparent" />

      {/* Button */}

      <button className="relative z-10 flex items-center gap-3 font-semibold text-cyan-300 transition duration-300 group-hover:gap-5">

        Learn More

        <ArrowUpRight
          size={18}
          className="transition duration-300 group-hover:rotate-45"
        />

      </button>
    </motion.div>
  );
}