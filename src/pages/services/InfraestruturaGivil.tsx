import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { Building, CheckCircle, Settings, Phone } from "lucide-react";

const InfraestruturaGivil = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-secondary text-secondary-foreground mb-4 px-4 py-2">
              Infraestrutura Completa
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Projetos de Infraestrutura Civil
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
              Terraplenagem, pavimentação, fundações e CQP para projetos de 
              infraestrutura civil com excelência técnica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <NavLink to="/contato">Solicitar Orçamento</NavLink>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Phone className="h-5 w-5 mr-2" />
                Consultoria
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { titulo: "Terraplenagem", icon: Building },
              { titulo: "Pavimentação", icon: Settings },
              { titulo: "Fundações", icon: CheckCircle },
              { titulo: "CQP", icon: Building }
            ].map((servico, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <servico.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary">{servico.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Serviços especializados em {servico.titulo.toLowerCase()}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InfraestruturaGivil;