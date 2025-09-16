import { Target, Binoculars, Shield, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    'Ética',
    'Integridade', 
    'Profissionalismo',
    'Comprometimento',
    'Transparência'
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Nossa História
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Excelência e resolução de desafios desde 2013.
          </p>
        </div>

        {/* Company Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="shadow-card border-l-4 border-l-telecom">
            <CardContent className="p-8">
              <p className="text-lg text-foreground leading-relaxed">
                Fundada em 2013 por nosso Diretor e Eng. Paulo Henrique, inicialmente como "PH8 Telecom", 
                com o objetivo de atender ao setor de ISPs conforme o perfil de cada cliente, visando a 
                excelência e resolução dos desafios apresentados.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission, Vision & Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <Card className="shadow-card hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Missão</h3>
              <p className="text-foreground leading-relaxed">
                Integrar soluções e serviços através de consultoria personalizada em projetos de alta 
                performance para comunicação e transmissão de dados, nos setores de Agronegócio, 
                Provedores de Internet (ISPs) e Empresas privadas.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="shadow-card hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-telecom/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Binoculars className="h-8 w-8 text-telecom" />
              </div>
              <h3 className="text-xl font-bold text-telecom mb-4">Visão</h3>
              <p className="text-foreground leading-relaxed">
                Ser referência na integração de soluções e na prestação de serviços no setor de 
                telecomunicações em âmbito nacional, atuando de forma sustentável e social.
              </p>
            </CardContent>
          </Card>

          {/* Values */}
          <Card className="shadow-card hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-cta/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-cta" />
              </div>
              <h3 className="text-xl font-bold text-cta mb-4">Nossos Pilares</h3>
              <div className="space-y-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-cta flex-shrink-0" />
                    <span className="text-foreground font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;