"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const words = ["Escalables", "Eficientes", "Adaptables", "Robustas"];
const heroBgImage = "/oncabg.png";

export function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoverDevice, setIsHoverDevice] = useState(true); // Default: assume desktop
  const containerRef = useRef<HTMLDivElement>(null);

  // Estado para el scroll (solo usado en mobile)
  const [scrollY, setScrollY] = useState(0);

  // Detectar si el dispositivo soporta hover (no es táctil)
  // Solo ejecutar en cliente para evitar hydration mismatch
  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover)");
    // Solo actualizar si es diferente al default (evita render innecesario)
    if (!mediaQuery.matches) {
      setIsHoverDevice(false);
    }
  }, []);

  // Trackear scroll solo en dispositivos sin hover (mobile)
  useEffect(() => {
    if (isHoverDevice) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHoverDevice]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Solo escuchar mouse en dispositivos con hover
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
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-stone-950"
    >
      {/* Imagen de fondo optimizada con Next.js Image */}
      <div className="absolute  inset-0 z-0">
        <Image
          src={heroBgImage}
          alt=""
          fill
          priority
          className="object-cover  animate-pulse  [animation-duration:5s]"
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0" />
      </div>

      {/* Radial gradient - desktop: absolute sigue mouse | mobile: fixed sigue viewport */}
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

      

      <div className="relative z-10 mt-10 flex min-h-screen w-screen flex-col items-center px-6 py-20 md:px-8 lg:px-12">
        <div className="flex flex-col-reverse max-w-[1500px] gap-2 lg:gap-0 lg:flex-row items-center justify-between w-full h-full mt-[5%] md:pr-0">
          <div className="flex flex-col gap-10">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex w-fit h-12 items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-6 py-2 text-xl font-medium text-emerald-400"
            >
              Portafolio de Servicios
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="space-y-3"
            >
              <h1 className="text-5xl font-bold tracking-tight text-stone-50 sm:text-6xl lg:text-8xl">
                Creando
              </h1>
              <h1 className="text-5xl flex flex-col font-bold tracking-tight text-stone-50 sm:text-6xl lg:text-8xl">
                <span>Soluciones</span>
                <span className="relative inline-block lg:text-7xl font-bold mt-4 min-w-[280px] md:min-w-[380px]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentWord}
                      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                      transition={{ duration: 0.8 }}
                      className=" bg-gradient-to-r ml-[-38px]  rounded-full backdrop-blur-2xl px-10 from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent"
                    >
                      {words[currentWord]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-2xl lg:text-4xl leading-8 text-stone-400"
            >
              Soluciones tecnológicas que van desde lo simple y eficaz hasta lo
              complejo y robusto, con acompañamiento y soporte continuo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <a href="#contact">
                <button className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-base font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg">
                  Empieza tu proyecto
                  <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </a>
              <a href="#projects">
                <button className="inline-flex items-center justify-center rounded-full border border-stone-600 bg-white/5 px-8 py-4 text-base font-medium text-stone-100 transition hover:bg-stone-800/70">
                  Mira mis proyectos
                </button>
              </a>
            </motion.div>
          </div>

          <div className="backdrop-blur-2xl mb-10 lg:mb-0 lg:mr-20 animate-pulse [animation-duration:5s] rounded-2xl mx-auto w-fit flex   lg:w-fit pb-8 lg:px-10 items-center lg:text-8xl flex-col text-5xl  font-bold justify-center ">
            <Image
              src="/oncalogo.png"
              alt="OncaLogo"
              width={200}
              height={200}
              className="mb-[-70px] mr-[-12px]"
            />
            <span className="bg-gradient-to-r  from-emerald-700 to-teal-900 bg-clip-text text-transparent">
              Onca
            </span>
            <span className="text-white lg:mt-[-40px]">
              <span className="lg:mt-[-100px]">D</span>
              ev
            </span>
          </div>
        </div>
      </div>
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-950 to-transparent" />
    </section>
  );
}
