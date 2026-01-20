import { useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface WorkGalleryProps {
    workName: string;
    images: string[];
    galleryPath?: string;
}

export const WorkGallery = ({ workName, images, galleryPath }: WorkGalleryProps) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    if (images.length === 0) return null;

    const openLightbox = (index: number) => {
        setSelectedIndex(index);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
        document.body.style.overflow = "auto";
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % images.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
        }
    };

    return (
        <div className="space-y-4">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full relative group"
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                            <Card
                                className="group relative overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
                                onClick={() => openLightbox(index)}
                            >
                                <CardContent className="p-0 aspect-video md:aspect-square">
                                    <img
                                        src={galleryPath ? `/${galleryPath.split('/').map(p => encodeURIComponent(p)).join('/')}/${encodeURIComponent(image)}` : `/obras/${encodeURIComponent(workName)}/${encodeURIComponent(image)}`}
                                        alt={`${workName} - Image ${index + 1}`}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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

            {selectedIndex !== null && createPortal(
                <div
                    className="fixed inset-0 bg-black/95 z-[10000] flex items-center justify-center transition-all duration-300 overflow-hidden"
                    style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
                    onClick={closeLightbox}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-red-500 z-[10001] p-2"
                        onClick={closeLightbox}
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <Button
                        variant="ghost"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 p-2 rounded-full hidden md:flex z-[10001]"
                        onClick={prevImage}
                    >
                        <ChevronLeft className="w-10 h-10" />
                    </Button>

                    <Button
                        variant="ghost"
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 p-2 rounded-full hidden md:flex z-[10001]"
                        onClick={nextImage}
                    >
                        <ChevronRight className="w-10 h-10" />
                    </Button>

                    <div className="relative max-w-5xl max-h-[85vh] flex flex-col items-center p-4">
                        <img
                            src={galleryPath ? `/${galleryPath.split('/').map(p => encodeURIComponent(p)).join('/')}/${encodeURIComponent(images[selectedIndex])}` : `/obras/${encodeURIComponent(workName)}/${encodeURIComponent(images[selectedIndex])}`}
                            alt={`${workName} expanded`}
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <div className="mt-4 text-white text-sm font-medium">
                            Imagem {selectedIndex + 1} de {images.length}
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};
