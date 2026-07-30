"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/data/socialLinks";

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4">

      {socialLinks.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.4,
            }}
            whileHover={{
              y: -8,
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="group relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_35px_rgba(34,211,238,.25)]"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/20 to-cyan-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Icon */}
            <Icon
              size={26}
              className="relative z-10 transition-transform duration-300 group-hover:scale-110"
            />
          </motion.a>
        );
      })}

    </div>
  );
}