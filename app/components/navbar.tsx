"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Servicios", href: "#services" },
  { name: "Tecnologías", href: "#tech" },
  { name: "Proceso", href: "#process" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 max-w-screen  right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-stone-950/90 backdrop-blur-xl border-b border-stone-800/80"
          : "bg-black blur-3xl"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className=" backdrop-blur-2xl pr-10 rounded-full w-fit flex items-center text-3xl font-bold top-22 left-0 right-0 flex justify-center ">
          <Image
            src="/oncalogo.png"
            alt="OncaLogo"
            width={60}
            height={60}
            priority
            quality={85}
          />
          <span className="bg-gradient-to-r opacity-90 from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Onca
          </span>
          <span className="text-white opacity-90">Dev</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-stone-400 hover:text-stone-50 transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <button className="px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full text-stone-50 text-sm font-medium hover:opacity-90 transition-opacity">
            Contactar
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-stone-50"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-stone-950/95 backdrop-blur-xl border-b border-stone-800/80"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-400 hover:text-stone-50 transition-colors py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact">
            <button className="px-5 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full text-stone-50 font-medium">
              Contactar
            </button>
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
