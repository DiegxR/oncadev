"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram } from "lucide-react"

const links = {
  company: ["Nosotros", "Carreras", "Blog", "Prensa"],
  services: ["Desarrollo Web", "Apps Móviles", "Cloud", "Soluciones IA"],
  resources: ["Documentación", "Casos de éxito", "Newsletter", "FAQ"],
}

const socials = [
  { icon: Github, href: "https://github.com/DiegxR" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/diego-rojas-266963255/" },
  { icon: Instagram, href: "https://www.instagram.com/diegorojxs/" },
]

export function Footer() {
  return (
    <footer className="py-16 bg-stone-950 border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="text-2xl font-bold text-stone-50 inline-block mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Onca
              </span>
              <span className="text-stone-400">Devs</span>
            </a>
            <p className="text-stone-400 mb-6 max-w-sm leading-relaxed">
              Acompaño proyectos como freelance o dentro de un equipo, con adaptabilidad,
              análisis sólido y entregas tecnológicas robustas.
            </p>
            <div className="flex gap-4">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-stone-800/50 border border-stone-700 flex items-center justify-center hover:border-emerald-500/50 transition-colors"
                >
                  <social.icon className="w-4 h-4 text-stone-400" />
                </motion.a>
              ))}
            </div>
          </div>

     
        </div>

        <div className="pt-8 border-t border-stone-800/80 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm">
            © 2026 Onca Dev. Todos los derechos reservados.
          </p>

        </div>
      </div>
    </footer>
  )
}
