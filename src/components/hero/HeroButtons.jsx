"use client";

import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <div className="mt-12 flex flex-wrap items-center gap-5">

      {/* Hire Me */}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-[0_15px_50px_rgba(139,92,246,.35)] transition-all"
      >
        Hire Me

        <ArrowRight
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </motion.a>

      {/* Resume */}
      <motion.a
        href="/resume.pdf"
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all hover:border-cyan-400/40 hover:bg-white/10"
      >
        Resume

        <Download
          size={20}
          className="transition-transform duration-300 group-hover:-translate-y-1"
        />
      </motion.a>

    </div>
  );
}