"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center"
    >
      {/* Background Glow */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-gradient-to-r from-violet-600/20 via-fuchsia-500/20 to-cyan-500/20 blur-[130px]" />

      {/* Main Card */}
      <div className="group relative h-[580px] w-[420px] overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-3 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_80px_rgba(34,211,238,.25)]">

        <div className="relative h-full w-full overflow-hidden rounded-[30px]">
          <Image
            src="/about.jpeg"
            alt="Anjali Mehra"
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 rounded-[30px] bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent" />

        {/* Name Card */}
        <div className="absolute bottom-8 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl">
          <h3 className="text-2xl font-bold text-white">
            Anjali Mehra
          </h3>

          <p className="mt-1 text-cyan-300">
            Full Stack Developer
          </p>
        </div>

      </div>

      {/* Floating Card */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-10 top-16 rounded-2xl border border-white/10 bg-[#0B1120]/80 px-6 py-5 backdrop-blur-xl"
      >
        <h3 className="text-3xl font-bold text-cyan-400">
          10+
        </h3>

        <p className="text-sm text-zinc-400">
          Projects
        </p>
      </motion.div>

      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-10 bottom-24 rounded-2xl border border-white/10 bg-[#0B1120]/80 px-6 py-5 backdrop-blur-xl"
      >
        <h3 className="text-3xl font-bold text-violet-400">
          15+
        </h3>

        <p className="text-sm text-zinc-400">
          Skills
        </p>
      </motion.div>
    </motion.div>
  );
}