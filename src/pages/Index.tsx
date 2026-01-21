import { Layout } from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import { obras } from "../data/obras";
import { Mountain, Shield, Building, ArrowRight, Users, Award, TrendingUp, CheckCircle, Star, User, MessageCircle, Rocket, Zap, Target, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Index = () => {
  const [counters, setCounters] = useState({ projects: 0, years: 0, experience: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [dynamicObras, setDynamicObras] = useState<any[]>([]);
  const [dynamicVideos, setDynamicVideos] = useState<any[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "B2A Engenharia | Contenções, Terra Armada e Geotecnia";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Líder em engenharia geotécnica e contenções. Especialista em Terra Armada, Solo Grampeado e Muros de Flexão. Mais de 600 mil m² de obras executadas com excelência.");
    }

    const fetchDynamicContent = async () => {
      try {
        const [obrasRes, videosRes] = await Promise.all([
          fetch("/api/obras.php"),
          fetch("/api/videos.php")
        ]);

        if (obrasRes.ok) {
          const data = await obrasRes.json();
          if (Array.isArray(data)) setDynamicObras(data.slice(0, 6));
        }

        if (videosRes.ok) {
          const data = await videosRes.json();
          if (Array.isArray(data)) setDynamicVideos(data.slice(0, 3));
        }
      } catch (error) {
        console.error("Erro ao carregar conteúdo dinâmico:", error);
      }
    };

    fetchDynamicContent();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);

          // Animate counters
          const duration = 2000;
          const targets = { projects: 600, years: 15, experience: 300 };
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

  const staticFeaturedObras = obras.filter(obra => obra.images.length > 0).slice(0, 6);

  const processedDynamicObras = dynamicObras.map(o => ({
    ...o,
    id: o.id.toString(),
    images: Array.isArray(o.images) ? o.images : JSON.parse(o.images || "[]")
  }));

  const featuredObras = [...processedDynamicObras, ...staticFeaturedObras].slice(0, 6);

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

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tighter">
            Contenções e
            <span className="text-secondary block">Engenharia</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Referência nacional em <strong>Terra Armada</strong>, <strong>Solo Grampeado</strong> e projetos geotécnicos de alta complexidade.
            Mais de uma década de inovação e segurança para sua obra.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4">
              <NavLink to="/contato" className="flex items-center">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black bg-white hover:bg-gray-100 hover:text-black px-8 py-4">
              <NavLink to="/obras" className="flex items-center">
                Ver Obras
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section ref={statsRef} className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-800">
            <div className="text-center pt-8 md:pt-0">
              <div className="text-6xl font-black text-secondary mb-2 tracking-tighter">
                +{counters.projects}k m²
              </div>
              <div className="text-gray-400 font-bold uppercase text-sm tracking-widest">Em Projetos Executados</div>
            </div>
            <div className="text-center pt-8 md:pt-0">
              <div className="text-6xl font-black text-secondary mb-2 tracking-tighter">
                {counters.years} ANOS
              </div>
              <div className="text-gray-400 font-bold uppercase text-sm tracking-widest">De Expertise Técnica</div>
            </div>
            <div className="text-center pt-8 md:pt-0">
              <div className="text-6xl font-black text-secondary mb-2 tracking-tighter">
                {counters.experience}+
              </div>
              <div className="text-gray-400 font-bold uppercase text-sm tracking-widest">Obras de Sucesso</div>
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

          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-6">
            {[
              "andrade.png", "odebrecht.png", "camargocorrea.png", "oas.png",
              "serveng.png", "votorantin.png", "jmalucelli.png", "viapar.png",
              "aterpa.png", "castellar.png", "cralmeida.png", "equipav.png"
            ].map((clientImg, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-20 hover:bg-gray-100 transition-all border border-gray-100 group">
                <img
                  src={`/images/clientes/${clientImg}`}
                  alt="Cliente Parceiro"
                  className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-sm font-medium mb-4">
              <Mountain className="w-4 h-4 mr-2" />
              Nossas Obras
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Obras de Qualidade</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Veja alguns dos nossos projetos mais recentes executados em todo o Brasil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredObras.map((obra) => (
              <NavLink
                key={obra.id}
                to="/obras"
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={`/obras/${encodeURIComponent(obra.gallery_path || obra.galleryPath || obra.name)}/${encodeURIComponent(obra.images[0])}`}
                    alt={obra.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-1">{obra.name}</h3>
                  <p className="text-red-400 text-sm font-medium">{obra.category}</p>
                  <div className="flex items-center text-gray-300 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 mr-1" />
                    Ver detalhes no portfólio
                  </div>
                </div>
              </NavLink>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
              <NavLink to="/obras">Ver Todas as Obras</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Seção de Vídeos (Destaque) */}
      <section className="py-20 bg- engineering-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-600/20 border border-red-500/30 text-red-600 text-sm font-medium mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Nossa Tecnologia em Ação
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Execução e Tecnologia</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja nossos equipamentos e equipes em operação, garantindo a máxima precisão em cada m² construído.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(dynamicVideos.length > 0 ? dynamicVideos : [
              { name: "Vista Aérea - Autódromo de Interlagos", path: "/midias/DJI_0001.MOV" },
              { name: "Obra em Andamento", path: "/midias/DJI_0013.MP4" },
              { name: "Vista Aérea - Autódromo de Interlagos", path: "/midias/DJI_0017.MOV" },
            ]).map((video, index) => (
              <Card key={index} className="overflow-hidden bg-black border-none shadow-2xl group ring-1 ring-white/10">
                <CardContent className="p-0">
                  <div className="aspect-video relative">
                    <video
                      controls
                      playsInline
                      className="w-full h-full object-cover"
                      preload="metadata"
                    >
                      <source src={video.path} />
                    </video>
                  </div>
                  <div className="p-5 bg-white">
                    <h3 className="font-bold text-primary text-lg truncate">{video.name}</h3>
                    <p className="text-secondary text-xs font-bold uppercase mt-1">Engenharia em movimento</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white" asChild>
              <NavLink to="/videos" className="flex items-center">
                Conhecer outros vídeos
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
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
              <NavLink to="/obras">
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
