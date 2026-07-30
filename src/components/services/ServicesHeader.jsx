"use client";

import { motion } from "framer-motion";

export default function ServicesHeader() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
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
      className="mx-auto mb-20 max-w-3xl text-center"
    >
      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl">

        <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

        <span className="text-sm font-semibold tracking-[3px] text-cyan-300">
          MY SERVICES
        </span>

      </div>

      {/* Heading */}

      <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl">

        Services That Help

        <span className="block bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
          Your Business Grow
        </span>

      </h2>

      {/* Description */}

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
        I build premium websites, modern web applications and responsive
        user interfaces that are fast, scalable and designed to convert
        visitors into customers.
      </p>
    </motion.div>
  );
}