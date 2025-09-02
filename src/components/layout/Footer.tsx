import { NavLink } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/images/logo-b2a-site.png" 
                alt="B2A Engenharia" 
                className="h-8 w-auto filter brightness-0 invert"
              />
              <span className="font-bold text-lg">B2A Engenharia</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Especialista em contenções, infraestrutura civil e geotecnia. 
              Soluções técnicas de excelência para seus projetos de engenharia.
            </p>
          </div>

          {/* Serviços */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/servicos/terra-armada" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Terra Armada
                </NavLink>
              </li>
              <li>
                <NavLink to="/servicos/solo-grampeado" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Solo Grampeado
                </NavLink>
              </li>
              <li>
                <NavLink to="/servicos/cortina-atirantada" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Cortina Atirantada
                </NavLink>
              </li>
              <li>
                <NavLink to="/servicos/projetos-geotecnicos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Projetos Geotécnicos
                </NavLink>
              </li>
              <li>
                <NavLink to="/servicos/infraestrutura-civil" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Infraestrutura Civil
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Links Úteis */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/sobre" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sobre Nós
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Obras
                </NavLink>
              </li>
              <li>
                <NavLink to="/contato" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contato
                </NavLink>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  R. José Versolato, 111 - Sala 2815 - Centro<br />
                  São Bernardo do Campo - SP
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+551145096222" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  (11) 4509-6222
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:comercial@b2aengenharia.com.br" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  comercial@b2aengenharia.com.br
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Segunda à Sexta: 8h às 18h
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 B2A Engenharia. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a 
                href="https://querosite.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors"
              >
                Feito por Quero Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};