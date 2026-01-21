import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { WorkGallery } from "@/components/gallery/WorkGallery";
import { obras } from "@/data/obras";
import {
  CheckCircle,
  Shield,
  Settings,
  Users,
  FileText,
  Phone,
  Mountain,
  Award,
  ArrowRight,
  TrendingUp,
  Clock
} from "lucide-react";
import { useEffect } from "react";

const TerraArmada = () => {
  useEffect(() => {
    document.title = "Terra Armada | Engenharia Geotécnica & Contenções | B2A";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Especialistas em Terra Armada. Muros de solo reforçado com fitas metálicas e escamas de concreto. Solução definitiva para rodovias, ferrovias e mineração.");
    }
  }, []);

  const obraArcelor = obras.find(o => o.id === "arcelormittal-itatiaiuçu");
  const obraCorreios = obras.find(o => o.id === "correios-contagem");

  const servicos = [
    {
      titulo: "Projeto Executivo Detalhado",
      descricao: "Dimensionamento geotécnico e estrutural completo, seguindo as premissas da NBR 19286:2016.",
      icon: FileText
    },
    {
      titulo: "ECE (Elementos Construtivos)",
      descricao: "Fornecimento e especificação de fitas metálicas galvanizadas e acessórios de alta durabilidade.",
      icon: Settings
    },
    {
      titulo: "Mão de Obra Especializada",
      descricao: "Equipes treinadas para a montagem precisa do paramento frontal e compactação do solo reforçado.",
      icon: Users
    },
    {
      titulo: "Gestão de Escamas",
      descricao: "Supervisão da produção e logística das placas de concreto para garantir o perfeito encaixe.",
      icon: Mountain
    },
    {
      titulo: "Supervisão Técnica Especializada",
      descricao: "Acompanhamento integral por engenheiros geotécnicos, garantindo a fidelidade ao projeto.",
      icon: Shield
    }
  ];

  const beneficios = [
    { title: "Economia Estrutural", desc: "Redução de até 40% nos custos em relação a muros de gravidade em grandes alturas.", icon: TrendingUp },
    { title: "Velocidade Executiva", desc: "Montagem ágil que permite liberação rápida de frentes de trabalho em rodovias.", icon: Clock },
    { title: "Durabilidade Elevada", desc: "Vida útil superior a 70 anos com fitas metálicas de alta galvanização.", icon: Award }
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
              Tecnologia em Solo Reforçado
            </Badge>
            <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
              Terra <span className="text-secondary">Armada</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
              Liderança técnica em sistemas de contenção com escamas de concreto e fitas metálicas,
              garantindo estética superior e resistência inigualável.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary-glow text-white h-16 px-10 rounded-full font-bold uppercase tracking-wide shadow-xl" asChild>
                <NavLink to="/contato">Solicitar Orçamento Técnico</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introdução e Diferenciais */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter leading-tight">
                A Solução Definitiva para <br /><span className="text-secondary italic">Grandes Contenções</span>
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                <p>
                  A <strong>Terra Armada</strong> é um sistema de solo reforçado composto por escamas pré-moldadas de concreto, elementos de reforço linear metálicos (fitas galvanizadas) e aterro selecionado compactado.
                </p>
                <p>
                  Na <strong>B2A Engenharia</strong>, dominamos o ciclo completo desta tecnologia: do dimensionamento que otimiza o uso de aço à execução em campo com equipamentos de ponta.
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-6 pt-4">
                {beneficios.map((b, i) => (
                  <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary transition-all">
                    <b.icon className="h-8 w-8 text-secondary mb-4" />
                    <h3 className="font-bold text-primary text-sm mb-2 uppercase">{b.title}</h3>
                    <p className="text-xs leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-secondary/5 rounded-[40px] -rotate-2 group-hover:rotate-0 transition-transform"></div>
              <img
                src="/images/aeroporto.png"
                alt="Obra de Terra Armada"
                className="rounded-[32px] shadow-2xl relative z-10 w-full"
              />
              <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl z-20 border border-gray-100">
                <p className="text-primary font-black text-2xl leading-none">NBR 19286</p>
                <p className="text-muted-foreground text-xs font-bold uppercase mt-1">Conformidade Total</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Internos */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tighter mb-4">Escopo de Atuação</h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((s, i) => (
              <Card key={i} className="border-none shadow-xl hover:shadow-2xl transition-all group rounded-2xl overflow-hidden">
                <CardHeader className="bg-white pb-2 flex flex-row items-center space-x-4">
                  <div className="p-3 bg-primary/5 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <s.icon size={28} />
                  </div>
                  <CardTitle className="text-primary text-lg font-bold uppercase tracking-tight">{s.titulo}</CardTitle>
                </CardHeader>
                <CardContent className="bg-white">
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfólio de Obras */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter">Projetos <br /> de <span className="text-secondary italic">Destaque</span></h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Excelência técnica aplicada em projetos logísticos e industriais de alta complexidade.</p>
          </div>

          <div className="space-y-32">
            {obraArcelor && (
              <div className="relative">
                <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4">
                  <div>
                    <Badge variant="outline" className="text-secondary border-secondary mb-2 uppercase tracking-widest">{obraArcelor.category}</Badge>
                    <h3 className="text-3xl font-black text-primary uppercase tracking-tight">{obraArcelor.name}</h3>
                    <p className="text-muted-foreground font-medium">{obraArcelor.location}</p>
                  </div>
                  <NavLink to="/obras" className="text-primary font-bold hover:text-secondary flex items-center group">
                    Ver todos os projetos <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </NavLink>
                </div>
                <div className="shadow-3xl rounded-3xl overflow-hidden border-8 border-gray-50">
                  <WorkGallery workName={obraArcelor.name} images={obraArcelor.images} />
                </div>
              </div>
            )}

            {obraCorreios && (
              <div className="relative">
                <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4">
                  <div>
                    <Badge variant="outline" className="text-secondary border-secondary mb-2 uppercase tracking-widest">{obraCorreios.category}</Badge>
                    <h3 className="text-3xl font-black text-primary uppercase tracking-tight">{obraCorreios.name}</h3>
                    <p className="text-muted-foreground font-medium">{obraCorreios.location}</p>
                  </div>
                </div>
                <div className="shadow-3xl rounded-3xl overflow-hidden border-8 border-gray-50">
                  <WorkGallery workName={obraCorreios.name} images={obraCorreios.images} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ e Informações Técnicas */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-black text-primary uppercase tracking-tighter mb-8">Diferenciais <br /> Competitivos</h2>
              <div className="space-y-4">
                {[
                  "Mais de 13 anos de expertise em sistemas de solo reforçado.",
                  "Dimensionamento otimizado focado na redução de custo do cliente.",
                  "Parcerias estratégicas com fabricantes de fitas e escamas.",
                  "Zero índice de patologias em mais de 300 obras executadas.",
                  "Suporte total no ECE e licenciamento técnico."
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0" />
                    <span className="font-bold text-primary text-sm uppercase tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-black text-primary uppercase tracking-tighter mb-8 text-center lg:text-left">Dúvidas Técnicas</h2>
              <div className="space-y-4">
                {[
                  { q: "Qual o custo por m² da Terra Armada?", a: "O valor varia conforme a altura e cargas, mas é a solução mais econômica para muros acima de 6 metros de altura." },
                  { q: "Quais normas são seguidas?", a: "Principalmente a NBR 19286:2016 e manuais internacionais da FHWA para solo reforçado." },
                  { q: "A B2A fornece as escamas?", a: "Nós gerenciamos o fornecimento e garantimos que a produção siga os padrões de qualidade exigidos pelo projeto." }
                ].map((faq, i) => (
                  <details key={i} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                    <summary className="p-6 cursor-pointer font-bold text-primary flex justify-between items-center list-none group-open:bg-primary group-open:text-white transition-all">
                      {faq.q}
                      <ArrowRight size={18} className="group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="p-6 text-muted-foreground text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary-glow text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter">Viabilize seu projeto hoje</h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light">Solicite um estudo prévio de viabilidade técnica e econômica sem compromisso.</p>
          <Button size="lg" className="bg-secondary hover:bg-secondary-glow text-white h-16 px-16 rounded-full text-lg font-bold shadow-2xl transition-all active:scale-95" asChild>
            <NavLink to="/contato">Falar com um Especialista</NavLink>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default TerraArmada;
