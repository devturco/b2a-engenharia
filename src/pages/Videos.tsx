import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import { Phone } from "lucide-react";

import { useState, useEffect } from "react";

const Videos = () => {
    const staticVideos = [
        { name: "Vista Aérea - Autódromo de Interlagos", path: "/midias/DJI_0001.MOV" },
        { name: "Obra em Andamento - DJI 0013", path: "/midias/DJI_0013.MP4" },
        { name: "Progresso Técnico - DJI 0017", path: "/midias/DJI_0017.MOV" },
        { name: "Resultado Final - DJI 0060", path: "/midias/DJI_0060.MP4" },
        { name: "Execução em Campo 1", path: "/midias/VID-20210322-WA0034.mp4" },
        { name: "Instalação de Barreiras", path: "/midias/VID-20230921-WA0081.mp4" },
        { name: "Processo de Moldagem", path: "/midias/VID-20241102-WA0056.mp4" },
        { name: "Logística e Transporte", path: "/midias/VID-20241118-WA0023.mp4" },
        { name: "Vista Geral do Canteiro", path: "/midias/VID-20250103-WA0088.mp4" },
        { name: "Operação de Guindaste", path: "/midias/VID-20250111-WA0084.mp4" },
        { name: "Acabamento Final", path: "/midias/VID-20250120-WA0063.mp4" },
        { name: "Inspeção Técnica", path: "/midias/VID-20250920-WA0183.mp4" },
        { name: "Documentação de Obra", path: "/midias/VID-20251005-WA0079.mp4" },
    ];

    const [videos, setVideos] = useState(staticVideos);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch("/api/videos.php");
                if (response.ok) {
                    const apiData = await response.json();
                    if (Array.isArray(apiData) && apiData.length > 0) {
                        setVideos([...apiData, ...staticVideos]);
                    }
                }
            } catch (error) {
                console.error("Erro ao buscar vídeos", error);
            }
        };
        fetchVideos();
    }, []);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-20">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="bg-secondary text-secondary-foreground mb-4 px-4 py-2">
                            Portfólio Digital
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Galeria de Vídeos
                        </h1>
                        <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
                            Acompanhe nossos processos, obras e a tecnologia aplicada em cada projeto da B2A Engenharia.
                        </p>
                    </div>
                </div>
            </section>

            {/* Video Grid */}
            <section className="py-16">
                <div className="container px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videos.map((video, index) => (
                            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow bg-engineering-light-gray border-none">
                                <CardContent className="p-0">
                                    <div className="aspect-video relative bg-black">
                                        <video
                                            controls
                                            playsInline
                                            className="w-full h-full"
                                            preload="metadata"
                                        >
                                            <source src={video.path} />
                                            Seu navegador não suporta vídeos.
                                        </video>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-primary">{video.name}</h3>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="container px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Gostou do que viu? Vamos construir juntos.
                    </h2>
                    <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                        Entre em contato e descubra como podemos aplicar essa expertise em seu próximo projeto.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" asChild>
                            <NavLink to="/contato">
                                Solicitar Orçamento
                            </NavLink>
                        </Button>
                        <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                            <Phone className="h-5 w-5 mr-2" />
                            (11) 4509-6222
                        </Button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Videos;
