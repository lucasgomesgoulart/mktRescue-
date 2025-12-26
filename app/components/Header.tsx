"use client";

import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white/80 backdrop-blur-lg border-b border-[#0c1d3b]/10 z-50 shadow-lg shadow-[#0c1d3b]/5 transition-all duration-300">
      {/* Fundo decorativo sutil com as cores da marca (apenas 5% de opacidade) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c1d3b]/5 to-emerald-500/5 pointer-events-none"></div>
      
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 group" onClick={() => scrollToSection("hero")}>
            <img
              src="/mks-png.png"
              alt="Logo Marketing Rescue"
              className="w-48 h-48  object-contain transition-all duration-300"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-[#0c1d3b]/80 hover:text-emerald-600 font-medium transition-colors duration-200 relative group"
            >
              Início
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-[#0c1d3b]/80 hover:text-emerald-600 font-medium transition-colors duration-200 relative group"
            >
              Quem Somos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="text-[#0c1d3b]/80 hover:text-emerald-600 font-medium transition-colors duration-200 relative group"
            >
              Serviços
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[#0c1d3b]/80 hover:text-emerald-600 font-medium transition-colors duration-200 relative group"
            >
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => scrollToSection("contact")}
              // Botão com fundo Azul Escuro (marca) que fica Esmeralda no hover
              className="hidden md:block bg-[#0c1d3b] text-white px-6 py-2 rounded-full font-medium hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Começar agora
            </button>
            <button
              className="md:hidden p-2 rounded-lg text-[#0c1d3b] hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Abrir menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-[#0c1d3b]/10 shadow-lg transition-all duration-300 ${
            mobileOpen ? "block animate-slide-down" : "hidden"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left text-[#0c1d3b] hover:text-emerald-600 font-medium py-2 transition-colors duration-200"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-[#0c1d3b] hover:text-emerald-600 font-medium py-2 transition-colors duration-200"
            >
              Quem Somos
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="block w-full text-left text-[#0c1d3b] hover:text-emerald-600 font-medium py-2 transition-colors duration-200"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-[#0c1d3b] hover:text-emerald-600 font-medium py-2 transition-colors duration-200"
            >
              Contato
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-[#0c1d3b] text-white px-6 py-3 rounded-full font-medium hover:bg-emerald-600 transition-all duration-300 shadow-lg mt-4"
            >
              Começar agora
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}