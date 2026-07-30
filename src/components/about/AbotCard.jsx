"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  MonitorSmartphone,
} from "lucide-react";

const cards = [
  {
    icon: <Code2 size={28} />,
    title: "Clean Code",
    description:
      "Scalable, maintainable and production-ready code following modern best practices.",
  },
  {
    icon: <Rocket size={28} />,
    title: "High Performance",
    description:
      "Fast loading websites optimized for speed, SEO and user experience.",
  },
  {
    icon: <MonitorSmartphone size={28} />,
    title: "Responsive Design",
    description:
      "Pixel-perfect UI that works beautifully across desktop, tablet and mobile.",
  },
];

export default function AboutCards() {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-3">

      {cards.map((card, index) => (
        <motion.div
          key={card.title}
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
            duration: 0.6,
            delay: index * 0.15,
          }}
          whileHover={{
            y: -8,
          }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
        >
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 text-white">
            {card.icon}
          </div>

          <h3 className="mb-3 text-xl font-bold text-white">
            {card.title}
          </h3>

          <p className="leading-7 text-zinc-400">
            {card.description}
          </p>
        </motion.div>
      ))}

    </div>
  );
}