import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin, Search, Images, X, PersonStanding } from "lucide-react";
import { obras as staticObras } from "../data/obras";
import { useState, useEffect } from "react";
import { WorkGallery } from "@/components/gallery/WorkGallery";
import type { Work } from "@/data/obras";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Todas");
  const [searchQuery, setSearchQuery] = useState("");
  const [obras, setObras] = useState<Work[]>(staticObras);
  const [selectedObra, setSelectedObra] = useState<Work | null>(null);

  useEffect(() => {
    const fetchObras = async () => {
      try {
        const response = await fetch("/api/obras.php");
        if (response.ok) {
          const apiData = await response.json();
          if (Array.isArray(apiData)) {
            const processedApiData = apiData.map((o: Work) => {
              const staticMatch = staticObras.find(s => s.name === o.name);
              return {
                ...o,
                id: o.id.toString(),
                images: Array.isArray(o.images) ? o.images : JSON.parse((o.images as unknown as string) || "[]"),
                // Preserva galleryPath raiz do estático (ex: "new jersey", "muros a flexao")
                galleryPath: staticMatch?.galleryPath,
              };
            });
            const apiNames = new Set(processedApiData.map((o: Work) => o.name));
            const uniqueStatic = staticObras.filter(o => !apiNames.has(o.name));
            setObras([...processedApiData, ...uniqueStatic]);
          }
        }
      } catch (error) {
        console.error("Erro ao buscar obras da API", error);
      }
    };
    fetchObras();
  }, []);

  const categories = ["Todas", ...new Set(obras.map(obra => obra.category))];

  const filteredObras = obras.filter(obra => {
    const matchCat = activeCategory === "Todas" || obra.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || obra.name.toLowerCase().includes(q) || obra.location.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const getCoverUrl = (obra: Work): string | null => {
    if (obra.images.length === 0) return null;
    const img = obra.images[0];
    // galleryPath raiz tem prioridade (ex: "new jersey" fica fora de /obras/)
    if (obra.galleryPath) {
      return `/${obra.galleryPath.split('/').map(encodeURIComponent).join('/')}/${encodeURIComponent(img)}`;
    }
    if (obra.gallery_path) {
      const p = obra.gallery_path.startsWith('obras/') ? obra.gallery_path : `obras/${obra.gallery_path}`;
      return `/${p.split('/').map(encodeURIComponent).join('/')}/${encodeURIComponent(img)}`;
    }
    if (isNaN(Number(obra.id))) {
      return `/obras/${encodeURIComponent(obra.name)}/${encodeURIComponent(img)}`;
    }
    const slug = obra.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/gi, '-').toLowerCase().replace(/-+/g, '-').replace(/^-|-$/g, '');
    return `/obras/${encodeURIComponent(slug)}/${encodeURIComponent(img)}`;
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/MG_5160a.png')] bg-cover bg-center opacity-20"></div>
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossas Obras</h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Portfólio de excelência em engenharia geotécnica e contenções em todo o território nacional.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros + Grid */}
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="container px-4">

          {/* Barra de busca + filtros */}
          <div className="mb-10 space-y-4">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                placeholder="Buscar por nome ou localização..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-9 pr-9 bg-white"
              />
              {searchQuery && (
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setSearchQuery("")}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className={activeCategory === category ? "bg-red-600 hover:bg-red-700" : "bg-white"}
                >
                  {category}
                </Button>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground">
              {filteredObras.length} obra{filteredObras.length !== 1 ? "s" : ""} encontrada{filteredObras.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Grid de cards */}
          {filteredObras.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-20" />
              <p>Nenhuma obra encontrada.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredObras.map(obra => {
                const cover = getCoverUrl(obra);
                return (
                  <button
                    key={obra.id}
                    onClick={() => setSelectedObra(obra)}
                    className="group text-left bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 hover:border-red-200 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                  >
                    {/* Cover */}
                    <div className="relative aspect-video overflow-hidden bg-gray-100">
                      {cover ? (
                        <img
                          src={cover}
                          alt={obra.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-300">
                          <Images className="h-10 w-10" />
                        </div>
                      )}
                      {/* Badge de quantidade */}
                      <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Images className="h-3 w-3" />
                        {obra.images.length}
                      </div>
                    </div>
                    {/* Info */}
                    <div className="p-4">
                      <Badge className="bg-red-600 text-white text-xs mb-2">{obra.category}</Badge>
                      <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 group-hover:text-red-600 transition-colors">
                        {obra.name}
                      </h3>
                      <div className="flex items-center justify-between mt-2 gap-2">
                        <div className="flex items-center text-gray-500 text-xs gap-1 min-w-0">
                          <MapPin className="h-3 w-3 text-red-400 shrink-0" />
                          <span className="truncate">{obra.location}</span>
                        </div>
                        {obra.latitude && obra.longitude && (
                          <a
                            href={`https://www.google.com/maps/@${obra.latitude},${obra.longitude},3a,75y,0h,90t/data=!3m6!1e1`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={e => e.stopPropagation()}
                            title="Ver no Street View"
                            className="shrink-0 flex items-center gap-1 text-[11px] font-medium text-blue-600 hover:text-blue-700 hover:underline whitespace-nowrap"
                          >
                            <PersonStanding className="h-3.5 w-3.5" />
                            Street View
                          </a>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Modal galeria */}
      <Dialog open={!!selectedObra} onOpenChange={open => { if (!open) setSelectedObra(null); }}>
        <DialogContent className="max-w-5xl w-full p-0 gap-0 overflow-hidden">
          {selectedObra && (
            <>
              <DialogHeader className="p-5 pb-3 border-b">
                <div className="flex items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <Badge className="bg-red-600 text-white text-xs mb-1">{selectedObra.category}</Badge>
                    <div className="flex items-center gap-2 flex-wrap">
                      <DialogTitle className="text-xl font-bold leading-tight">{selectedObra.name}</DialogTitle>
                      <span className="text-xs text-muted-foreground bg-gray-100 px-2 py-0.5 rounded-full shrink-0 flex items-center gap-1">
                        <Images className="h-3 w-3" />
                        {selectedObra.images.length} foto{selectedObra.images.length !== 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-1 flex-wrap">
                      <span className="flex items-center text-gray-500 text-sm gap-1">
                        <MapPin className="h-3 w-3 text-red-400 shrink-0" />
                        {selectedObra.location}
                      </span>
                      {selectedObra.latitude && selectedObra.longitude && (
                        <a
                          href={`https://www.google.com/maps/@${selectedObra.latitude},${selectedObra.longitude},3a,75y,0h,90t/data=!3m6!1e1`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
                        >
                          <PersonStanding className="h-4 w-4" />
                          Ver no Street View
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </DialogHeader>
              <div className="p-5 overflow-y-auto max-h-[70vh]">
                {selectedObra.images.length > 0 ? (
                  <WorkGallery
                    workId={selectedObra.id}
                    workName={selectedObra.name}
                    images={selectedObra.images}
                    gallery_path={selectedObra.gallery_path}
                    galleryPath={selectedObra.galleryPath}
                  />
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <Images className="h-10 w-10 mx-auto mb-3 opacity-20" />
                    <p>Imagens em breve para esta obra.</p>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA */}
      <section className="py-20 bg-white text-center border-t">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Tem um projeto em mente?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Nossa equipe técnica está pronta para oferecer a melhor solução em engenharia para seu empreendimento.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
              <a href="/contato">Solicitar Orçamento</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+551145096222">Ligar Agora</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
