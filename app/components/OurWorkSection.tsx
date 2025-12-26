"use client";

import React from "react";
import {
    LineChartOutlined,
    AimOutlined,
    BgColorsOutlined,
    MobileOutlined,
} from "@ant-design/icons";
import {
    Card,
    Col,
    ConfigProvider,
    Row,
    Space,
    Steps,
    Typography,
} from "antd";

const { Title, Paragraph } = Typography;

const services = [
    {
        title: "Estratégia Digital",
        description:
            "Desenvolvemos planejamentos táticos e estratégicos personalizados para escalar o seu negócio de forma previsível.",
        icon: <LineChartOutlined />,
    },
    {
        title: "Gestão de Tráfego",
        description:
            "Criação e otimização de campanhas de alta performance que transformam cliques em clientes reais.",
        icon: <AimOutlined />,
    },
    {
        title: "Branding & Design",
        description:
            "Construímos identidades visuais memoráveis que transmitem autoridade e conectam com seu público.",
        icon: <BgColorsOutlined />,
    },
    {
        title: "Social Media",
        description:
            "Gestão completa de presença digital para gerar engajamento, comunidade e vendas recorrentes. lorem ipsonleomr",
        icon: <MobileOutlined />,
    },
];

const steps = [
    {
        title: "Análise",
        description:
            "Entendemos seu negócio a fundo para encontrar oportunidades reais de crescimento.",
    },
    {
        title: "Estratégia",
        description:
            "Criamos uma estratégia clara e personalizada com foco total em retorno sobre investimento.",
    },
    {
        title: "Execução",
        description:
            "Colocamos o plano em prática, ajustando e otimizando para maximizar resultados.",
    },

];

export default function OurWorkSection() {
    return (
        <section
            id="work"
            className="w-full min-h-screen bg-[#050b14] text-white relative flex flex-col items-center justify-center overflow-x-hidden"
        >
            <ConfigProvider
                theme={{
                    token: {
                        colorText: "#ffffff",
                        colorTextSecondary: "rgba(255,255,255,0.7)",
                        colorBgContainer: "rgba(255,255,255,0.04)",
                        colorBorder: "rgba(255,255,255,0.12)",
                        borderRadius: 16,
                    },
                    components: {
                        Card: {
                            colorBgContainer: "rgba(255,255,255,0.04)",
                            colorBorderSecondary: "rgba(255,255,255,0.12)",
                            boxShadow:
                                "0 18px 40px -20px rgba(0,0,0,0.55), 0 8px 24px -18px rgba(0,0,0,0.4)",
                        },
                        Steps: {
                            colorTextDescription: "rgba(255,255,255,0.75)",
                            colorText: "#ffffff",
                            colorPrimary: "#22c55e",
                            colorPrimaryHover: "#34d399",
                        },
                    },
                }}
            >
                <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-20 flex flex-col items-center">
                    <Space direction="vertical" size={40}>
                        {/* Steps Section */}
                        <div style={{ textAlign: "center" }} data-aos="fade-up">
                            <Title level={2} style={{ color: "#fff", marginBottom: 8 }}>
                                Como Funciona
                            </Title>
                            <Paragraph
                                style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", marginBottom: 32 }}
                            >
                                Nosso processo simplificado para o seu sucesso
                            </Paragraph>
                            <div data-aos="fade-up" data-aos-delay="200">
                                <Steps
                                    current={steps.length}
                                    direction="horizontal"
                                    responsive
                                    size="default"
                                    items={steps.map((step) => ({
                                        title: step.title,
                                        description: step.description,
                                    }))}
                                />
                            </div>
                        </div>

                        {/* Services Section */}
                        <div style={{ textAlign: "center" }} data-aos="fade-up">
                            <Title level={3} style={{ color: "#fff", marginBottom: 12 }}>
                                Nossas Especialidades
                            </Title>
                            <Paragraph
                                style={{
                                    color: "rgba(255,255,255,0.7)",
                                    marginBottom: 32,
                                    fontSize: 14,
                                    fontWeight: 500,
                                }}
                            >
                                Combinamos dados, criatividade e tecnologia para oferecer soluções
                                completas que resolvem dores reais de crescimento.
                            </Paragraph>
                            <Row gutter={[16, 16]} align="top">
                                {services.map((service, index) => (
                                    <Col xs={24} sm={12} lg={6} key={service.title + index} data-aos="zoom-in" data-aos-delay={index * 100}>
                                        <Card
                                            hoverable
                                            style={{ height: "auto" }}
                                            bodyStyle={{ padding: 20, display: "flex", flexDirection: "column", gap: 12 }}
                                        >
                                            <Space direction="vertical" size={8}>
                                                <div style={{ fontSize: 24, color: "#22c55e" }}>
                                                    {service.icon}
                                                </div>
                                                <Title level={5} style={{ color: "#fff", margin: 0 }}>
                                                    {service.title}
                                                </Title>
                                                <Paragraph
                                                    style={{ color: "rgba(255,255,255,0.7)", margin: 0, fontSize: 12 }}
                                                >
                                                    {service.description}
                                                </Paragraph>
                                            </Space>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Space>
                </div>
            </ConfigProvider>
        </section>
    );
}