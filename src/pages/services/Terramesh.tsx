import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { 
  Trees, 
  CheckCircle, 
  Droplets, 
  Leaf, 
  Award,
  Phone,
  Settings,
  Shield
} from "lucide-react";

const Terramesh = () => {
  const vantagens = [
    "Sistema modular de rápida instalação",
    "Permite revegetação imediata",
    "Excelente controle de erosão",
    "Impacto visual mínimo após vegetação",
    "Drenagem natural integrada",
    "Baixo custo de manutenção",
    "Solução ecologicamente sustentável"
  ];

  const componentesSistema = [
    {
      titulo: "Gaiola Metálica",
      descricao: "Estrutura de arame galvanizado de dupla torção",
      icon: Shield
    },
    {
      titulo: "Geotêxtil Integrado",
      descricao: "Manta geotêxtil biodegradável para suporte inicial",
      icon: Leaf
    },
    {
      titulo: "Sistema de Plantio",
      descricao: "Especificação técnica de vegetação adequada",
      icon: Trees
    },
    {
      titulo: "Drenagem",
      descricao: "Sistema integrado para controle de água superficial",
      icon: Droplets
    }
  ];

  const aplicacoes = [
    "Proteção e revegetação de taludes rodoviários",
    "Contenções paisagísticas em áreas urbanas",
    "Controle de erosão em encostas",
    "Proteção de margens de rios e lagos",
    "Recuperação de áreas degradadas",
    "Contenções temporárias com revegetação",
    "Integração paisagística em grandes obras"
  ];

  const especificacoesTecnicas = [
    "Malha hexagonal dupla torção Ø 2,7 mm",
    "Galvanização pesada conforme ASTM A641",
    "Geotêxtil biodegradável 200-400 g/m²",
    "Abertura da malha: 80 x 100 mm",
    "Altura das gaiolas: 0,50 a 1,00 m",
    "Comprimento padrão: 2,00 m",
    "Resistência à tração: ≥ 38 kgf/mm²"
  ];

  const etapasExecutivas = [
    "Preparação e regularização do talude",
    "Instalação das gaiolas Terramesh",
    "Preenchimento com solo vegetal adequado",
    "Colocação do geotêxtil biodegradável",
    "Plantio conforme especificação técnica",
    "Sistema de irrigação temporária",
    "Manutenção inicial da vegetação"
  ];

  const tiposVegetacao = [
    {
      categoria: "Gramíneas",
      especies: ["Grama esmeralda", "Grama santo agostinho", "Vetiver"],
      uso: "Proteção superficial e controle de erosão"
    },
    {
      categoria: "Leguminosas",
      especies: ["Feijão-de-porco", "Crotalária", "Kudzu"],
      uso: "Fixação de nitrogênio e melhoria do solo"
    },
    {
      categoria: "Arbustivas",
      especies: ["Alamanda", "Bougainvillea", "Ixora"],
      uso: "Paisagismo e proteção de médio porte"
    }
  ];

  const faqs = [
    {
      pergunta: "Qual a diferença entre Terramesh e gabião convencional?",
      resposta: "O Terramesh é preenchido com solo vegetal e inclui geotêxtil biodegradável para facilitar o crescimento de vegetação, enquanto o gabião convencional é preenchido com pedras."
    },
    {
      pergunta: "Quanto tempo leva para a vegetação se estabelecer?",
      resposta: "Gramíneas geralmente se estabelecem em 30-60 dias, enquanto arbustos e plantas de maior porte podem levar 6-12 meses para completo estabelecimento."
    },
    {
      pergunta: "É necessário sistema de irrigação permanente?",
      resposta: "Não, apenas irrigação temporária durante o estabelecimento inicial (3-6 meses). Após esse período, a vegetação deve ser autossuficiente."
    },
    {
      pergunta: "Terramesh funciona em qualquer tipo de clima?",
      resposta: "Sim, mas a especificação da vegetação deve ser adequada ao clima local. Em regiões áridas, podem ser necessárias espécies mais resistentes à seca."
    },
    {
      pergunta: "Qual a inclinação máxima para uso do Terramesh?",
      resposta: "Geralmente é recomendado para taludes com inclinação até 70°. Para inclinações maiores, análises específicas de estabilidade são necessárias."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-secondary text-secondary-foreground mb-4 px-4 py-2">
              Contenção Verde
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terramesh - Contenção com Revegetação
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
              Sistema modular de contenção que combina estrutura metálica com solo vegetal, 
              proporcionando proteção eficaz e integração paisagística natural.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <NavLink to="/contato">
                  Solicitar Projeto
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Phone className="h-5 w-5 mr-2" />
                Consultoria Paisagística
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
                Sistema Terramesh
              </h2>
              <div className="prose prose-lg max-w-none space-y-4">
                <p className="text-muted-foreground">
                  O <strong>Terramesh</strong> é um sistema inovador de contenção que utiliza 
                  gaiolas metálicas preenchidas com solo vegetal, combinando proteção estrutural 
                  com revegetação natural para máxima integração paisagística.
                </p>
                <p className="text-muted-foreground">
                  Esta tecnologia incorpora geotêxtil biodegradável que facilita o estabelecimento 
                  inicial da vegetação, criando uma solução sustentável que melhora com o tempo, 
                  oferecendo proteção eficaz contra erosão e impacto visual mínimo.
                </p>
                <p className="text-muted-foreground">
                  Na <strong>B2A Engenharia</strong>, desenvolvemos projetos Terramesh integrados 
                  com especificação técnica de vegetação adequada ao clima e características 
                  locais, garantindo sucesso na revegetação e durabilidade da estrutura.
                </p>
              </div>
            </div>
            <div className="bg-engineering-light-gray p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">Benefícios Únicos</h3>
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

      {/* Componentes do Sistema */}
      <section className="py-16 bg-engineering-light-gray">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Componentes do Sistema Terramesh
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Integração técnica entre estrutura metálica, geotêxtil e sistema de revegetação
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {componentesSistema.map((componente, index) => (
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
        </div>
      </section>

      {/* Processo Executivo */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">
                Processo Executivo
              </h2>
              <div className="space-y-4">
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
          </div>
        </div>
      </section>

      {/* Especificação de Vegetação */}
      <section className="py-16 bg-engineering-light-gray">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Especificação Técnica de Vegetação
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Seleção adequada de espécies para máxima eficiência na proteção e paisagismo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tiposVegetacao.map((tipo, index) => (
              <Card key={index}>
                <CardHeader>
                  <Trees className="h-10 w-10 text-secondary mx-auto mb-4" />
                  <CardTitle className="text-primary text-center">{tipo.categoria}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Espécies recomendadas:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {tipo.especies.map((especie, i) => (
                        <li key={i} className="flex items-start">
                          <Leaf className="h-3 w-3 text-secondary mt-1 mr-2 flex-shrink-0" />
                          {especie}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Aplicação:</h4>
                    <p className="text-sm text-muted-foreground">{tipo.uso}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicações e Vantagens */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">
                Aplicações do Terramesh
              </h2>
              <div className="space-y-4">
                {aplicacoes.map((aplicacao, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Trees className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
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

      {/* Evolução da Vegetação */}
      <section className="py-16 bg-engineering-light-gray">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Evolução da Revegetação
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transformação paisagística ao longo do tempo
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { periodo: "0-30 dias", desc: "Instalação e plantio inicial", cor: "primary" },
              { periodo: "1-3 meses", desc: "Estabelecimento das gramíneas", cor: "secondary" },
              { periodo: "6 meses", desc: "Cobertura vegetal consolidada", cor: "primary" },
              { periodo: "1-2 anos", desc: "Paisagem natural integrada", cor: "secondary" }
            ].map((fase, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className={`w-16 h-16 bg-${fase.cor} text-${fase.cor}-foreground rounded-full flex items-center justify-center font-bold mx-auto mb-4`}>
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{fase.periodo}</h3>
                  <p className="text-sm text-muted-foreground">{fase.desc}</p>
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
              Projetos Terramesh Executados
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exemplos de integração paisagística bem-sucedida
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { titulo: "Contenção Rodoviária", desc: "Revegetação em rodovia SP-348" },
              { titulo: "Área Urbana", desc: "Integração paisagística residencial" },
              { titulo: "Recuperação Ambiental", desc: "Área degradada revitalizada" }
            ].map((projeto, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <Trees className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Imagem do Projeto</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      [Antes/Depois da revegetação]
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
              Perguntas Frequentes - Terramesh
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Esclarecimentos sobre contenção com revegetação
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
            Projeto Terramesh com Paisagismo Integrado?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Nossa equipe desenvolve projetos Terramesh com especificação técnica de vegetação 
            adequada, garantindo proteção eficaz e integração paisagística natural.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <NavLink to="/contato">
                Solicitar Projeto Paisagístico
              </NavLink>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Phone className="h-5 w-5 mr-2" />
              Consultoria Verde
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terramesh;