import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import TerraArmada from "./pages/services/TerraArmada";
import ProjetosContencao from "./pages/services/ProjetosContencao";
import CortinaAtirantada from "./pages/services/CortinaAtirantada";
import SoloGrampeado from "./pages/services/SoloGrampeado";
import Gabiao from "./pages/services/Gabiao";
import Terramesh from "./pages/services/Terramesh";
import OutrasContencoes from "./pages/services/OutrasContencoes";
import ContencoesMartitimas from "./pages/services/ContencoesMartitimas";
import ProjetosGeotecnicos from "./pages/services/ProjetosGeotecnicos";
import InfraestruturaGivil from "./pages/services/InfraestruturaGivil";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/servicos/terra-armada" element={<TerraArmada />} />
          <Route path="/servicos/projetos-contencao" element={<ProjetosContencao />} />
          <Route path="/servicos/cortina-atirantada" element={<CortinaAtirantada />} />
          <Route path="/servicos/solo-grampeado" element={<SoloGrampeado />} />
          <Route path="/servicos/gabiao" element={<Gabiao />} />
          <Route path="/servicos/terramesh" element={<Terramesh />} />
          <Route path="/servicos/outras-contencoes" element={<OutrasContencoes />} />
          <Route path="/servicos/contencoes-maritimas" element={<ContencoesMartitimas />} />
          <Route path="/servicos/projetos-geotecnicos" element={<ProjetosGeotecnicos />} />
          <Route path="/servicos/infraestrutura-civil" element={<InfraestruturaGivil />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contato" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
