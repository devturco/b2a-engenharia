import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  HardHat,
  Box,
  Pickaxe,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Zap,
  Mountain,
  Waves
} from "lucide-react";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    document.title = "Nossos Serviços | B2A Engenharia - Soluções em Geotecnia";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Conheça nossa gama completa de serviços: Terra Armada, Solo Grampeado, Muros de Flexão, Geotecnia e Infraestrutura Civil. Soluções de ponta a ponta.");
    }
  }, []);

  const serviceCategories = [
    {
      title: "Projetos & Consultoria",
      description: "Desenvolvimento técnico e engenharia consultiva de alta precisão.",
      icon: LayoutDashboard,
      color: "bg-blue-500",
      items: [
        { name: "Terra Armada", href: "/servicos/terra-armada", desc: "Sistemas de solo reforçado com fita metálica." },
        { name: "Cortina Atirantada", href: "/servicos/cortina-atirantada", desc: "Contenções robustas para grandes empuxos." },
        { name: "Muro a Flexão", href: "/servicos/muro-flexao", desc: "Estruturas autoportantes em concreto armado." },
        { name: "Solo Grampeado", href: "/servicos/solo-grampeado", desc: "Estabilização eficiente de taludes." },
        { name: "Engenharia Geotécnica", href: "/servicos/projetos-geotecnicos", desc: "Planos de investigação e estabilidade." }
      ]
    },
    {
      title: "Execução de Obras",
      description: "Gestão e operacionalização de estruturas de contenção.",
      icon: HardHat,
      color: "bg-orange-500",
      items: [
        { name: "Contenções Especializadas", href: "/servicos/execucao/contencoes", desc: "Execução com rigor técnico e prazos." },
        { name: "Peças Pré-Moldadas", href: "/servicos/execucao/pecas-pre-moldadas", desc: "Produção e montagem de elementos de concreto." },
        { name: "Gerenciamento de Obras", href: "/servicos/execucao/gerenciamento", desc: "Supervisão total do canteiro." },
        { name: "Infraestrutura Civil", href: "/servicos/infraestrutura-civil", desc: "Pavimentação e movimentação de terra." }
      ]
    },
    {
      title: "Formas Metálicas",
      description: "Venda e locação de equipamentos para construção.",
      icon: Box,
      color: "bg-purple-500",
      items: [
        { name: "Paredes New Jersey", href: "/servicos/formas/new-jersey", desc: "Segurança viária com rapidez executiva." },
        { name: "Formas para Muros", href: "/servicos/formas/muro-flexao", desc: "Locação de formas modulares." },
        { name: "Desenvolvimento Especial", href: "/servicos/formas/desenvolvimento-especiais", desc: "Projetos de formas sob medida." }
      ]
    },
    {
      title: "Especialidades",
      description: "Soluções integradas para mineração e áreas marítimas.",
      icon: Pickaxe,
      color: "bg-amber-600",
      items: [
        { name: "Muros de Britagem", href: "/servicos/mineracao/muros-britagem", desc: "Resistência extrema para mineração." },
        { name: "Soluções Integradas", href: "/servicos/mineracao/solucoes-integradas", desc: "Civil e mecânica em harmonia." },
        { name: "Contenções Marítimas", href: "/servicos/contencoes-maritimas", desc: "Soluções em ambientes agressivos." }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 -skew-x-12 translate-x-20"></div>
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl">
            <Badge className="bg-secondary text-white mb-6 px-4 py-1.5 text-sm uppercase font-bold tracking-widest">
              Portfólio de Engenharia
            </Badge>
            <h1 className="text-4xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-none">
              Soluções Técnicas de <br /><span className="text-secondary">Ponta a Ponta</span>
            </h1>
            <p className="text-xl md:text-3xl text-primary-foreground/80 leading-relaxed font-light mb-12 max-w-2xl">
              Da investigação do solo à entrega final da obra, oferecemos o que há de mais moderno em geotecnia e contenções.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="h-6 w-6 text-secondary" />
                <span className="font-bold uppercase text-xs tracking-wider">Qualidade NBR</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-6 w-6 text-secondary" />
                <span className="font-bold uppercase text-xs tracking-wider">Execução Ágil</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-secondary" />
                <span className="font-bold uppercase text-xs tracking-wider">Líder no Mercado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Serviços por Categorias */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {serviceCategories.map((cat, index) => (
              <Card key={index} className="border-none shadow-xl overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                <CardHeader className={`${cat.color} text-white p-8 relative`}>
                  <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform">
                    <cat.icon size={80} />
                  </div>
                  <cat.icon className="h-10 w-10 mb-4" />
                  <CardTitle className="text-2xl font-black mb-2 uppercase tracking-tight">{cat.title}</CardTitle>
                  <p className="text-white/80 font-medium">{cat.description}</p>
                </CardHeader>
                <CardContent className="p-8 bg-white">
                  <div className="grid gap-4">
                    {cat.items.map((item, i) => (
                      <NavLink
                        key={i}
                        to={item.href}
                        className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-primary hover:shadow-md transition-all group/item"
                      >
                        <div>
                          <h4 className="font-bold text-primary mb-1">{item.name}</h4>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-300 group-hover/item:text-primary transition-colors translate-x-0 group-hover/item:translate-x-1" />
                      </NavLink>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Qualidade Geotécnica */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
              <img
                src="/images/aeroporto.png"
                alt="Excelência Geotécnica"
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl shadow-xl z-20 hidden md:block">
                <p className="text-white font-black text-4xl mb-1">100%</p>
                <p className="text-white/70 text-xs font-bold uppercase tracking-widest leading-none">Projetos Executados <br /> com Segurança</p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tighter">
                Por que escolher a <br /> <span className="text-secondary text-4xl md:text-6xl italic leading-none">B2A Engenharia?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-1">Conformidade Normativa</h3>
                    <p className="text-muted-foreground leading-relaxed">Todos os nossos projetos e execuções seguem rigorosamente a NBR 16920-2021 e outras normas vigentes, garantindo segurança jurídica e técnica.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                    <Mountain size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-1">Domínio em Terra Armada</h3>
                    <p className="text-muted-foreground leading-relaxed">Somos especialistas em solos mecanicamente estabilizados, oferecendo as melhores fitas metálicas e escamas de concreto do mercado.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                    <Waves size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-1">Versatilidade Geotécnica</h3>
                    <p className="text-muted-foreground leading-relaxed">Seja em taludes rodoviários, muros de britagem em mineração ou contenções marítimas, nossa equipe entrega a solução ideal.</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary-glow text-white px-10 h-16 rounded-full text-lg font-bold shadow-xl" asChild>
                <NavLink to="/contato">Falar com um Consultor Técnico</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary-glow overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
        <div className="container px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter">
            Pronto para iniciar seu projeto?
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Nossa equipe técnica está à disposição para analisar suas necessidades e propor a solução de engenharia mais eficiente e econômica.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="h-16 px-12 text-lg font-bold uppercase tracking-wider" asChild>
              <NavLink to="/contato">Solicitar Orçamento</NavLink>
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-12 text-lg font-bold uppercase tracking-wider border-white text-white bg-transparent hover:bg-white hover:text-primary" asChild>
              <NavLink to="/obras">Conhecer Obras</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
