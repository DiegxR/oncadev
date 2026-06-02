"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Cloud, Database, Brain } from "lucide-react";

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoverDevice, setIsHoverDevice] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover)");
    if (!mediaQuery.matches) {
      setIsHoverDevice(false);
    }
  }, []);

  useEffect(() => {
    if (isHoverDevice) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHoverDevice]);

  useEffect(() => {
    if (!isHoverDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHoverDevice]);

  return (
    <section
      id="services"
      ref={containerRef}
      className="py-32 z-10 bg-transparent relative overflow-hidden"
    >
      {isHoverDevice ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 blur-2xl"
          style={{
            background: `radial-gradient(circle 50rem at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, transparent 32%, rgba(15,23,42,0.95) 38%, black 100%)`,
          }}
        />
      ) : (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 blur-2xl"
          style={{
            background: `radial-gradient(circle 50rem at 50% calc(35% + ${scrollY}px), transparent 0%, transparent 28%, rgba(15,23,42,0.95) 38%, black 100%)`,
          }}
        />
      )}

      {/* Glow animado - sigue mouse en desktop, animación automática en mobile */}
      {isHoverDevice ? (
        <motion.div
          className="pointer-events-none absolute w-96 h-96 rounded-full opacity-30 blur-3xl"
          animate={{ x: mousePosition.x - 192, y: mousePosition.y - 192 }}
          transition={{ type: "spring", stiffness: 120, damping: 24 }}
        />
      ) : (
        <motion.div
          className="pointer-events-none absolute w-96 h-96 rounded-full opacity-30 blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -30, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-[#0C0A08]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
