"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/data/socialLinks";
import { Mail, Phone } from "lucide-react";

export default function FooterSocial() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
    >
      <h3 className="text-2xl font-bold text-white">
        Let's Connect
      </h3>

      <p className="mt-4 leading-7 text-zinc-400">
        Have a project in mind?
        Let's build something amazing together.
      </p>

      {/* Email */}

      <div className="mt-8 space-y-5">

        <a
          href="mailto:anjalimehra7734@gmail.com"
          className="group flex items-center gap-4 text-zinc-300 transition hover:text-cyan-400"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 transition group-hover:bg-cyan-500/20">

            <Mail size={20} />

          </div>

          <span>
            anjalimehra7734@gmail.com
          </span>
        </a>

        <a
          href="tel:+917734005189"
          className="group flex items-center gap-4 text-zinc-300 transition hover:text-violet-400"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 transition group-hover:bg-violet-500/20">

            <Phone size={20} />

          </div>

          <span>
            +91 7734005189
          </span>
        </a>

      </div>

      {/* Social Icons */}

      <div className="mt-10 flex flex-wrap gap-4">

        {socialLinks.map((item) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -6,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-gradient-to-br hover:from-violet-600 hover:via-fuchsia-500 hover:to-cyan-400"
            >
              <Icon size={22} />
            </motion.a>
          );
        })}

      </div>
    </motion.div>
  );
}