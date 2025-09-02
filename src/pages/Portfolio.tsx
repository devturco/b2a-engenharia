import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { Building, MapPin } from "lucide-react";

const Portfolio = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Projetos Realizados
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
              Conheça nossos principais projetos executados em contenções, 
              geotecnia e infraestrutura civil.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Building className="h-16 w-16 text-primary" />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-2">Terra Armada</Badge>
                  <h3 className="font-semibold text-primary mb-2">Projeto {i}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    São Paulo - SP
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-engineering-light-gray text-center">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Quer Conhecer Mais Projetos?
          </h2>
          <Button size="lg" asChild>
            <NavLink to="/contato">Entre em Contato</NavLink>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;