"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navLinks";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-white lg:hidden"
      >
        <Menu size={28} />
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] bg-[#070B16]">
          <div className="flex items-center justify-between border-b border-white/10 p-6">
            <h2 className="text-xl font-bold text-white">
              Menu
            </h2>

            <button onClick={() => setOpen(false)}>
              <X size={28} className="text-white" />
            </button>
          </div>

          <div className="mt-10 flex flex-col items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-xl text-zinc-300 hover:text-white"
              >
                {item.name}
              </Link>
            ))}

            <a
              href="/resume.pdf"
              download
              className="mt-4 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 px-8 py-3 font-semibold text-white"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
}