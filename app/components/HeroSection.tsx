"use client";

import { motion } from "framer-motion";
import { Form, Input, Select, Button, ConfigProvider, theme } from "antd";

export default function HeroSection() {
  const [form] = Form.useForm();

  const scheduleOptions = [
    { value: "9h", label: "09:00" },
    { value: "10h", label: "10:00" },
    { value: "11h", label: "11:00" },
    { value: "14h", label: "14:00" },
    { value: "15h", label: "15:00" },
    { value: "16h", label: "16:00" },
    { value: "brief", label: "O mais rápido possível" },
  ];

  const investmentOptions = [
    { value: "low", label: "Até R$ 3.000" },
    { value: "medium", label: "R$ 3.000 a R$ 7.000" },
    { value: "high", label: "Acima de R$ 7.000" },
  ];

  const teamSizeOptions = [
    { value: "solo", label: "Trabalho sozinho" },
    { value: "small", label: "1 - 5 pessoas" },
    { value: "medium", label: "6 - 15 pessoas" },
    { value: "large", label: "15+ pessoas" },
  ];

  const onFinish = (values: any) => {
    console.log("Dados do formulário:", values);
  };

  return (
    <section
      id="hero"
      className="flex items-center justify-center min-h-[90vh] bg-slate-50 pt-16 relative overflow-hidden"
    >
      {/* Background Geral sutil para a página não ficar totalmente branca */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-[#0c1d3b]/5 to-[#0c1d3b]/10 -z-10" />

      <div className="container mx-auto px-6 md:px-10 lg:px-12 py-12">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Lado Esquerdo: Conteúdo de Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#0c1d3b]"
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
              className="text-lg text-[#0c1d3b]/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Transformamos desafios em oportunidades e levamos sua marca ao
              próximo nível com estratégias validadas.
            </motion.p>
            
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {["Estratégia", "Resultado", "Crescimento"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                  <span className="text-[#0c1d3b] font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Lado Direito: Formulário Glass Gradient */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center" // Centraliza o form sobre os blobs
          >
            {/* --- BLOBS DE CORES (DEGRADÊ DE FUNDO) --- */}
            {/* Bola Verde Esmeralda */}
            <div className="absolute top-0 right-10 w-64 h-64 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
            {/* Bola Azul Profundo */}
            <div className="absolute -bottom-10 left-10 w-72 h-72 bg-[#0c1d3b] rounded-full mix-blend-multiply filter blur-[80px] opacity-40"></div>
            {/* Bola Ciano/Clara */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

            {/* --- CONTAINER DO FORMULÁRIO (EFEITO VIDRO) --- */}
            <div className="relative w-full p-6 lg:p-8 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/40 bg-white/20">
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#0c1d3b]">Vamos conversar?</h3>
                <p className="text-[#0c1d3b]/80 text-sm mt-1 font-medium">
                  Receba sua análise gratuita.
                </p>
              </div>

              {/* Tema Configurado para Inputs Semitransparentes */}
              <ConfigProvider
                theme={{
                  algorithm: theme.defaultAlgorithm,
                  token: {
                    // Fundo dos inputs mais branco para legibilidade sobre o vidro
                    colorBgContainer: "rgba(255, 255, 255, 0.5)", 
                    colorBorder: "transparent", // Remove borda padrão para look clean
                    colorText: "#0c1d3b",
                    colorTextPlaceholder: "rgba(12, 29, 59, 0.5)",
                    colorPrimary: "#10b981", // Emerald
                    borderRadius: 12, // Inputs mais arredondados
                    controlHeight: 45,
                    fontSize: 14,
                  },
                  components: {
                    Input: {
                      activeBg: "rgba(255,255,255, 0.8)", // Fica mais branco ao clicar
                      hoverBg: "rgba(255,255,255, 0.6)",
                    },
                    Select: {
                      selectorBg: "rgba(255, 255, 255, 0.5)",
                    },
                    Button: {
                      colorPrimary: "#0c1d3b",
                      fontWeight: 700,
                    }
                  },
                }}
              >
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  requiredMark={false}
                  className="w-full"
                >
                  <Form.Item
                    name="name"
                    label={<span className="text-[#0c1d3b] font-bold text-xs uppercase tracking-wider ml-1">Nome</span>}
                    rules={[{ required: true, message: "Obrigatório" }]}
                  >
                    <Input placeholder="Seu nome" className="backdrop-blur-sm" />
                  </Form.Item>

                  <div className="grid grid-cols-2 gap-3">
                    <Form.Item
                      name="email"
                      label={<span className="text-[#0c1d3b] font-bold text-xs uppercase tracking-wider ml-1">E-mail</span>}
                      rules={[{ required: true, type: "email", message: "Inválido" }]}
                    >
                      <Input placeholder="seu@email.com" className="backdrop-blur-sm" />
                    </Form.Item>

                    <Form.Item
                      name="phone"
                      label={<span className="text-[#0c1d3b] font-bold text-xs uppercase tracking-wider ml-1">WhatsApp</span>}
                      rules={[{ required: true, message: "Obrigatório" }]}
                    >
                      <Input placeholder="(00) 99999-9999" className="backdrop-blur-sm" />
                    </Form.Item>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Form.Item
                      name="schedule"
                      label={<span className="text-[#0c1d3b] font-bold text-xs uppercase tracking-wider ml-1">Horário</span>}
                      rules={[{ required: true, message: "Selecione" }]}
                    >
                      <Select placeholder="Escolha" options={scheduleOptions} popupMatchSelectWidth={false} />
                    </Form.Item>

                    <Form.Item
                      name="investment"
                      label={<span className="text-[#0c1d3b] font-bold text-xs uppercase tracking-wider ml-1">Investimento</span>}
                      rules={[{ required: true, message: "Selecione" }]}
                    >
                      <Select placeholder="Valor mensal" options={investmentOptions} popupMatchSelectWidth={false} />
                    </Form.Item>
                  </div>

                  <Form.Item
                    name="teamSize"
                    label={<span className="text-[#0c1d3b] font-bold text-xs uppercase tracking-wider ml-1">Equipe</span>}
                    rules={[{ required: true, message: "Selecione" }]}
                  >
                    <Select placeholder="Tamanho do time" options={teamSizeOptions} />
                  </Form.Item>

                  <Form.Item
                    name="message"
                    label={<span className="text-[#0c1d3b] font-bold text-xs uppercase tracking-wider ml-1">Objetivo</span>}
                    style={{ marginBottom: 20 }}
                  >
                    <Input.TextArea
                      rows={2}
                      placeholder="Breve descrição..."
                      className="resize-none backdrop-blur-sm"
                    />
                  </Form.Item>

                  <Form.Item className="mb-0">
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      className="h-12 uppercase tracking-wide border-none bg-emerald-600 hover:!bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Impulsionar Resultados
                    </Button>
                  </Form.Item>
                </Form>
              </ConfigProvider>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}