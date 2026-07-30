"use client";

import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiFigma,
  SiPostman,
} from "react-icons/si";

const iconMap = {
  html5: FaHtml5,
  css3: FaCss3Alt,
  javascript: FaJs,
  react: FaReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  bootstrap: SiBootstrap,
  nodejs: FaNodeJs,
  express: SiExpress,
  mongodb: SiMongodb,
  git: FaGitAlt,
  github: SiGithub,
  figma: SiFigma,
  postman: SiPostman,
};

export default function SkillCard({ skill }) {
  const Icon = iconMap[skill.icon];

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-400/10 opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 transition-all duration-300 group-hover:scale-110">
          {Icon && <Icon className={`text-5xl ${skill.color}`} />}
        </div>

        <h3 className="text-xl font-semibold text-white">
          {skill.name}
        </h3>
      </div>
    </motion.div>
  );
}