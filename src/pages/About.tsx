import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Users, Target, Eye, Award, CheckCircle, Building } from "lucide-react";

import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "Sobre a B2A Engenharia | Especialistas em Geotecnia e Contenções";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Conheça a B2A Engenharia, empresa líder em soluções de contenções, terra armada, solo grampeado e infraestrutura civil com mais de 13 anos de excelência.");
    }
  }, []);

  const valores = [
    {
      icon: Target,
      titulo: "Excelência Técnica",
      descricao: "Comprometidos com a qualidade e precisão em todos os projetos de engenharia geotécnica."
    },
    {
      icon: CheckCircle,
      titulo: "Confiabilidade",
      descricao: "Soluções seguras e duradouras em muros de arrimo e contenções especiais, respeitando normas técnicas."
    },
    {
      icon: Users,
      titulo: "Relacionamento",
      descricao: "Parceria próxima com clientes, oferecendo suporte técnico especializado no canteiro de obras."
    },
    {
      icon: Award,
      titulo: "Inovação",
      descricao: "Aplicação de tecnologias modernas como Terra Armada e Solo Grampeado com metodologias avançadas."
    }
  ];

  const equipe = [
    {
      nome: "Alison Noschang",
      cargo: "Engenheiro Civil Responsável",
      especialidade: "Projetos e Consultoria Geotécnica",
      experiencia: "Técnica com excelência em infraestrutura civil"
    },
    {
      nome: "Anderson Haro",
      cargo: "Diretor Comercial",
      especialidade: "Novos Negócios e Parcerias",
      experiencia: "Vasta experiência no mercado"
    },
    {
      nome: "Bruno Bertelli",
      cargo: "Diretor Administrativo e Operacional",
      especialidade: "Gestão de Obras e Processos",
      experiencia: "Gestão de alta performance"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Excelência em Engenharia Geotécnica e Contenções
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              A B2A Engenharia é especialista em Terra Armada, Muros de Flexão e Solo Grampeado,
              oferecendo soluções técnicas seguras de infraestrutura para todo o Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Mais de uma década construindo confiança
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-4">
                  Fundada com a missão de elevar os padrões da engenharia nacional, a <strong>B2A Engenharia</strong> é consolidada
                  como referência em projetos de <strong>contenções de solo</strong> e <strong>infraestrutura civil</strong> complexa.
                </p>
                <p className="text-muted-foreground mb-4">
                  Nossa expertise abrange desde o projeto inicial até a execução final de <strong>muros de concreto</strong>,
                  <strong>cortinas atirantadas</strong> e sistemas de <strong>solo grampeado</strong>, sempre focados na máxima segurança e custo-benefício.
                </p>
                <p className="text-muted-foreground">
                  Com sede estratégica e atuação nacional, atendemos setores de mineração, rodovias e urbanismo,
                  garantindo que cada obra seja um exemplo de durabilidade e precisão técnica.
                </p>
              </div>
            </div>
            <div className="bg-engineering-light-gray p-8 rounded-lg border-l-4 border-secondary">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">13</div>
                  <div className="text-muted-foreground font-medium">Anos de Mercado</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">300+</div>
                  <div className="text-muted-foreground font-medium">Obras Realizadas</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">80+</div>
                  <div className="text-muted-foreground font-medium">Grandes Clientes</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground font-medium">Segurança Técnica</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-engineering-light-gray">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Nossos Compromissos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Valores que sustentam nossa liderança em engenharia geotécnica
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-t-4 border-t-primary">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-primary uppercase tracking-tight">Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Prover soluções de engenharia inovadoras e seguras que viabilizem empreendimentos desafiadores,
                  contribuindo para o desenvolvimento da infraestrutura com responsabilidade técnica.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-t-secondary">
              <CardHeader>
                <Eye className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-primary uppercase tracking-tight">Nossa Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ser o principal parceiro técnico de grandes construtoras e mineradoras em soluções de contenção de solo,
                  reconhecidos pela agilidade e domínio tecnológico.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-t-primary">
              <CardHeader>
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-primary uppercase tracking-tight">Nossos Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ética inegociável, transparência total com o cliente, segurança absoluta nos processos e busca contínua
                  pela perfeição técnica em cada centímetro de obra.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                <valor.icon className="h-8 w-8 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold text-primary mb-2">{valor.titulo}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{valor.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe Técnica */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Diretoria e Liderança
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experiência e compromisso direto dos fundadores em cada projeto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {equipe.map((membro, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-none bg-engineering-light-gray/50">
                <CardHeader>
                  <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center shadow-inner">
                    <Users className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-primary text-2xl">{membro.nome}</CardTitle>
                  <p className="text-secondary font-bold uppercase text-sm tracking-wider">{membro.cargo}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Badge variant="secondary" className="px-3 py-1">{membro.especialidade}</Badge>
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-sm font-medium text-primary">{membro.experiencia}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-muted-foreground mb-8 text-lg">
              Nossa liderança atua diretamente na coordenação técnica e comercial, garantindo que o padrão
              de excelência da B2A Engenharia seja aplicado em todas as etapas da sua obra.
            </p>
            <Button size="lg" className="px-8 py-6 text-lg" asChild>
              <NavLink to="/contato">
                Fale com Nossos Especialistas
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Certificações e Diferenciais */}
      <section className="py-16 bg-engineering-light-gray">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Certificações e Diferenciais
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Qualidade técnica reconhecida e metodologias comprovadas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Award className="h-8 w-8 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">CREA Registrado</h3>
                <p className="text-sm text-muted-foreground">
                  Todos os projetos assinados por engenheiros registrados no CREA
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <CheckCircle className="h-8 w-8 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Normas Técnicas</h3>
                <p className="text-sm text-muted-foreground">
                  Projetos em conformidade com ABNT, NBR, DNIT e FHWA
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Target className="h-8 w-8 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Metodologia Própria</h3>
                <p className="text-sm text-muted-foreground">
                  Processos exclusivos para máxima eficiência e qualidade
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Building className="h-8 w-8 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Projetos Complexos</h3>
                <p className="text-sm text-muted-foreground">
                  Especialização em obras de grande porte e alta complexidade
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;