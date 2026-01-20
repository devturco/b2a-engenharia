import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import {
  Settings,
  CheckCircle,
  Award,
  Phone,
  Search,
  Database,
  BarChart3,
  ShieldCheck,
  Zap,
  ArrowRight
} from "lucide-react";
import { useEffect } from "react";

const ProjetosGeotecnicos = () => {
  useEffect(() => {
    document.title = "Projetos Geotécnicos | Investigações de Solo | B2A";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Investigações geotécnicas completas: Sondagens SPT, CPT, ensaios de laboratório e análise de estabilidade. Engenharia de precisão para projetos de solo.");
    }
  }, []);

  const servicos = [
    {
      titulo: "Sondagens & Ensaios",
      descricao: "Investigação do subsolo via SPT, CPT, poços de monitoramento e ensaios de permeabilidade.",
      icon: Search
    },
    {
      titulo: "Análise de Estabilidade",
      descricao: "Simulação de taludes e encostas por métodos de equilíbrio limite e elementos finitos.",
      icon: BarChart3
    },
    {
      titulo: "Instrumentação",
      descricao: "Monitoramento de recalques, pressões e deslocamentos com tecnologia de precisão.",
      icon: Database
    },
    {
      titulo: "Consultoria Geotécnica",
      descricao: "Laudos técnicos, pareceres especializados e apoio na tomada de decisão técnico-econômica.",
      icon: ShieldCheck
    }
  ];

  const atributos = [
    { title: "Precisão Geotécnica", d: "Dados confiáveis para um dimensionamento estrutural seguro.", icon: Search },
    { title: "Redução de Riscos", d: "Identificação antecipada de anomalias no subsolo.", icon: ShieldCheck },
    { title: "Otimização Financeira", d: "Fundações e contenções projetadas no limite da eficiência.", icon: Zap }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale">
          <img src="/images/aeroporto.png" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-secondary text-white mb-6 px-4 py-1.5 uppercase font-black tracking-widest">
              Investigações & Laudos
            </Badge>
            <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
              Projetos <span className="text-secondary">Geotécnicos</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
              Entendemos o que está sob a superfície. Investigações detalhadas e laudos
              técnicos com o rigor das normas NBR 6484 e NBR 11682.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary-glow text-white h-16 px-10 rounded-full font-bold uppercase tracking-wide shadow-xl" asChild>
                <NavLink to="/contato">Solicitar Investigação de Solo</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter leading-tight">
                A Ciência do <br /><span className="text-secondary italic">Subsolo</span>
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                <p>
                  Toda grande obra nasce de uma boa investigação. Na <strong>B2A Engenharia</strong>, tratamos a geotecnia como o pilar de sustentabilidade de qualquer projeto. Sem dados precisos do solo, corre-se o risco de superdimensionamento ou, pior, falhas estruturais.
                </p>
                <p>
                  Realizamos o ciclo completo: desde a execução de <strong>sondagens SPT</strong> até a modelagem computacional de estabilidade, entregando laudos que servem como guia definitivo para fundações e contenções.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                {atributos.map((a, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-2xl group hover:bg-primary transition-all duration-300">
                    <div className="p-3 bg-white text-secondary rounded-xl shadow-sm mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                      <a.icon size={28} />
                    </div>
                    <h4 className="font-black text-primary group-hover:text-white text-xs uppercase mb-2">{a.title}</h4>
                    <p className="text-[10px] text-muted-foreground group-hover:text-white/70 leading-tight">{a.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-[40px] rotate-1"></div>
              <img
                src="/images/aeroporto.png"
                alt="Investigação Geotécnica"
                className="rounded-[32px] shadow-2xl relative z-10 w-full min-h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Serviços */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tighter mb-4">Soluções Geotécnicas</h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicos.map((s, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-xl transition-all rounded-3xl p-8 bg-white group">
                <CardHeader className="p-0 mb-6">
                  <div className="w-12 h-12 bg-primary/5 text-secondary rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors">
                    <s.icon size={24} />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <CardTitle className="text-primary font-black uppercase tracking-tight mb-4 text-sm">{s.titulo}</CardTitle>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">Mitigue Riscos, <span className="text-secondary">Otimize Projetos</span></h2>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              Não inicie sua obra com incertezas. Conte com o suporte geotécnico especializado da B2A.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary-glow text-white h-16 px-16 rounded-full text-lg font-bold shadow-2xl transition-all" asChild>
                <NavLink to="/contato">Solicitar Orçamentos de Sondagem</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjetosGeotecnicos;
