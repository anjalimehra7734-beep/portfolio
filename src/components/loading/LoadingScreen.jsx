"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>

      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
            },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050816]"
        >
          {/* Background Glow */}

          <div className="absolute h-80 w-80 rounded-full bg-violet-600/20 blur-[140px]" />

          <div className="absolute h-80 w-80 rounded-full bg-cyan-500/20 blur-[140px]" />

          {/* Logo */}

          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative flex flex-col items-center"
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex h-28 w-28 items-center justify-center rounded-[30px] bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-400 shadow-[0_0_60px_rgba(139,92,246,.45)]"
            >
              <span className="text-4xl font-black text-white">
                AM
              </span>
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .4,
              }}
              className="mt-8 text-4xl font-black text-white"
            >
              Anjali Mehra
            </motion.h1>

            <p className="mt-3 text-zinc-400">
              Full Stack Developer
            </p>

            {/* Loading Bar */}

            <div className="mt-10 h-1 w-56 overflow-hidden rounded-full bg-white/10">

              <motion.div
                initial={{
                  x: "-100%",
                }}
                animate={{
                  x: "100%",
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "linear",
                }}
                className="h-full w-24 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
              />

            </div>

          </motion.div>
        </motion.div>
      )}

    </AnimatePresence>
  );
}