import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import {
  Building,
  CheckCircle,
  Settings,
  Shield,
  Award,
  Phone,
  Wrench,
  Layers,
  ArrowRight,
  Database,
  Search,
  Zap
} from "lucide-react";
import { useEffect } from "react";

const OutrasContencoes = () => {
  useEffect(() => {
    document.title = "Soluções Especiais de Contenção | Engenharia Customizada | B2A";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Conheça nossas soluções especiais em contenção: Parede Diafragma, Estacas Prancha, Jet Grouting e mais. Engenharia de alta complexidade para desafios únicos.");
    }
  }, []);

  const tiposContencao = [
    {
      titulo: "Parede Diafragma",
      descricao: "Paredes de concreto moldadas in-loco para contenções de grande profundidade e subsolos.",
      icon: Building,
      aplicacoes: ["Subsolos profundos", "Contenções impermeáveis", "Obras portuárias"],
      vantagens: ["Impermeabilidade", "Grandes profundidades", "Estrutura definitiva"]
    },
    {
      titulo: "Estacas Prancha",
      descricao: "Sistema de contenção usando perfis metálicos entrelaçados, ideal para ambientes úmidos.",
      icon: Shield,
      aplicacoes: ["Obras portuárias", "Contenções temporárias", "Valas de saneamento"],
      vantagens: ["Execução rápida", "Reaproveitável", "Resistente à água"]
    },
    {
      titulo: "Muros de Gravidade",
      descricao: "Contenções clássicas que utilizam o peso próprio para estabilização de taludes.",
      icon: Layers,
      aplicacoes: ["Muros de divisa", "Cortes de pequena altura", "Acessos"],
      vantagens: ["Simplicidade construtiva", "Baixo custo", "Alta durabilidade"]
    },
    {
      titulo: "Jet Grouting",
      descricao: "Tratamento de solo por injeção de alta pressão para colunas de solo-cimento.",
      icon: Wrench,
      aplicacoes: ["Impermeabilização", "Reforço de fundação", "Tampões de fundo"],
      vantagens: ["Versatilidade", "Sem vibração", "Precisão em solos moles"]
    },
    {
      titulo: "Estacas Raiz / Microestacas",
      descricao: "Perfuração rotativa injetada para reforço e contenção em locais confinados.",
      icon: Award,
      aplicacoes: ["Reforço estrutural", "Contenções urbanas", "Acessos restritos"],
      vantagens: ["Baixa vibração", "Equipamentos compactos", "Alta capacidade"]
    },
    {
      titulo: "Soluções Mistas",
      descricao: "Integração de múltiplas técnicas para vencer desafios geométricos e geotécnicos.",
      icon: Zap,
      aplicacoes: ["Terrenos heterogêneos", "Alturas variáveis", "Otimização de custo"],
      vantagens: ["Eficiência máxima", "Flexibilidade", "Custo customizado"]
    }
  ];

  const metodologia = [
    { etapa: "Diagnóstico", d: "Análise profunda do laudo de sondagem e topografia.", icon: Search },
    { etapa: "Dimensionamento", d: "Cálculo técnico visando o melhor custo-benefício.", icon: Settings },
    { etapa: "Execução Técnica", d: "Acompanhamento rigoroso por engenheiros especialistas.", icon: Building },
    { etapa: "QA & Monitoramento", d: "Entrega com garantia de performance e segurança.", icon: Shield }
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
              Engenharia sob Demanda
            </Badge>
            <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
              Soluções <span className="text-secondary">Customizadas</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
              Quando as soluções convencionais não atendem, a B2A aplica inteligência
              geotécnica para desenvolver contenções especiais e híbridas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary-glow text-white h-16 px-10 rounded-full font-bold uppercase tracking-wide shadow-xl" asChild>
                <NavLink to="/contato">Consultoria Técnica</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter leading-tight">
              Versatilidade em <br /><span className="text-secondary italic">Geotecnia</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O solo não é uma ciência exata, e cada terreno apresenta desafios únicos. Na <strong>B2A Engenharia</strong>, não nos limitamos a uma única técnica. Nosso diferencial é a capacidade de combinar <strong>Parede Diafragma</strong>, <strong>Estacas Prancha</strong> e tratamentos de solo para entregar a obra mais segura no menor prazo possível.
            </p>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Grid de Soluções */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tiposContencao.map((tipo, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-2xl transition-all rounded-[32px] overflow-hidden group bg-white">
                <CardHeader className="p-8 group-hover:bg-primary transition-colors">
                  <div className="w-16 h-16 bg-primary/5 text-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                    <tipo.icon size={32} />
                  </div>
                  <CardTitle className="text-primary group-hover:text-white font-black uppercase tracking-tight text-xl">{tipo.titulo}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 group-hover:bg-primary transition-colors">
                  <p className="text-sm text-muted-foreground group-hover:text-white/70 leading-relaxed mb-6">{tipo.descricao}</p>
                  <div className="space-y-4">
                    <div className="pt-4 border-t border-gray-100 group-hover:border-white/10">
                      <h4 className="font-black text-[10px] uppercase text-primary group-hover:text-white mb-2 tracking-widest">Aplicações</h4>
                      <ul className="text-[11px] text-muted-foreground group-hover:text-white/60 space-y-1">
                        {tipo.aplicacoes.map((app, i) => (
                          <li key={i} className="flex items-center">• {app}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia de Seleção */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-16">O Processo <span className="text-secondary italic">B2A</span></h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {metodologia.map((m, i) => (
              <div key={i} className="space-y-6 group">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-[30px] flex items-center justify-center mx-auto border border-white/20 group-hover:bg-secondary group-hover:border-secondary transition-all">
                  <m.icon className="text-secondary group-hover:text-white" size={32} />
                </div>
                <h3 className="font-black text-white uppercase tracking-tight text-lg">{m.etapa}</h3>
                <p className="text-white/50 text-[11px] leading-relaxed px-4">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-white text-center">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-3xl md:text-6xl font-black text-primary uppercase tracking-tighter leading-none">Desafio <span className="text-secondary">Especial?</span></h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              Traga o seu problema geotécnico. Nós desenvolvemos a solução com viabilidade técnica e financeira.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary-glow text-white h-16 px-16 rounded-full text-lg font-bold shadow-2xl transition-all" asChild>
                <NavLink to="/contato">Falar com um Especialista</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OutrasContencoes;
