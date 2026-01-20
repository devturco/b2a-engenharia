import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { WorkGallery } from "@/components/gallery/WorkGallery";
import {
  CheckCircle,
  Shield,
  Settings,
  Users,
  FileText,
  Phone,
  Truck,
  Layers,
  ArrowRight,
  TrendingUp,
  Scaling
} from "lucide-react";
import { useEffect } from "react";

const MuroFlexao = () => {
  useEffect(() => {
    document.title = "Muros a Flexão | Contenções em Concreto Armado | B2A";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Especialistas em Muros a Flexão. Contenções esbeltas em concreto armado para rodovias e áreas urbanas. Fornecimento de formas metálicas e execução.");
    }
  }, []);

  const servicos = [
    {
      titulo: "Execução com Formas Metálicas",
      descricao: "Utilização de sistemas modulares que garantem acabamento superior e rapidez.",
      icon: Settings
    },
    {
      titulo: "Projeto Estrutural Otimizado",
      descricao: "Cálculo preciso para redução de consumo de aço e concreto sem perder a segurança.",
      icon: Layers
    },
    {
      titulo: "Venda e Locação de Sistemas",
      descricao: "Disponibilizamos o conjunto de formas B2A para agilizar sua obra própria.",
      icon: Truck
    },
    {
      titulo: "Consultoria em Fundações",
      descricao: "Análise técnica para garantir a perfeita interface muro-solo em diversos terrenos.",
      icon: Shield
    },
    {
      titulo: "Gestão de Qualidade",
      descricao: "Rigoroso controle tecnológico do concreto e posicionamento das armaduras.",
      icon: Users
    }
  ];

  const diferenciais = [
    { title: "Esbeltez Técnica", desc: "Muros mais finos que os de gravidade, economizando espaço e volume.", icon: Scaling },
    { title: "Rapidez Executiva", desc: "Ciclos de concretagem ágeis com nossas formas exclusivas.", icon: TrendingUp },
    { title: "Estética Superior", desc: "Concreto aparente de alta qualidade, ideal para áreas urbanas.", icon: Shield }
  ];

  const images = [
    "IMG-20250709-WA0192.jpg",
    "IMG-20250710-WA0242.jpg",
    "IMG-20250711-WA0003.jpg",
    "IMG-20250712-WA0011.jpg",
    "IMG-20250712-WA0012.jpg",
    "IMG-20250713-WA0039.jpg"
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
              Infraestrutura Urbana & Rodoviária
            </Badge>
            <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
              Muros a <span className="text-secondary">Flexão</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
              Contenções esbeltas em concreto armado com o diferencial das formas metálicas modulares B2A,
              garantindo precisão milimétrica e cronogramas antecipados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary-glow text-white h-16 px-10 rounded-full font-bold uppercase tracking-wide shadow-xl" asChild>
                <NavLink to="/contato">Solicitar Proposta</NavLink>
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
                Eficiência em <br /><span className="text-secondary italic">Concreto Armado</span>
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                <p>
                  Os <strong>Muros a Flexão</strong> são estruturas de contenção que utilizam a resistência do concreto armado para suportar as pressões laterais do solo. Sua principal vantagem é a esbeltez, permitindo contenções em locais com restrição de espaço.
                </p>
                <p>
                  Na <strong>B2A Engenharia</strong>, elevamos o padrão desta solução através do uso de <strong>formas metálicas modulares</strong>, eliminando o desperdício de madeira e garantindo um acabamento de concreto aparente impecável.
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-6 pt-4">
                {diferenciais.map((d, i) => (
                  <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary transition-all">
                    <d.icon className="h-8 w-8 text-secondary mb-4" />
                    <h3 className="font-bold text-primary text-sm mb-2 uppercase">{d.title}</h3>
                    <p className="text-xs leading-relaxed">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-secondary/5 rounded-[40px] -rotate-2 group-hover:rotate-0 transition-transform"></div>
              <img
                src="/images/aeroporto.png"
                alt="Execução de Muro a Flexão"
                className="rounded-[32px] shadow-2xl relative z-10 w-full"
              />
              <div className="absolute top-10 right-10 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg z-20 border border-gray-100 text-center">
                <span className="text-primary font-black block">FORMA B2A</span>
                <span className="text-[10px] text-muted-foreground uppercase font-bold">Tecnologia Própria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Escopo de Atuação */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tighter mb-4">Soluções Completas</h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {servicos.map((s, i) => (
              <Card key={i} className="border-none shadow-xl hover:shadow-2xl transition-all group rounded-2xl overflow-hidden p-8 bg-white">
                <div className="p-4 bg-primary/5 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all w-fit mb-6">
                  <s.icon size={32} />
                </div>
                <h3 className="font-black text-primary text-lg uppercase tracking-tight mb-4">{s.titulo}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.descricao}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-24 bg-white">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter mb-16">Registros <br /> de <span className="text-secondary italic">Campo</span></h2>
          <div className="max-w-6xl mx-auto shadow-3xl rounded-[40px] overflow-hidden border-8 border-gray-50">
            <WorkGallery workName="Muros a Flexão" images={images} galleryPath="muros a flexao" />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-primary relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter">Otimize sua contenção</h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Seja através da execução integral ou da locação de nossos sistemas de formas,
            estamos prontos para agilizar sua obra.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary-glow text-white h-16 px-16 rounded-full text-lg font-bold shadow-2xl transition-all" asChild>
              <NavLink to="/contato">Falar com um Engenheiro</NavLink>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary h-16 px-16 rounded-full text-lg font-bold transition-all" asChild>
              <NavLink to="/obras">Ver Todos os Projetos</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MuroFlexao;
