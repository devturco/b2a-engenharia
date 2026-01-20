import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import {
  Anchor,
  CheckCircle,
  Waves,
  Shield,
  Settings,
  Phone,
  Building,
  Award,
  ArrowRight,
  TrendingUp,
  Globe
} from "lucide-react";
import { useEffect } from "react";

const ContencoesMartitimas = () => {
  useEffect(() => {
    document.title = "Contenções Marítimas & Costeiras | Expansão Técnica | B2A";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "B2A Engenharia em expansão para o setor marítimo. Soluções em enrocamento, gabião marítimo e proteção costeira. Inovação em geotecnia submarina.");
    }
  }, []);

  const desafiosMaritimos = [
    { title: "Ação Hidrodinâmica", desc: "Dimensionamento para o impacto constante de ondas e marés.", icon: Waves },
    { title: "Salinidade Crítica", desc: "Materiais com proteção extrema contra corrosão galvânica.", icon: Shield },
    { title: "Logística Subaquática", desc: "Metodologias de execução em ambientes de baixa visibilidade.", icon: Anchor }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 contrast-125">
          <img src="/images/aeroporto.png" className="w-full h-full object-cover grayscale" alt="Background" />
        </div>
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-secondary text-white mb-6 px-4 py-1.5 uppercase font-black tracking-widest animate-pulse">
              Nova Fronteira Técnica
            </Badge>
            <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
              Engenharia <span className="text-secondary">Marítima</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
              Expandindo nossa excelência em geotecnia para os desafios complexos da
              zona costeira e infraestruturas portuárias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary-glow text-white h-16 px-10 rounded-full font-bold uppercase tracking-wide shadow-xl" asChild>
                <NavLink to="/contato">Manifestar Interesse Técnico</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Visão de Futuro */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter leading-tight">
                Além da <span className="text-secondary italic">Linha d'Água</span>
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                <p>
                  A <strong>B2A Engenharia</strong> está projetando sua sólida experiência em contenções terrestres para o setor <strong>Offshore e Costeiro</strong>. Compreendemos que o mar exige um rigor técnico superior e materiais de resistência extrema.
                </p>
                <p>
                  Nossa equipe está em fase avançada de desenvolvimento de metodologias para enrocamentos, gabiões marítimos e proteção de taludes submarinos, consolidando uma nova vertical de serviços focada em portos, marinas e recuperação de orlas.
                </p>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex-1">
                  <Globe className="text-secondary mb-3" size={24} />
                  <p className="font-black text-primary text-[10px] uppercase">Padrão Internacional</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex-1">
                  <TrendingUp className="text-secondary mb-3" size={24} />
                  <p className="font-black text-primary text-[10px] uppercase">Inovação Costeira</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {desafiosMaritimos.map((d, i) => (
                <Card key={i} className="border-none shadow-xl hover:shadow-2xl transition-all group rounded-2xl p-6 bg-white overflow-hidden relative">
                  <div className="absolute right-0 top-0 w-24 h-24 bg-primary/5 rounded-bl-full group-hover:bg-primary/10 transition-colors"></div>
                  <div className="flex items-start space-x-6 relative z-10">
                    <div className="p-3 bg-primary text-white rounded-xl">
                      <d.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-black text-primary uppercase tracking-tight mb-1">{d.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{d.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise em Construção */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tighter mb-4">Portfólio em Desenvolvimento</h2>
          <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full mb-16"></div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { t: "Quebra-mares", d: "Estruturas de enrocamento para dissipação de energia.", i: Waves },
              { t: "Piers & Marinas", d: "Contenções verticais e proteção de berços.", i: Building },
              { t: "Dutos Submarinos", d: "Proteção de infraestrutura enterrada em leito marítimo.", i: Settings },
              { t: "Recuperação de Orlas", i: Globe, d: "Sistemas integrados para combate à erosão marinha." }
            ].map((p, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                <p className="text-secondary font-black text-4xl mb-4 group-hover:scale-110 transition-transform">0{i + 1}</p>
                <h3 className="font-black text-primary text-lg uppercase tracking-tight mb-2">{p.t}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-primary text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/4 h-full bg-secondary/10 -skew-x-12 -translate-x-1/2"></div>
        <div className="container px-4 relative z-10">
          <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">Antecipe o <span className="text-secondary">Futuro</span> da sua Obra Costeira</h2>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              Estamos buscando parceiros estratégicos para projetos piloto de alta complexidade em contenções marítimas.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary-glow text-white h-16 px-16 rounded-full text-lg font-bold shadow-2xl transition-all" asChild>
                <NavLink to="/contato">Falar com Gerente Técnico</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContencoesMartitimas;
