"use client";

import { motion } from "framer-motion";

export default function SkillsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center"
    >
      <p className="uppercase tracking-[6px] text-cyan-400">
        My Skills
      </p>

      <h2 className="mt-4 text-5xl font-black text-white">
        Technologies I Work With
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-zinc-400 leading-8">
        I specialize in building modern web applications using the latest
        frontend and backend technologies.
      </p>
    </motion.div>
  );
}