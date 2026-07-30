"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import SocialLinks from "./SocialLinks";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "anjalimehra7734@gmail.com",
    color: "text-cyan-400",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 7734005189",
    color: "text-violet-400",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Jaipur, Rajasthan, India",
    color: "text-pink-400",
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
    >
      <h3 className="text-3xl font-bold text-white">
        Get In Touch
      </h3>

      <p className="mt-4 leading-8 text-zinc-400">
        Whether you need a modern website, a full-stack application,
        or want to discuss a freelance project, feel free to contact me.
        I'll get back to you as soon as possible.
      </p>

      <div className="mt-10 space-y-6">

        {contactInfo.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-400 shadow-lg">
                <Icon
                  size={24}
                  className="text-white"
                />
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-1 text-zinc-400">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}

      </div>

      <div className="mt-10">

        <h4 className="mb-5 text-lg font-semibold text-white">
          Follow Me
        </h4>

        <SocialLinks />

      </div>
    </motion.div>
  );
}