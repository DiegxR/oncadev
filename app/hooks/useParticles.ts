"use client"

import { useEffect, useMemo, useState } from "react"

const MOBILE_BREAKPOINT = 768
const DESKTOP_PARTICLE_COUNT = 50
const MOBILE_PARTICLE_COUNT = 20
const PARTICLE_SEEDS = [
  0.12, 0.34, 0.56, 0.78, 0.91, 0.15, 0.47, 0.63, 0.89, 0.22,
  0.44, 0.66, 0.88, 0.11, 0.33, 0.55, 0.77, 0.99, 0.23, 0.45,
]

function seededRandom(seed: number) {
  return Math.abs(Math.sin(seed) * 10000) % 1
}

function randomFromSeed(seed: number, min: number, max: number) {
  return min + seededRandom(seed) * (max - min)
}

export interface Particle {
  id: number
  x: number
  y: number
  duration: number
  delay: number
}

export interface UseParticlesOptions {
  density?: number
}

function getParticleCount(width: number, density = 1) {
  const baseCount = width < MOBILE_BREAKPOINT ? MOBILE_PARTICLE_COUNT : DESKTOP_PARTICLE_COUNT
  return Math.max(0, Math.round(baseCount * density))
}

export function useParticles({ density = 1 }: UseParticlesOptions = {}) {
  const [viewport, setViewport] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight })
    }

    updateViewport()
    window.addEventListener("resize", updateViewport)
    return () => window.removeEventListener("resize", updateViewport)
  }, [])

  return useMemo<Particle[]>(() => {
    if (!viewport.width || !viewport.height) return []

    const particleCount = getParticleCount(viewport.width, density)

    return Array.from({ length: particleCount }, (_, i) => {
      const seed = PARTICLE_SEEDS[i % PARTICLE_SEEDS.length]
      const base = i + density * 100
      return {
        id: i,
        x: randomFromSeed(base + 1, 0, viewport.width),
        y: randomFromSeed(base + 2, 0, viewport.height),
        duration: 2 + seed * 3 + randomFromSeed(base + 3, 0, 1),
        delay: seed * 2 + randomFromSeed(base + 4, 0, 1),
      }
    })
  }, [viewport, density])
}
