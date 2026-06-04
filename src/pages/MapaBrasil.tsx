import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MapPin, X, Building2, PersonStanding } from "lucide-react";

// Fix leaflet default icon paths broken by Vite bundling
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const createPinIcon = (active = false) =>
  L.divIcon({
    html: `<div style="
      width: 26px; height: 26px;
      background: ${active ? "#b91c1c" : "#dc2626"};
      border: 3px solid white;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      box-shadow: 0 2px 10px rgba(0,0,0,0.45);
    "></div>`,
    className: "",
    iconSize: [26, 26],
    iconAnchor: [13, 26],
    tooltipAnchor: [13, -8],
  });

interface Obra {
  id: string;
  name: string;
  category: string;
  location: string;
  images: string[];
  gallery_path?: string;
  latitude: number | null;
  longitude: number | null;
  area_m2?: number | null;
}

function BrazilView({ panelOpen, obras }: { panelOpen: boolean; obras: Obra[] }) {
  const map = useMap();
  const fitted = useRef(false);

  useEffect(() => {
    if (!fitted.current && obras.length > 0) {
      const bounds = obras.map((o) => [o.latitude!, o.longitude!] as [number, number]);
      map.fitBounds(bounds, { padding: [48, 48], maxZoom: 7 });
      fitted.current = true;
    } else if (!fitted.current && obras.length === 0) {
      map.setView([-14.5, -46.0], 5);
    }
  }, [map, obras]);

  // Re-invalidate size when panel opens/closes so tiles fill correctly
  useEffect(() => {
    const t = setTimeout(() => map.invalidateSize(), 320);
    return () => clearTimeout(t);
  }, [panelOpen, map]);

  return null;
}

export default function MapaBrasil() {
  const [obras, setObras] = useState<Obra[]>([]);
  const [selectedObra, setSelectedObra] = useState<Obra | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/obras.php")
      .then((r) => r.json())
      .then((data: any[]) => {
        const mapped = data
          .filter((o) => o.latitude != null && o.longitude != null)
          .map((o) => ({
            ...o,
            id: String(o.id),
            images: Array.isArray(o.images) ? o.images : [],
            latitude: parseFloat(o.latitude),
            longitude: parseFloat(o.longitude),
          }));
        setObras(mapped);
      })
      .catch(() => setObras([]));
  }, []);

  const selectObra = (obra: Obra) => {
    setSelectedObra(obra);
    setGalleryIndex(0);
  };

  const close = () => setSelectedObra(null);

  /** Monta a URL completa de uma imagem a partir do gallery_path + nome do arquivo */
  const getObraImageUrl = (obra: Obra, filename: string): string => {
    if (!obra.gallery_path) return filename;
    const folder = obra.gallery_path.startsWith("obras/")
      ? obra.gallery_path
      : `obras/${obra.gallery_path}`;
    return `/${folder.split("/").map(encodeURIComponent).join("/")}/${encodeURIComponent(filename)}`;
  };

  const prev = () =>
    setGalleryIndex((i) => (i === 0 ? (selectedObra?.images.length ?? 1) - 1 : i - 1));

  const next = () =>
    setGalleryIndex((i) => (i === (selectedObra?.images.length ?? 1) - 1 ? 0 : i + 1));

  const panelOpen = !!selectedObra;

  return (
    <Layout>
      {/* Page header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-engineering-dark leading-none">Mapa de Obras</h1>
              <p className="text-sm text-muted-foreground mt-0.5">
                Explore nossa atuação por todo o Brasil · clique em um pin para ver a obra
              </p>
            </div>
            {obras.length > 0 && (
              <Badge variant="secondary" className="ml-auto text-sm font-semibold whitespace-nowrap flex-shrink-0">
                {obras.length} obra{obras.length !== 1 ? "s" : ""}
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Main split area */}
      <div className="py-4 md:py-8 bg-gray-50">
      <div className="container mx-auto px-2 md:px-4">
      <div
        className={`mx-auto transition-all duration-300 ease-in-out w-full ${
          panelOpen ? "md:max-w-[1100px]" : "md:max-w-[520px]"
        }`}
      >
      <div className="relative flex overflow-hidden rounded-xl md:rounded-2xl border border-gray-200 shadow-lg" style={{ height: "580px", isolation: "isolate" }}>

        {/* MAP — always full width on mobile; shrinks to 55% on desktop when panel opens */}
        <div
          className={`relative flex-shrink-0 transition-all duration-300 ease-in-out w-full ${
            panelOpen ? "md:w-[55%]" : ""
          }`}
        >
          <MapContainer
            center={[-15.78, -47.93]}
            zoom={5}
            style={{ height: "100%", width: "100%" }}
            scrollWheelZoom={true}
            zoomControl={true}
          >
            <BrazilView panelOpen={panelOpen} obras={obras} />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {obras.map((obra) => (
              <Marker
                key={obra.id}
                position={[obra.latitude!, obra.longitude!]}
                icon={createPinIcon(selectedObra?.id === obra.id || hoveredId === obra.id)}
                eventHandlers={{
                  mouseover: () => setHoveredId(obra.id),
                  mouseout: () => setHoveredId(null),
                  click: () => selectObra(obra),
                }}
              >
                <Tooltip direction="top" offset={[0, -8]} opacity={1}>
                  <div className="min-w-[150px]">
                    <p className="font-semibold text-sm text-gray-800 leading-tight">{obra.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{obra.category}</p>
                    <p className="text-xs text-gray-400">{obra.location}</p>
                    {obra.images.length > 0 && (
                      <p className="text-[10px] text-primary mt-1 font-medium">
                        🖼 {obra.images.length} foto{obra.images.length !== 1 ? "s" : ""}
                      </p>
                    )}
                  </div>
                </Tooltip>
              </Marker>
            ))}
          </MapContainer>

          {obras.length === 0 && (
            <div className="absolute inset-0 flex items-end justify-center pb-8 pointer-events-none">
              <p className="bg-white/90 backdrop-blur text-muted-foreground text-sm px-4 py-2 rounded-full shadow">
                Nenhuma obra com coordenadas cadastradas ainda.
              </p>
            </div>
          )}
        </div>

        {/* DETAIL PANEL — bottom sheet on mobile, side panel on desktop */}
        {/* Mobile overlay backdrop */}
        <div
          className={`md:hidden absolute inset-0 bg-black/40 transition-opacity duration-300 z-10 ${panelOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={close}
        />

        <div
          className={`
            absolute bg-white shadow-2xl flex flex-col overflow-hidden
            transition-[transform,opacity] duration-300 ease-in-out
            left-0 right-0 bottom-0 h-[90%] rounded-t-2xl z-20
            md:left-auto md:bottom-auto md:top-0 md:right-0 md:h-full md:w-[45%] md:rounded-none
            ${panelOpen
              ? "translate-y-0 md:translate-y-0 md:translate-x-0 opacity-100 pointer-events-auto"
              : "translate-y-full md:translate-y-0 md:translate-x-full opacity-0 pointer-events-none"
            }
          `}
        >
          {selectedObra && (
            <>
              {/* Drag handle — mobile only */}
              <div className="md:hidden flex justify-center pt-3 pb-1 flex-shrink-0">
                <div className="w-10 h-1 rounded-full bg-gray-300" />
              </div>

              {/* Panel header */}
              <div className="flex items-start justify-between px-5 pt-5 pb-4 border-b flex-shrink-0">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0 mt-0.5">
                    <Building2 className="h-4 w-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-bold text-base leading-tight text-engineering-dark line-clamp-2">
                      {selectedObra.name}
                    </h2>
                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                      <Badge variant="secondary" className="text-xs">{selectedObra.category}</Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {selectedObra.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 -mt-1">
                  <a
                    href={`https://www.google.com/maps?layer=c&cbll=${selectedObra.latitude},${selectedObra.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ver no Street View"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-sm"
                  >
                    <PersonStanding className="h-3.5 w-3.5" />
                    Street View
                  </a>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={close}
                    className="rounded-full h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Gallery */}
              <div className="flex-1 overflow-y-auto">
                {selectedObra.images.length > 0 ? (
                  <>
                    {/* Main image */}
                    <div className="relative bg-gray-900 aspect-[4/3] md:aspect-video">
                      <img
                        src={getObraImageUrl(selectedObra, selectedObra.images[galleryIndex])}
                        alt={`${selectedObra.name} — foto ${galleryIndex + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => { (e.target as HTMLImageElement).src = "/images/placeholder.jpg"; }}
                      />
                      {selectedObra.images.length > 1 && (
                        <>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={prev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full h-9 w-9"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={next}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full h-9 w-9"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                      <span className="absolute bottom-2 right-3 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full">
                        {galleryIndex + 1} / {selectedObra.images.length}
                      </span>
                    </div>

                    {/* Thumbnails */}
                    {selectedObra.images.length > 1 && (
                      <div className="flex gap-2 overflow-x-auto px-4 py-3 bg-gray-50 border-b">
                        {selectedObra.images.map((filename, i) => (
                          <button
                            key={i}
                            onClick={() => setGalleryIndex(i)}
                            className={`flex-shrink-0 h-14 w-20 rounded-md overflow-hidden border-2 transition-all ${
                              i === galleryIndex
                                ? "border-primary shadow-sm"
                                : "border-transparent opacity-55 hover:opacity-90"
                            }`}
                          >
                            <img
                              src={getObraImageUrl(selectedObra, filename)}
                              alt=""
                              className="w-full h-full object-cover"
                              onError={(e) => { (e.target as HTMLImageElement).src = "/images/placeholder.jpg"; }}
                            />
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Info footer */}
                    <div className="px-5 py-4">
                      <p className="text-xs text-muted-foreground">
                        {selectedObra.images.length} foto{selectedObra.images.length !== 1 ? "s" : ""} · {selectedObra.category} · {selectedObra.location}
                        {selectedObra.area_m2 ? ` · ${selectedObra.area_m2.toLocaleString('pt-BR')} m²` : ""}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-40 text-muted-foreground gap-2">
                    <Building2 className="h-8 w-8 opacity-30" />
                    <p className="text-sm">Nenhuma imagem disponível.</p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      </div>
      </div>
      </div>
    </Layout>
  );
}
