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
      // Mantemos min-h-screen e pt-20 para compensar o header
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-[#0c1d3b]/5 to-[#0c1d3b]/10 pt-20 relative overflow-hidden"
    >
      {/* Ajuste de espaçamento vertical: py-6 (antes era py-2 muito pequeno, ou py-12 muito grande) */}
      <div className="container mx-auto px-6 md:px-10 lg:px-12 py-6">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Lado Esquerdo: Conteúdo de Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              // Aumentei o tamanho da fonte para restaurar o impacto
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight text-[#0c1d3b]"
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
              [Sua copy chamativa vai aqui] Transformamos desafios em
              oportunidades e levamos sua marca ao próximo nível com estratégias validadas.
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
                  <span className="text-[#0c1d3b] font-medium text-base">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Lado Direito: Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#0c1d3b]/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Aumentei padding para p-6 ou p-8 para dar "corpo" ao card novamente */}
            <div className="relative p-6 lg:p-7 rounded-3xl shadow-2xl backdrop-blur-2xl border border-white/40 bg-gradient-to-br from-gray-100/95 via-gray-50/90 to-gray-200/60 max-w-md mx-auto">
              
              <div className="text-center mb-5">
                <h3 className="text-2xl font-bold text-[#0c1d3b]">Vamos conversar?</h3>
                <p className="text-[#0c1d3b]/70 text-sm mt-1">
                  Receba sua análise gratuita.
                </p>
              </div>

              <ConfigProvider
                theme={{
                  algorithm: theme.defaultAlgorithm, 
                  token: {
                    colorBgContainer: "rgba(255, 255, 255, 0.7)",
                    colorBorder: "rgba(12, 29, 59, 0.1)",
                    colorText: "#0c1d3b",
                    colorTextPlaceholder: "rgba(12, 29, 59, 0.4)",
                    colorPrimary: "#10b981",
                    borderRadius: 8,
                    controlHeight: 40, // Aumentei de 32 para 40 (Tamanho médio confortável)
                    fontSize: 14,      // Fonte normal
                  },
                  components: {
                    Form: {
                      itemMarginBottom: 10, // Aumentei espaçamento entre campos
                      verticalLabelPadding: "0 0 4px", 
                      labelFontSize: 13,
                    },
                    Input: {
                      activeBorderColor: "#10b981",
                      hoverBorderColor: "#10b981",
                    },
                    Select: {
                      selectorBg: "rgba(255, 255, 255, 0.7)",
                    },
                    Button: {
                      colorPrimary: "#0c1d3b",
                      algorithm: true,
                      fontWeight: 700,
                      controlHeight: 44, // Botão mais robusto
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
                  // Removi size="small" para ele usar o tamanho normal configurado no token
                >
                  <Form.Item
                    name="name"
                    label={<span className="text-[#0c1d3b] font-semibold">Nome</span>}
                    rules={[{ required: true, message: "Obrigatório" }]}
                  >
                    <Input placeholder="Seu nome" />
                  </Form.Item>

                  <div className="grid grid-cols-2 gap-3">
                    <Form.Item
                      name="email"
                      label={<span className="text-[#0c1d3b] font-semibold">E-mail</span>}
                      rules={[{ required: true, type: "email", message: "Inválido" }]}
                    >
                      <Input placeholder="seu@email.com" />
                    </Form.Item>

                    <Form.Item
                      name="phone"
                      label={<span className="text-[#0c1d3b] font-semibold">WhatsApp</span>}
                      rules={[{ required: true, message: "Obrigatório" }]}
                    >
                      <Input placeholder="(00) 99..." />
                    </Form.Item>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Form.Item
                      name="schedule"
                      label={<span className="text-[#0c1d3b] font-semibold">Horário</span>}
                      rules={[{ required: true, message: "Selecione" }]}
                    >
                      <Select placeholder="Escolha" options={scheduleOptions} />
                    </Form.Item>

                    <Form.Item
                      name="investment"
                      label={<span className="text-[#0c1d3b] font-semibold">Investimento</span>}
                      rules={[{ required: true, message: "Selecione" }]}
                    >
                      <Select placeholder="Valor" options={investmentOptions} />
                    </Form.Item>
                  </div>

                  <Form.Item
                    name="teamSize"
                    label={<span className="text-[#0c1d3b] font-semibold">Equipe</span>}
                    rules={[{ required: true, message: "Selecione" }]}
                  >
                    <Select placeholder="Tamanho do time" options={teamSizeOptions} />
                  </Form.Item>

                  <Form.Item
                    name="message"
                    label={<span className="text-[#0c1d3b] font-semibold">Objetivo</span>}
                    style={{ marginBottom: 12 }}
                  >
                    {/* Voltei para rows={2} para ficar mais visível */}
                    <Input.TextArea
                      rows={2}
                      placeholder="Breve descrição..."
                      className="resize-none"
                    />
                  </Form.Item>

                  <Form.Item className="mb-0 mt-2">
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      className="uppercase tracking-wide border-none bg-emerald-600 hover:!bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 transition-all"
                    >
                      Impulsionar
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