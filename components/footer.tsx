import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

interface FooterProps {
  title?: string;
}

const Footer: React.FC<FooterProps> = ({ title = "Loja Virtual" }) => {
  return (
    <footer className="bg-black text-gray-500">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-gray-500 hover:text-green-900 transition-colors"
                >
                  Todos os produtos
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="text-gray-500 hover:text-green-900 transition-colors"
                >
                  Coleções
                </Link>
              </li>
              <li>
                <Link
                  href="/featured"
                  className="text-gray-500 hover:text-green-900 transition-colors"
                >
                  Destaques
                </Link>
              </li>
              <li>
                <Link
                  href="/new-arrivals"
                  className="text-gray-500 hover:text-green-900 transition-colors"
                >
                  Novidades
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/faq"
                  className="text-gray-500 hover:text-green-900 transition-colors"
                >
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-gray-500 hover:text-green-900 transition-colors"
                >
                  Envio e Devolucoes
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-500 hover:text-green-900 transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-500 hover:text-green-900 transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-500 hover:text-green-900 transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-500 hover:text-green-900 transition-colors"
                >
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Contato</h3>
            <ul className="space-y-2 text-gray-500">
              <li>support@minimal.com</li>
              <li>+1 (555) 123-4567</li>
              <li className="flex space-x-4 pt-2">
                <Link
                  href="https://instagram.com"
                  className="text-gray-500 hover:text-green-900 transition-colors"
                >
                  Instagram
                </Link>
                <Link
                  href="https://twitter.com"
                  className="text-gray-500 hover:text-green-900 transition-colors"
                >
                  Twitter
                </Link>
                <Link
                  href="https://facebook.com"
                  className="text-gray-500 hover:text-green-900 transition-colors"
                >
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} MINIMAL. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
