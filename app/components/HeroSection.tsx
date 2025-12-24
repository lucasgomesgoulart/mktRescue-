"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    schedule: "",
    investment: "",
    teamSize: "",
    message: "",
  });

  const scheduleOptions = [
    "9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h", "O mais breve possível",
  ];

  const investmentOptions = [
    "De R$2.000 a R$3.000 (mínimo)",
    "De R$3.000 a R$7.000",
    "Acima de R$7.000",
  ];

  const teamSizeOptions = [
    "Trabalho sozinho",
    "1 a 5 funcionários",
    "6 a 15 funcionários",
    "Mais de 15 funcionários",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // EmailJS integration will go here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#0c1d3b]/10 to-[#0c1d3b]/20 pt-20"
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-12 py-24">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Resgate o{" "}
              <span className="text-[#0c1d3b]">Potencial</span> do Seu Marketing
            </motion.h2>
            <motion.p
              className="text-xl text-[#0c1d3b] mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              [Sua copy chamativa vai aqui] Transformamos desafios em
              oportunidades e levamos sua marca ao próximo nível.
            </motion.p>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#0c1d3b] rounded-full"></div>
                <span className="text-[#0c1d3b]">Estratégia</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#0c1d3b] rounded-full"></div>
                <span className="text-[#0c1d3b]">Resultado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#0c1d3b] rounded-full"></div>
                <span className="text-[#0c1d3b]">Crescimento</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#0c1d3b] to-[#0a1635] p-10 lg:p-12 rounded-[28px] shadow-2xl border border-white/12"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white">Preencha o formulário</h3>
                <p className="text-sm text-white/70 mt-2">
                  Respostas rápidas e objetivas para entendermos sua necessidade.
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-8 w-[70%] max-w-2xl mx-auto flex flex-col items-center pb-4"
            >
              <div className="grid grid-cols-1 gap-6 w-full">
                <label className="flex flex-col gap-3 text-sm font-semibold text-white">
                  <span className="text-xs font-medium text-white/70 tracking-wide">Seu nome</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border-[0.5px] border-white/40 bg-white/15 backdrop-blur-lg px-5 py-4 text-white placeholder-white/80 shadow-[0_10px_40px_rgba(12,29,59,0.25)] focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/60 transition-all"
                    placeholder="Seu nome"
                  />
                </label>

                <label className="flex flex-col gap-3 text-sm font-semibold text-white">
                  <span className="text-xs font-medium text-white/70 tracking-wide">Seu melhor e-mail</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border-[0.5px] border-white/40 bg-white/15 backdrop-blur-lg px-5 py-4 text-white placeholder-white/80 shadow-[0_10px_40px_rgba(12,29,59,0.25)] focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/60 transition-all"
                    placeholder="exemplo@empresa.com"
                  />
                </label>

                <label className="flex flex-col gap-3 text-sm font-semibold text-white">
                  <span className="text-xs font-medium text-white/70 tracking-wide">WhatsApp</span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border-[0.5px] border-white/40 bg-white/15 backdrop-blur-lg px-5 py-4 text-white placeholder-white/80 shadow-[0_10px_40px_rgba(12,29,59,0.25)] focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/60 transition-all"
                    placeholder="(DDD) + WhatsApp"
                  />
                </label>

                <label className="flex flex-col gap-3 text-sm font-semibold text-white">
                  <span className="text-xs font-medium text-white/70 tracking-wide">Melhor horário para falar</span>
                  <select
                    name="schedule"
                    value={formData.schedule}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border-[0.5px] border-white/40 bg-white/15 backdrop-blur-lg px-5 py-4 text-white placeholder-white/80 shadow-[0_10px_40px_rgba(12,29,59,0.25)] focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/60 transition-all"
                  >
                    <option value="" disabled>
                      Selecione um horário
                    </option>
                    {scheduleOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col gap-3 text-sm font-semibold text-white">
                  <span className="text-xs font-medium text-white/70 tracking-wide">Quanto investe ou pretende investir por mês em anúncios?</span>
                  <select
                    name="investment"
                    value={formData.investment}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border-[0.5px] border-white/40 bg-white/15 backdrop-blur-lg px-5 py-4 text-white placeholder-white/80 shadow-[0_10px_40px_rgba(12,29,59,0.25)] focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/60 transition-all"
                  >
                    <option value="" disabled>
                      Escolha uma faixa de investimento
                    </option>
                    {investmentOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col gap-3 text-sm font-semibold text-white">
                  <span className="text-xs font-medium text-white/70 tracking-wide">Número de funcionários</span>
                  <select
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border-[0.5px] border-white/40 bg-white/15 backdrop-blur-lg px-5 py-4 text-white placeholder-white/80 shadow-[0_10px_40px_rgba(12,29,59,0.25)] focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/60 transition-all"
                  >
                    <option value="" disabled>
                      Selecione uma opção
                    </option>
                    {teamSizeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col gap-3 text-sm font-semibold text-white">
                  <span className="text-xs font-medium text-white/70 tracking-wide">Conte detalhes do seu objetivo</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full rounded-xl border-[0.5px] border-white/40 bg-white/15 backdrop-blur-lg px-5 py-4 text-white placeholder-white/80 shadow-[0_10px_40px_rgba(12,29,59,0.25)] focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/60 transition-all resize-none"
                    placeholder="Fale sobre sua empresa e a meta que deseja atingir"
                  />
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-emerald-500 text-white py-4 rounded-xl font-semibold uppercase tracking-wide shadow-[0_15px_45px_rgba(16,185,129,0.45)] hover:bg-emerald-600 transition-colors mt-2"
              >
                Quero impulsionar meus resultados
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
