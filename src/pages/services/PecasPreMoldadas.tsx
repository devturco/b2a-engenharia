import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import {
    Box as BoxIcon,
    Warehouse as WarehouseIcon,
    Truck as TruckIcon,
    Calendar as CalendarIcon,
    Cpu as CpuIcon,
    Zap as ZapIcon,
    ShieldCheck as ShieldCheckIcon,
    CheckCircle as CheckCircleIcon,
    ArrowRight as ArrowRightIcon,
    HardHat
} from "lucide-react";
import { useEffect } from "react";

const PecasPreMoldadas = () => {
    useEffect(() => {
        document.title = "Peças Pré-Moldadas | Produção e Montagem | B2A";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Produção e montagem de peças pré-moldadas de concreto. Vigas, pilares, galpões e elementos customizados com rigorosa gestão de qualidade.");
        }
    }, []);

    const servicos = [
        {
            titulo: "Sistemas Estruturais",
            descricao: "Vigas prontas e pilares pré-moldados para grandes vãos industriais e comerciais.",
            icon: BoxIcon
        },
        {
            titulo: "Montagem Especializada",
            descricao: "Equipes próprias de montagem com guindastes e rigorosos protocolos de içamento.",
            icon: HardHat
        },
        {
            titulo: "Logística Integrada",
            descricao: "Gestão completa do transporte das peças especiais do pátio até o canteiro de obras.",
            icon: TruckIcon
        },
        {
            titulo: "Controle Tecnológico",
            descricao: "Acompanhamento rigoroso da cura do concreto e rastreabilidade total de cada peça.",
            icon: ShieldCheckIcon
        }
    ];

    const diferenciais = [
        { title: "Qualidade Industrial", d: "Concreto produzido em ambiente controlado para máxima resistência.", icon: WarehouseIcon },
        { title: "Rapidez na Obra", d: "Limpeza no canteiro e cronogramas até 50% mais velozes.", icon: ZapIcon },
        { title: "Economia Escala", d: "Redução de desperdícios e otimização de custos de Formas.", icon: CalendarIcon }
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
                            Industrialização Civil
                        </Badge>
                        <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
                            Peças <span className="text-secondary">Pré-Moldadas</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
                            Elevamos o padrão de construção com a máxima eficiência industrial.
                            Soluções modulares de concreto que garantem precisão e performance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-secondary hover:bg-secondary-glow text-white h-16 px-10 rounded-full font-bold uppercase tracking-wide shadow-xl" asChild>
                                <NavLink to="/contato">Verificar Disponibilidade</NavLink>
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
                                Construção <br /><span className="text-secondary italic">Moderna e Veloz</span>
                            </h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                                <p>
                                    A <strong>industrialização da construção</strong> é o caminho para obras mais seguras, rápidas e sustentáveis. A B2A Engenharia atua na vanguarda da produção de elementos pré-moldados, entregando pilares, vigas e paredes com precisão geométrica inalcançável em moldagem in loco.
                                </p>
                                <p>
                                    Através de um pátio de fabricação próprio e parcerias estratégicas, garantimos o fornecimento contínuo para obras de qualquer porte. Nossa equipe de montagem é treinada em sistemas de segurança de última geração, assegurando que o içamento de cada peça seja executado com perfeição e sem riscos.
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
                                src="/images/aeroporto.png"
                                alt="Montagem Pré-Moldados"
                                className="rounded-[32px] shadow-2xl relative z-10 w-full min-h-[500px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Serviços Grid */}
            <section className="py-24 bg-gray-50">
                <div className="container px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tighter mb-4">Soluções em Pré-Fabricados</h2>
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
                        <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">Modularidade com <span className="text-secondary">Excelência</span></h2>
                        <p className="text-xl text-white/70 font-light leading-relaxed">
                            Descubra como os pré-moldados B2A podem transformar o cronograma do seu próximo galpão ou indústria.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                            <Button size="lg" className="bg-secondary hover:bg-secondary-glow text-white h-16 px-16 rounded-full text-lg font-bold shadow-2xl transition-all" asChild>
                                <NavLink to="/contato">Agendar Visita ao Pátio</NavLink>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default PecasPreMoldadas;
