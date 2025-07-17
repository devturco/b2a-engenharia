import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";

const MuroFlexao = () => {
  const vantagens = [
    "Estrutura resistente e durável",
    "Adaptável a diferentes terrenos",
    "Execução rápida e eficiente",
    "Custo-benefício otimizado",
    "Baixa manutenção",
    "Versatilidade de aplicação"
  ];

  const aplicacoes = [
    "Contenção de taludes",
    "Muros de arrimo",
    "Estruturas de contenção urbana",
    "Obras rodoviárias",
    "Projetos industriais",
    "Contenções temporárias e definitivas"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-4">
              Soluções em Contenção
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Muro a Flexão
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Soluções estruturais eficientes para contenção com tecnologia avançada e execução especializada
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
            <h2 className="text-3xl font-bold mb-8 text-center">O que é Muro a Flexão?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                O muro a flexão é uma solução estrutural de contenção que utiliza elementos de concreto armado 
                trabalhando predominantemente à flexão. Esta tecnologia oferece alta resistência e versatilidade 
                para diferentes tipos de contenção e estabilização de terrenos.
              </p>
              <p className="text-lg text-muted-foreground">
                Nossa expertise em projetos e execução de muros a flexão garante soluções técnicas eficientes, 
                seguras e economicamente viáveis para as mais diversas aplicações em engenharia civil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Vantagens do Muro a Flexão</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vantagens.map((vantagem, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <p className="font-medium">{vantagem}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Aplicações</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aplicacoes.map((aplicacao, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{aplicacao}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Serviços */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Nossos Serviços</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Projeto Estrutural</CardTitle>
                  <CardDescription>
                    Desenvolvimento completo de projetos de muros a flexão
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Análise estrutural detalhada</li>
                    <li>• Dimensionamento otimizado</li>
                    <li>• Memorial de cálculo</li>
                    <li>• Desenhos técnicos</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Execução de Obras</CardTitle>
                  <CardDescription>
                    Construção especializada com equipe técnica qualificada
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Execução completa</li>
                    <li>• Controle de qualidade</li>
                    <li>• Cronograma otimizado</li>
                    <li>• Supervisão técnica</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Formas Metálicas</CardTitle>
                  <CardDescription>
                    Venda e locação de formas especializadas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Formas sob medida</li>
                    <li>• Locação flexível</li>
                    <li>• Suporte técnico</li>
                    <li>• Manutenção incluída</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Precisa de uma Solução em Muro a Flexão?</h2>
          <p className="text-xl mb-8 text-white/90">
            Entre em contato conosco e receba uma proposta personalizada para seu projeto
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

export default MuroFlexao;