"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import OurWorkSection from "./components/OurWorkSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(currentScroll / totalScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white text-black overflow-x-hidden">
      <Header />
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black z-50 origin-left"
        style={{ scaleX: scrollProgress }}
      />
      <main className="scroll-smooth overflow-x-hidden">
        <HeroSection />
        <OurWorkSection />
        <AboutSection />
        <Footer />
      </main>
    </div>
  );
}
