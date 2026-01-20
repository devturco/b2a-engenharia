import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import {
  Shield,
  Mountain,
  Anchor,
  Settings,
  CheckCircle,
  ArrowRight,
  FileText,
  Award,
  Phone,
  LayoutDashboard,
  HardHat,
  Scale
} from "lucide-react";
import { useEffect } from "react";

const ProjetosContencao = () => {
  useEffect(() => {
    document.title = "Projetos de Contenção | Consultoria e Engenharia Geotécnica | B2A";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Projetos executivos de contenção, estabilização de taludes e encostas. Consultoria técnica especializada com conformidade normativa NBR 11682.");
    }
  }, []);

  const disciplinas = [
    {
      titulo: "Estudos de Estabilidade",
      descricao: "Análise global e local por métodos de equilíbrio limite e elementos finitos.",
      icon: LayoutDashboard
    },
    {
      titulo: "Projetos Executivos",
      descricao: "Detalhamento completo de armaduras, geometria e especificações de tirantes/grampos.",
      icon: FileText
    },
    {
      titulo: "Consultoria Normativa",
      descricao: "Adequação de projetos às normas DNIT e ABNT (NBR 11682, 5629).",
      icon: Scale
    },
    {
      titulo: "Apoio à Fiscalização",
      descricao: "Supervisão técnica de campo para garantir a conformidade com o projeto.",
      icon: HardHat
    }
  ];

  const tiposContencao = [
    {
      titulo: "Cortinas Atirantadas",
      descricao: "Cálculo de estruturas ancoradas para contenções de grande altura.",
      icon: Shield,
      href: "/servicos/cortina-atirantada"
    },
    {
      titulo: "Solo Grampeado",
      descricao: "Dimensionamento de grampos e concreto projetado para taludes.",
      icon: Mountain,
      href: "/servicos/solo-grampeado"
    }
  ];

  const diferenciais = [
    { title: "Software Avançado", desc: "Utilizamos as ferramentas mais modernas do mercado para simulações reais.", icon: Settings },
    { title: "Viabilidade", desc: "Nossos projetos focam na otimização de materiais e facilidade executiva.", icon: Award },
    { title: "Segurança", desc: "Rigor total nos coeficientes de segurança exigidos por norma.", icon: Shield }
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
              Inteligência Estrutural
            </Badge>
            <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
              Projetos de <span className="text-secondary">Engenharia</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
              Do estudo de solo ao detalhamento executivo. Criamos soluções de contenção
              que equilibram segurança absoluta e eficiência financeira.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary-glow text-white h-16 px-10 rounded-full font-bold uppercase tracking-wide shadow-xl" asChild>
                <NavLink to="/contato">Solicitar Orçamentos de Projeto</NavLink>
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
                Engenharia <br /><span className="text-secondary italic">Consultiva</span>
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                <p>
                  Antes de mobilizar uma obra, a <strong>B2A Engenharia</strong> foca no planejamento técnico. Nossos projetos de contenção não são apenas "desenhos", são estudos profundos de interação solo-estrutura.
                </p>
                <p>
                  Trabalhamos para reduzir o consumo de materiais sem comprometer a estabilidade, entregando um <strong>Projeto Executivo</strong> pronto para aprovação em órgãos reguladores (DNIT, Prefeituras, Concessionárias) e execução direta.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                {diferenciais.map((d, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-2xl group hover:bg-primary transition-all duration-300">
                    <div className="p-3 bg-white text-secondary rounded-xl shadow-sm mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                      <d.icon size={28} />
                    </div>
                    <h4 className="font-black text-primary group-hover:text-white text-xs uppercase mb-2">{d.title}</h4>
                    <p className="text-[10px] text-muted-foreground group-hover:text-white/70 leading-tight">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-[40px] rotate-1"></div>
              <img
                src="/images/aeroporto.png"
                alt="Projeto de Engenharia"
                className="rounded-[32px] shadow-2xl relative z-10 w-full min-h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Disciplinas */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tighter mb-4">Nossa Atuação</h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {disciplinas.map((d, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-xl transition-all rounded-3xl p-8 bg-white group">
                <CardHeader className="p-0 mb-6">
                  <div className="w-12 h-12 bg-primary/5 text-secondary rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors">
                    <d.icon size={24} />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <CardTitle className="text-primary font-black uppercase tracking-tight mb-4 text-sm">{d.titulo}</CardTitle>
                  <p className="text-xs text-muted-foreground leading-relaxed">{d.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços Relacionados */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-secondary border-secondary">Especialidades B2A</Badge>
            <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tighter">Projetos de <span className="text-secondary italic">Maior Demanda</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tiposContencao.map((tipo, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-2xl transition-all rounded-[32px] overflow-hidden group">
                <CardHeader className="p-8 bg-gray-50 group-hover:bg-primary transition-colors">
                  <div className="flex items-center justify-between">
                    <tipo.icon size={32} className="text-secondary group-hover:text-white" />
                    <ArrowRight size={20} className="text-primary group-hover:text-white opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                  <CardTitle className="pt-6 text-primary group-hover:text-white font-black uppercase tracking-tight">{tipo.titulo}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 group-hover:bg-primary transition-colors">
                  <p className="text-sm text-muted-foreground group-hover:text-white/70">{tipo.descricao}</p>
                  <Button variant="link" className="p-0 mt-6 text-secondary group-hover:text-white font-bold" asChild>
                    <NavLink to={tipo.href}>Ver detalhes técnicos</NavLink>
                  </Button>
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
            <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">Antecipe Soluções, <span className="text-secondary">Evite Retrabalho</span></h2>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              Consulte nossa engenharia antes de iniciar sua obra para garantir o melhor dimensionamento técnico.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary-glow text-white h-16 px-16 rounded-full text-lg font-bold shadow-2xl transition-all" asChild>
                <NavLink to="/contato">Agendar Consulta Técnica</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjetosContencao;
