import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Phone, Mail, Building, Construction, Zap } from "lucide-react";
import { NavLink } from "react-router-dom";

const OAE = () => {
  const especialidades = [
    {
      icon: Construction,
      title: "Pontes e Viadutos",
      description: "Projetos estruturais complexos para infraestrutura viária"
    },
    {
      icon: Building,
      title: "Estruturas Especiais",
      description: "Soluções customizadas para projetos únicos e desafiadores"
    },
    {
      icon: Zap,
      title: "Obras Complexas",
      description: "Engenharia avançada para estruturas de grande porte"
    }
  ];

  const servicos = [
    "Projeto de pontes e viadutos",
    "Estruturas de grande vão",
    "Obras de arte correntes",
    "Passarelas e passagens",
    "Estruturas pré-moldadas especiais",
    "Análise estrutural avançada",
    "Modelagem computacional",
    "Supervisão técnica especializada"
  ];

  const diferenciais = [
    "Equipe técnica especializada",
    "Tecnologia de ponta",
    "Experiência comprovada",
    "Soluções inovadoras",
    "Cumprimento de prazos",
    "Qualidade garantida"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-4">
              Projetos Especiais
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              O.A.E
            </h1>
            <p className="text-lg md:text-xl mb-2 text-white/80">
              Obra de Artes Especiais
            </p>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Projetos estruturais complexos e soluções de engenharia avançada para obras de grande porte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <NavLink to="/contato">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Phone className="mr-2 h-5 w-5" />
                (11) 99999-9999
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Descrição */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Obras de Artes Especiais</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                As Obras de Artes Especiais (O.A.E) representam o mais alto nível da engenharia estrutural, 
                envolvendo projetos complexos como pontes, viadutos, passarelas e estruturas de grande porte 
                que demandam soluções técnicas avançadas e expertise especializada.
              </p>
              <p className="text-lg text-muted-foreground">
                Nossa equipe possui vasta experiência no desenvolvimento de projetos de O.A.E, utilizando 
                tecnologias de ponta e metodologias consagradas para garantir a segurança, funcionalidade 
                e durabilidade dessas estruturas fundamentais para a infraestrutura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Nossas Especialidades</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {especialidades.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Nossos Serviços</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicos.map((servico, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <p className="font-medium">{servico}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Nosso Processo</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                    1
                  </div>
                  <CardTitle className="text-lg">Análise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Estudo detalhado das condições locais e requisitos do projeto
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                    2
                  </div>
                  <CardTitle className="text-lg">Projeto</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Desenvolvimento do projeto estrutural com modelagem avançada
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                    3
                  </div>
                  <CardTitle className="text-lg">Validação</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Verificação e validação através de análises computacionais
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                    4
                  </div>
                  <CardTitle className="text-lg">Execução</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Acompanhamento técnico durante toda a fase de construção
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Nossos Diferenciais</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {diferenciais.map((diferencial, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <p className="font-medium">{diferencial}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Precisa de uma Obra de Arte Especial?</h2>
          <p className="text-xl mb-8 text-white/90">
            Entre em contato conosco e receba uma proposta personalizada para seu projeto complexo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <NavLink to="/contato">
                <Mail className="mr-2 h-5 w-5" />
                Solicitar Orçamento
              </NavLink>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Phone className="mr-2 h-5 w-5" />
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OAE;