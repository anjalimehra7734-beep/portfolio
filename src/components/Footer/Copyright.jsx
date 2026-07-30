"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export default function Copyright() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      className="mt-20 border-t border-white/10 pt-8"
    >
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

        {/* Left */}

        <p className="flex items-center gap-2 text-center text-sm text-zinc-400 md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">
            Anjali Mehra
          </span>

          <span>•</span>

          Made with

          <Heart
            size={16}
            className="fill-red-500 text-red-500"
          />

          using Next.js & Tailwind CSS
        </p>

        {/* Right */}

        <button
          onClick={scrollToTop}
          className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-gradient-to-br hover:from-violet-600 hover:via-fuchsia-500 hover:to-cyan-400"
        >
          <ArrowUp
            size={20}
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />
        </button>

      </div>
    </motion.div>
  );
}