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
import MuroFlexao from "./pages/services/MuroFlexao";
import OAE from "./pages/services/OAE";
import Gabiao from "./pages/services/Gabiao";
import Terramesh from "./pages/services/Terramesh";
import OutrasContencoes from "./pages/services/OutrasContencoes";
import ContencoesMartitimas from "./pages/services/ContencoesMartitimas";
import ProjetosGeotecnicos from "./pages/services/ProjetosGeotecnicos";
import InfraestruturaCivil from "./pages/services/InfraestruturaCivil";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Videos from "./pages/Videos";
import NewJersey from "./pages/services/NewJersey";
import MurosBritagem from "./pages/services/MurosBritagem";
import SolucoesIntegradas from "./pages/services/SolucoesIntegradas";
import DesenvolvimentoEspeciais from "./pages/services/DesenvolvimentoEspeciais";
import PecasPreMoldadas from "./pages/services/PecasPreMoldadas";
import GerenciamentoObras from "./pages/services/GerenciamentoObras";
import ContencoesEspecializadas from "./pages/services/ContencoesEspecializadas";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ScrollToTop from "./components/utils/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />

          {/* Projetos - Contenções */}
          <Route path="/servicos/terra-armada" element={<TerraArmada />} />
          <Route path="/servicos/cortina-atirantada" element={<CortinaAtirantada />} />
          <Route path="/servicos/muro-flexao" element={<MuroFlexao />} />
          <Route path="/servicos/solo-grampeado" element={<SoloGrampeado />} />
          <Route path="/servicos/projetos-contencao" element={<ProjetosContencao />} />

          {/* Projetos - O.A.E */}
          <Route path="/servicos/oae" element={<OAE />} />

          {/* Projetos - Geotecnia */}
          <Route path="/servicos/projetos-geotecnicos" element={<ProjetosGeotecnicos />} />
          <Route path="/servicos/geotecnia/*" element={<ProjetosGeotecnicos />} />

          {/* Execução */}
          <Route path="/servicos/execucao/new-jersey" element={<NewJersey />} />
          <Route path="/servicos/execucao/muro-flexao" element={<MuroFlexao />} />
          <Route path="/servicos/execucao/pecas-pre-moldadas" element={<PecasPreMoldadas />} />
          <Route path="/servicos/execucao/gerenciamento" element={<GerenciamentoObras />} />
          <Route path="/servicos/execucao/contencoes" element={<ContencoesEspecializadas />} />
          <Route path="/servicos/execucao/*" element={<Services />} />

          {/* Venda e Locação de Formas Metálicas */}
          <Route path="/servicos/formas/muro-flexao" element={<MuroFlexao />} />
          <Route path="/servicos/formas/new-jersey" element={<NewJersey />} />
          <Route path="/servicos/formas/desenvolvimento-especiais" element={<DesenvolvimentoEspeciais />} />
          <Route path="/servicos/formas/*" element={<Services />} />

          {/* Mineração */}
          <Route path="/servicos/mineracao/muros-britagem" element={<MurosBritagem />} />
          <Route path="/servicos/mineracao/solucoes-integradas" element={<SolucoesIntegradas />} />
          <Route path="/servicos/mineracao/*" element={<Services />} />

          {/* Contenções Marítimas */}
          <Route path="/servicos/contencoes-maritimas" element={<ContencoesMartitimas />} />
          <Route path="/servicos/maritimas/*" element={<ContencoesMartitimas />} />

          {/* Rotas antigas mantidas para compatibilidade */}
          <Route path="/servicos/gabiao" element={<Gabiao />} />
          <Route path="/servicos/terramesh" element={<Terramesh />} />
          <Route path="/servicos/outras-contencoes" element={<OutrasContencoes />} />
          <Route path="/servicos/infraestrutura-civil" element={<InfraestruturaCivil />} />

          <Route path="/obras" element={<Portfolio />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/contato" element={<Contact />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
