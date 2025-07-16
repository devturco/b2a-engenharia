import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { 
  Settings, 
  CheckCircle, 
  Droplets, 
  Trees, 
  Award,
  Phone,
  Recycle,
  Shield
} from "lucide-react";

const Gabiao = () => {
  const vantagens = [
    "Estrutura flexível e permeável",
    "Facilita a drenagem natural",
    "Permite revegetação integrada",
    "Montagem rápida e simples",
    "Resistente à ação do tempo",
    "Baixo custo de manutenção",
    "Impacto ambiental mínimo"
  ];

  const tiposGabiao = [
    {
      tipo: "Gabião Caixa",
      descricao: "Estruturas de contenção em formato de caixa retangular",
      aplicacoes: ["Muros de contenção", "Fundações", "Proteção de margens"]
    },
    {
      tipo: "Gabião Saco",
      descricao: "Formato cilíndrico para aplicações específicas",
      aplicacoes: ["Proteção subaquática", "Obras de emergência", "Reforço localizado"]
    },
    {
      tipo: "Gabião Colchão",
      descricao: "Estrutura de baixa altura para proteção superficial",
      aplicacoes: ["Proteção de taludes", "Canais", "Controle de erosão"]
    }
  ];

  const aplicacoes = [
    "Muros de contenção de pequeno a médio porte",
    "Proteção de margens de rios e lagos",
    "Estruturas de drenagem e controle de erosão",
    "Contenções paisagísticas e decorativas",
    "Proteção de infraestruturas rodoviárias",
    "Obras de contenção em mineração",
    "Estruturas de contenção temporárias"
  ];

  const especificacoesTecnicas = [
    "Tela de arame galvanizado ou plastificado",
    "Malha hexagonal de dupla torção",
    "Diâmetro do arame: 2,7 a 4,0 mm",
    "Abertura da malha: 80 x 100 mm",
    "Pedra de enchimento: graduação específica",
    "Resistência à tração: ≥ 38 kgf/mm²",
    "Proteção anticorrosiva conforme norma"
  ];

  const criteriosProjeto = [
    "Análise de estabilidade interna e externa",
    "Dimensionamento conforme NBR 11682",
    "Especificação de materiais adequados",
    "Projeto de sistema de drenagem",
    "Detalhamento de fundações",
    "Cronograma executivo detalhado",
    "Memorial descritivo e de cálculo"
  ];

  const faqs = [
    {
      pergunta: "Qual a altura máxima para muros de gabião?",
      resposta: "Tecnicamente pode-se alcançar alturas de 10-15 metros, mas economicamente são mais viáveis até 6-8 metros. Para alturas maiores, análise específica de viabilidade é necessária."
    },
    {
      pergunta: "Gabião é adequado para qualquer tipo de terreno?",
      resposta: "Gabiões são mais adequados para terrenos com boa capacidade de suporte. Em solos moles, podem ser necessárias fundações especiais ou outras soluções."
    },
    {
      pergunta: "É possível fazer revegetação em estruturas de gabião?",
      resposta: "Sim, a revegetação é uma das principais vantagens. O sistema permite plantio entre as pedras, criando um aspecto natural e melhorando a integração paisagística."
    },
    {
      pergunta: "Qual a vida útil de estruturas de gabião?",
      resposta: "Com galvanização adequada e materiais de qualidade, a vida útil pode superar 50 anos. A manutenção é mínima, restringindo-se à limpeza da vegetação quando necessário."
    },
    {
      pergunta: "Gabião funciona bem em regiões com variação de temperatura?",
      resposta: "Sim, a flexibilidade da estrutura permite acomodar dilatações térmicas sem comprometer a integridade. É uma solução adequada para diferentes climas."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-secondary text-secondary-foreground mb-4 px-4 py-2">
              Contenção Flexível
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gabião - Soluções Permeáveis e Sustentáveis
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
              Estruturas de contenção flexíveis utilizando gaiolas metálicas preenchidas 
              com pedras, oferecendo excelente drenagem e integração paisagística.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <NavLink to="/contato">
                  Solicitar Orçamento
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
                Tecnologia Gabião
              </h2>
              <div className="prose prose-lg max-w-none space-y-4">
                <p className="text-muted-foreground">
                  O <strong>gabião</strong> é uma estrutura de contenção composta por gaiolas 
                  metálicas preenchidas com pedras, oferecendo uma solução flexível, permeável 
                  e esteticamente integrada ao ambiente natural.
                </p>
                <p className="text-muted-foreground">
                  Esta tecnologia, normatizada e amplamente utilizada em engenharia, combina 
                  eficiência estrutural com benefícios ambientais, permitindo drenagem natural 
                  e revegetação, características essenciais para projetos sustentáveis.
                </p>
                <p className="text-muted-foreground">
                  Na <strong>B2A Engenharia</strong>, especificamos e projetamos estruturas de 
                  gabião seguindo normas técnicas rigorosas, garantindo durabilidade e performance 
                  adequada para cada aplicação específica.
                </p>
              </div>
            </div>
            <div className="bg-engineering-light-gray p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">Principais Benefícios</h3>
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

      {/* Tipos de Gabião */}
      <section className="py-16 bg-engineering-light-gray">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Tipos de Estruturas de Gabião
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diferentes configurações para atender necessidades específicas de cada projeto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tiposGabiao.map((tipo, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Settings className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary">{tipo.tipo}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{tipo.descricao}</p>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Aplicações:</h4>
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

      {/* Características Técnicas */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">
                Especificações Técnicas
              </h2>
              <div className="space-y-4">
                {especificacoesTecnicas.map((spec, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Settings className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{spec}</span>
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
                    <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{criterio}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Ambientais */}
      <section className="py-16 bg-engineering-light-gray">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Benefícios Ambientais e Paisagísticos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Integração harmoniosa com o meio ambiente e contribuição para sustentabilidade
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                titulo: "Drenagem Natural",
                descricao: "Permite livre circulação da água, evitando acúmulo de pressões",
                icon: Droplets
              },
              {
                titulo: "Revegetação",
                descricao: "Facilita crescimento de vegetação para integração paisagística",
                icon: Trees
              },
              {
                titulo: "Material Reciclável",
                descricao: "Utiliza materiais que podem ser reutilizados ao final da vida útil",
                icon: Recycle
              },
              {
                titulo: "Flexibilidade",
                descricao: "Adapta-se a movimentações do terreno sem perder eficiência",
                icon: Shield
              }
            ].map((beneficio, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <beneficio.icon className="h-10 w-10 text-secondary mx-auto mb-4" />
                  <CardTitle className="text-primary text-lg">{beneficio.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{beneficio.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicações Práticas */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Aplicações Práticas do Gabião
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções versáteis para diferentes necessidades de contenção e proteção
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aplicacoes.map((aplicacao, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start space-x-3">
                  <Settings className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{aplicacao}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco Visual */}
      <section className="py-16 bg-engineering-light-gray">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Projetos em Gabião
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exemplos de aplicação em diferentes contextos e necessidades
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { titulo: "Contenção Paisagística", desc: "Muro de gabião com revegetação" },
              { titulo: "Proteção de Margem", desc: "Gabião colchão em curso d'água" },
              { titulo: "Contenção Rodoviária", desc: "Muro de gabião em rodovia" }
            ].map((projeto, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <Settings className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Imagem do Projeto</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      [Espaço para galeria de imagens]
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
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Perguntas Frequentes - Gabião
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Esclarecimentos sobre estruturas de contenção em gabião
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
            Projeto de Gabião para Sua Necessidade?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Nossa equipe desenvolve projetos de gabião integrados ao paisagismo e com 
            máxima eficiência técnica. Solicite uma análise para seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <NavLink to="/contato">
                Solicitar Orçamento
              </NavLink>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Phone className="h-5 w-5 mr-2" />
              Consultoria Paisagística
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gabiao;