const Partners = () => {
  const partners = [
    { name: "Nokia", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nokia_wordmark.svg" },
    { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg" },
    { name: "Huawei", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Huawei_Standard_logo.svg" },
    { name: "SIAE", logo: "https://www.siaemic.com/wp-content/uploads/2019/11/siae-logo.png" },
    { name: "Airspan", logo: "https://www.airspan.com/wp-content/uploads/2021/03/airspan-logo.svg" },
    { name: "SEC POWER", logo: "https://www.secpower.com.br/img/logo-sec-power.png" },
    { name: "Embrastec", logo: "https://embrastec.com.br/wp-content/uploads/2020/05/logo-embrastec.png" }
  ];

  return (
    <section id="marcas" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Trabalhamos com as Melhores Marcas do Mercado
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Parcerias estratégicas com líderes globais em tecnologia e telecomunicações
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-card rounded-lg shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-center">
                <div className="w-full h-16 flex items-center justify-center mb-2">
                  {/* Placeholder for partner logos - in real implementation, you'd use actual logo images */}
                  <div className="text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    {partner.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Partner Info */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Parceiros de Confiança
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossas parcerias estratégicas nos permitem oferecer as tecnologias mais avançadas 
              e confiáveis do mercado, garantindo que seus projetos tenham acesso às melhores 
              soluções disponíveis globalmente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;