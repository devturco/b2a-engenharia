import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import {
    CheckCircle,
    Shield,
    Settings,
    Users,
    FileText,
    Phone,
    Mountain,
    Award,
    Truck,
    MoveHorizontal,
    Construction,
    AlertTriangle
} from "lucide-react";
import { WorkGallery } from "@/components/gallery/WorkGallery";
import { useEffect } from "react";

const NewJersey = () => {
    useEffect(() => {
        document.title = "Barreiras New Jersey | Segurança Viária e Contenção | B2A";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Especialistas em Barreiras New Jersey. Execução in loco, venda e locação de formas metálicas. Segurança passiva de alta performance para rodovias.");
        }
    }, []);

    const servicos = [
        {
            titulo: "Fabricação In Loco",
            descricao: "Moldagem contínua com equipamentos de precisão para acabamento impecável.",
            icon: Settings
        },
        {
            titulo: "Sistemas Pré-Moldados",
            descricao: "Instalação ágil de elementos modulares para cronogramas críticos.",
            icon: MoveHorizontal
        },
        {
            titulo: "Gestão de Ativos",
            descricao: "Venda e locação de formas metálicas B2A para construtoras.",
            icon: Truck
        }
    ];

    const atributos = [
        { title: "Segurança Passiva", d: "Geometria projetada para redirecionar veículos em colisões.", icon: AlertTriangle },
        { title: "Rigor Normativo", d: "Conformidade total com especificações DNIT e ABNT.", icon: Shield },
        { title: "Durabilidade", d: "Concreto de alta resistência para exposição severa.", icon: Construction }
    ];

    const images = [
        "IMG-20230725-WA0093.jpg",
        "IMG-20230725-WA0094.jpg",
        "IMG-20230725-WA0095.jpg",
        "IMG-20230725-WA0096.jpg",
        "IMG-20230725-WA0097.jpg",
        "IMG-20241017-WA0169.jpg",
        "IMG-20241017-WA0195.jpg",
        "IMG-20241017-WA0201.jpg",
        "IMG-20241017-WA0202.jpg",
        "IMG-20241021-WA0061.jpg",
        "IMG-20241021-WA0062.jpg",
        "IMG-20241021-WA0063.jpg",
        "IMG-20241021-WA0064.jpg",
        "IMG-20241021-WA0065.jpg",
        "IMG-20241021-WA0067.jpg"
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-15 grayscale">
                    <img src="/images/aeroporto.png" className="w-full h-full object-cover" alt="Background" />
                </div>
                <div className="container px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="bg-secondary text-white mb-6 px-4 py-1.5 uppercase font-black tracking-widest">
                            Segurança & Infraestrutura
                        </Badge>
                        <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
                            Barreiras <span className="text-secondary">New Jersey</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
                            Excelência em dispositivos de segurança viária. Moldagem in loco e fornecimento
                            de sistemas de Formas metálicas de alta performance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-secondary hover:bg-secondary-glow text-white h-16 px-10 rounded-full font-bold uppercase tracking-wide shadow-xl" asChild>
                                <NavLink to="/contato">Solicitar Proposta</NavLink>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inovação Técnica */}
            <section className="py-24 bg-white">
                <div className="container px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter leading-tight">
                                Proteção <br /><span className="text-secondary italic">Inteligente</span>
                            </h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                                <p>
                                    As <strong>Barreiras New Jersey</strong> da B2A Engenharia são projetadas para salvar vidas. Sua seção transversal assimétrica redireciona gradualmente veículos desgovernados, dissipando energia cinética e evitando capotamentos ou invasões de pista oposta.
                                </p>
                                <p>
                                    Dominamos a tecnologia de moldagem <em>slipform</em> (fôrma deslizante) e Formas metálicas customizadas, entregando produtividade recorde e um acabamento que dispensa correções posteriores, elevando o padrão estético de rodovias e avenidas urbanas.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                                {atributos.map((a, i) => (
                                    <div key={i} className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-2xl group hover:bg-primary transition-all duration-300">
                                        <div className="p-3 bg-white text-secondary rounded-xl shadow-sm mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                                            <a.icon size={28} />
                                        </div>
                                        <h4 className="font-black text-primary group-hover:text-white text-xs uppercase mb-2">{a.title}</h4>
                                        <p className="text-[10px] text-muted-foreground group-hover:text-white/70 leading-tight">{a.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary/5 rounded-[40px] -rotate-1"></div>
                            <img
                                src="/images/aeroporto.png"
                                alt="Execução Barreira New Jersey"
                                className="rounded-[32px] shadow-2xl relative z-10 w-full min-h-[500px] object-cover"
                            />
                            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-xl z-20 border border-gray-100 hidden md:block">
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                                    <span className="font-black text-primary uppercase tracking-tighter text-sm">Alta Produtividade</span>
                                </div>
                                <p className="text-[10px] text-muted-foreground">Ciclos de concretagem contínuos <br />acima de 200m/dia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Soluções B2A */}
            <section className="py-24 bg-gray-50">
                <div className="container px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tighter mb-4">Nossas Soluções</h2>
                        <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {servicos.map((s, i) => (
                            <Card key={i} className="border-none shadow-sm hover:shadow-2xl transition-all rounded-[32px] overflow-hidden group">
                                <CardHeader className="p-8 bg-white group-hover:bg-primary transition-colors">
                                    <div className="w-16 h-16 bg-primary/5 text-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                                        <s.icon size={32} />
                                    </div>
                                    <CardTitle className="text-primary group-hover:text-white font-black uppercase tracking-tight">{s.titulo}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-8 bg-white group-hover:bg-primary transition-colors">
                                    <p className="text-sm text-muted-foreground group-hover:text-white/70 leading-relaxed">{s.descricao}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-24 bg-white">
                <div className="container px-4">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="mb-4 text-secondary border-secondary">Galeria de Obras</Badge>
                        <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tighter">New Jersey em <span className="text-secondary italic">Ação</span></h2>
                    </div>
                    <div className="max-w-6xl mx-auto">
                        <WorkGallery workName="Barreiras New Jersey" images={images} galleryPath="new jersey" />
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="container px-4 text-center relative z-10">
                    <div className="max-w-3xl mx-auto space-y-10">
                        <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">Garanta a <span className="text-secondary">Segurança</span> do seu Trecho Viário</h2>
                        <p className="text-xl text-white/70 font-light leading-relaxed">
                            Consulte nossa engenharia para orçamentos de execução, venda ou locação de sistemas de barreiras.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                            <Button size="lg" className="bg-secondary hover:bg-secondary-glow text-white h-16 px-16 rounded-full text-lg font-bold shadow-2xl transition-all" asChild>
                                <NavLink to="/contato">Solicitar Estudo de Viabilidade</NavLink>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default NewJersey;
