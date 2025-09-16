import { Phone, Mail } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="Ground Telecom" 
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-primary-foreground/90 leading-relaxed">
              Integrando soluções e serviços através de consultoria personalizada em projetos 
              de alta performance para comunicação e transmissão de dados.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-foreground">Links Rápidos</h3>
            <nav className="space-y-2">
              <a 
                href="#sobre" 
                className="block text-primary-foreground/80 hover:text-telecom transition-colors"
              >
                Sobre Nós
              </a>
              <a 
                href="#solucoes" 
                className="block text-primary-foreground/80 hover:text-telecom transition-colors"
              >
                Soluções
              </a>
              <a 
                href="#marcas" 
                className="block text-primary-foreground/80 hover:text-telecom transition-colors"
              >
                Marcas Parceiras
              </a>
              <a 
                href="#contato" 
                className="block text-primary-foreground/80 hover:text-telecom transition-colors"
              >
                Contato
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-foreground">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-telecom flex-shrink-0" />
                <span className="text-primary-foreground/90">(00) 0000-0000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-telecom flex-shrink-0" />
                <span className="text-primary-foreground/90">contato@groundtelecom.com.br</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/70">
            © 2025 Ground Telecom. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;