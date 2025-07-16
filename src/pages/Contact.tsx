import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Estamos prontos para desenvolver a solução ideal para seu projeto.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">Informações de Contato</h2>
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Endereço", info: "Rua da Engenharia, 123\nSão Paulo - SP, 01234-567" },
                  { icon: Phone, title: "Telefone", info: "(11) 99999-9999" },
                  { icon: Mail, title: "E-mail", info: "contato@b2aengenharia.com.br" },
                  { icon: Clock, title: "Horário", info: "Segunda à Sexta: 8h às 18h\nSábado: 8h às 12h" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <item.icon className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary">{item.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Solicitar Orçamento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Nome" />
                  <Input placeholder="Empresa" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="E-mail" type="email" />
                  <Input placeholder="Telefone" />
                </div>
                <Input placeholder="Assunto" />
                <Textarea placeholder="Descreva seu projeto..." rows={5} />
                <Button className="w-full" size="lg">
                  Enviar Mensagem
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;