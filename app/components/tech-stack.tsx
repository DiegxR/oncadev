"use client"

import { motion } from "framer-motion"

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "GraphQL",
]

const technologies2 = [
  "Tailwind CSS",
  "Vercel",
  "GitHub",
  "Figma",
  "NestJS",
  "Firebase",
  "Supabase",
  "Terraform",
  "Spring Boot",
]

import { Particles } from "./custom-ui/Particles"

export function TechStack() {
  return (
    <section id="tech" className="py-32 bg-stone-950 relative overflow-hidden">
      <Particles density={4} colorClass="bg-teal-400/40" sizeClass="w-1.5 h-1.5" opacityClass="opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/30 to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
            Tecnologías
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-50 mt-4">
            Stack tecnológico
          </h2>
          <p className="text-stone-400 mt-4 max-w-2xl mx-auto">
            Trabajamos con tecnologías actuales para entregar soluciones eficaces y robustas.
          </p>
        </motion.div>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-stone-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-stone-950 to-transparent z-10" />
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" },
          }}
          className="flex gap-6"
        >
          {[...technologies, ...technologies, ...technologies].map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="flex-shrink-0 px-8 py-4 rounded-full border border-stone-700 bg-stone-900/50 backdrop-blur-sm hover:border-emerald-500/50 transition-colors"
            >
              <span className="text-stone-50 font-medium whitespace-nowrap">{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee Row 2 - Reverse Direction */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-stone-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-stone-950 to-transparent z-10" />
        <motion.div
          animate={{ x: [-1920, 0] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" },
          }}
          className="flex gap-6"
        >
          {[...technologies2, ...technologies2, ...technologies2].map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="flex-shrink-0 px-8 py-4 rounded-full border border-stone-700 bg-stone-900/50 backdrop-blur-sm hover:border-teal-500/50 transition-colors"
            >
              <span className="text-stone-50 font-medium whitespace-nowrap">{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
