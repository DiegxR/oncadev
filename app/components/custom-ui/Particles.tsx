"use client"

import { motion } from "framer-motion"
import { useParticles } from "../../hooks/useParticles"

interface ParticlesProps {
  density?: number
  colorClass?: string
  sizeClass?: string
  opacityClass?: string
}

export function Particles({
  density = 5,
  colorClass = "bg-emerald-500/60",
  sizeClass = "w-1 h-1",
  opacityClass = "opacity-80",
}: ParticlesProps) {
  const particlePositions = useParticles({ density })

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {particlePositions.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${sizeClass} rounded-full ${colorClass} ${opacityClass}`}
          initial={{ x: particle.x, y: particle.y }}
          animate={{
            y: [null, particle.y - 300],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "loop",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}
