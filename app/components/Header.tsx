"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-12 py-4 flex items-center justify-between">
        <motion.h1
          className="text-2xl font-bold text-[#0c1d3b]"
          whileHover={{ scale: 1.05 }}
        >
          Marketing <span className="text-[#0c1d3b]/70">Rescue</span>
        </motion.h1>

        <nav className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-[#0c1d3b] hover:text-[#0c1d3b]/80 transition-colors"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className="text-[#0c1d3b] hover:text-[#0c1d3b]/80 transition-colors"
          >
            Nosso Trabalho
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-[#0c1d3b] hover:text-[#0c1d3b]/80 transition-colors"
          >
            Quem Somos
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-[#0c1d3b] text-white px-6 py-2 rounded-full hover:bg-[#0a1731] transition-colors"
          >
            Contato
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-black">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </motion.header>
  );
}
