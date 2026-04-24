import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface WorkGalleryProps {
    workId: string;
    workName: string;
    images: string[];
    galleryPath?: string;
    gallery_path?: string;
}

export const WorkGallery = ({ workId, workName, images, galleryPath, gallery_path }: WorkGalleryProps) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const isOpen = selectedIndex !== null;

    if (images.length === 0) return null;

    // Constrói a URL de uma imagem respeitando a origem (DB vs estático)
    const getUrl = (image: string): string => {
        // galleryPath raiz tem prioridade (ex: "new jersey", "muros a flexao" ficam fora de /obras/)
        if (galleryPath) {
            return `/${galleryPath.split('/').map(encodeURIComponent).join('/')}/${encodeURIComponent(image)}`;
        }
        if (gallery_path) {
            const p = gallery_path.startsWith('obras/') ? gallery_path : `obras/${gallery_path}`;
            return `/${p.split('/').map(encodeURIComponent).join('/')}/${encodeURIComponent(image)}`;
        }
        if (isNaN(Number(workId))) {
            return `/obras/${encodeURIComponent(workName)}/${encodeURIComponent(image)}`;
        }
        const slug = workName
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9]/gi, '-').toLowerCase()
            .replace(/-+/g, '-').replace(/^-|-$/g, '');
        return `/obras/${encodeURIComponent(slug)}/${encodeURIComponent(image)}`;
    };

    const prev = useCallback(() => {
        setSelectedIndex(i => i !== null ? (i - 1 + images.length) % images.length : null);
    }, [images.length]);

    const next = useCallback(() => {
        setSelectedIndex(i => i !== null ? (i + 1) % images.length : null);
    }, [images.length]);

    // Navegação por teclado
    useEffect(() => {
        if (!isOpen) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [isOpen, prev, next]);

    return (
        <>
            {/* Grade de miniaturas */}
            <Carousel opts={{ align: "start", loop: true }} className="w-full relative group [&>div]:overflow-visible">
                <CarouselContent className="-ml-2 md:-ml-4">
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                            <Card
                                className="group/card relative overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
                                onClick={() => setSelectedIndex(index)}
                            >
                                <CardContent className="p-0 aspect-video md:aspect-square">
                                    <img
                                        src={getUrl(image)}
                                        alt={`${workName} - ${index + 1}`}
                                        className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <Maximize2 className="w-6 h-6 text-white" />
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="hidden md:block">
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-none shadow-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-none shadow-md opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
            </Carousel>

            {/* Lightbox — Dialog aninhado do Radix (lida com eventos corretamente) */}
            <Dialog open={isOpen} onOpenChange={(open) => { if (!open) setSelectedIndex(null); }}>
                <DialogContent
                    className="max-w-none w-screen h-screen p-0 border-0 bg-black/95 rounded-none flex flex-col items-center justify-center"
                    onPointerDownOutside={(e) => e.preventDefault()}
                    onInteractOutside={(e) => e.preventDefault()}
                >
                    {/* Título acessível oculto */}
                    <DialogTitle className="sr-only">
                        {workName} — imagem {selectedIndex !== null ? selectedIndex + 1 : ""} de {images.length}
                    </DialogTitle>

                    {/* Botão fechar */}
                    <button
                        className="absolute top-4 right-4 z-20 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-full p-2 transition-colors"
                        onClick={() => setSelectedIndex(null)}
                        aria-label="Fechar"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Contador */}
                    {selectedIndex !== null && (
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 text-white/60 text-sm font-medium bg-black/40 px-3 py-1 rounded-full">
                            {selectedIndex + 1} / {images.length}
                        </div>
                    )}

                    {/* Seta esquerda */}
                    <button
                        className="absolute left-0 top-0 h-full w-20 md:w-28 z-10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-colors"
                        onClick={prev}
                        aria-label="Imagem anterior"
                    >
                        <ChevronLeft className="w-12 h-12 drop-shadow" />
                    </button>

                    {/* Seta direita */}
                    <button
                        className="absolute right-0 top-0 h-full w-20 md:w-28 z-10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-colors"
                        onClick={next}
                        aria-label="Próxima imagem"
                    >
                        <ChevronRight className="w-12 h-12 drop-shadow" />
                    </button>

                    {/* Imagem */}
                    {selectedIndex !== null && (
                        <img
                            key={selectedIndex}
                            src={getUrl(images[selectedIndex])}
                            alt={`${workName} — ${selectedIndex + 1}`}
                            className="max-w-[calc(100vw-10rem)] max-h-[88vh] object-contain rounded shadow-2xl"
                        />
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};
