import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import {
    BarChart3,
    ShieldCheck,
    Map as MapIcon,
    ClipboardCheck,
    LineChart,
    Zap,
    Users,
    CheckCircle,
    ArrowRight,
    HardHat,
    Eye
} from "lucide-react";
import { useEffect } from "react";

const GerenciamentoObras = () => {
    useEffect(() => {
        document.title = "Gerenciamento de Obras | Supervisão Técnica e CQP | B2A";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Gerenciamento profissional de obras de geotecnia e infraestrutura. Controle de qualidade (CQP), supervisão técnica e gestão de cronograma físico-financeiro.");
        }
    }, []);

    const servicos = [
        {
            titulo: "Controle da Qualidade (CQP)",
            descricao: "Verificação rigorosa de ensaios de campo, laboratório e conformidade com normas técnicas.",
            icon: ClipboardCheck
        },
        {
            titulo: "Gestão de Cronograma",
            descricao: "Acompanhamento físico-financeiro detalhado para garantir a entrega no prazo acordado.",
            icon: BarChart3
        },
        {
            titulo: "Supervisão de Terceiros",
            descricao: "Fiscalização técnica de equipes e fornecedores para manter o padrão B2A de excelência.",
            icon: Eye
        },
        {
            titulo: "Assistência Técnica",
            descricao: "Suporte especializado para tomadas de decisão rápidas diante de desafios imprevistos em campo.",
            icon: HardHat
        }
    ];

    const diferenciais = [
        { title: "Transparência Total", d: "Relatórios gerenciais periódicos com indicadores de performance.", icon: LineChart },
        { title: "Segurança Jurídica", d: "Documentação técnica completa e rastreabilidade de processos.", icon: ShieldCheck },
        { title: "Mitigação de Riscos", d: "Identificação proativa de gargalos e desvios de projeto.", icon: CheckCircle }
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
                            Consultoria & Gestão
                        </Badge>
                        <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
                            Gerenciamento <span className="text-secondary">de Obras</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
                            Garantimos que o planejado seja executado. Gestão técnica de alta performance
                            para obras de engenharia civil pesada e contenções.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-secondary hover:bg-secondary-glow text-white h-16 px-10 rounded-full font-bold uppercase tracking-wide shadow-xl" asChild>
                                <NavLink to="/contato">Falar com Gerente de Projetos</NavLink>
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
                                Domínio Técnico <br /><span className="text-secondary italic">em Todas as Etapas</span>
                            </h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                                <p>
                                    O sucesso de uma obra de engenharia pesada não depende apenas de bons materiais, mas de um <strong>Gerenciamento de Obras</strong> implacável. Na B2A Engenharia, atuamos como o braço técnico do cliente, assegurando que cada etapa siga o rigor do projeto executivo.
                                </p>
                                <p>
                                    Nossa metodologia de <strong>Controle da Qualidade de Projeto e Execução (CQP)</strong> foca na eliminação de incertezas. Monitoramos desde a compactação do solo até a cura do concreto, documentando cada avanço através de registros fotográficos e ensaios técnicos, transformando o canteiro em um ambiente previsível e seguro.
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
                                alt="Gestão de Obra Técnica"
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
                        <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tighter mb-4">Escopo de Gerenciamento</h2>
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
                        <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">Controle Total da Sua <span className="text-secondary">Obra</span></h2>
                        <p className="text-xl text-white/70 font-light leading-relaxed">
                            Consulte como nossa supervisão técnica pode garantir a qualidade e o prazo do seu investimento.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                            <Button size="lg" className="bg-secondary hover:bg-secondary-glow text-white h-16 px-16 rounded-full text-lg font-bold shadow-2xl transition-all" asChild>
                                <NavLink to="/contato">Solicitar Proposta de Gestão</NavLink>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default GerenciamentoObras;
