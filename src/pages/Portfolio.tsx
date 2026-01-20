import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building, MapPin, Search } from "lucide-react";
import { obras as staticObras } from "../data/obras";
import { useState, useEffect } from "react";
import { WorkGallery } from "@/components/gallery/WorkGallery";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Todas");
  const [obras, setObras] = useState(staticObras);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchObras = async () => {
      try {
        const response = await fetch("/api/obras.php");
        if (response.ok) {
          const apiData = await response.json();
          if (Array.isArray(apiData) && apiData.length > 0) {
            // Unir dados da API com os estáticos (removendo duplicados por slug/id se necessário)
            setObras([...apiData, ...staticObras]);
          }
        }
      } catch (error) {
        console.error("Erro ao buscar obras da API", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchObras();
  }, []);

  const categories = ["Todas", ...new Set(obras.map(obra => obra.category))];

  const filteredObras = activeCategory === "Todas"
    ? obras
    : obras.filter(obra => obra.category === activeCategory);

  return (
    <Layout>
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/MG_5160a.png')] bg-cover bg-center opacity-20"></div>
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossas Obras
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Portfólio de excelência em engenharia geotécnica e contenções em todo o território nacional.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container px-4">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "bg-red-600 hover:bg-red-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="space-y-20">
            {filteredObras.map((obra) => (
              <div key={obra.id} className="scroll-mt-24" id={obra.id}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <Badge className="bg-red-600 mb-2">{obra.category}</Badge>
                    <h2 className="text-3xl font-bold text-gray-900">{obra.name}</h2>
                    <div className="flex items-center text-gray-600 mt-2">
                      <MapPin className="h-4 w-4 mr-1 text-red-500" />
                      {obra.location}
                    </div>
                  </div>
                </div>

                {obra.images.length > 0 ? (
                  <WorkGallery workName={obra.name} images={obra.images} galleryPath={obra.galleryPath} />
                ) : (
                  <Card className="bg-gray-100 border-dashed border-2 border-gray-300 py-12">
                    <CardContent className="flex flex-col items-center justify-center text-gray-400">
                      <Search className="h-12 w-12 mb-4 opacity-20" />
                      <p>Imagens em breve para esta obra.</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center border-t">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Tem um projeto em mente?
          </h2>
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
