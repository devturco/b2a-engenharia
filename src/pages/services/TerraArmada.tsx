import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { 
  CheckCircle, 
  Shield, 
  Settings, 
  Users, 
  FileText,
  Phone,
  Mountain,
  Award
} from "lucide-react";

const TerraArmada = () => {
  const servicos = [
    {
      titulo: "Projeto Executivo",
      descricao: "Desenvolvimento completo do projeto técnico com dimensionamento, especificações e detalhamentos.",
      icon: FileText
    },
    {
      titulo: "ECE (Elementos Construtivos Específicos)",
      descricao: "Materiais específicas para a montagem do muro em Terra Armada.",
      icon: Settings
    },
    {
      titulo: "Mão de Obra Especializada",
      descricao: "Equipe técnica qualificada para execução de obras de terra armada com máxima precisão.",
      icon: Users
    },
    {
      titulo: "Fornecimento de Equipamentos",
      descricao: "Equipamentos e materiais de alta qualidade para construção de estruturas de terra armada.",
      icon: Mountain
    },
    {
      titulo: "Supervisão Técnica",
      descricao: "Acompanhamento especializado durante toda a execução para garantir qualidade e segurança.",
      icon: Shield
    }
  ];

  const beneficios = [
    "Redução significativa de custos comparado a soluções convencionais",
    "Maior rapidez na execução da obra",
    "Flexibilidade para acomodar recalques e movimentações do terreno",
    "Excelente desempenho sísmico",
    "Possibilidade de construção em etapas",
    "Baixo impacto ambiental",
    "Durabilidade e resistência comprovadas"
  ];

  const aplicacoes = [
    "Muros de contenção para rodovias e ferrovias",
    "Estruturas de contenção em mineração",
    "Contenções para aterros sanitários",
    "Muros de arrimo para estabilização de taludes",
    "Estruturas de contenção em portos",
    "Contenções em áreas urbanas",
    "Reforço de aterros sobre solos moles"
  ];

  const diferenciais = [
    "Mais de 14 anos de experiência em terra armada",
    "Equipe técnica especializada e certificada",
    "Metodologia exclusiva de dimensionamento",
    "Uso de materiais de primeira qualidade",
    "Supervisão técnica em tempo integral",
    "Projetos em conformidade com normas NBR e FHWA",
    "Garantia técnica de 5 anos"
  ];

  const faqs = [
    {
      pergunta: "O que é terra armada e como funciona?",
      resposta: "Terra armada é uma técnica de reforço de solo que utiliza elementos de tração (fitas metálicas ou geossintéticos) combinados com solo compactado para formar uma estrutura estável e resistente."
    },
    {
      pergunta: "Quais as vantagens da terra armada sobre muros convencionais?",
      resposta: "Principal vantagem é o custo-benefício, além de maior flexibilidade, rapidez na execução e melhor comportamento em terrenos instáveis."
    },
    {
      pergunta: "Qual a altura máxima para estruturas de terra armada?",
      resposta: "Tecnicamente não há limite de altura, já existem estruturas com mais de 50 metros. O dimensionamento é feito caso a caso conforme as condições do terreno."
    },
    {
      pergunta: "Quanto tempo leva para executar um projeto de terra armada?",
      resposta: "Depende da altura e extensão, mas em média 30% mais rápido que soluções convencionais, podendo ser executado até 3-4 metros por dia."
    },
    {
      pergunta: "A B2A oferece garantia para projetos de terra armada?",
      resposta: "Sim, oferecemos garantia técnica de 5 anos para todos os projetos executados, além de acompanhamento pós-obra."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-secondary text-secondary-foreground mb-4 px-4 py-2">
              Especialidade Principal
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terra Armada - Soluções Completas
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
              Projetos executivos, ECE, fornecimento de equipamentos, mão de obra especializada 
              e supervisão técnica para estruturas de terra armada de alta performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <NavLink to="/contato">
                  Solicitar Orçamento
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Phone className="h-5 w-5 mr-2" />
                (11) 99999-9999
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
                Tecnologia Terra Armada de Excelência
              </h2>
              <div className="prose prose-lg max-w-none space-y-4">
                <p className="text-muted-foreground">
                  A <strong>terra armada</strong> é uma técnica revolucionária de engenharia geotécnica que 
                  combina solo compactado com elementos de reforço (fitas metálicas ou geossintéticos), 
                  criando uma estrutura monolítica de alta resistência e flexibilidade.
                </p>
                <p className="text-muted-foreground">
                  Na <strong>B2A Engenharia</strong>, oferecemos soluções completas em terra armada, desde o 
                  estudo de concepção (ECE) até a supervisão técnica da execução, garantindo máxima 
                  eficiência e segurança em projetos de contenção e estabilização.
                </p>
                <p className="text-muted-foreground">
                  Nossa metodologia segue rigorosamente as normas <strong>NBR 9286</strong>, <strong>FHWA</strong> 
                  e <strong>ABNT</strong>, utilizando materiais certificados e equipe técnica especializada 
                  para entregar projetos de excelência.
                </p>
              </div>
            </div>
            <div className="bg-engineering-light-gray p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">Por que escolher Terra Armada?</h3>
              <div className="space-y-4">
                {beneficios.slice(0, 4).map((beneficio, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{beneficio}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Oferecidos */}
      <section className="py-16 bg-engineering-light-gray">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Serviços Completos em Terra Armada
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Solução integrada desde o projeto até a entrega final da obra
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((servico, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <servico.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary">{servico.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{servico.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios Detalhados */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">
                Benefícios da Terra Armada
              </h2>
              <div className="space-y-4">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{beneficio}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">
                Aplicações Práticas
              </h2>
              <div className="space-y-4">
                {aplicacoes.map((aplicacao, index) => (
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

      {/* Diferenciais da B2A */}
      <section className="py-16 bg-engineering-light-gray">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Diferenciais da B2A em Terra Armada
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experiência, metodologia e qualidade que fazem a diferença em seus projetos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferenciais.map((diferencial, index) => (
              <div key={index} className="flex items-start space-x-3 bg-background p-6 rounded-lg">
                <Award className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{diferencial}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco Visual */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Projetos em Terra Armada
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Veja exemplos de nossos projetos executados com excelência técnica
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <Mountain className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Imagem do Projeto {i}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      [Espaço para vídeo explicativo ou galeria de imagens]
                    </p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-2">
                    Projeto Terra Armada - Obra {i}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Exemplo de aplicação técnica em projeto real
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-engineering-light-gray">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Perguntas Frequentes sobre Terra Armada
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Esclarecemos as principais dúvidas sobre esta tecnologia
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <h3 className="font-semibold text-primary">{faq.pergunta}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.resposta}</p>
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
            Precisa de um Projeto em Terra Armada?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para desenvolver a solução ideal 
            para seu projeto. Entre em contato para uma análise técnica personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <NavLink to="/contato">
                Solicitar Análise Técnica
              </NavLink>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Phone className="h-5 w-5 mr-2" />
              Ligar Agora
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TerraArmada;