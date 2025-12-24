"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#0c1d3b] text-white py-24"
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-12">
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-5xl font-bold mb-6">
            Pronto para Transformar Seu Marketing?
          </h2>
          <p className="text-xl text-white/75 mb-10 max-w-3xl mx-auto">
            [Sua copy apelativa aqui] Não perca mais tempo. Entre em contato
            agora e descubra como podemos levar seu negócio ao próximo nível.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById("hero");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-[#0c1d3b] px-14 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-colors shadow-lg"
          >
            Fale Conosco Agora
          </motion.button>
        </motion.div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 border-t border-white/20 pt-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Marketing <span className="text-white/70">Rescue</span>
            </h3>
            <p className="text-white/75">
              Transformando desafios em oportunidades de crescimento.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-white/75 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#work" className="text-white/75 hover:text-white transition-colors">
                  Nosso Trabalho
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/75 hover:text-white transition-colors">
                  Quem Somos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-white/75">
              <li>contato@marketingrescue.com</li>
              <li>(00) 00000-0000</li>
              <li className="flex gap-4 mt-4">
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-white/60 mt-12 pt-8 border-t border-white/20">
          <p>© 2025 Marketing Rescue. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
