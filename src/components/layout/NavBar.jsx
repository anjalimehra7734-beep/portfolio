"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 py-4"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-8 backdrop-blur-2xl">
        <Logo />

        <NavLinks />

        <div className="hidden items-center gap-4 lg:flex">
          <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />

          <span className="text-sm text-zinc-300">
            Available for Work
          </span>

          <a
            href="/resume.pdf"
            download
            className="ml-4 flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 px-6 py-3 text-white transition hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,.45)]"
          >
            <Download size={18} />
            Resume
          </a>
        </div>

        <MobileMenu />
      </div>
    </motion.header>
  );
}