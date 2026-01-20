import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

const Contact = () => {
  useEffect(() => {
    document.title = "Contato | B2A Engenharia - Orçamentos e Consultoria";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Entre em contato com a B2A Engenharia para orçamentos de contenções, terra armada e geotecnia. Atendimento técnico especializado em todo o Brasil.");
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.");
  };

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/aeroporto.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
              Vamos Construir Juntos?
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed font-light">
              Solicite um orçamento ou tire suas dúvidas técnicas com nossos especialistas em contenções.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary tracking-tight">Canais de Atendimento</h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Nosso Escritório",
                      info: "R. José Versolato, 111 - Sala 2815\nCentro, São Bernardo do Campo - SP"
                    },
                    {
                      icon: Phone,
                      title: "Telefone Direto",
                      info: "(11) 4509-6222"
                    },
                    {
                      icon: Mail,
                      title: "E-mail Comercial",
                      info: "comercial@b2aengenharia.com.br"
                    },
                    {
                      icon: Clock,
                      title: "Horário de Operação",
                      info: "Segunda à Sexta: 08h às 18h"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 group p-4 bg-white rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                      <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <item.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary text-sm uppercase tracking-wider mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm whitespace-pre-line leading-relaxed">{item.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.818783457!2d-46.5492!3d-23.6826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4234!2sR.%20Jos%C3%A9%20Versolato%2C%20111%20-%20Centro%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card className="border-none shadow-2xl overflow-hidden rounded-2xl">
                <div className="bg-secondary p-8 text-white">
                  <h3 className="text-2xl font-bold">Solicitar Orçamento Técnico</h3>
                  <p className="opacity-80 text-sm">Preencha o formulário abaixo e retornaremos em até 24h úteis.</p>
                </div>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Nome Completo</label>
                        <Input placeholder="Ex: João Silva" required className="bg-gray-50 border-gray-200 focus:bg-white transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Sua Empresa</label>
                        <Input placeholder="Nome da empresa" required className="bg-gray-50 border-gray-200 focus:bg-white transition-all" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">E-mail Corporativo</label>
                        <Input placeholder="seu@email.com.br" type="email" required className="bg-gray-50 border-gray-200 focus:bg-white transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Telefone / WhatsApp</label>
                        <Input placeholder="(11) 99999-9999" required className="bg-gray-50 border-gray-200 focus:bg-white transition-all" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Assunto do Projeto</label>
                      <Input placeholder="Ex: Cotação de Terra Armada para Rodovia" required className="bg-gray-50 border-gray-200 focus:bg-white transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Descrição das Necessidades</label>
                      <Textarea
                        placeholder="Descreva brevemente as dimensões, localização e tipo de contenção necessária..."
                        rows={6}
                        required
                        className="bg-gray-50 border-gray-200 focus:bg-white transition-all resize-none"
                      />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary-glow text-white h-14 text-lg font-bold shadow-lg transition-all active:scale-95" type="submit">
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Solicitação agora
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
