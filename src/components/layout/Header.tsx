import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleSubmenuPosition = () => {
      const submenuItems = document.querySelectorAll('.mega-menu-item');
      
      submenuItems.forEach((item) => {
        const submenu = item.querySelector('.mega-menu-submenu') as HTMLElement;
        if (!submenu) return;

        const itemRect = item.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        
        // Remove classes anteriores
        submenu.classList.remove('bottom-aligned', 'right-aligned');
        
        // Posiciona o submenu usando position fixed
        submenu.style.left = `${itemRect.right + 8}px`;
        submenu.style.top = `${itemRect.top}px`;
        
        // Verifica se o submenu está sendo cortado na parte inferior
        if (itemRect.top + 280 > viewportHeight - 20) { // 280px é a altura aproximada do submenu
          submenu.classList.add('bottom-aligned');
          submenu.style.top = `${itemRect.bottom - 280}px`;
        }
        
        // Verifica se o submenu está sendo cortado na lateral direita
        if (itemRect.right + 280 + 8 > viewportWidth - 20) { // 280px é a largura do submenu
          submenu.classList.add('right-aligned');
          submenu.style.left = `${itemRect.left - 280 - 8}px`;
        }
      });
    };

    // Adiciona event listeners para detectar hover
    const megaMenuItems = document.querySelectorAll('.mega-menu-item');
    megaMenuItems.forEach((item) => {
      item.addEventListener('mouseenter', handleSubmenuPosition);
    });

    return () => {
      megaMenuItems.forEach((item) => {
        item.removeEventListener('mouseenter', handleSubmenuPosition);
      });
    };
  }, []);

  const servicosStructure = {
    "PROJETOS": {
      "CONTENÇÕES": [
        { name: "Terra Armada", href: "/servicos/terra-armada" },
        { name: "Cortina Atirantada", href: "/servicos/cortina-atirantada" },
        { name: "Muro a Flexão", href: "/servicos/muro-flexao" },
        { name: "Solo Grampeado", href: "/servicos/solo-grampeado" },
        { name: "Soluções em Contenções", href: "/servicos/projetos-contencao" }
      ],
      "O.A.E (OBRA DE ARTES ESPECIAIS)": [
        { name: "Projetos Especiais", href: "/servicos/oae" }
      ],
      "GEOTECNIA": [
        { name: "Planos de investigação e reconhecimento de solos", href: "/servicos/geotecnia/investigacao-solos" },
        { name: "Estabilidade de encostas e taludes", href: "/servicos/geotecnia/estabilidade-encostas" },
        { name: "Solos moles - projetos em geral", href: "/servicos/geotecnia/solos-moles" },
        { name: "Movimentações de terra", href: "/servicos/geotecnia/movimentacoes-terra" },
        { name: "Arrimos e contenções", href: "/servicos/geotecnia/arrimos-contencoes" },
        { name: "Pavimentação", href: "/servicos/geotecnia/pavimentacao" },
        { name: "Fundações", href: "/servicos/geotecnia/fundacoes" },
        { name: "Pisos sobre o solo", href: "/servicos/geotecnia/pisos-solo" },
        { name: "Fundação direta – sapatas, radier", href: "/servicos/geotecnia/fundacao-direta" },
        { name: "Fundações profundas", href: "/servicos/geotecnia/fundacoes-profundas" },
        { name: "Muros de flexão", href: "/servicos/geotecnia/muros-flexao" },
        { name: "Muros de gravidade", href: "/servicos/geotecnia/muros-gravidade" },
        { name: "Parede diafragma", href: "/servicos/geotecnia/parede-diafragma" },
        { name: "Solo grampeado", href: "/servicos/geotecnia/solo-grampeado" },
        { name: "Estacas prancha metálicas", href: "/servicos/geotecnia/estacas-prancha" },
        { name: "Escoramento provisório ou definitivo", href: "/servicos/geotecnia/escoramento" },
        { name: "CQP", href: "/servicos/geotecnia/cqp" }
      ]
    },
    "EXECUÇÃO": [
      { name: "Contenções", href: "/servicos/execucao/contencoes" },
      { name: "Gerenciamento de Obras", href: "/servicos/execucao/gerenciamento" },
      { name: "New Jersey", href: "/servicos/execucao/new-jersey" },
      { name: "Muro a Flexão", href: "/servicos/execucao/muro-flexao" },
      { name: "Peças Pré-moldadas Especiais", href: "/servicos/execucao/pecas-pre-moldadas" }
    ],
    "VENDA E LOCAÇÃO DE FORMAS METÁLICAS": [
      { name: "New Jersey", href: "/servicos/formas/new-jersey" },
      { name: "Muro a Flexão", href: "/servicos/formas/muro-flexao" },
      { name: "Desenvolvimento de Formas Especiais", href: "/servicos/formas/desenvolvimento-especiais" }
    ],
    "MINERAÇÃO": [
      { name: "Muros de Britagem", href: "/servicos/mineracao/muros-britagem" },
      { name: "Equipamentos", href: "/servicos/mineracao/equipamentos" },
      { name: "Soluções Integradas (Civil e Mecânica)", href: "/servicos/mineracao/solucoes-integradas" }
    ],
    "CONTENÇÕES MARÍTIMAS": [
      { name: "Soluções e Projetos", href: "/servicos/contencoes-maritimas" },
      { name: "Execução de Obras", href: "/servicos/maritimas/execucao-obras" }
    ]
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <NavLink to="/" className="mr-6 flex items-center space-x-2">
            <img 
              src="/images/logo-b2a-site.png" 
              alt="B2A Engenharia" 
              className="h-10 w-auto"
            />
          </NavLink>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary transition-colors"
                  : "text-foreground/60 transition-colors hover:text-foreground/80"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                isActive
                  ? "text-primary transition-colors"
                  : "text-foreground/60 transition-colors hover:text-foreground/80"
              }
            >
              Sobre Nós
            </NavLink>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground/60 hover:text-foreground/80">
                    Serviços
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[1000px] p-4 max-h-[80vh] overflow-y-auto mega-menu-content">
                      <div className="grid grid-cols-2 gap-6">
                        {Object.entries(servicosStructure).map(([category, items]) => (
                          <div key={category} className="space-y-3">
                            <h4 className="text-sm font-semibold text-primary border-b pb-1">
                              {category}
                            </h4>
                            {category === "PROJETOS" ? (
                              <div className="space-y-2">
                                {Object.entries(items as Record<string, any[]>).map(([subcategory, subitems]) => (
                                  <div key={subcategory} className="relative group mega-menu-item">
                                    <div className="text-xs font-medium text-muted-foreground uppercase p-2 cursor-pointer hover:bg-accent rounded-md transition-colors">
                                      {subcategory}
                                    </div>
                                    <div className="mega-menu-submenu">
                                      <div className="p-2 space-y-1">
                                        {subitems.map((item) => (
                                          <NavigationMenuLink key={item.name} asChild>
                                            <NavLink
                                              to={item.href}
                                              className="block select-none rounded-md p-2 text-xs leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                            >
                                              {item.name}
                                            </NavLink>
                                          </NavigationMenuLink>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="space-y-1">
                                {(items as any[]).map((item) => (
                                  <NavigationMenuLink key={item.name} asChild>
                                    <NavLink
                                      to={item.href}
                                      className="block select-none rounded-md p-2 text-xs leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                      {item.name}
                                    </NavLink>
                                  </NavigationMenuLink>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive
                  ? "text-primary transition-colors"
                  : "text-foreground/60 transition-colors hover:text-foreground/80"
              }
            >
              Portfólio
            </NavLink>
            <NavLink
              to="/contato"
              className={({ isActive }) =>
                isActive
                  ? "text-primary transition-colors"
                  : "text-foreground/60 transition-colors hover:text-foreground/80"
              }
            >
              Contato
            </NavLink>
          </nav>
        </div>
        
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <NavLink
              to="/"
              className="flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <img 
                src="/images/logo-b2a-site.png" 
                alt="B2A Engenharia" 
                className="h-8 w-auto"
              />
            </NavLink>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                <NavLink to="/sobre" onClick={() => setIsOpen(false)}>Sobre Nós</NavLink>
                <div className="flex flex-col space-y-2">
                  <span className="font-medium">Serviços</span>
                  <div className="flex flex-col space-y-3 pl-4">
                    {Object.entries(servicosStructure).map(([category, items]) => (
                      <div key={category} className="space-y-2">
                        <span className="text-sm font-semibold text-primary">
                          {category}
                        </span>
                        {category === "PROJETOS" ? (
                          <div className="space-y-3 pl-2">
                            {Object.entries(items as Record<string, any[]>).map(([subcategory, subitems]) => (
                              <div key={subcategory} className="space-y-1">
                                <span className="text-xs font-medium text-muted-foreground uppercase">
                                  {subcategory}
                                </span>
                                <div className="space-y-1 pl-2">
                                  {subitems.map((item) => (
                                    <NavLink
                                      key={item.name}
                                      to={item.href}
                                      onClick={() => setIsOpen(false)}
                                      className="block text-xs text-muted-foreground hover:text-foreground"
                                    >
                                      {item.name}
                                    </NavLink>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="space-y-1 pl-2">
                            {(items as any[]).map((item) => (
                              <NavLink
                                key={item.name}
                                to={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-sm text-muted-foreground hover:text-foreground"
                              >
                                {item.name}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <NavLink to="/portfolio" onClick={() => setIsOpen(false)}>Portfólio</NavLink>
                <NavLink to="/contato" onClick={() => setIsOpen(false)}>Contato</NavLink>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+551145096222" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground">
                <Phone className="h-4 w-4" />
                <span>(11) 4509-6222</span>
              </a>
              <a href="mailto:comercial@b2aengenharia.com.br" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground">
                <Mail className="h-4 w-4" />
                <span>comercial@b2aengenharia.com.br</span>
              </a>
            </div>
          </div>
          <Button variant="secondary" size="sm" asChild className="hidden md:inline-flex">
            <NavLink to="/contato">Solicitar Orçamento</NavLink>
          </Button>
        </div>
      </div>
    </header>
  );
};