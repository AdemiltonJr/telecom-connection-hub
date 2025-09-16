import { Router, Radio, Battery, Signal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Solutions = () => {
  const solutions = [
    {
      icon: Router,
      title: "Redes de Acesso",
      description: "Equipamentos de alta performance como Switches, Roteadores e OLTs para garantir uma rede de acesso robusta e confiável.",
      color: "text-primary"
    },
    {
      icon: Radio,
      title: "Rádio Enlace", 
      description: "Soluções completas em Rádio Enlace e Wi-Fi com equipamentos SIAE e antenas de alta capacidade para comunicação sem fio.",
      color: "text-telecom"
    },
    {
      icon: Battery,
      title: "Energia e Elétrica",
      description: "Sistemas de energia seguros com Fontes Retificadoras, Baterias de Lítio (LiFePO4) e Inversores para operação ininterrupta.",
      color: "text-cta"
    },
    {
      icon: Signal,
      title: "Redes 4G/5G",
      description: "Implementação e fornecimento de equipamentos para redes LTE/4G/5G, com soluções de marcas como Huawei e Airspan.",
      color: "text-accent-light-foreground"
    }
  ];

  return (
    <section id="solucoes" className="py-20 section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Soluções Integradas para seu Negócio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos um portfólio completo de produtos e serviços para garantir a máxima performance da sua operação.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0"
            >
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <solution.icon className={`h-8 w-8 ${solution.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-4">
                  {solution.title}
                </h3>
                
                <p className="text-foreground leading-relaxed flex-grow">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto shadow-card bg-primary">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Soluções Personalizadas para Cada Desafio
              </h3>
              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                Nossa expertise técnica e parceria com as principais marcas do mercado nos permite 
                oferecer soluções sob medida para atender às necessidades específicas de cada projeto, 
                garantindo máxima eficiência e confiabilidade.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Solutions;