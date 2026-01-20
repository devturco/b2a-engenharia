import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Phone, Building, Construction, Zap, Shield, Layers } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const OAE = () => {
  useEffect(() => {
    document.title = "O.A.E | Obras de Arte Especiais | B2A Engenharia";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Especialistas em Obras de Arte Especiais (OAE). Projetos e execução de pontes, viadutos e estruturas complexas com engenharia de alta precisão.");
    }
  }, []);

  const especialidades = [
    {
      icon: Construction,
      title: "Pontes e Viadutos",
      description: "Sistemas estruturais para grandes vãos e cargas rodoviárias pesadas."
    },
    {
      icon: Building,
      title: "Passarelas Urbanas",
      description: "Mobilidade com design moderno e integração arquitetônica funcional."
    },
    {
      icon: Zap,
      title: "Estruturas Singulares",
      description: "Desafios geométricos e técnicos que demandam engenharia sob medida."
    }
  ];

  const atributosOAE = [
    { title: "Precisão Estrutural", d: "Cálculos avançados para estabilidade em situações críticas.", icon: Shield },
    { title: "Metodologias Ágeis", d: "Uso de pré-moldados e cimbramentos otimizados.", icon: Layers },
    { title: "Logística Complexa", d: "Expertise em içamentos e montagens em locais de difícil acesso.", icon: Construction }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale">
          <img src="/images/aeroporto.png" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-secondary text-white mb-6 px-4 py-1.5 uppercase font-black tracking-widest">
              Alta Engenharia Estrutural
            </Badge>
            <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
              Obras de Arte <br /><span className="text-secondary">Especiais (OAE)</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
              Projetos complexos, pontes e viadutos entregues com a precisão
              que a infraestrutura nacional exige.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary-glow text-white h-16 px-10 rounded-full font-bold uppercase tracking-wide shadow-xl" asChild>
                <NavLink to="/contato">Solicitar Consultoria Técnica</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter leading-tight">
                Engenharia de <br /><span className="text-secondary italic">Grande Porte</span>
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                <p>
                  As <strong>Obras de Arte Especiais</strong> são a espinha dorsal da mobilidade. Na B2A, tratamos cada ponte ou viaduto como um desafio único de engenharia, onde segurança e durabilidade são pilares inegociáveis.
                </p>
                <p>
                  Nossa atuação abrange desde o projeto estrutural básico até a execução completa de sistemas de infraestrutura e superestrutura, utilizando as mais modernas técnicas de concreto armado, protendido e estruturas mistas.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                {["Pontes", "Viadutos", "Passarelas", "Túneis", "Galerias Especiais"].map((tag, i) => (
                  <Badge key={i} variant="outline" className="px-4 py-2 text-primary border-primary/20 font-bold uppercase tracking-tight text-[10px]">{tag}</Badge>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {especialidades.map((e, i) => (
                <Card key={i} className="border-none shadow-sm hover:shadow-xl transition-all rounded-3xl p-8 bg-gray-50 group">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 bg-primary text-white rounded-2xl group-hover:bg-secondary transition-colors">
                      <e.icon size={28} />
                    </div>
                    <div>
                      <h3 className="font-black text-primary uppercase tracking-tight mb-2">{e.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{e.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Atributos OAE */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-16">O Padrão <span className="text-secondary italic">B2A</span> em OAE</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {atributosOAE.map((a, i) => (
              <div key={i} className="space-y-6 group">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-[30px] flex items-center justify-center mx-auto border border-white/20 group-hover:bg-secondary group-hover:border-secondary transition-all">
                  <a.icon className="text-secondary group-hover:text-white" size={40} />
                </div>
                <h3 className="font-black text-white uppercase tracking-tight text-xl">{a.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-white text-center">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-3xl md:text-6xl font-black text-primary uppercase tracking-tighter leading-none">Viabilize seu Projeto de <span className="text-secondary">Infraestrutura</span></h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              Nossa equipe técnica está pronta para analisar seus projetos de OAE e oferecer as melhores soluções executivas e financeiras.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary-glow text-white h-16 px-16 rounded-full text-lg font-bold shadow-2xl transition-all" asChild>
                <NavLink to="/contato">Agendar Reunião Técnica</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OAE;
