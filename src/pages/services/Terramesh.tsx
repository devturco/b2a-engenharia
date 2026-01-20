import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import {
  Trees,
  CheckCircle,
  Droplets,
  Leaf,
  Award,
  Phone,
  Settings,
  Shield,
  Sprout,
  ArrowRight
} from "lucide-react";
import { useEffect } from "react";

const Terramesh = () => {
  useEffect(() => {
    document.title = "Terramesh | Contenção em Solo Reforçado Verde | B2A";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Especialistas em Terramesh. Sistema de solo reforçado com face em gabião para contenção de encostas e taludes. Engenharia verde de alta performance.");
    }
  }, []);

  const vantagens = [
    { title: "Maciço Estrutural", desc: "Forma um bloco monolítico de solo reforçado altamente estável.", icon: Shield },
    { title: "Estética Natural", desc: "A face em rede metálica permite revegetação total em poucos meses.", icon: Sprout },
    { title: "Flexibilidade", desc: "Acomoda-se a deformações do terreno sem trincar ou falhar.", icon: Settings }
  ];

  const fasesEvolucao = [
    { fase: "Instalação", d: "Colocação dos módulos de rede e reforços metálicos.", icon: Settings },
    { fase: "Enchimento", d: "Compactação de solo e inserção de substrato vegetal.", icon: Droplets },
    { fase: "Maturação", d: "Crescimento da vegetação e integração total à paisagem.", icon: Sprout }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 grayscale brightness-75">
          <img src="/images/aeroporto.png" className="w-full h-full object-cover scale-105" alt="Background" />
        </div>
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-secondary text-white mb-6 px-4 py-1.5 uppercase font-black tracking-widest">
              Engenharia Socioambiental
            </Badge>
            <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
              Sistema <span className="text-secondary">Terramesh</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
              A evolução das contenções: solo reforçado com face verde, unindo a força do aço
              à resiliência da vegetação nativa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary-glow text-white h-16 px-10 rounded-full font-bold uppercase tracking-wide shadow-xl" asChild>
                <NavLink to="/contato">Solicitar Projeto Verde</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introdução Técnica */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter leading-tight">
                Contenção que <br /><span className="text-secondary italic">Cresce com o Tempo</span>
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                <p>
                  O <strong>Terramesh</strong> é um sistema modular exclusivo para contenção de solo reforçado. Sua estrutura é composta por um reforço metálico em malha hexagonal de dupla torção, que se estende para dentro do maciço, garantindo estabilidade interna superior.
                </p>
                <p>
                  Diferente de muros rígidos, o Terramesh é permeável e flexível, tornando-se praticamente invisível após a maturação da vegetação, o que o torna a escolha definitiva para rodovias, ferrovias e condomínios de alto padrão.
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-6 pt-4">
                {vantagens.map((v, i) => (
                  <div key={i} className="flex flex-col items-center text-center space-y-3 p-4">
                    <div className="p-4 bg-primary/5 text-secondary rounded-2xl group-hover:bg-primary group-hover:text-white transition-all">
                      <v.icon size={32} />
                    </div>
                    <h4 className="font-black text-primary text-xs uppercase tracking-tight">{v.title}</h4>
                    <p className="text-[10px] text-muted-foreground leading-tight">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/5 rounded-[40px] rotate-1"></div>
              <img
                src="/images/aeroporto.png"
                alt="Obra Terramesh Verde"
                className="rounded-[32px] shadow-2xl relative z-10 w-full min-h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-xl z-20 border border-gray-100 hidden md:block">
                <div className="flex items-center space-x-4 mb-4">
                  <Leaf className="text-secondary h-8 w-8" />
                  <span className="font-black text-primary uppercase tracking-tighter text-xl">Bioengenharia</span>
                </div>
                <p className="text-xs text-muted-foreground max-w-[200px]">Redução de até 90% no impacto visual comparado a muros de concreto.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processo de Maturação */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tighter mb-4">Ciclo de Maturação</h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {fasesEvolucao.map((f, i) => (
              <div key={i} className="relative group text-center">
                <div className="w-24 h-24 bg-white border-2 border-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-secondary transition-colors relative z-10">
                  <f.icon className="h-10 w-10 text-primary group-hover:text-secondary transition-colors" />
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-full h-[2px] bg-primary/5 z-0"></div>
                )}
                <h3 className="font-black text-primary uppercase tracking-tight mb-2">{f.fase}</h3>
                <p className="text-sm text-muted-foreground px-4">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Especificação Técnica */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <Badge className="bg-secondary text-white mb-6">Padrão B2A</Badge>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-none">Rigor Técnico <br /> <span className="text-secondary italic">Inquestionável</span></h2>
              <div className="space-y-4">
                {[
                  "Malha de dupla torção com galvanização Galmac® de alta durabilidade.",
                  "Revestimento em polímero para proteção contra raios UV e abrasão.",
                  "Reforços estruturais integrados (Grelhas ou Redes).",
                  "Dimensionamento rigoroso seguindo normas ABNT e internacionais.",
                  "Monitoramento de performance pós-execução."
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0" />
                    <span className="text-white/80 font-bold text-sm uppercase tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl p-12 rounded-[40px] border border-white/20">
              <h3 className="text-2xl font-black text-white uppercase mb-8">Diferenciais</h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Award className="text-secondary h-10 w-10" />
                  <p className="text-white font-black text-2xl">NBR 16920</p>
                  <p className="text-white/50 text-[10px] uppercase font-bold tracking-widest">Normatização</p>
                </div>
                <div className="space-y-2">
                  <Droplets className="text-secondary h-10 w-10" />
                  <p className="text-white font-black text-2xl">100%</p>
                  <p className="text-white/50 text-[10px] uppercase font-bold tracking-widest">Permeável</p>
                </div>
                <div className="space-y-2">
                  <Shield className="text-secondary h-10 w-10" />
                  <p className="text-white font-black text-2xl">120 ANOS</p>
                  <p className="text-white/50 text-[10px] uppercase font-bold tracking-widest">Vida Útil</p>
                </div>
                <div className="space-y-2">
                  <Sprout className="text-secondary h-10 w-10" />
                  <p className="text-white font-black text-2xl">CLEAN-TECH</p>
                  <p className="text-white/50 text-[10px] uppercase font-bold tracking-widest">Tecnologia Limpa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-white text-center">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-3xl md:text-6xl font-black text-primary uppercase tracking-tighter leading-none">Proteja seu Talude <br /> com <span className="text-secondary">Inteligência Verde</span></h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              Consulte nossa engenharia técnica para viabilizar projetos de Terramesh com máxima segurança e beleza estética.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary-glow text-white h-16 px-16 rounded-full text-lg font-bold shadow-2xl transition-all" asChild>
                <NavLink to="/contato">Solicitar Análise de Viabilidade</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terramesh;
