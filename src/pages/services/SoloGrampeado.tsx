import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import {
  Mountain,
  CheckCircle,
  Settings,
  Shield,
  Award,
  FileText,
  Phone,
  Wrench,
  Zap,
  ShieldAlert
} from "lucide-react";
import { useEffect } from "react";

const SoloGrampeado = () => {
  useEffect(() => {
    document.title = "Solo Grampeado | Estabilização de Taludes | B2A Engenharia";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Especialistas em Solo Grampeado e Solo Grampeado Verde. Contenção de encostas com concreto projetado e grampos de aço. Segurança e economia.");
    }
  }, []);

  const vantagens = [
    { title: "Execução Ágil", desc: "Avanço rápido através de bancadas, ideal para cronogramas apertados.", icon: Zap },
    { title: "Baixo Custo", desc: "Economia de até 30% em relação a cortinas atirantadas quando aplicável.", icon: Shield },
    { title: "Versatilidade", desc: "Adapta-se a qualquer geometria de talude e tipos de solo coesivos.", icon: Wrench }
  ];

  const processoExecutivo = [
    {
      etapa: "Perfuração & Grampeamento",
      descricao: "Inserção de barras de aço CA-50 em furos injetados com calda de cimento.",
      icon: Wrench
    },
    {
      etapa: "Drenagem Profunda (DHP)",
      descricao: "Instalação de drenos para alívio da poropressão interna do maciço.",
      icon: FileText
    },
    {
      etapa: "Tela & Concreto Projetado",
      descricao: "Revestimento com tela eletrosoldada e aplicação de concreto via úmida ou seca.",
      icon: Shield
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 overflow-hidden">
          <img src="/images/aeroporto.png" className="w-full h-full object-cover grayscale" alt="Background" />
        </div>
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-secondary text-white mb-6 px-4 py-1.5 uppercase font-black tracking-widest">
              Geotecnia Avançada
            </Badge>
            <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
              Solo <span className="text-secondary">Grampeado</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
              A solução mais eficiente para estabilização de encostas rodoviárias e urbanas,
              combinando reforço metálico in-situ e revestimento de alta resistência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary-glow text-white h-16 px-10 rounded-full font-bold uppercase tracking-wide shadow-xl" asChild>
                <NavLink to="/contato">Falar com um Especialista</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introdução Técnica */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                <img src="/images/aeroporto.png" alt="Solo Grampeado em Execução" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-black text-3xl">DNIT 379/2022</p>
                  <p className="text-xs uppercase font-bold tracking-widest opacity-80">Norma de Referência</p>
                </div>
              </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter">
                Reforço de Maciços <br /><span className="text-secondary italic">In-Situ</span>
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                <p>
                  O <strong>Solo Grampeado</strong> é uma técnica de melhoria de solos que utiliza a inserção de grampos (barras de aço) passivos, injetados com calda de cimento, para criar um maciço reforçado estável.
                </p>
                <p>
                  Ideal para cortes rodoviários e contenções urbanas, esta solução oferece uma execução descendente que não requer grandes áreas de canteiro, adaptando-se perfeitamente a geometrias complexas.
                </p>
              </div>
              <div className="grid gap-4">
                {vantagens.map((v, i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-primary transition-all">
                    <div className="p-3 bg-white rounded-xl text-secondary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                      <v.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-sm uppercase tracking-tight">{v.title}</h4>
                      <p className="text-xs text-muted-foreground">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processo Executivo */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tighter mb-4">Metodologia Executiva</h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {processoExecutivo.map((p, i) => (
              <Card key={i} className="border-none shadow-xl hover:shadow-2xl transition-all group rounded-2xl overflow-hidden text-center p-8 bg-white">
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-full flex items-center justify-center font-black text-2xl mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  0{i + 1}
                </div>
                <h3 className="font-black text-primary text-lg uppercase tracking-tight mb-4">{p.etapa}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.descricao}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Especificações Técnicas */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="bg-primary rounded-[40px] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">Rigor Técnico <br /> e Qualidade</h2>
                <div className="space-y-4">
                  {[
                    "Aço CA-50 de alta resistência para grampos.",
                    "Calda de cimento com fator A/C controlado.",
                    "Concreto Projetado via úmida para menor reflexão.",
                    "DHP (Drenos Horizontais Profundos) dimensionados.",
                    "Ensaios de arrancamento conforme NBR 11682."
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-4 text-white/90">
                      <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0" />
                      <span className="font-bold text-sm uppercase tracking-widest">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur p-8 rounded-3xl border border-white/20 text-center">
                  <Award className="h-10 w-10 text-secondary mx-auto mb-4" />
                  <p className="text-white font-black text-2xl">FHWA</p>
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Padrão Internacional</p>
                </div>
                <div className="bg-white/10 backdrop-blur p-8 rounded-3xl border border-white/20 text-center">
                  <ShieldAlert className="h-10 w-10 text-secondary mx-auto mb-4" />
                  <p className="text-white font-black text-2xl">100%</p>
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Fator de Segurança</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-white text-center">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter">Sua encosta precisa <br /> de estabilidade?</h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Consulte nossa equipe de engenharia para um projeto de Solo Grampeado otimizado e seguro.
              Atuamos em todo o território nacional.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-glow text-white h-16 px-16 rounded-full text-lg font-bold shadow-2xl transition-all" asChild>
                <NavLink to="/contato">Solicitar Orçamento</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SoloGrampeado;
