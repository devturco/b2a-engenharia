import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import {
    ShieldCheck,
    Settings,
    Truck,
    Mountain,
    Construction,
    Zap,
    CheckCircle,
    ArrowRight
} from "lucide-react";
import { useEffect } from "react";
import { WorkGallery } from "@/components/gallery/WorkGallery";
import { obras } from "@/data/obras";

const MurosBritagem = () => {
    useEffect(() => {
        document.title = "Muros de Britagem | Infraestrutura para Mineração | B2A";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Construção de muros de britagem de alta resistência para plantas de mineração. Soluções estruturais robustas capazes de suportar cargas dinâmicas extremas.");
        }
    }, []);

    const obraSalum = obras.find(o => o.id === "salum-britagem");
    const obraArcelor = obras.find(o => o.id === "arcelormittal-itatiaiuçu");

    const servicos = [
        {
            titulo: "Estruturas de Britagem Primária",
            descricao: "Muros dimensionados para suportar o impacto de basculamento de grandes caminhões fora-de-estrada.",
            icon: Truck
        },
        {
            titulo: "Sistemas em Terra Armada",
            descricao: "Contenções com placas de concreto de alta resistência e fitas metálicas preparadas para vibração severa.",
            icon: Settings
        },
        {
            titulo: "Fundações Especiais",
            descricao: "Tratamento de solo e fundações profundas para garantir a estabilidade das estruturas de descarga.",
            icon: Construction
        },
        {
            titulo: "Proteção Contra Impacto",
            descricao: "Instalação de revestimentos e sistemas de amortecimento para prolongar a vida útil do concreto.",
            icon: ShieldCheck
        }
    ];

    const diferenciais = [
        { title: "Alta Capacidade de Carga", d: "Suporta cargas dinâmicas de equipamentos pesados.", icon: Mountain },
        { title: "Velocidade na Execução", d: "Uso de sistemas modulares para reduzir paradas de planta.", icon: Zap },
        { title: "Resistência Química", d: "Concretos especiais para ambientes de mineração.", icon: CheckCircle }
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 grayscale">
                    <img src={obraSalum?.images[0] ? `/obras/${obraSalum.name}/${obraSalum.images[0]}` : "/images/aeroporto.png"} alt="Background" className="w-full h-full object-cover" />
                </div>
                <div className="container px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="bg-secondary text-white mb-6 px-4 py-1.5 uppercase font-black tracking-widest">
                            Soluções para Mineração
                        </Badge>
                        <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
                            Muros de <span className="text-secondary">Britagem</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
                            Engenharia de alto impacto para plantas de mineração. Estruturas projetadas para
                            suportar as condições mais severas de operação contínua.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-secondary hover:bg-secondary-glow text-white h-16 px-10 rounded-full font-bold uppercase tracking-wide shadow-xl" asChild>
                                <NavLink to="/contato">Consultar Especialista</NavLink>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introdução */}
            <section className="py-24 bg-white">
                <div className="container px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter leading-tight">
                                Engenharia de <br /><span className="text-secondary italic">Resistência Extrema</span>
                            </h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                                <p>
                                    As plantas de britagem exigem contenções que vão além da geotecnia convencional. Na <strong>B2A Engenharia</strong>, projetamos e executamos muros de britagem que absorvem vibrações constantes e impactos de descargas sucessivas, garantindo a integridade operacional da mina.
                                </p>
                                <p>
                                    Utilizamos combinações avançadas de <strong>Terra Armada</strong> e concreto armado reforçado, atendendo às normas internacionais de segurança e durabilidade. Nossas soluções são customizadas para a frota específica de cada operação, otimizando o ângulo de descarga e a vida útil da estrutura.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                                {diferenciais.map((d, i) => (
                                    <div key={i} className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-2xl group hover:bg-primary transition-all duration-300">
                                        <div className="p-3 bg-white text-secondary rounded-xl shadow-sm mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                                            <d.icon size={28} />
                                        </div>
                                        <h4 className="font-black text-primary group-hover:text-white text-xs uppercase mb-2">{d.title}</h4>
                                        <p className="text-[10px] text-muted-foreground group-hover:text-white/70 leading-tight">{d.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary/5 rounded-[40px] -rotate-1"></div>
                            <img
                                src={obraSalum?.images[2] ? `/obras/${obraSalum.name}/${obraSalum.images[2]}` : "/images/aeroporto.png"}
                                alt="Planta de Britagem"
                                className="rounded-[32px] shadow-2xl relative z-10 w-full min-h-[500px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfólio de Obras */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter">Projetos <br /> de <span className="text-secondary italic">Muros de Britagem</span></h2>
                        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Excelência técnica aplicada em uma das operações mais críticas da mineração.</p>
                    </div>

                    <div className="space-y-32">
                        {obraSalum && (
                            <div className="relative">
                                <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4">
                                    <div>
                                        <Badge variant="outline" className="text-secondary border-secondary mb-2 uppercase tracking-widest">{obraSalum.category}</Badge>
                                        <h3 className="text-3xl font-black text-primary uppercase tracking-tight">{obraSalum.name}</h3>
                                        <p className="text-muted-foreground font-medium">{obraSalum.location}</p>
                                    </div>
                                    <NavLink to="/obras" className="text-primary font-bold hover:text-secondary flex items-center group">
                                        Ver todos os projetos <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </NavLink>
                                </div>
                                <div className="shadow-3xl rounded-3xl overflow-hidden border-8 border-gray-50">
                                    <WorkGallery workName={obraSalum.name} images={obraSalum.images} />
                                </div>
                            </div>
                        )}

                        {obraArcelor && (
                            <div className="relative">
                                <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4">
                                    <div>
                                        <Badge variant="outline" className="text-secondary border-secondary mb-2 uppercase tracking-widest">{obraArcelor.category}</Badge>
                                        <h3 className="text-3xl font-black text-primary uppercase tracking-tight">{obraArcelor.name}</h3>
                                        <p className="text-muted-foreground font-medium">{obraArcelor.location}</p>
                                    </div>
                                </div>
                                <div className="shadow-3xl rounded-3xl overflow-hidden border-8 border-gray-50">
                                    <WorkGallery workName={obraArcelor.name} images={obraArcelor.images} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Serviços Grid */}
            <section className="py-24 bg-gray-50">
                <div className="container px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tighter mb-4">Especialidades em Mineração</h2>
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
                        <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">Robustez para Sua <span className="text-secondary">Produção</span></h2>
                        <p className="text-xl text-white/70 font-light leading-relaxed">
                            Consulte nossa equipe técnica para dimensionar muros de britagem que acompanham o ritmo do seu negócio.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                            <Button size="lg" className="bg-secondary hover:bg-secondary-glow text-white h-16 px-16 rounded-full text-lg font-bold shadow-2xl transition-all" asChild>
                                <NavLink to="/contato">Solicitar Estudo Técnico</NavLink>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default MurosBritagem;
