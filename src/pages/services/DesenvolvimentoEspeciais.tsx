import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import {
    DraftingCompass,
    Lightbulb,
    Ruler,
    PencilRuler,
    Factory,
    Zap,
    Cpu,
    ShieldCheck,
    ArrowRight
} from "lucide-react";
import { useEffect } from "react";

const DesenvolvimentoEspeciais = () => {
    useEffect(() => {
        document.title = "Formas Metálicas Especiais | Projetos Customizados | B2A";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Desenvolvimento e fabricação de Formas metálicas sob medida. Soluções de engenharia para geometrias complexas em infraestrutura e indústrias.");
        }
    }, []);

    const servicos = [
        {
            titulo: "Engenharia de Formas",
            descricao: "Cálculo estrutural e desenho técnico de sistemas moldantes para concretagens especiais.",
            icon: DraftingCompass
        },
        {
            titulo: "Fabricação Customizada",
            descricao: "Produção própria em aço de alta resistência com gabaritos de precisão milimétrica.",
            icon: Factory
        },
        {
            titulo: "Sistemas Reutilizáveis",
            descricao: "Desenvolvimento de Formas robustas focadas no alto índice de reaproveitamento e facilidade de desmolda.",
            icon: PencilRuler
        },
        {
            titulo: "Apoio à Concretagem",
            descricao: "Consultoria em campo para montagem, escoramento e ciclos de concretagem dos sistemas especiais.",
            icon: Ruler
        }
    ];

    const diferenciais = [
        { title: "Design Inovador", d: "Soluções criativas para os desafios geométricos mais difíceis.", icon: Lightbulb },
        { title: "Alta Precisão", d: "Corte laser e soldagem robotizada para encaixes perfeitos.", icon: Cpu },
        { title: "Agilidade", d: "Entrega de protótipos e sistemas finais em prazos industriais.", icon: Zap }
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
                            Design & Engenharia
                        </Badge>
                        <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
                            Formas <span className="text-secondary">Especiais</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
                            Transformamos geometrias complexas em soluções de concretagem simples e eficientes.
                            Projetos sob medida que elevam a produtividade no canteiro.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-secondary hover:bg-secondary-glow text-white h-16 px-10 rounded-full font-bold uppercase tracking-wide shadow-xl" asChild>
                                <NavLink to="/contato">Projetar Minha Fôrma</NavLink>
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
                                A Arte de <br /><span className="text-secondary italic">Dar Forma ao Concreto</span>
                            </h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                                <p>
                                    Muitas vezes, a engenharia de infraestrutura esbarra em desenhos que as Formas modulares padrão não conseguem atender. É nesse cenário que a <strong>B2A Engenharia</strong> se destaca, desenvolvendo sistemas metálicos customizados para cada necessidade.
                                </p>
                                <p>
                                    Nossa engenharia interna utiliza softwares de ponta para simular as pressões do concreto e garantir que os sistemas de Formas especiais sejam leves para operação, porém extremamente resistentes. Seja para galerias, pilares ornamentais ou estruturas industriais complexas, entregamos a solução que o seu projeto exige.
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
                                alt="Projetos de Formas"
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
                        <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tighter mb-4">Escopo de Desenvolvimento</h2>
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
                        <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">Inovação em Cada <span className="text-secondary">Concretagem</span></h2>
                        <p className="text-xl text-white/70 font-light leading-relaxed">
                            Consulte como nosso braço de fabricação e engenharia pode criar o sistema perfeito para sua obra.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                            <Button size="lg" className="bg-secondary hover:bg-secondary-glow text-white h-16 px-16 rounded-full text-lg font-bold shadow-2xl transition-all" asChild>
                                <NavLink to="/contato">Solicitar Orçamento de Fôrma</NavLink>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default DesenvolvimentoEspeciais;
