import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import {
  Settings,
  CheckCircle,
  Droplets,
  Trees,
  Award,
  Phone,
  Recycle,
  Shield,
  Zap,
  Mountain
} from "lucide-react";
import { useEffect } from "react";
import { WorkGallery } from "@/components/gallery/WorkGallery";

const Gabiao = () => {
  useEffect(() => {
    document.title = "Gabião | Contenções Flexíveis e Drenantes | B2A";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Especialistas em estruturas de Gabião. Contenções flexíveis, permeáveis e sustentáveis para proteção de margens e encostas. Qualidade B2A.");
    }
  }, []);

  const diferenciais = [
    { title: "Permeabilidade", desc: "Drenagem natural que elimina a pressão hidrostática.", icon: Droplets },
    { title: "Flexibilidade", desc: "Acomoda recalques do solo sem perder a integridade.", icon: Settings },
    { title: "Sustentabilidade", desc: "Baixo impacto visual e permite a revegetação natural.", icon: Trees }
  ];

  const tiposGabiao = [
    {
      tipo: "Gabião Caixa",
      descricao: "Muros de gravidade para contenção de encostas e barragens.",
      icon: Shield
    },
    {
      tipo: "Gabião Colchão",
      descricao: "Proteção de canais, margens e taludes contra erosão.",
      icon: Droplets
    },
    {
      tipo: "Gabião Saco",
      descricao: "Obras emergenciais e fundações subaquáticas.",
      icon: Zap
    }
  ];

  const images = []; // Adicionar se houver imagens específicas ou manter vazio

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 grayscale contrast-125">
          <img src="/images/aeroporto.png" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-secondary text-white mb-6 px-4 py-1.5 uppercase font-black tracking-widest">
              Contenção Ecológica
            </Badge>
            <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
              Muros de <span className="text-secondary">Gabião</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
              A harmonia perfeita entre engenharia e natureza: contenções flexíveis e permeáveis
              que se tornam parte integrante da paisagem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary-glow text-white h-16 px-10 rounded-full font-bold uppercase tracking-wide shadow-xl" asChild>
                <NavLink to="/contato">Solicitar Orçamento</NavLink>
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
                <img src="/images/aeroporto.png" alt="Obra em Gabião" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent"></div>
              </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter leading-tight">
                Eficiência que <br /><span className="text-secondary italic">Respira</span>
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                <p>
                  O <strong>Gabião</strong> é uma estrutura armada, flexível e drenante, composta por gaiolas de malha hexagonal de dupla torção, preenchidas com pedras de graduação específica.
                </p>
                <p>
                  Sua principal característica é a permeabilidade, o que o torna a solução ideal para contenções em cursos d'água e locais com forte presença de umidade, eliminando a necessidade de sistemas complexos de drenagem profunda.
                </p>
              </div>
              <div className="grid gap-4">
                {diferenciais.map((d, i) => (
                  <div key={i} className="flex items-center space-x-5 p-5 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-primary transition-all">
                    <div className="p-3 bg-white rounded-xl text-secondary shadow-sm group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                      <d.icon size={28} />
                    </div>
                    <div>
                      <h4 className="font-black text-primary text-sm uppercase tracking-tight">{d.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Solução */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tighter mb-4">Modelos de Estrutura</h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tiposGabiao.map((t, i) => (
              <Card key={i} className="border-none shadow-xl hover:shadow-2xl transition-all group rounded-3xl overflow-hidden text-center p-10 bg-white">
                <div className="w-20 h-20 bg-primary/5 text-primary rounded-full flex items-center justify-center font-black text-3xl mx-auto mb-8 group-hover:scale-110 transition-transform">
                  <t.icon size={36} />
                </div>
                <h3 className="font-black text-primary text-xl uppercase tracking-tight mb-4">{t.tipo}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.descricao}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rigor Técnico */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="bg-primary rounded-[40px] p-12 md:p-20 relative overflow-hidden shadow-3xl">
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-none">Especificações <br /> de Qualidade</h2>
                <div className="space-y-4">
                  {[
                    "Arame com galvanização pesada ou revestimento em PVC.",
                    "Malha de dupla torção que não desfia em caso de ruptura.",
                    "Pedras de alta densidade e resistência à compressão.",
                    "Execução rigorosa com amarrações manuais precisas.",
                    "Dimensionamento conforme NBR 11682."
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-4">
                      <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0" />
                      <span className="text-white/80 font-bold text-sm uppercase tracking-wide leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-md p-10 rounded-[32px] border border-white/20 text-center">
                  <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <p className="text-white font-black text-4xl leading-none">50+</p>
                  <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mt-2">Anos de Vida Útil</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-10 rounded-[32px] border border-white/20 text-center">
                  <Recycle className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <p className="text-white font-black text-4xl leading-none">100%</p>
                  <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mt-2">Drenante</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-white text-center">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-3xl md:text-6xl font-black text-primary uppercase tracking-tighter leading-none">Onde a Engenharia <br /> encontra a <span className="text-secondary">Natureza</span></h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Consulte nossa equipe especializada para projetos de contenção em Gabião que aliam estética e segurança absoluta.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-glow text-white h-16 px-16 rounded-full text-lg font-bold shadow-2xl transition-all" asChild>
                <NavLink to="/contato">Falar com Especialista</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gabiao;
