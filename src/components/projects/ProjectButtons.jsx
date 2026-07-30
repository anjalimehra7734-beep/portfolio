"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectButtons({ github, live }) {
  return (
    <div className="mt-8 flex items-center gap-4">

      <motion.a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl transition-all duration-300 hover:border-violet-500 hover:bg-violet-600"
      >
        <FaGithub size={20} />
      </motion.a>

      <motion.a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-[0_12px_35px_rgba(139,92,246,.35)] transition-all duration-300"
      >
        Live Demo

        <FiExternalLink
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </motion.a>

    </div>
  );
}