"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Estratégia Digital",
    description:
      "[Sua copy aqui] Desenvolvemos estratégias personalizadas para o seu negócio.",
    icon: "📊",
  },
  {
    title: "Gestão de Tráfego",
    description:
      "[Sua copy aqui] Anúncios otimizados que convertem visitantes em clientes.",
    icon: "🎯",
  },
  {
    title: "Branding",
    description:
      "[Sua copy aqui] Construímos marcas memoráveis e autênticas.",
    icon: "✨",
  },
  {
    title: "Social Media",
    description:
      "[Sua copy aqui] Presença digital que engaja e gera resultados.",
    icon: "📱",
  },
];

export default function OurWorkSection() {
  return (
    <section
      id="work"
      className="min-h-screen flex items-center justify-center bg-[#0c1d3b] text-white py-24"
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">Nosso Trabalho</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            [Sua copy aqui] Especialistas em transformar desafios em
            oportunidades de crescimento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#0f274f] p-8 rounded-2xl border border-[#1c3563] hover:border-white/40 transition-all cursor-pointer"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/80">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold mb-8">Como Funciona</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-xl font-semibold mb-2">Análise</h4>
              <p className="text-white/75">
                [Sua copy] Entendemos seu negócio e objetivos
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-xl font-semibold mb-2">Estratégia</h4>
              <p className="text-white/75">
                [Sua copy] Criamos um plano personalizado
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-xl font-semibold mb-2">Resultado</h4>
              <p className="text-white/75">
                [Sua copy] Executamos e otimizamos continuamente
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
