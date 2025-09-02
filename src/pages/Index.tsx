import { Layout } from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import { Mountain, Shield, Building, ArrowRight, Users, Award, TrendingUp, CheckCircle, Star, User, MessageCircle, Rocket, Zap, Target, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Index = () => {
  const [counters, setCounters] = useState({ projects: 0, years: 0, experience: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Animate counters
          const duration = 2000;
          const targets = { projects: 600, years: 10, experience: 500 };
          const startTime = Date.now();
          
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            setCounters({
              projects: Math.floor(targets.projects * progress),
              years: Math.floor(targets.years * progress),
              experience: Math.floor(targets.experience * progress)
            });
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const services = [
    {
      icon: Mountain,
      title: "Solo Grampeado",
      description: "Técnica de estabilização de taludes com alta eficiência e segurança.",
      href: "/servicos/solo-grampeado"
    },
    {
      icon: Shield,
      title: "Cortina Atirantada",
      description: "Soluções robustas para contenção de grandes estruturas.",
      href: "/servicos/cortina-atirantada"
    },
    {
      icon: Building,
      title: "Terra Armada",
      description: "Tecnologia avançada para muros de contenção duráveis.",
      href: "/servicos/terra-armada"
    }
  ];

  const projectImages = [
    "/images/obras/2016-11-10-17.39.30.jpg",
    "/images/obras/Autodromo-Interlagos-obrasl_041114_Foto_JoseCordeiro_0088.jpg",
    "/images/obras/Autodromo-Interlagos-obrasl_041114_Foto_JoseCordeiro_0248-1.jpg",
    "/images/obras/IMG-20221024-WA0116.jpg",
    "/images/obras/MG_5160a-1.png",
    "/images/obras/MG_5343a1.jpg"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/MG_5160a.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            Engenharia Geotécnica de Excelência
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Soluções em
            <span className="text-red-500 block">Engenharia</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Especialistas em contenções, fundações e projetos geotécnicos com mais de 20 anos de experiência no mercado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4">
              <NavLink to="/contato" className="flex items-center">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black bg-white hover:bg-gray-100 hover:text-black px-8 py-4">
              <NavLink to="/servicos" className="flex items-center">
                Ver Obras
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section ref={statsRef} className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-red-500 mb-2">
                +{counters.projects}.000m²
              </div>
              <div className="text-gray-300 text-lg">Em Projetos</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-500 mb-2">
                {counters.years}+
              </div>
              <div className="text-gray-300 text-lg">Anos No Mercado</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-500 mb-2">
                {counters.experience}+
              </div>
              <div className="text-gray-300 text-lg">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nossa Empresa */}
      <section ref={aboutRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-600/20 border border-red-500/30 text-red-600 text-sm font-medium mb-4">
              <Building className="w-4 h-4 mr-2" />
              Sobre Nós
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre Nossa Empresa</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Nossa História</h3>
              <p className="text-gray-600 text-lg mb-6">
                A B2A CONTENÇÕES nasceu da firme parceria entre profissionais com experiência acumulada em mais de 17 anos em diversos segmentos de obras civis e na fabricação de equipamentos metálicos utilizados em indústrias, acumulando experiência em mais de 600 mil m² em projetos e na execução de muros de contenções em aterro, proporcionando aos nossos clientes a segurança necessária no desenvolvimento de parcerias sólidas e duradouras.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                Tem como principal atividade de negócios, oferecer soluções em muros de contenções em aterro com solos mecanicamente estabilizados, também conhecido como sistema Terra Armada conforme norma NBR 16920-2021.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">17+</div>
                  <div className="text-gray-600">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">600k+</div>
                  <div className="text-gray-600">m² em Projetos</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/aeroporto.png" 
                alt="Sobre a B2A Engenharia" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Serviços em Destaque */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-sm font-medium mb-4">
              <Rocket className="w-4 h-4 mr-2" />
              Nossos Serviços
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Serviços em Destaque</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Oferecemos uma ampla gama de serviços especializados em engenharia geotécnica.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="bg-white border-gray-200 hover:border-red-500 transition-all duration-300 group shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition-colors">
                      <IconComponent className="w-6 h-6 text-red-500" />
                    </div>
                    <CardTitle className="text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                      <NavLink to={service.href}>Saiba Mais</NavLink>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nossos Clientes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-600/20 border border-red-500/30 text-red-600 text-sm font-medium mb-4">
              <Users className="w-4 h-4 mr-2" />
              Nossos Clientes
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Confiança que Constrói</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empresas de renome confiam em nossos serviços para seus projetos mais importantes.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
               "/images/clientes/andrade.png",
               "/images/clientes/odebrecht.png",
               "/images/clientes/camargocorrea.png",
               "/images/clientes/oas.png",
               "/images/clientes/serveng.png",
               "/images/clientes/votorantin.png",
               "/images/clientes/jmalucelli.png",
               "/images/clientes/viapar.png"
             ].map((clientImage, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-24 hover:bg-gray-100 transition-colors border border-gray-200">
                <img
                  src={clientImage}
                  alt={`Cliente ${index + 1}`}
                  className="max-w-full max-h-full object-contain filter brightness-75 hover:brightness-100 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image} 
                  alt={`Projeto ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-lg font-semibold mb-2">Projeto {index + 1}</h3>
                    <p className="text-sm">Contenção e Engenharia</p>
                    <p className="text-xs mt-2 opacity-75">Clique para ampliar</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-600/20 border border-red-500/30 text-red-600 text-sm font-medium mb-4">
              <MessageCircle className="w-4 h-4 mr-2" />
              Depoimentos
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">O que Nossos Clientes Dizem</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Feedback real de clientes satisfeitos com nossos serviços.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "João Silva",
                company: "Construtora Andrade Gutierrez",
                text: "Excelente trabalho! A B2A entregou o projeto no prazo e com qualidade excepcional."
              },
              {
                name: "Maria Santos",
                company: "Odebrecht Engenharia",
                text: "Profissionais altamente qualificados. Recomendo para projetos complexos."
              },
              {
                name: "Carlos Oliveira",
                company: "Camargo Corrêa",
                text: "Parceria de longa data. Sempre entregam soluções inovadoras e eficientes."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-gray-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-3">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-900 font-semibold">{testimonial.name}</div>
                      <div className="text-gray-500 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Estatísticas de satisfação */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <Award className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-300">Satisfação dos Clientes</div>
            </div>
            <div>
              <TrendingUp className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-300">Projetos Entregues</div>
            </div>
            <div>
              <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Clientes Ativos</div>
            </div>
            <div>
              <CheckCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Suporte Técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Fale conosco
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Entre em contato conosco e descubra como podemos transformar suas ideias em soluções geotécnicas inovadoras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4">
              <NavLink to="/contato">
                Solicitar Orçamento
              </NavLink>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black bg-white hover:bg-gray-100 hover:text-black px-8 py-4">
              <NavLink to="/portfolio">
                Ver Portfolio
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Modal para ampliar imagens */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={selectedImage} 
              alt="Projeto ampliado"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Index;
