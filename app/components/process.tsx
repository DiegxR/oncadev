"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Search,
  Lightbulb,
  PenTool,
  Code2,
  TestTube,
  Rocket,
} from "lucide-react";
import { Particles } from "./custom-ui/Particles";

const steps = [
  {
    icon: Search,
    title: "Descubrimiento",
    description:
      "Analizo objetivos, problemas y contexto para proponer un plan claro como freelance o miembro del equipo.",
  },
  {
    icon: Lightbulb,
    title: "Estrategia",
    description:
      "Defino la ruta con hitos, prioridades y criterios de éxito para implementar soluciones robustas.",
  },
  {
    icon: PenTool,
    title: "Diseño",
    description:
      "Diseño experiencias alineadas a tu marca y necesidades reales, pensando en mantenimiento y escalabilidad.",
  },
  {
    icon: Code2,
    title: "Desarrollo",
    description:
      "Desarrollo con código limpio, documentación y entregas robustas que se integran fácilmente.",
  },
  {
    icon: TestTube,
    title: "Pruebas",
    description:
      "Valido cada entrega con pruebas reales y feedback para asegurar calidad y evitar regresiones.",
  },
  {
    icon: Rocket,
    title: "Lanzamiento",
    description:
      "Despliegue y seguimiento continuo para que el producto funcione en producción desde el primer día.",
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      className="py-32 relative overflow-hidden bg-linear-to-b from-stone-950 via-stone-950/95 to-stone-900"
      ref={containerRef}
    >
      <Particles />
      <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-stone-950 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-stone-900/80 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
            Cómo trabajo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-50 mt-4">
            Mi proceso profesional
          </h2>
          <p className="text-stone-400 mt-4 max-w-2xl mx-auto">
            Acompaño proyectos como freelance o parte de un equipo, con análisis
            de problemas, adaptabilidad y entregas robustas.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-stone-800">
            <motion.div
              className="absolute top-0 left-0 w-full bg-linear-to-b from-emerald-500 via-teal-500 to-emerald-500"
              style={{ height: lineHeight }}
            />
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-300/90 shadow-[0_0_30px_rgba(52,211,153,0.95)]"
              style={{ top: lineHeight }}
            />
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-emerald-400/10 blur-2xl"
              style={{ top: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block p-6 rounded-2xl bg-stone-900/50 border border-stone-800 backdrop-blur-sm max-w-md ${
                      index % 2 === 0 ? "ml-auto" : "mr-auto"
                    }`}
                  >
                    <h3 className="text-xl font-semibold text-stone-50 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-stone-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center icon */}
                <div className="relative z-10 shrink-0">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-emerald-600 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                    <step.icon className="w-7 h-7 text-stone-50" />
                  </div>
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
