"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-[#0c1d3b]/5 py-24 overflow-x-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6 text-[#0c1d3b]" data-aos="fade-right">Quem Somos</h2>
            <p className="text-xl text-[#0c1d3b] mb-6" data-aos="fade-right" data-aos-delay="100">
              [Sua copy aqui] Somos uma equipe apaixonada por marketing digital
              e resultados extraordinários.
            </p>
            <p className="text-lg text-[#0c1d3b]/80 mb-6" data-aos="fade-right" data-aos-delay="200">
              [Sua copy aqui] Com anos de experiência no mercado, ajudamos
              empresas a crescerem e alcançarem seus objetivos através de
              estratégias inovadoras e eficientes.
            </p>
            <motion.div
              className="grid grid-cols-3 gap-8 mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-center" data-aos="zoom-in" data-aos-delay="300">
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-[#0c1d3b]">Projetos</div>
              </div>
              <div className="text-center" data-aos="zoom-in" data-aos-delay="400">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-[#0c1d3b]">Clientes</div>
              </div>
              <div className="text-center" data-aos="zoom-in" data-aos-delay="500">
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-[#0c1d3b]">Anos</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-[#0c1d3b] text-white p-12 rounded-3xl shadow-2xl" data-aos="flip-left">
              <h3 className="text-3xl font-bold mb-6">Nossa Missão</h3>
              <p className="text-white/80 mb-8">
                [Sua copy aqui] Transformar desafios de marketing em histórias
                de sucesso, ajudando nossos clientes a alcançar resultados
                extraordinários.
              </p>
              <h3 className="text-3xl font-bold mb-6">Nossa Visão</h3>
              <p className="text-white/80">
                [Sua copy aqui] Ser referência em marketing digital, reconhecida
                pela excelência e inovação em cada projeto.
              </p>
            </div>
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#1a3366] to-[#0c1d3b] rounded-full opacity-20 blur-3xl"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#1a3366] to-[#0c1d3b] rounded-full opacity-20 blur-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
