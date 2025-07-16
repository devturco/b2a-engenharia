import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { 
  Anchor, 
  CheckCircle, 
  Waves, 
  Shield, 
  Settings,
  Phone,
  Building,
  Award
} from "lucide-react";

const ContencoesMartitimas = () => {
  const caracteristicasMaritimas = [
    "Resistência à ação de ondas e marés",
    "Materiais resistentes à corrosão salina",
    "Estruturas flexíveis para cargas dinâmicas",
    "Sistemas de drenagem para variação de maré",
    "Proteção contra erosão marinha",
    "Integração com ecossistemas costeiros",
    "Durabilidade em ambiente agressivo"
  ];

  const tiposEstrutura = [
    {
      titulo: "Enrocamento",
      descricao: "Proteção com blocos rochosos de grande porte",
      aplicacoes: ["Quebra-mares", "Proteção de costas", "Bases portuárias"]
    },
    {
      titulo: "Gabiões Marítimos",
      descricao: "Estruturas flexíveis para ambientes aquáticos",
      aplicacoes: ["Contenção de margens", "Proteção de fundações", "Obras temporárias"]
    },
    {
      titulo: "Cortinas Marítimas",
      descricao: "Estruturas verticais para contenção em profundidade",
      aplicacoes: ["Portos", "Marinas", "Obras de infraestrutura"]
    },
    {
      titulo: "Sistemas Mistos",
      descricao: "Combinação de técnicas para máxima eficiência",
      aplicacoes: ["Obras complexas", "Proteção integral", "Soluções customizadas"]
    }
  ];

  const desafiosTecnicos = [
    {
      desafio: "Ação das Ondas",
      solucao: "Dimensionamento para cargas dinâmicas e impacto",
      icon: Waves
    },
    {
      desafio: "Corrosão Salina",
      solucao: "Materiais especiais e proteção anticorrosiva",
      icon: Shield
    },
    {
      desafio: "Variação de Maré",
      solucao: "Estruturas adaptáveis e sistemas de drenagem",
      icon: Settings
    },
    {
      desafio: "Impacto Ambiental",
      solucao: "Soluções sustentáveis e integração ecológica",
      icon: Award
    }
  ];

  const fasesDesenvolvimento = [
    "Estudos oceanográficos e ambientais",
    "Caracterização geotécnica submarina",
    "Modelagem hidrodinâmica avançada",
    "Desenvolvimento de soluções técnicas",
    "Análise de viabilidade técnica e econômica",
    "Projeto executivo detalhado",
    "Supervisão técnica especializada"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-secondary text-secondary-foreground mb-4 px-4 py-2">
              Em Desenvolvimento
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contenções Marítimas - Soluções Costeiras
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
              Estamos desenvolvendo expertise em contenções marítimas e costeiras, 
              aplicando nossa experiência em geotecnia para desafios do ambiente aquático.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <NavLink to="/contato">
                  Manifestar Interesse
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Phone className="h-5 w-5 mr-2" />
                Consultoria Prévia
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Desenvolvimento de Expertise */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Expandindo Nossa Expertise
              </h2>
              <div className="prose prose-lg max-w-none space-y-4">
                <p className="text-muted-foreground">
                  A <strong>B2A Engenharia</strong> está desenvolvendo competências específicas 
                  em <strong>contenções marítimas e costeiras</strong>, aplicando nossa sólida 
                  experiência em geotecnia e contenções terrestres para os desafios únicos 
                  do ambiente aquático.
                </p>
                <p className="text-muted-foreground">
                  Reconhecemos que o ambiente marítimo apresenta condições especiais que 
                  demandam soluções técnicas específicas, incluindo resistência à corrosão, 
                  ação de ondas, variação de marés e impactos ambientais diferenciados.
                </p>
                <p className="text-muted-foreground">
                  Estamos investindo em estudos, parcerias técnicas e desenvolvimento de 
                  metodologias para oferecer soluções completas em contenções portuárias, 
                  proteção costeira e infraestrutura marítima.
                </p>
              </div>
            </div>
            <div className="bg-engineering-light-gray p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">Características Especiais</h3>
              <div className="space-y-4">
                {caracteristicasMaritimas.slice(0, 5).map((caracteristica, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Waves className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{caracteristica}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Estruturas */}
      <section className="py-16 bg-engineering-light-gray">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Tipos de Contenções Marítimas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções técnicas sendo estudadas para diferentes necessidades costeiras
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tiposEstrutura.map((tipo, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Anchor className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-primary">{tipo.titulo}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{tipo.descricao}</p>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Aplicações previstas:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {tipo.aplicacoes.map((app, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1 h-1 bg-secondary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Desafios Técnicos */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Desafios Técnicos do Ambiente Marítimo
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Aspectos específicos que requerem soluções técnicas especializadas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {desafiosTecnicos.map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary text-lg">{item.desafio}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{item.solucao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fases de Desenvolvimento */}
      <section className="py-16 bg-engineering-light-gray">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Fases de Desenvolvimento de Projetos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Metodologia sendo desenvolvida para projetos marítimos
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {fasesDesenvolvimento.map((fase, index) => (
                <div key={index} className="flex items-start space-x-4 bg-background p-6 rounded-lg">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-muted-foreground">{fase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aplicações Futuras */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Aplicações Futuras
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Áreas de atuação previstas em contenções marítimas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                titulo: "Portos e Terminais",
                descricao: "Contenções para cais, píeres e estruturas portuárias",
                icon: Building
              },
              {
                titulo: "Proteção Costeira",
                descricao: "Estruturas para proteção contra erosão marinha",
                icon: Shield
              },
              {
                titulo: "Infraestrutura Aquática",
                descricao: "Contenções para pontes, marinas e obras offshore",
                icon: Anchor
              }
            ].map((aplicacao, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <aplicacao.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary">{aplicacao.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{aplicacao.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Atual */}
      <section className="py-16 bg-engineering-light-gray">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Nossa Base Técnica Atual
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Competências que nos qualificam para desenvolver soluções marítimas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "14+ anos em contenções terrestres",
              "Expertise em estruturas complexas",
              "Domínio de análise geotécnica",
              "Experiência em materiais especiais",
              "Projetos em ambientes agressivos",
              "Metodologias de dimensionamento",
              "Supervisão técnica especializada",
              "Parcerias com fornecedores qualificados"
            ].map((competencia, index) => (
              <div key={index} className="flex items-start space-x-3 bg-background p-4 rounded-lg">
                <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">{competencia}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline de Desenvolvimento */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Cronograma de Desenvolvimento
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Etapas previstas para consolidação da expertise marítima
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { periodo: "2024", atividade: "Estudos e capacitação técnica", status: "Em andamento" },
              { periodo: "2025", atividade: "Parcerias e projetos piloto", status: "Planejado" },
              { periodo: "2026", atividade: "Primeiros projetos executivos", status: "Meta" },
              { periodo: "2027+", atividade: "Atuação consolidada", status: "Objetivo" }
            ].map((etapa, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {etapa.periodo}
                  </div>
                  <CardTitle className="text-primary text-lg">{etapa.atividade}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="text-xs">
                    {etapa.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interessado em Contenções Marítimas?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Manifeste seu interesse em nossos futuros serviços de contenções marítimas. 
            Entraremos em contato quando estivermos prontos para atender projetos nesta área.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <NavLink to="/contato">
                Manifestar Interesse
              </NavLink>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <NavLink to="/servicos">
                Ver Serviços Atuais
              </NavLink>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContencoesMartitimas;