import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import {
  Shield,
  CheckCircle,
  Settings,
  Anchor,
  Award,
  FileText,
  Phone,
  Wrench,
  Building,
  Target,
  Zap,
  ArrowRight
} from "lucide-react";
import { useEffect } from "react";

const CortinaAtirantada = () => {
  useEffect(() => {
    document.title = "Cortina Atirantada | Contenções de Alta Performance | B2A";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Soluções definitivas em Cortina Atirantada. Tirantes ativos protendidos para grandes alturas e cargas. Engenharia geotécnica de precisão.");
    }
  }, []);

  const vantagens = [
    { title: "Grandes Cargas", desc: "Suporta empuxos elevados em taludes de grande altura.", icon: Zap },
    { title: "Estrutura Definitiva", desc: "Longa vida útil com tirantes protegidos contra corrosão.", icon: Shield },
    { title: "Otimização de Espaço", desc: "Ideal para subsolos e áreas com restrição geométrica.", icon: Target }
  ];

  const componentesEstruturais = [
    {
      titulo: "Parede de Concreto",
      descricao: "Elemento vertical rígido para distribuição dos esforços dos tirantes.",
      icon: Building
    },
    {
      titulo: "Tirantes Ativos",
      descricao: "Monocordoalhas ou barras de aço de alta resistência protendidas.",
      icon: Anchor
    },
    {
      titulo: "Células de Carga",
      descricao: "Monitoramento constante da tensão para garantir estabilidade.",
      icon: Settings
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 grayscale scale-110">
          <img src="/images/aeroporto.png" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-secondary text-white mb-6 px-4 py-1.5 uppercase font-black tracking-widest">
              Engenharia Pesada
            </Badge>
            <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
              Cortina <span className="text-secondary">Atirantada</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
              A resposta técnica para contenções de escala monumental, utilizando tirantes ativos
              protendidos que garantem estabilidade absoluta sob as condições mais severas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary-glow text-white h-16 px-10 rounded-full font-bold uppercase tracking-wide shadow-xl" asChild>
                <NavLink to="/contato">Solicitar Estudo Técnico</NavLink>
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
              <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter">
                Estabilidade <br /><span className="text-secondary italic">Através da Protensão</span>
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                <p>
                  A <strong>Cortina Atirantada</strong> é uma das técnicas mais robustas da geotecnia moderna. Diferente de contenções passivas, ela utiliza tirantes que são "ativados" através da protensão, transferindo as cargas para as camadas mais profundas e resistentes do terreno.
                </p>
                <p>
                  Na <strong>B2A Engenharia</strong>, combinamos o rigor da norma <strong>NBR 5629</strong> com técnicas avançadas de perfuração e injeção, entregando estruturas que são referência em segurança e durabilidade.
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-6 pt-4">
                {vantagens.map((v, i) => (
                  <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary transition-all">
                    <v.icon className="h-8 w-8 text-secondary mb-4" />
                    <h3 className="font-bold text-primary text-sm mb-2 uppercase">{v.title}</h3>
                    <p className="text-xs leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-secondary/5 rounded-[40px] -rotate-2 group-hover:rotate-0 transition-transform"></div>
              <img
                src="/images/aeroporto.png"
                alt="Execução de Tirantes"
                className="rounded-[32px] shadow-2xl relative z-10 w-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-10 left-10 bg-white/95 backdrop-blur p-6 rounded-2xl shadow-xl z-20 border border-gray-100 text-center">
                <p className="text-primary font-black text-3xl leading-none">NBR 5629</p>
                <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest mt-1">Conformidade Total</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Componentes estruturais */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tighter mb-4">Anatomia do Sistema</h2>
          <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full mb-16"></div>
          <div className="grid md:grid-cols-3 gap-8">
            {componentesEstruturais.map((c, i) => (
              <Card key={i} className="border-none shadow-xl hover:shadow-2xl transition-all group rounded-[32px] overflow-hidden p-10 bg-white">
                <div className="p-5 bg-primary/5 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all w-fit mx-auto mb-8">
                  <c.icon size={36} />
                </div>
                <h3 className="font-black text-primary text-xl uppercase tracking-tight mb-4">{c.titulo}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.descricao}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Especificações e Padrões */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 -skew-x-12 translate-x-1/4"></div>
        <div className="container px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Padrões de <br /> Classe <span className="text-secondary italic">Mundial</span></h2>
              <div className="space-y-4">
                {[
                  "Aço CP-190 RB de alta resistência para tirantes.",
                  "Sistema de proteção anticorrosiva tripla.",
                  "Ensaio de Recepção em 100% dos tirantes ativos.",
                  "Monitoramento remoto de cargas (opcional).",
                  "Experiência com tirantes de carga superior a 150tf."
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0" />
                    <span className="text-white/90 font-bold text-sm uppercase tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl p-12 rounded-[40px] border border-white/20">
              <h3 className="text-2xl font-black text-white uppercase mb-8">Etapas Executivas</h3>
              <div className="space-y-6">
                {[
                  { t: "Furação", d: "Perfuração com roto-percussão em solo ou rocha." },
                  { t: "Montagem", d: "Inserção do feixe de cordoalhas com espaçadores." },
                  { t: "Injeção", d: "Preenchimento do trecho de ancoragem com calda de cimento." },
                  { t: "Protensão", d: "Aplicação controlada de carga via macacos hidráulicos." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-secondary font-black text-2xl opacity-50">0{i + 1}</span>
                    <div>
                      <h4 className="text-white font-bold uppercase text-sm mb-1">{step.t}</h4>
                      <p className="text-white/60 text-xs leading-relaxed">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-white text-center">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-3xl md:text-6xl font-black text-primary uppercase tracking-tighter leading-none">Desafios Gigantes <br /> Exigem <span className="text-secondary">Tirantes</span></h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              Não comprometa a segurança da sua obra. Traga seu desafio para quem entende de contenções definitivas de alta performance.
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

export default CortinaAtirantada;
