"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "10+",
    title: "Projects Completed",
  },
  {
    number: "15+",
    title: "Technologies",
  },
  {
    number: "100%",
    title: "Client Satisfaction",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-14 grid grid-cols-3 gap-5">

      {stats.map((item, index) => (
        <motion.div
          key={item.title}
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
            delay: index * 0.2,
            duration: 0.6,
          }}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
        >
          <h3 className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-4xl font-extrabold text-transparent">
            {item.number}
          </h3>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            {item.title}
          </p>
        </motion.div>
      ))}

    </div>
  );
}