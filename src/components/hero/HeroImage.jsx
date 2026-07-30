"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex items-center justify-center"
    >
      {/* Glow */}
      <div className="absolute h-[520px] w-[520px] rounded-full bg-gradient-to-r from-violet-600/20 via-fuchsia-500/20 to-cyan-500/20 blur-[120px]" />

      {/* Floating Card */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="group relative h-[560px] w-[420px] overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-3 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,.45)]"
      >
        {/* Image */}
        <div className="relative h-full w-full overflow-hidden rounded-[30px]">
          <Image
            src="/profile.jpeg"
            alt="Anjali Mehra"
            fill
            priority
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 rounded-[30px] bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent" />

        {/* Top Badge */}
        <div className="absolute left-6 top-6 rounded-2xl border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[3px] text-cyan-300">
            Portfolio
          </p>

          <h3 className="mt-1 text-lg font-bold text-white">
            Full Stack Developer
          </h3>
        </div>

        {/* Bottom Badge */}
        <div className="absolute bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-zinc-400">
                Experience
              </p>

              <h3 className="text-2xl font-bold text-white">
                1+ Year
              </h3>
            </div>

            <div className="h-12 w-px bg-white/10" />

            <div>
              <p className="text-sm text-zinc-400">
                Projects
              </p>

              <h3 className="text-2xl font-bold text-cyan-400">
                10+
              </h3>
            </div>

          </div>
        </div>
      </motion.div>

      {/* Floating Card 1 */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute -left-8 top-24 rounded-2xl border border-white/10 bg-[#0B1120]/80 px-5 py-4 backdrop-blur-xl"
      >
        <h3 className="text-3xl font-bold text-cyan-400">
          15+
        </h3>

        <p className="text-sm text-zinc-400">
          Technologies
        </p>
      </motion.div>

      {/* Floating Card 2 */}
      <motion.div
        animate={{
          y: [8, -8, 8],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute -right-10 bottom-28 rounded-2xl border border-white/10 bg-[#0B1120]/80 px-5 py-4 backdrop-blur-xl"
      >
        <h3 className="text-3xl font-bold text-violet-400">
          100%
        </h3>

        <p className="text-sm text-zinc-400">
          Client Focus
        </p>
      </motion.div>
    </motion.div>
  );
}