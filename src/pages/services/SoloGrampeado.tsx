import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { 
  Mountain, 
  CheckCircle, 
  Settings, 
  Shield, 
  Award,
  FileText,
  Phone,
  Wrench
} from "lucide-react";

const SoloGrampeado = () => {
  const vantagens = [
    "Técnica executiva simples e rápida",
    "Redução significativa de custos",
    "Preservação da paisagem natural",
    "Adaptabilidade a geometrias complexas",
    "Baixo impacto ambiental",
    "Execução em etapas conforme necessário",
    "Excelente relação custo-benefício"
  ];

  const aplicacoes = [
    "Estabilização de taludes de corte em rodovias",
    "Contenção de encostas em áreas urbanas",
    "Escavações temporárias e permanentes",
    "Recuperação de deslizamentos",
    "Estabilização de taludes ferroviários",
    "Contenções para mineração",
    "Proteção de infraestruturas existentes"
  ];

  const processoExecutivo = [
    {
      etapa: "Perfuração",
      descricao: "Execução de furos com diâmetro e inclinação conforme projeto",
      icon: Wrench
    },
    {
      etapa: "Instalação dos Grampos",
      descricao: "Inserção de barras de aço e injeção de calda de cimento",
      icon: Settings
    },
    {
      etapa: "Revestimento",
      descricao: "Aplicação de concreto projetado e tela metálica",
      icon: Shield
    },
    {
      etapa: "Acabamento",
      descricao: "Proteção final e sistema de drenagem superficial",
      icon: Mountain
    }
  ];

  const especificacoesTecnicas = [
    "Grampos em aço CA-50 Ø 20 a 32 mm",
    "Calda de cimento com fator a/c ≤ 0,45",
    "Concreto projetado fck ≥ 25 MPa",
    "Tela metálica soldada Q-196 ou superior",
    "Sistema de drenagem integrado",
    "Proteção anticorrosiva dos grampos",
    "Controle de qualidade rigoroso"
  ];

  const criteriosProjeto = [
    "Análise de estabilidade global e local",
    "Dimensionamento conforme DNIT 379/2022",
    "Verificação de resistência ao arrancamento",
    "Análise de tensões no revestimento",
    "Projeto de sistema de drenagem",
    "Especificação de materiais e equipamentos",
    "Memorial de cálculo detalhado"
  ];

  const faqs = [
    {
      pergunta: "Como funciona o sistema de solo grampeado?",
      resposta: "O solo grampeado funciona através da inserção de elementos resistentes à tração (grampos) no maciço de solo, criando um material compósito de maior resistência. O revestimento de concreto projetado protege a face e distribui as cargas."
    },
    {
      pergunta: "Qual a altura máxima para estruturas de solo grampeado?",
      resposta: "Tecnicamente não há limite de altura, mas comercialmente são comuns estruturas até 30-40 metros. Para alturas maiores, análises específicas de viabilidade técnica e econômica são necessárias."
    },
    {
      pergunta: "Solo grampeado pode ser usado em qualquer tipo de solo?",
      resposta: "O solo grampeado é mais eficiente em solos coesivos (argilas e siltes) e solos mistos. Em solos puramente granulares, outras técnicas podem ser mais adequadas."
    },
    {
      pergunta: "Quanto tempo leva para executar um projeto de solo grampeado?",
      resposta: "A execução é rápida, permitindo avanços de 3-5 metros por semana, dependendo das condições do terreno e dimensões do projeto."
    },
    {
      pergunta: "É necessário manutenção em estruturas de solo grampeado?",
      resposta: "A manutenção é mínima, restringindo-se à inspeção visual periódica do revestimento e sistema de drenagem, conforme recomendações da NBR."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-secondary text-secondary-foreground mb-4 px-4 py-2">
              Técnica Comprovada
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solo Grampeado - Estabilização Eficiente
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
              Solução técnica avançada para estabilização de taludes através de reforço 
              do solo in-situ, oferecendo segurança, economia e rapidez executiva.
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

      {/* Introdução Técnica */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Tecnologia Solo Grampeado
              </h2>
              <div className="prose prose-lg max-w-none space-y-4">
                <p className="text-muted-foreground">
                  O <strong>solo grampeado</strong> é uma técnica de reforço de solo que consiste na 
                  inserção de elementos resistentes à tração (grampos de aço) no maciço terroso, 
                  criando um material compósito de características mecânicas superiores.
                </p>
                <p className="text-muted-foreground">
                  Esta tecnologia, amplamente utilizada internacionalmente e normatizada no Brasil 
                  pelo <strong>DNIT 379/2022</strong>, oferece excelente relação custo-benefício para 
                  estabilização de taludes de corte, contenções e escavações.
                </p>
                <p className="text-muted-foreground">
                  Na <strong>B2A Engenharia</strong>, aplicamos metodologia própria baseada em normas 
                  internacionais <strong>FHWA</strong> e experiência de mais de 14 anos, garantindo 
                  projetos seguros e eficientes.
                </p>
              </div>
            </div>
            <div className="bg-engineering-light-gray p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">Vantagens do Solo Grampeado</h3>
              <div className="space-y-4">
                {vantagens.slice(0, 5).map((vantagem, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{vantagem}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processo Executivo */}
      <section className="py-16 bg-engineering-light-gray">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Processo Executivo Detalhado
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Metodologia técnica comprovada seguindo rigorosamente as normas DNIT e FHWA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {processoExecutivo.map((processo, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {index + 1}
                  </div>
                  <processo.icon className="h-8 w-8 text-secondary mx-auto mb-4" />
                  <CardTitle className="text-primary text-lg">{processo.etapa}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{processo.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Especificações Técnicas</h3>
              <div className="space-y-3">
                {especificacoesTecnicas.map((spec, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Settings className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Critérios de Projeto</h3>
              <div className="space-y-3">
                {criteriosProjeto.map((criterio, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <FileText className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{criterio}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aplicações e Benefícios */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12">
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
            
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">
                Todas as Vantagens
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
          </div>
        </div>
      </section>

      {/* Normas e Metodologia */}
      <section className="py-16 bg-engineering-light-gray">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Conformidade com Normas Técnicas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Projetos desenvolvidos conforme as principais normas nacionais e internacionais
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { norma: "DNIT 379/2022", desc: "Execução de Solo Grampeado" },
              { norma: "FHWA-SA-96-069R", desc: "Manual Internacional" },
              { norma: "NBR 11682", desc: "Estabilidade de Taludes" },
              { norma: "ABNT NBR 6118", desc: "Estruturas de Concreto" }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <Award className="h-10 w-10 text-secondary mx-auto mb-4" />
                  <h3 className="font-bold text-primary mb-2">{item.norma}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco Visual */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Projetos em Solo Grampeado
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exemplos de aplicação da técnica em diferentes situações
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { titulo: "Rodovia SP-348", desc: "Estabilização de talude de corte" },
              { titulo: "Área Urbana - SP", desc: "Contenção de encosta residencial" },
              { titulo: "Mineração", desc: "Estabilização de frente de lavra" }
            ].map((projeto, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <Mountain className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Imagem do Projeto</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      [Espaço para galeria técnica]
                    </p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-2">{projeto.titulo}</h3>
                  <p className="text-sm text-muted-foreground">{projeto.desc}</p>
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
              Perguntas Frequentes - Solo Grampeado
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Esclarecimentos técnicos sobre esta solução de contenção
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
            Projeto de Solo Grampeado para Seu Talude?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Nossa equipe especializada desenvolve projetos técnicos de solo grampeado 
            com máxima segurança e eficiência. Solicite uma análise técnica personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <NavLink to="/contato">
                Solicitar Análise Técnica
              </NavLink>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Phone className="h-5 w-5 mr-2" />
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SoloGrampeado;