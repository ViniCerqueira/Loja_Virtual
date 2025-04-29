import Header from "@/components/header";

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
      <Header />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold pt-12 text-gray-900 mb-4">
            Sobre Nossa Plataforma
          </h1>
          <p className="text-xl text-gray-600">
            Transformando a maneira como você gerencia seu negócio
          </p>
        </div>

        <div className="space-y-12">
          {/* Visão Geral */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              O Que é Nossa Plataforma?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nossa plataforma é uma solução completa de e-commerce desenvolvida
              para simplificar e otimizar a gestão do seu negócio. Com
              ferramentas intuitivas e recursos poderosos, ajudamos você a
              vender mais e gerenciar melhor suas operações.
            </p>
          </section>

          {/* Recursos Principais */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Recursos Principais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Gestão de Produtos
                </h3>
                <p className="text-gray-600">
                  Cadastre e gerencie seus produtos com facilidade, incluindo
                  estoque, preços e descrições detalhadas.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Pedidos Automatizados
                </h3>
                <p className="text-gray-600">
                  Receba e processe pedidos automaticamente, com notificações em
                  tempo real e rastreamento de status.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Relatórios Avançados
                </h3>
                <p className="text-gray-600">
                  Acompanhe o desempenho do seu negócio com relatórios
                  detalhados e análises personalizadas.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Integração Multiplataforma
                </h3>
                <p className="text-gray-600">
                  Conecte-se com diversos marketplaces e canais de venda para
                  expandir seu alcance.
                </p>
              </div>
            </div>
          </section>

          {/* Benefícios */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Por Que Escolher Nossa Plataforma?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-green-500">✓</span>
                <span className="ml-3 text-gray-600">
                  Interface intuitiva e fácil de usar
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-green-500">✓</span>
                <span className="ml-3 text-gray-600">
                  Suporte técnico especializado
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-green-500">✓</span>
                <span className="ml-3 text-gray-600">
                  Atualizações constantes e novas funcionalidades
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-green-500">✓</span>
                <span className="ml-3 text-gray-600">
                  Segurança e confiabilidade garantidas
                </span>
              </li>
            </ul>
          </section>

          {/* CTA */}
          <section className="text-center pb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Pronto para Começar?
            </h2>
            <p className="text-gray-600 mb-6">
              Junte-se a milhares de empreendedores que já estão transformando
              seus negócios com nossa plataforma.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Começar Agora
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
