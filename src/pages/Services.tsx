import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { 
  Mountain, 
  Shield, 
  Anchor, 
  Settings, 
  Building, 
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const servicos = [
    {
      titulo: "Terra Armada",
      descricao: "Soluções completas em terra armada para estabilização de taludes e contenções.",
      icon: Mountain,
      href: "/servicos/terra-armada",
      especialidades: ["Projeto Executivo", "ECE", "Mão de Obra", "Equipamentos", "Supervisão Técnica"],
      destaque: true
    },
    {
      titulo: "Projetos de Contenção",
      descricao: "Ampla gama de soluções para contenção de encostas e estabilização de terrenos.",
      icon: Shield,
      href: "/servicos/projetos-contencao",
      especialidades: ["Cortina Atirantada", "Solo Grampeado", "Gabião", "Terramesh"],
      destaque: true
    },
    {
      titulo: "Contenções Marítimas",
      descricao: "Projetos especializados para estruturas de contenção em ambiente marítimo.",
      icon: Anchor,
      href: "/servicos/contencoes-maritimas",
      especialidades: ["Em Desenvolvimento", "Soluções Costeiras"],
      destaque: false
    },
    {
      titulo: "Projetos Geotécnicos",
      descricao: "Investigações e projetos geotécnicos completos para fundações e estabilidade.",
      icon: Settings,
      href: "/servicos/projetos-geotecnicos",
      especialidades: ["Investigação de Solo", "Estabilidade de Taludes", "Ensaios"],
      destaque: true
    },
    {
      titulo: "Infraestrutura Civil",
      descricao: "Projetos completos de infraestrutura civil, pavimentação e terraplenagem.",
      icon: Building,
      href: "/servicos/infraestrutura-civil",
      especialidades: ["Terraplenagem", "Pavimentação", "Fundações", "CQP"],
      destaque: true
    }
  ];

  const subservicos = [
    {
      categoria: "Contenções Especializadas",
      itens: [
        { nome: "Cortina Atirantada", href: "/servicos/cortina-atirantada" },
        { nome: "Solo Grampeado", href: "/servicos/solo-grampeado" },
        { nome: "Gabião", href: "/servicos/gabiao" },
        { nome: "Terramesh", href: "/servicos/terramesh" },
        { nome: "Outras Contenções", href: "/servicos/outras-contencoes" }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos Serviços de Engenharia
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
              Soluções técnicas especializadas em contenções, geotecnia e infraestrutura civil, 
              com excelência reconhecida no mercado nacional.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-secondary text-secondary-foreground px-4 py-2 text-base">
                Projetos Executivos
              </Badge>
              <Badge className="bg-secondary text-secondary-foreground px-4 py-2 text-base">
                Supervisão Técnica
              </Badge>
              <Badge className="bg-secondary text-secondary-foreground px-4 py-2 text-base">
                Fornecimento Completo
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Principais */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Áreas de Especialização
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas desde o projeto executivo até a supervisão técnica
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {servicos.map((servico, index) => (
              <Card key={index} className={`relative transition-all duration-300 hover:shadow-lg ${servico.destaque ? 'border-primary/20' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <servico.icon className="h-10 w-10 text-primary" />
                    {servico.destaque && (
                      <Badge className="bg-secondary text-secondary-foreground">Destaque</Badge>
                    )}
                  </div>
                  <CardTitle className="text-primary">{servico.titulo}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{servico.descricao}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Especialidades:</h4>
                    <ul className="space-y-1">
                      {servico.especialidades.map((esp, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-secondary mr-2" />
                          {esp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="w-full">
                    <NavLink to={servico.href}>
                      Saiba Mais
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </NavLink>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços Detalhados */}
      <section className="py-16 bg-engineering-light-gray">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Serviços Especializados em Contenções
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Técnicas avançadas para cada tipo de projeto e necessidade específica
            </p>
          </div>

          {subservicos.map((categoria, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-bold mb-8 text-center text-primary">
                {categoria.categoria}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoria.itens.map((item, i) => (
                  <Card key={i} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-primary">{item.nome}</h4>
                        <Button variant="ghost" size="sm" asChild>
                          <NavLink to={item.href}>
                            <ArrowRight className="h-4 w-4" />
                          </NavLink>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Processo de Trabalho */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Nosso Processo de Trabalho
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Metodologia comprovada para garantir excelência em todos os projetos
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                numero: "01",
                titulo: "Análise Técnica",
                descricao: "Avaliação detalhada do local e necessidades do projeto"
              },
              {
                numero: "02", 
                titulo: "Projeto Executivo",
                descricao: "Desenvolvimento de projeto técnico detalhado e aprovação"
              },
              {
                numero: "03",
                titulo: "Execução",
                descricao: "Implementação com supervisão técnica especializada"
              },
              {
                numero: "04",
                titulo: "Entrega Final",
                descricao: "Conclusão com documentação técnica e garantia"
              }
            ].map((etapa, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {etapa.numero}
                </div>
                <h3 className="font-semibold text-primary mb-2">{etapa.titulo}</h3>
                <p className="text-muted-foreground text-sm">{etapa.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Precisa de um Projeto Especializado?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Nossa equipe técnica está pronta para desenvolver a solução ideal para seu projeto. 
            Entre em contato para uma análise personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <NavLink to="/contato">
                Solicitar Orçamento
              </NavLink>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <NavLink to="/portfolio">
                Ver Projetos Executados
              </NavLink>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;