import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Phone,
  ChevronDown,
  LayoutDashboard,
  HardHat,
  Construction,
  Pickaxe,
  Anchor,
  Box
} from "lucide-react";
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
  const location = useLocation();
  const isServicosActive = location.pathname.startsWith('/servicos');

  const servicosStructure = {
    "PROJETOS": {
      icon: LayoutDashboard,
      sections: {
        "CONTENÇÕES": [
          { name: "Terra Armada", href: "/servicos/terra-armada" },
          { name: "Cortina Atirantada", href: "/servicos/cortina-atirantada" },
          { name: "Muro a Flexão", href: "/servicos/muro-flexao" },
          { name: "Solo Grampeado", href: "/servicos/solo-grampeado" },
          { name: "Projetos em Contenção", href: "/servicos/projetos-contencao" }
        ],
        "O.A.E & GEOTECNIA": [
          { name: "Projetos Especiais (OAE)", href: "/servicos/oae" },
          { name: "Estabilidade de Encostas", href: "/servicos/geotecnia/estabilidade-encostas" },
          { name: "Investigação de Solos", href: "/servicos/geotecnia/investigacao-solos" },
          { name: "Fundação Direta & Profunda", href: "/servicos/geotecnia/fundacoes" }
        ]
      }
    },
    "EXECUÇÃO": {
      icon: HardHat,
      items: [
        { name: "Contenções Especializadas", href: "/servicos/execucao/contencoes" },
        { name: "Gerenciamento de Obras", href: "/servicos/execucao/gerenciamento" },
        { name: "New Jersey", href: "/servicos/execucao/new-jersey" },
        { name: "Muro a Flexão", href: "/servicos/execucao/muro-flexao" },
        { name: "Pré-moldados Especiais", href: "/servicos/execucao/pecas-pre-moldadas" }
      ]
    },
    "FORMAS METÁLICAS": {
      icon: Box,
      items: [
        { name: "Locação New Jersey", href: "/servicos/formas/new-jersey" },
        { name: "Locação Muro a Flexão", href: "/servicos/formas/muro-flexao" },
        { name: "Desenvolvimento de Formas", href: "/servicos/formas/desenvolvimento-especiais" }
      ]
    },
    "ESPECIALIDADES": {
      icon: Pickaxe,
      sections: {
        "MINERAÇÃO": [
          { name: "Muros de Britagem", href: "/servicos/mineracao/muros-britagem" },
          { name: "Soluções Integradas", href: "/servicos/mineracao/solucoes-integradas" }
        ],
        "MARÍTIMAS": [
          { name: "Soluções & Projetos", href: "/servicos/contencoes-maritimas" },
          { name: "Execução de Obras", href: "/servicos/maritimas/execucao-obras" }
        ]
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center">
          <NavLink to="/" className="mr-8 flex items-center">
            <img
              src="/images/logo-b2a-site.png"
              alt="B2A Engenharia"
              className="h-12 w-auto transition-transform hover:scale-105"
            />
          </NavLink>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold uppercase tracking-tight">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary border-b-2 border-primary pb-1" : "text-foreground/70 transition-colors hover:text-primary pb-1"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                isActive ? "text-primary border-b-2 border-primary pb-1" : "text-foreground/70 transition-colors hover:text-primary pb-1"
              }
            >
              Sobre Nós
            </NavLink>

            <NavigationMenu className="flex-none">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`
                    ${isServicosActive ? "text-primary border-b-2 border-primary" : "text-foreground/70"}
                    transition-colors hover:text-primary font-semibold uppercase tracking-tight h-auto pt-0 pb-1 px-0 bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent
                  `}>
                    Serviços
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[1000px] bg-white p-8 shadow-2xl rounded-xl border border-engineering-light-gray">
                      <div className="grid grid-cols-4 gap-8">
                        {Object.entries(servicosStructure).map(([category, data]: [string, any]) => (
                          <div key={category} className="space-y-4">
                            <div className="flex items-center space-x-2 text-primary">
                              <data.icon className="h-5 w-5" />
                              <h4 className="text-sm font-bold uppercase tracking-wider">
                                {category}
                              </h4>
                            </div>

                            {data.sections ? (
                              <div className="space-y-6">
                                {Object.entries(data.sections).map(([subcategory, items]: [string, any]) => (
                                  <div key={subcategory} className="space-y-2">
                                    <h5 className="text-[10px] font-black text-muted-foreground uppercase border-b border-gray-100 pb-1">
                                      {subcategory}
                                    </h5>
                                    <div className="space-y-1">
                                      {items.map((item: any) => (
                                        <NavigationMenuLink key={item.name} asChild>
                                          <NavLink
                                            to={item.href}
                                            className="block rounded-md p-2 text-xs font-medium text-foreground/80 transition-all hover:bg-primary/5 hover:text-primary hover:translate-x-1"
                                          >
                                            {item.name}
                                          </NavLink>
                                        </NavigationMenuLink>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="space-y-1 pt-2">
                                {data.items.map((item: any) => (
                                  <NavigationMenuLink key={item.name} asChild>
                                    <NavLink
                                      to={item.href}
                                      className="block rounded-md p-2 text-xs font-medium text-foreground/80 transition-all hover:bg-primary/5 hover:text-primary hover:translate-x-1"
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
                      <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center bg-gray-50/50 -m-8 p-8 rounded-b-xl">
                        <p className="text-xs text-muted-foreground">Soluções completas em engenharia civil e geotécnica.</p>
                        <Button size="sm" variant="outline" className="text-xs h-8" asChild>
                          <NavLink to="/contato">Consultar Especialista</NavLink>
                        </Button>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavLink
              to="/obras"
              className={({ isActive }) =>
                isActive ? "text-primary border-b-2 border-primary pb-1" : "text-foreground/70 transition-colors hover:text-primary pb-1"
              }
            >
              Obras
            </NavLink>
            <NavLink
              to="/videos"
              className={({ isActive }) =>
                isActive ? "text-primary border-b-2 border-primary pb-1" : "text-foreground/70 transition-colors hover:text-primary pb-1"
              }
            >
              Vídeos
            </NavLink>
            <NavLink
              to="/contato"
              className={({ isActive }) =>
                isActive ? "text-primary border-b-2 border-primary pb-1" : "text-foreground/70 transition-colors hover:text-primary pb-1"
              }
            >
              Contato
            </NavLink>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-6">
            <a href="tel:+551145096222" className="flex items-center space-x-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors">
              <Phone className="h-4 w-4" />
              <span>(11) 4509-6222</span>
            </a>
            <Button size="lg" asChild className="font-bold px-6 shadow-md hover:shadow-lg transition-all rounded-full bg-secondary hover:bg-secondary/90">
              <NavLink to="/contato">Solicitar Orçamento</NavLink>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="md:hidden"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b pb-4 mb-4">
                  <img src="/images/logo-b2a-site.png" alt="Logo" className="h-8" />
                </div>
                <div className="flex-1 overflow-y-auto pr-2">
                  <div className="flex flex-col space-y-4 font-semibold uppercase text-sm">
                    <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                    <NavLink to="/sobre" onClick={() => setIsOpen(false)}>Sobre Nós</NavLink>
                    <div className="space-y-2">
                      <p className="text-primary font-bold">Serviços</p>
                      <div className="pl-4 space-y-4">
                        {Object.entries(servicosStructure).map(([category, data]: [string, any]) => (
                          <div key={category} className="space-y-2">
                            <p className="text-xs font-bold text-muted-foreground">{category}</p>
                            <div className="pl-2 space-y-1">
                              {data.sections ? (
                                Object.entries(data.sections).map(([_, items]: [string, any]) => (
                                  items.map((item: any) => (
                                    <NavLink key={item.name} to={item.href} onClick={() => setIsOpen(false)} className="block text-xs font-medium py-1">
                                      {item.name}
                                    </NavLink>
                                  ))
                                ))
                              ) : (
                                data.items.map((item: any) => (
                                  <NavLink key={item.name} to={item.href} onClick={() => setIsOpen(false)} className="block text-xs font-medium py-1">
                                    {item.name}
                                  </NavLink>
                                ))
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <NavLink to="/obras" onClick={() => setIsOpen(false)}>Obras</NavLink>
                    <NavLink to="/videos" onClick={() => setIsOpen(false)}>Vídeos</NavLink>
                    <NavLink to="/contato" onClick={() => setIsOpen(false)}>Contato</NavLink>
                  </div>
                </div>
                <div className="border-t pt-4 mt-4">
                  <a href="tel:+551145096222" className="flex items-center space-x-2 text-primary font-bold">
                    <Phone className="h-4 w-4" />
                    <span>(11) 4509-6222</span>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
