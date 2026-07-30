"use client";

import Link from "next/link";
import { navLinks } from "@/data/navLinks";

export default function NavLinks() {
  return (
    <ul className="hidden items-center gap-10 lg:flex">
      {navLinks.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="group relative font-medium text-zinc-300 transition hover:text-white"
          >
            {item.name}

            <span className="absolute -bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
          </Link>
        </li>
      ))}
    </ul>
  );
}