"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Cloud, Database, Brain } from "lucide-react";
import VantaBackground from "./custom-ui/vanta-background-net";

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description:
      "Interfaces y plataformas web con foco en adaptación, análisis de problemas y entregas robustas.",
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description:
      "Aplicaciones nativas y multiplataforma para iOS y Android con mantenimiento y seguimiento continuo.",
  },
  {
    icon: Cloud,
    title: "Arquitectura en la Nube",
    description:
      "Infraestructura escalable y mantenible en AWS, Azure o alternativas más económicas.",
  },
  {
    icon: Database,
    title: "Sistemas Backend",
    description:
      "APIs y microservicios con calidad, resiliencia y documentación clara para equipos y clientes.",
  },
  {
    icon: Brain,
    title: "Integración de IA",
    description:
      "Desde funcionalidades de IA sencillas hasta modelos de machine learning",
  },
];
export function Services() {
  return (
    <section
      id="services"
      className="py-32 z-10 bg-stone-950 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
            Enfoque y experiencia
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-50 mt-4">
            Servicios y acompañamiento
          </h2>
          <p className="text-stone-400 mt-4 max-w-2xl mx-auto">
            Trabajo con empresas y clientes directos, brindando seguimiento,
            adaptación a equipos y soluciones sólidas para cada desafío.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-stone-900/50 border border-stone-800 backdrop-blur-sm overflow-hidden hover:border-emerald-500/50 transition-all duration-500">
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Border beam animation */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-pulse" />
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent animate-pulse" />
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-600/20 to-teal-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-stone-50 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-stone-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
