import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Users, Target, Eye, Award, CheckCircle, Building } from "lucide-react";

const About = () => {
  const valores = [
    {
      icon: Target,
      titulo: "Excelência Técnica",
      descricao: "Comprometidos com a qualidade e precisão em todos os projetos de engenharia."
    },
    {
      icon: CheckCircle,
      titulo: "Confiabilidade",
      descricao: "Soluções seguras e duradouras, respeitando normas técnicas e prazos estabelecidos."
    },
    {
      icon: Users,
      titulo: "Relacionamento",
      descricao: "Parceria próxima com clientes, oferecendo suporte técnico completo."
    },
    {
      icon: Award,
      titulo: "Inovação",
      descricao: "Aplicação de tecnologias modernas e metodologias avançadas de engenharia."
    }
  ];

  const equipe = [
    {
      nome: "Eng. João Silva",
      cargo: "Engenheiro Civil - Diretor Técnico",
      especialidade: "Geotecnia e Fundações",
      crea: "CREA-SP 123456/D",
      experiencia: "15 anos"
    },
    {
      nome: "Eng. Maria Santos",
      cargo: "Engenheira Civil - Coordenadora de Projetos",
      especialidade: "Estruturas e Contenções",
      crea: "CREA-SP 234567/D", 
      experiencia: "12 anos"
    },
    {
      nome: "Eng. Pedro Oliveira",
      cargo: "Engenheiro Geotécnico",
      especialidade: "Investigações de Solo",
      crea: "CREA-SP 345678/D",
      experiencia: "10 anos"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a B2A Engenharia
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Especialistas em contenções, infraestrutura civil e geotecnia, 
              oferecendo soluções técnicas de excelência há mais de uma década.
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
                Nossa História
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-4">
                  Fundada em 2010, a <strong>B2A Engenharia</strong> nasceu da visão de profissionais 
                  experientes em oferecer soluções técnicas especializadas para os desafios 
                  mais complexos da engenharia geotécnica e de contenções.
                </p>
                <p className="text-muted-foreground mb-4">
                  Ao longo dos anos, consolidamos nossa posição como referência no mercado, 
                  executando projetos de grande porte em infraestrutura civil, contenções 
                  especiais e soluções geotécnicas inovadoras.
                </p>
                <p className="text-muted-foreground">
                  Nossa trajetória é marcada pelo compromisso com a excelência técnica, 
                  segurança operacional e relacionamento próximo com nossos clientes, 
                  garantindo resultados que superam expectativas.
                </p>
              </div>
            </div>
            <div className="bg-engineering-light-gray p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">14+</div>
                  <div className="text-muted-foreground">Anos de Experiência</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <div className="text-muted-foreground">Projetos Executados</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Clientes Atendidos</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Projetos Aprovados</div>
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
              Missão, Visão e Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os pilares que norteiam nossa atuação e compromisso com a excelência
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-primary">Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Oferecer soluções técnicas especializadas em geotecnia, contenções 
                  e infraestrutura civil, garantindo segurança, qualidade e eficiência 
                  em todos os projetos executados.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Eye className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-primary">Nossa Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ser reconhecida como referência nacional em engenharia geotécnica 
                  e de contenções, através da inovação, excelência técnica e 
                  sustentabilidade em nossos projetos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-primary">Nossos Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ética profissional, compromisso com a qualidade, inovação 
                  tecnológica, responsabilidade socioambiental e relacionamento 
                  de confiança com clientes e parceiros.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <div key={index} className="text-center">
                <valor.icon className="h-8 w-8 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold text-primary mb-2">{valor.titulo}</h3>
                <p className="text-sm text-muted-foreground">{valor.descricao}</p>
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
              Equipe Técnica Especializada
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Profissionais qualificados e experientes, comprometidos com a excelência em engenharia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {equipe.map((membro, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-primary">{membro.nome}</CardTitle>
                  <p className="text-muted-foreground font-medium">{membro.cargo}</p>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline">{membro.especialidade}</Badge>
                  <p className="text-sm text-muted-foreground">{membro.crea}</p>
                  <p className="text-sm font-medium text-primary">{membro.experiencia} de experiência</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Nossa equipe é formada por engenheiros civis especialistas, técnicos qualificados 
              e profissionais com vasta experiência em projetos de grande complexidade.
            </p>
            <Button size="lg" asChild>
              <NavLink to="/contato">
                Fale com Nossa Equipe
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