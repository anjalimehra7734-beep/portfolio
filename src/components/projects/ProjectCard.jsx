"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProjectButtons from "./ProjectButtons";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_20px_70px_rgba(34,211,238,.15)]"
    >
      {/* Image */}

      <div className="relative h-72 overflow-hidden">

        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />

        {/* View Project */}

        <div className="absolute right-5 top-5">

          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-xl transition duration-300 group-hover:rotate-45">

            <ArrowUpRight
              size={20}
              className="text-white"
            />

          </div>

        </div>

        {/* Tech Stack */}

        <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">

          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300 backdrop-blur-xl"
            >
              {item}
            </span>
          ))}

        </div>

      </div>

      {/* Content */}

      <div className="p-7">

        <h3 className="text-2xl font-bold text-white transition group-hover:text-cyan-300">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {project.description}
        </p>

        <ProjectButtons
          github={project.github}
          live={project.live}
        />

      </div>

    </motion.div>
  );
}