import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { 
  Building, 
  CheckCircle, 
  Settings, 
  Shield, 
  Award,
  Phone,
  Wrench,
  Layers,
  ArrowRight
} from "lucide-react";

const OutrasContencoes = () => {
  const tiposContencao = [
    {
      titulo: "Parede Diafragma",
      descricao: "Paredes de concreto moldadas in-loco para contenções de grande profundidade",
      icon: Building,
      aplicacoes: ["Subsolos profundos", "Contenções impermeáveis", "Obras portuárias"],
      vantagens: ["Impermeabilidade", "Grandes profundidades", "Estrutura definitiva"]
    },
    {
      titulo: "Estacas Prancha",
      descricao: "Sistema de contenção usando estacas metálicas ou de concreto entrelaçadas",
      icon: Shield,
      aplicacoes: ["Obras portuárias", "Contenções temporárias", "Escoramentos"],
      vantagens: ["Execução rápida", "Reaproveitável", "Resistente à água"]
    },
    {
      titulo: "Muros de Gravidade",
      descricao: "Estruturas de contenção que resistem por peso próprio",
      icon: Layers,
      aplicacoes: ["Contenções de pequeno porte", "Muros de divisa", "Paisagismo"],
      vantagens: ["Simplicidade construtiva", "Baixo custo", "Durabilidade"]
    },
    {
      titulo: "Muros de Flexão",
      descricao: "Estruturas em concreto armado que resistem por flexão",
      icon: Settings,
      aplicacoes: ["Contenções urbanas", "Subsolos", "Obras lineares"],
      vantagens: ["Otimização de material", "Menor volume", "Versatilidade"]
    },
    {
      titulo: "Jet Grouting",
      descricao: "Técnica de tratamento de solo para criação de cortinas impermeáveis",
      icon: Wrench,
      aplicacoes: ["Impermeabilização", "Contenções", "Tratamento de solo"],
      vantagens: ["Versatilidade", "Sem vibração", "Precisão geométrica"]
    },
    {
      titulo: "Micro Estacas",
      descricao: "Sistema de reforço usando estacas de pequeno diâmetro",
      icon: Award,
      aplicacoes: ["Reforço de fundações", "Contenções", "Espaços reduzidos"],
      vantagens: ["Baixa vibração", "Espaços confinados", "Alta capacidade"]
    }
  ];

  const criteriosSelecao = [
    "Altura da contenção necessária",
    "Características geotécnicas do terreno",
    "Presença de água subterrânea",
    "Cargas atuantes na estrutura",
    "Restrições construtivas do local",
    "Vida útil requerida da estrutura",
    "Aspectos econômicos e prazo de execução"
  ];

  const metodologiaProjeto = [
    {
      etapa: "Análise Preliminar",
      descricao: "Avaliação das condições locais e restrições do projeto",
      icon: Settings
    },
    {
      etapa: "Estudo Comparativo",
      descricao: "Análise técnica e econômica de diferentes soluções",
      icon: Award
    },
    {
      etapa: "Projeto Detalhado",
      descricao: "Desenvolvimento da solução escolhida com detalhamentos",
      icon: Building
    },
    {
      etapa: "Especificações",
      descricao: "Memorial descritivo, materiais e procedimentos executivos",
      icon: Shield
    }
  ];

  const vantagens = [
    "Análise técnica para escolha da melhor solução",
    "Projetos personalizados para cada situação",
    "Otimização de custos e prazos de execução",
    "Conformidade com normas técnicas vigentes",
    "Acompanhamento técnico especializado",
    "Garantia de performance das estruturas",
    "Soluções integradas com outras disciplinas"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-secondary text-secondary-foreground mb-4 px-4 py-2">
              Soluções Diversificadas
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Outras Soluções de Contenção
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
              Amplo portfólio de técnicas de contenção para atender necessidades específicas 
              de cada projeto, garantindo a solução mais adequada técnica e economicamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <NavLink to="/contato">
                  Solicitar Análise
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Diversidade de Soluções Técnicas
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-muted-foreground mb-6">
                Cada projeto de contenção apresenta características únicas que demandam 
                análise técnica especializada para escolha da solução mais adequada.
              </p>
              <p className="text-muted-foreground">
                Na <strong>B2A Engenharia</strong>, oferecemos amplo portfólio de técnicas 
                de contenção, desde soluções convencionais até tecnologias avançadas, 
                sempre priorizando segurança, economia e adequação às condições específicas 
                de cada obra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Contenção */}
      <section className="py-16 bg-engineering-light-gray">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Técnicas de Contenção Disponíveis
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções técnicas para diferentes necessidades e condições de projeto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tiposContencao.map((tipo, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <tipo.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-primary">{tipo.titulo}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{tipo.descricao}</p>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Aplicações:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {tipo.aplicacoes.map((app, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1 h-1 bg-secondary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Vantagens:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {tipo.vantagens.map((vant, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-3 w-3 text-secondary mt-0.5 mr-2 flex-shrink-0" />
                          {vant}
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

      {/* Metodologia de Seleção */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Metodologia para Seleção da Solução
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Processo técnico estruturado para escolha da melhor alternativa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {metodologiaProjeto.map((metodo, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {index + 1}
                  </div>
                  <metodo.icon className="h-8 w-8 text-secondary mx-auto mb-4" />
                  <CardTitle className="text-primary text-lg">{metodo.etapa}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{metodo.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-primary text-center">
              Critérios de Seleção Técnica
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {criteriosSelecao.map((criterio, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Award className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{criterio}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens da B2A */}
      <section className="py-16 bg-engineering-light-gray">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Diferenciais da B2A em Contenções
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experiência e metodologia para garantir a melhor solução para seu projeto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vantagens.map((vantagem, index) => (
              <div key={index} className="flex items-start space-x-3 bg-background p-6 rounded-lg">
                <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{vantagem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicações Práticas */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Aplicações em Diferentes Contextos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções adaptadas para cada tipo de obra e necessidade específica
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                contexto: "Obras Urbanas",
                tecnicas: ["Parede diafragma", "Muros de flexão", "Micro estacas"],
                caracteristicas: "Espaços reduzidos, baixa vibração"
              },
              {
                contexto: "Obras Portuárias",
                tecnicas: ["Estacas prancha", "Parede diafragma", "Jet grouting"],
                caracteristicas: "Ambiente aquático, cargas elevadas"
              },
              {
                contexto: "Infraestrutura",
                tecnicas: ["Muros de gravidade", "Solo grampeado", "Terra armada"],
                caracteristicas: "Grandes extensões, economia"
              },
              {
                contexto: "Casos Especiais",
                tecnicas: ["Jet grouting", "Micro estacas", "Soluções mistas"],
                caracteristicas: "Condições específicas, inovação"
              }
            ].map((app, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Building className="h-10 w-10 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary text-lg">{app.contexto}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Técnicas aplicáveis:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {app.tecnicas.map((tec, i) => (
                        <li key={i}>{tec}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground italic">{app.caracteristicas}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Links para Outras Páginas */}
      <section className="py-16 bg-engineering-light-gray">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Conheça Nossas Especialidades
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Saiba mais sobre nossas principais técnicas de contenção
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { nome: "Terra Armada", href: "/servicos/terra-armada" },
              { nome: "Solo Grampeado", href: "/servicos/solo-grampeado" },
              { nome: "Cortina Atirantada", href: "/servicos/cortina-atirantada" },
              { nome: "Gabião", href: "/servicos/gabiao" }
            ].map((servico, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-primary">{servico.nome}</h4>
                    <Button variant="ghost" size="sm" asChild>
                      <NavLink to={servico.href}>
                        <ArrowRight className="h-4 w-4" />
                      </NavLink>
                    </Button>
                  </div>
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
            Precisa da Melhor Solução de Contenção?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Nossa equipe analisa seu projeto e recomenda a solução técnica mais adequada, 
            considerando todos os aspectos técnicos, econômicos e executivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <NavLink to="/contato">
                Solicitar Análise Técnica
              </NavLink>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Phone className="h-5 w-5 mr-2" />
              Consultoria Especializada
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OutrasContencoes;