import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { 
  Shield, 
  Mountain, 
  Anchor, 
  Settings, 
  CheckCircle,
  ArrowRight,
  FileText,
  Award,
  Phone
} from "lucide-react";

const ProjetosContencao = () => {
  const tiposContencao = [
    {
      titulo: "Cortina Atirantada",
      descricao: "Estruturas de contenção com tirantes para altas cargas e grandes alturas.",
      icon: Shield,
      href: "/servicos/cortina-atirantada",
      aplicacoes: ["Grandes alturas", "Cargas elevadas", "Terrenos rochosos"],
      destaque: true
    },
    {
      titulo: "Solo Grampeado",
      descricao: "Técnica de reforço de solo in-situ para estabilização de taludes.",
      icon: Mountain,
      href: "/servicos/solo-grampeado",
      aplicacoes: ["Taludes naturais", "Cortes em solo", "Escavações"],
      destaque: true
    },
    {
      titulo: "Gabião",
      descricao: "Estruturas de contenção flexíveis usando gaiolas metálicas preenchidas.",
      icon: Settings,
      href: "/servicos/gabiao",
      aplicacoes: ["Contenções flexíveis", "Drenagem", "Paisagismo"],
      destaque: false
    },
    {
      titulo: "Terramesh",
      descricao: "Sistema de contenção modular com geotêxtil integrado para revegetação.",
      icon: Anchor,
      href: "/servicos/terramesh",
      aplicacoes: ["Revegetação", "Proteção ambiental", "Contenções verdes"],
      destaque: false
    }
  ];

  const caracteristicas = [
    "Projetos executivos detalhados conforme NBR 11682",
    "Análise de estabilidade global e local",
    "Dimensionamento de elementos estruturais",
    "Especificação de materiais e equipamentos",
    "Detalhamento de sistemas de drenagem",
    "Cronograma executivo e memorial de cálculo",
    "Supervisão técnica especializada"
  ];

  const metodologia = [
    {
      etapa: "Investigação Geotécnica",
      descricao: "Caracterização completa do subsolo através de sondagens e ensaios",
      icon: FileText
    },
    {
      etapa: "Análise de Estabilidade",
      descricao: "Verificação da segurança através de métodos computacionais avançados",
      icon: Settings
    },
    {
      etapa: "Dimensionamento",
      descricao: "Cálculo estrutural dos elementos de contenção conforme normas técnicas",
      icon: Award
    },
    {
      etapa: "Projeto Executivo",
      descricao: "Documentação técnica completa para execução da obra",
      icon: Shield
    }
  ];

  const vantagens = [
    "Soluções técnicas personalizadas para cada projeto",
    "Otimização de custos através de análises comparativas",
    "Projetos em conformidade com normas ABNT e DNIT",
    "Equipe especializada com mais de 14 anos de experiência",
    "Acompanhamento técnico durante toda a execução",
    "Garantia de desempenho e durabilidade das estruturas",
    "Integração com sistemas de drenagem e paisagismo"
  ];

  const aplicacoesPraticas = [
    "Contenção de taludes em rodovias e ferrovias",
    "Estabilização de encostas urbanas",
    "Contenções para edificações e subsolo",
    "Proteção de infraestruturas críticas",
    "Recuperação de áreas degradadas",
    "Contenções temporárias para escavações",
    "Muros de divisa e paisagismo"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-secondary text-secondary-foreground mb-4 px-4 py-2">
              Contenções Especializadas
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Projetos de Contenção Completos
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
              Soluções técnicas especializadas em contenções para estabilização de taludes, 
              encostas e estruturas de terra com máxima segurança e eficiência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <NavLink to="/contato">
                  Solicitar Projeto
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Phone className="h-5 w-5 mr-2" />
                Consultoria Técnica
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Engenharia de Contenções de Excelência
              </h2>
              <div className="prose prose-lg max-w-none space-y-4">
                <p className="text-muted-foreground">
                  Os <strong>projetos de contenção</strong> são fundamentais para garantir a estabilidade 
                  de taludes, encostas e estruturas de terra em diversas obras de engenharia civil. 
                  Na B2A Engenharia, desenvolvemos soluções técnicas personalizadas para cada situação específica.
                </p>
                <p className="text-muted-foreground">
                  Nossa metodologia integra <strong>análise geotécnica</strong> avançada, dimensionamento 
                  estrutural rigoroso e especificação de materiais de qualidade, sempre em conformidade 
                  com as normas <strong>NBR 11682</strong>, <strong>NBR 5629</strong> e diretrizes do <strong>DNIT</strong>.
                </p>
                <p className="text-muted-foreground">
                  Oferecemos desde estudos preliminares até supervisão técnica da execução, 
                  garantindo máxima segurança e durabilidade das estruturas de contenção.
                </p>
              </div>
            </div>
            <div className="bg-engineering-light-gray p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">Características dos Nossos Projetos</h3>
              <div className="space-y-4">
                {caracteristicas.slice(0, 5).map((caracteristica, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{caracteristica}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Contenção */}
      <section className="py-16 bg-engineering-light-gray">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Tipos de Contenção Especializados
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada projeto demanda uma solução específica. Conheça nossas especialidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {tiposContencao.map((tipo, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${tipo.destaque ? 'border-primary/20' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <tipo.icon className="h-10 w-10 text-primary" />
                    {tipo.destaque && (
                      <Badge className="bg-secondary text-secondary-foreground">Destaque</Badge>
                    )}
                  </div>
                  <CardTitle className="text-primary">{tipo.titulo}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{tipo.descricao}</p>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Aplicações principais:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tipo.aplicacoes.map((app, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <NavLink to={tipo.href}>
                      Saiba Mais
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </NavLink>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <NavLink to="/servicos/outras-contencoes">
                Ver Outras Soluções de Contenção
                <ArrowRight className="h-5 w-5 ml-2" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Nossa Metodologia de Projeto
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Processo técnico rigoroso para garantir excelência em cada projeto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metodologia.map((etapa, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {index + 1}
                  </div>
                  <etapa.icon className="h-8 w-8 text-secondary mx-auto mb-4" />
                  <CardTitle className="text-primary text-lg">{etapa.etapa}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{etapa.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens e Aplicações */}
      <section className="py-16 bg-engineering-light-gray">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">
                Vantagens dos Nossos Projetos
              </h2>
              <div className="space-y-4">
                {vantagens.map((vantagem, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{vantagem}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">
                Aplicações Práticas
              </h2>
              <div className="space-y-4">
                {aplicacoesPraticas.map((aplicacao, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Mountain className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{aplicacao}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Normas e Especificações */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Conformidade com Normas Técnicas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Todos os projetos seguem rigorosamente as normas brasileiras e internacionais
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { norma: "NBR 11682", desc: "Estabilidade de Taludes" },
              { norma: "NBR 5629", desc: "Execução de Tirantes" },
              { norma: "NBR 9286", desc: "Terra Armada" },
              { norma: "DNIT 379", desc: "Solo Grampeado" },
              { norma: "FHWA", desc: "Contenções Especiais" },
              { norma: "ABNT", desc: "Materiais e Ensaios" }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <Award className="h-8 w-8 text-secondary mx-auto mb-3" />
                  <h3 className="font-bold text-primary mb-1">{item.norma}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Precisa de um Projeto de Contenção?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Nossa equipe especializada desenvolve a solução técnica ideal para seu projeto, 
            garantindo segurança, eficiência e conformidade com normas técnicas.
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

export default ProjetosContencao;