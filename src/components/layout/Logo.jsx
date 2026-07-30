"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href="#home">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex cursor-pointer items-center gap-3"
      >
        <motion.div
          whileHover={{ rotate: 10 }}
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-400 shadow-[0_0_30px_rgba(139,92,246,.35)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(139,92,246,.6)]"
        >
          <span className="text-lg font-bold text-white">AM</span>
        </motion.div>

        <div>
          <h2 className="text-lg font-bold text-white">
            Anjali Mehra
          </h2>

          <p className="text-xs text-zinc-400">
            Full Stack Developer
          </p>
        </div>
      </motion.div>
    </Link>
  );
}