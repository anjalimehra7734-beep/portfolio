"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
      }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          variants={{
            hidden: {
              opacity: 0,
              y: 60,
            },
            show: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
}