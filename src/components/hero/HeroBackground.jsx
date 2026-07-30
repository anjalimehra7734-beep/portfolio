"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* Main Background */}
      <div className="absolute inset-0 -z-50 bg-[#050816]" />

      {/* Radial Gradient */}
      <div className="absolute inset-0 -z-40 bg-[radial-gradient(circle_at_top,#1f1147_0%,#050816_65%)]" />

      {/* Left Glow */}
      <motion.div
        animate={{
          x: [-30, 20, -30],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-32 top-24 -z-30 h-[420px] w-[420px] rounded-full bg-violet-600/30 blur-[150px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          x: [20, -30, 20],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-32 bottom-20 -z-30 h-[420px] w-[420px] rounded-full bg-cyan-500/25 blur-[150px]"
      />

      {/* Center Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 -z-20 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[180px]"
      />

      {/* Grid */}
      <div className="absolute inset-0 -z-10 opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* Noise */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050816] to-transparent" />
    </>
  );
}