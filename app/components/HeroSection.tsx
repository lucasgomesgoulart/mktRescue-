"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Input, Select, Button, ConfigProvider } from "antd";

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Configuração de tema para ANTD
  const inputStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    border: "0.5px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "1rem",
    color: "white",
    backdropFilter: "blur(12px)",
    boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "12px 16px",
  };

  const labelClasses = "text-sm font-bold text-white mb-4 block tracking-wide";

  const antdTheme = {
    token: {
      colorTextPlaceholder: "rgba(12, 29, 59, 0.4)",
      colorBgContainer: "transparent",
      colorBorder: "rgba(12, 29, 59, 0.1)",
      borderRadius: 8,
      controlHeight: 48,
      fontSize: 16,
      colorText: "#0c1d3b",
    },
    components: {
      Input: {
        colorBgContainer: "transparent",
        colorBorder: "rgba(12, 29, 59, 0.2)",
        colorText: "#0c1d3b",
        borderRadius: 8,
        controlHeight: 48,
      },
      Select: {
        colorBgContainer: "rgba(12, 29, 59, 0.03)",
        colorBorder: "rgba(12, 29, 59, 0.1)",
        colorText: "#0c1d3b",
        colorTextPlaceholder: "rgba(12, 29, 59, 0.4)",
        borderRadius: 8,
        controlHeight: 48,
      },
      Button: {
        colorBgContainer: "#0c1d3b",
        colorBorder: "transparent",
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-[#0c1d3b]/5 to-[#0c1d3b]/10 pt-20"
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-12 py-24">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-[#0c1d3b]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Resgate o{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0c1d3b] to-emerald-600">
                Potencial
              </span>{" "}
              do Seu Marketing
            </motion.h2>
            <motion.p
              className="text-xl text-[#0c1d3b]/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              [Sua copy chamativa vai aqui] Transformamos desafios em
              oportunidades e levamos sua marca ao próximo nível com estratégias validadas.
            </motion.p>
            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                <span className="text-[#0c1d3b] font-medium">Estratégia</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                <span className="text-[#0c1d3b] font-medium">Resultado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                <span className="text-[#0c1d3b] font-medium">Crescimento</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Form Container with Apple-style Design */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#0c1d3b]">Vamos conversar?</h3>
                <p className="text-[#0c1d3b]/60 mt-2 text-sm">
                  Preencha para receber uma análise gratuita.
                </p>
              </div>

              <ConfigProvider theme={antdTheme}>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  {/* Nome */}
                  <div className="relative">
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nome completo"
                      size="large"
                      className="!text-[#0c1d3b] !text-base !bg-transparent !border-0 !border-b !border-[#0c1d3b]/20 !rounded-none !p-0 !py-3 !placeholder-[#0c1d3b]/40 focus:!border-[#0c1d3b]/50 focus:!shadow-none font-semibold"
                      style={{
                        backgroundColor: "transparent",
                        borderBottom: "1px solid rgba(12, 29, 59, 0.2)",
                        padding: "12px 0",
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="E-mail"
                      size="large"
                      className="!text-[#0c1d3b] !text-base !bg-transparent !border-0 !border-b !border-[#0c1d3b]/20 !rounded-none !p-0 !py-3 !placeholder-[#0c1d3b]/40 focus:!border-[#0c1d3b]/50 focus:!shadow-none font-semibold"
                      style={{
                        backgroundColor: "transparent",
                        borderBottom: "1px solid rgba(12, 29, 59, 0.2)",
                        padding: "12px 0",
                      }}
                    />
                  </div>

                  {/* WhatsApp */}
                  <div className="relative">
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="WhatsApp"
                      size="large"
                      className="!text-[#0c1d3b] !text-base !bg-transparent !border-0 !border-b !border-[#0c1d3b]/20 !rounded-none !p-0 !py-3 !placeholder-[#0c1d3b]/40 focus:!border-[#0c1d3b]/50 focus:!shadow-none font-semibold"
                      style={{
                        backgroundColor: "transparent",
                        borderBottom: "1px solid rgba(12, 29, 59, 0.2)",
                        padding: "12px 0",
                      }}
                    />
                  </div>

                  {/* Horário */}
                  <div className="relative pt-2">
                    {formData.schedule && (
                      <label className="absolute -top-0 left-0 text-xs text-[#0c1d3b]/60 font-medium">
                        Melhor horário
                      </label>
                    )}
                    <Select
                      value={formData.schedule || undefined}
                      onChange={(value) =>
                        setFormData({ ...formData, schedule: value })
                      }
                      placeholder="Melhor horário"
                      size="middle"
                      className="!text-[#0c1d3b] apple-select !bg-transparent !border-0 !border-b !border-[#0c1d3b]/20 !rounded-none font-semibold"
                      style={{ width: "100%", backgroundColor: "transparent", borderBottom: "1px solid rgba(12, 29, 59, 0.2)", borderRadius: 0, padding: "12px 0" }}
                      options={scheduleOptions.map((option) => ({
                        label: option,
                        value: option,
                      }))}
                    />
                  </div>

                  {/* Investimento */}
                  <div className="relative pt-2">
                    {formData.investment && (
                      <label className="absolute -top-0 left-0 text-xs text-[#0c1d3b]/60 font-medium">
                        Investimento mensal
                      </label>
                    )}
                    <Select
                      value={formData.investment || undefined}
                      onChange={(value) =>
                        setFormData({ ...formData, investment: value })
                      }
                      placeholder="Investimento mensal"
                      size="middle"
                      className="!text-[#0c1d3b] apple-select !bg-transparent !border-0 !border-b !border-[#0c1d3b]/20 !rounded-none font-semibold"
                      style={{ width: "100%", backgroundColor: "transparent", borderBottom: "1px solid rgba(12, 29, 59, 0.2)", borderRadius: 0, padding: "12px 0" }}
                      options={investmentOptions.map((option) => ({
                        label: option,
                        value: option,
                      }))}
                    />
                  </div>

                  {/* Team Size */}
                  <div className="relative pt-2">
                    {formData.teamSize && (
                      <label className="absolute -top-0 left-0 text-xs text-[#0c1d3b]/60 font-medium">
                        Tamanho do time
                      </label>
                    )}
                    <Select
                      value={formData.teamSize || undefined}
                      onChange={(value) =>
                        setFormData({ ...formData, teamSize: value })
                      }
                      placeholder="Tamanho do time"
                      size="middle"
                      className="!text-[#0c1d3b] apple-select !bg-transparent !border-0 !border-b !border-[#0c1d3b]/20 !rounded-none font-semibold"
                      style={{marginBottom: "15px", width: "100%", backgroundColor: "transparent", borderBottom: "1px solid rgba(12, 29, 59, 0.2)", borderRadius: 0, padding: "12px 0" }}
                      options={teamSizeOptions.map((option) => ({
                        label: option,
                        value: option,
                      }))}
                    />
                  </div>

                  {/* Message */}
                  <div className="relative mt-8 mb-8">
                    <Input.TextArea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={2}
                      placeholder="Conte sobre sua empresa"
                      className="!text-[#0c1d3b] !text-base !bg-[#0c1d3b]/5 !border !border-[#0c1d3b]/10 !rounded-lg !placeholder-[#0c1d3b]/40 focus:!border-[#0c1d3b]/30 focus:!shadow-none"
                      style={{
                        backgroundColor: "rgba(12, 29, 59, 0.05)",
                        borderRadius: "8px",
                        padding: "12px",
                        marginBottom: "15px"
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className=""
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      className="w-full !bg-[#0c1d3b] !hover:bg-[#0c1d3b]/90 !border-0 !text-white !font-semibold !text-base !rounded-lg !h-auto !py-3"
                    >
                      Começar análise
                    </Button>
                  </motion.div>
                </form>
              </ConfigProvider>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}