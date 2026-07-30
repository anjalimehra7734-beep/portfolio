"use client";

import { motion } from "framer-motion";

export default function ProjectsHeader() {
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

        <span className="text-sm font-medium tracking-wider text-cyan-300">
          MY PORTFOLIO
        </span>

      </div>

      {/* Heading */}

      <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl">

        Featured

        <span className="block bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
          Projects
        </span>

      </h2>

      {/* Description */}

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
        A collection of responsive websites and modern web applications
        built using HTML, CSS, Bootstrap, React, Next.js, Tailwind CSS,
        Node.js and MongoDB.
      </p>
    </motion.div>
  );
}