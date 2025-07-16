import { useState } from "react";
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

  const servicosItems = [
    { name: "Terra Armada", href: "/servicos/terra-armada" },
    { name: "Projetos de Contenção", href: "/servicos/projetos-contencao" },
    { name: "Cortina Atirantada", href: "/servicos/cortina-atirantada" },
    { name: "Solo Grampeado", href: "/servicos/solo-grampeado" },
    { name: "Gabião", href: "/servicos/gabiao" },
    { name: "Terramesh", href: "/servicos/terramesh" },
    { name: "Outras Contenções", href: "/servicos/outras-contencoes" },
    { name: "Contenções Marítimas", href: "/servicos/contencoes-maritimas" },
    { name: "Projetos Geotécnicos", href: "/servicos/projetos-geotecnicos" },
    { name: "Infraestrutura Civil", href: "/servicos/infraestrutura-civil" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <NavLink to="/" className="mr-6 flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">B2A</span>
            </div>
            <span className="hidden font-bold sm:inline-block">B2A Engenharia</span>
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
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {servicosItems.map((item) => (
                        <li key={item.name}>
                          <NavigationMenuLink asChild>
                            <NavLink
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.name}</div>
                            </NavLink>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
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
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center mr-2">
                <span className="text-primary-foreground font-bold text-lg">B2A</span>
              </div>
              <span className="font-bold">B2A Engenharia</span>
            </NavLink>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                <NavLink to="/sobre" onClick={() => setIsOpen(false)}>Sobre Nós</NavLink>
                <div className="flex flex-col space-y-2">
                  <span className="font-medium">Serviços</span>
                  <div className="flex flex-col space-y-2 pl-4">
                    {servicosItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        {item.name}
                      </NavLink>
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
              <a href="tel:+5511999999999" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground">
                <Phone className="h-4 w-4" />
                <span>(11) 99999-9999</span>
              </a>
              <a href="mailto:contato@b2aengenharia.com.br" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground">
                <Mail className="h-4 w-4" />
                <span>contato@b2aengenharia.com.br</span>
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