"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function FooterBrand() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
    >
      {/* Logo */}

      <h2 className="text-4xl font-black text-white">
        Anjali
        <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
          .
        </span>
      </h2>

      {/* Profession */}

      <p className="mt-3 text-lg font-medium text-cyan-400">
        Full Stack Developer
      </p>

      {/* Description */}

      <p className="mt-6 max-w-md leading-8 text-zinc-400">
        I build premium, responsive and high-performance websites using
        React, Next.js, Tailwind CSS, Node.js and MongoDB. My goal is to
        create fast, scalable and visually stunning digital experiences.
      </p>

      {/* Available Badge */}

      <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-3 backdrop-blur-xl">

        <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

        <Sparkles
          size={16}
          className="text-green-400"
        />

        <span className="font-medium text-green-300">
          Available for Freelance
        </span>

      </div>
    </motion.div>
  );
}