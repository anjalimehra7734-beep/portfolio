"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

export default function ExperienceCard() {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
    >
      {/* Icon */}
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 text-white shadow-lg">
        <BriefcaseBusiness size={28} />
      </div>

      {/* Number */}
      <h3 className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-5xl font-extrabold text-transparent">
        10+
      </h3>

      {/* Title */}
      <p className="mt-3 text-lg font-semibold text-white">
        Projects Completed
      </p>

      {/* Description */}
      <p className="mt-2 leading-7 text-zinc-400">
        Built modern, responsive and scalable websites using React,
        Next.js, Node.js and MongoDB with a strong focus on UI/UX and
        performance.
      </p>
    </motion.div>
  );
}