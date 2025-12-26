"use client";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="py-20">
          <a href="#" className="flex justify-center mb-8">
            <h1 className="text-3xl font-bold text-[#0c1d3b]">
              Marketing <span className="text-emerald-500">Rescue</span>
            </h1>
          </a>
          <div className="py-8 text-center">
            <h3 className="text-3xl text-[#0c1d3b] font-bold mb-4">
              Pronto para transformar seu marketing?
            </h3>
            <p className="text-gray-600">
              Mais de 50+ empresas já estão crescendo com Marketing Rescue. O que te impede de começar?
            </p>
          </div>
          <div className="flex justify-center items-center gap-3 flex-wrap">
            <a
              href="#work"
              className="border border-gray-300 rounded-full shadow-md py-3 px-6 flex items-center gap-2 transition-all duration-500 text-sm text-[#0c1d3b] hover:bg-gray-100"
            >
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.81276 4.76453C11.7709 5.92474 12.75 6.50484 12.75 7.375C12.75 8.24516 11.7709 8.82526 9.81276 9.98547L5.90586 12.3003C3.9477 13.4605 2.96862 14.0406 2.23431 13.6055C1.5 13.1705 1.5 12.0103 1.5 9.68984L1.5 5.06016C1.5 2.73974 1.5 1.57953 2.23431 1.14445C2.96862 0.709374 3.9477 1.28948 5.90586 2.44969L9.81276 4.76453Z" stroke="#0c1d3b" strokeWidth="1.8" />
              </svg>
              Ver nosso trabalho
            </a>
            <a
              href="#contact"
              className="bg-emerald-500 rounded-full shadow-md py-3 px-6 flex items-center gap-2 transition-all duration-500 text-sm text-white hover:bg-emerald-600"
            >
              Começar agora
            </a>
          </div>
        </div>

        {/* Footer Content */}
        <div className="py-7 border-t border-gray-200">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-[#0c1d3b]">
                Marketing <span className="text-emerald-500">Rescue</span>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transformando desafios em oportunidades de crescimento para sua marca.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-5 text-[#0c1d3b]">Links Rápidos</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#hero" className="text-gray-600 hover:text-[#0c1d3b] transition-colors text-sm">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#work" className="text-gray-600 hover:text-[#0c1d3b] transition-colors text-sm">
                    Nosso Trabalho
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-600 hover:text-[#0c1d3b] transition-colors text-sm">
                    Quem Somos
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-5 text-[#0c1d3b]">Entre em Contato</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:contato@marketingrescue.com.br" className="text-gray-600 hover:text-[#0c1d3b] transition-colors text-sm">
                    contato@marketingrescue.com.br
                  </a>
                </li>
                <li>
                  <a href="tel:+5511999999999" className="text-gray-600 hover:text-[#0c1d3b] transition-colors text-sm">
                    (11) 99999-9999
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex items-center justify-center flex-col gap-7 lg:justify-between lg:flex-row">
              <span className="text-sm text-gray-600">
                © <a href="#" className="hover:text-[#0c1d3b]">Marketing Rescue</a> 2025. Todos os direitos reservados.
              </span>
              <ul className="flex items-center text-sm text-gray-600 gap-9">
                <li>
                  <a href="#" className="hover:text-[#0c1d3b] transition-colors">
                    Termos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#0c1d3b] transition-colors">
                    Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#0c1d3b] transition-colors">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
