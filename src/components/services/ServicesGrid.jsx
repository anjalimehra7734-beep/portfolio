"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3"
    >
      {services.map((service) => (
        <motion.div
          key={service.id}
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
            },
            show: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <ServiceCard service={service} />
        </motion.div>
      ))}
    </motion.div>
  );
}