import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { 
  Shield, 
  CheckCircle, 
  Settings, 
  Anchor, 
  Award,
  FileText,
  Phone,
  Wrench,
  Building
} from "lucide-react";

const CortinaAtirantada = () => {
  const vantagens = [
    "Capacidade para grandes alturas e cargas",
    "Estrutura definitiva de alta durabilidade",
    "Adaptável a diferentes tipos de terreno",
    "Permite otimização de espaços em obras urbanas",
    "Excelente comportamento estrutural",
    "Possibilita construção em subsolo",
    "Resistente a cargas dinâmicas"
  ];

  const aplicacoes = [
    "Contenções para edifícios em subsolo",
    "Estabilização de taludes de grande altura",
    "Contenções em obras portuárias",
    "Escavações profundas em áreas urbanas",
    "Contenções temporárias para obras especiais",
    "Estruturas de contenção em mineração",
    "Proteção de infraestruturas críticas"
  ];

  const componentesEstruturais = [
    {
      titulo: "Parede de Concreto",
      descricao: "Estrutura vertical moldada in-loco ou pré-moldada",
      icon: Building
    },
    {
      titulo: "Tirantes Ativos",
      descricao: "Elementos de tração em aço protendido",
      icon: Anchor
    },
    {
      titulo: "Bloco de Ancoragem",
      descricao: "Zona de transferência de cargas no terreno",
      icon: Shield
    },
    {
      titulo: "Sistema de Drenagem",
      descricao: "Controle de poropressões e estabilidade",
      icon: Settings
    }
  ];

  const etapasExecutivas = [
    "Escavação e execução da parede de concreto",
    "Perfuração dos furos para tirantes",
    "Instalação e injeção dos tirantes",
    "Protensão e ancoragem dos tirantes",
    "Instalação do sistema de drenagem",
    "Acabamento e proteção da estrutura"
  ];

  const especificacoesTecnicas = [
    "Tirantes em aço CP-190 RB ou CP-175 RB",
    "Proteção anticorrosiva dupla ou tripla",
    "Injeção com calda de cimento",
    "Cargas de trabalho até 2000 kN",
    "Vida útil de projeto ≥ 50 anos",
    "Monitoramento com células de carga",
    "Ensaios de recepção conforme NBR 5629"
  ];

  const criteriosProjeto = [
    "Análise de estabilidade global",
    "Dimensionamento estrutural da parede",
    "Cálculo de tirantes conforme NBR 5629",
    "Verificação de resistência do terreno",
    "Projeto de sistema de drenagem",
    "Especificação de materiais e equipamentos",
    "Programa de monitoramento estrutural"
  ];

  const faqs = [
    {
      pergunta: "Qual a diferença entre cortina atirantada e solo grampeado?",
      resposta: "A cortina atirantada utiliza tirantes ativos protendidos e parede de concreto, sendo ideal para grandes cargas e alturas. O solo grampeado usa grampos passivos e é mais econômico para taludes de menor porte."
    },
    {
      pergunta: "Qual a altura máxima para cortinas atirantadas?",
      resposta: "Não há limite técnico definido. Já foram executadas cortinas com mais de 60 metros de altura. O dimensionamento depende das condições geotécnicas e cargas atuantes."
    },
    {
      pergunta: "Como funciona a protensão dos tirantes?",
      resposta: "Os tirantes são protendidos após a cura do concreto de ancoragem, aplicando-se carga superior à carga de trabalho para ativar o sistema e transferir esforços ao terreno."
    },
    {
      pergunta: "É necessário monitoramento após a execução?",
      resposta: "Sim, recomenda-se monitoramento das cargas nos tirantes e deslocamentos da estrutura, especialmente nos primeiros anos após a execução."
    },
    {
      pergunta: "Qual a vida útil de uma cortina atirantada?",
      resposta: "Com projeto adequado e proteção anticorrosiva apropriada, a vida útil pode superar 50 anos, sendo considerada estrutura definitiva."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-secondary text-secondary-foreground mb-4 px-4 py-2">
              Estruturas de Alto Desempenho
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cortina Atirantada - Máxima Resistência
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
              Solução estrutural definitiva para contenções de grande altura e cargas elevadas, 
              utilizando tirantes protendidos e tecnologia de ponta em engenharia geotécnica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <NavLink to="/contato">
                  Solicitar Projeto
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Phone className="h-5 w-5 mr-2" />
                Consultoria Especializada
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
                Tecnologia Cortina Atirantada
              </h2>
              <div className="prose prose-lg max-w-none space-y-4">
                <p className="text-muted-foreground">
                  A <strong>cortina atirantada</strong> é uma estrutura de contenção composta por 
                  parede de concreto armado e tirantes protendidos, capaz de suportar grandes 
                  cargas e alturas, sendo amplamente utilizada em obras urbanas complexas.
                </p>
                <p className="text-muted-foreground">
                  Esta tecnologia, normatizada pela <strong>NBR 5629</strong>, combina a resistência 
                  do concreto armado com a eficiência dos tirantes de aço protendido, criando 
                  uma estrutura definitiva de alta performance e durabilidade.
                </p>
                <p className="text-muted-foreground">
                  Na <strong>B2A Engenharia</strong>, desenvolvemos projetos de cortina atirantada 
                  com metodologia própria, utilizando softwares especializados e equipe técnica 
                  experiente para garantir máxima segurança e eficiência.
                </p>
              </div>
            </div>
            <div className="bg-engineering-light-gray p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">Principais Vantagens</h3>
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

      {/* Componentes Estruturais */}
      <section className="py-16 bg-engineering-light-gray">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Componentes da Estrutura
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sistema estrutural integrado para máxima eficiência e segurança
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {componentesEstruturais.map((componente, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <componente.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary text-lg">{componente.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{componente.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Etapas Executivas</h3>
              <div className="space-y-3">
                {etapasExecutivas.map((etapa, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-muted-foreground">{etapa}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Especificações Técnicas</h3>
              <div className="space-y-3">
                {especificacoesTecnicas.map((spec, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Wrench className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aplicações e Critérios */}
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
                    <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{aplicacao}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">
                Critérios de Projeto
              </h2>
              <div className="space-y-4">
                {criteriosProjeto.map((criterio, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <FileText className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{criterio}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conformidade Normativa */}
      <section className="py-16 bg-engineering-light-gray">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Conformidade com Normas Técnicas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Projetos desenvolvidos seguindo rigorosamente as normas brasileiras e internacionais
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { norma: "NBR 5629", desc: "Execução de Tirantes Ancorados" },
              { norma: "NBR 6118", desc: "Estruturas de Concreto Armado" },
              { norma: "NBR 11682", desc: "Estabilidade de Taludes" },
              { norma: "EN 1537", desc: "Ancoragens - Norma Europeia" }
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

      {/* Diferenciais B2A */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Diferenciais da B2A em Cortinas Atirantadas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experiência e metodologia que garantem excelência em seus projetos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                titulo: "Projetos Especializados",
                descricao: "Desenvolvimento de projetos executivos detalhados com memorial de cálculo completo",
                icon: FileText
              },
              {
                titulo: "Supervisão Técnica",
                descricao: "Acompanhamento especializado durante todas as etapas de execução",
                icon: Shield
              },
              {
                titulo: "Monitoramento",
                descricao: "Sistema de monitoramento estrutural para garantir performance a longo prazo",
                icon: Settings
              }
            ].map((diferencial, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <diferencial.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary">{diferencial.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{diferencial.descricao}</p>
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
              Perguntas Frequentes - Cortina Atirantada
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Esclarecimentos técnicos sobre estruturas de contenção com tirantes
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
            Projeto de Cortina Atirantada para Sua Obra?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Nossa equipe especializada desenvolve projetos de cortina atirantada com máxima 
            segurança e eficiência. Solicite uma análise técnica personalizada para seu projeto.
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

export default CortinaAtirantada;