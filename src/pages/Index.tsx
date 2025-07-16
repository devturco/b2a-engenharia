import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import { Mountain, Shield, Building, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              B2A Engenharia
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
              Especialistas em contenções, infraestrutura civil e geotecnia. 
              Soluções técnicas de excelência para seus projetos de engenharia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <NavLink to="/contato">Solicitar Orçamento</NavLink>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <NavLink to="/servicos">Nossos Serviços</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Destacados */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Nossos Serviços</h2>
            <p className="text-xl text-muted-foreground">Soluções técnicas especializadas</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Terra Armada", icon: Mountain, href: "/servicos/terra-armada" },
              { title: "Solo Grampeado", icon: Shield, href: "/servicos/solo-grampeado" },
              { title: "Infraestrutura Civil", icon: Building, href: "/servicos/infraestrutura-civil" }
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <NavLink to={service.href}>
                      Saiba Mais <ArrowRight className="h-4 w-4 ml-2" />
                    </NavLink>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
