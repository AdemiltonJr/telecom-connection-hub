import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(39, 82, 115, 0.8), rgba(39, 82, 115, 0.6)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            As melhores soluções em{' '}
            <span className="text-telecom">comunicação</span> e{' '}
            <span className="text-accent-light">transmissão de dados</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 mb-4">
            Integramos projetos de alta performance para Agronegócio, Provedores de Internet (ISPs) e Empresas.
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 font-medium">
            Nosso desafio é a sua solução!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('solucoes')}
              className="group"
            >
              Conheça Nossas Soluções
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('sobre')}
              className="text-white border-white hover:bg-white hover:text-primary"
            >
              Nossa História
            </Button>
          </div>
        </div>
        
        {/* Floating elements for visual enhancement */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-telecom/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent-light/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-cta/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
};

export default Hero;