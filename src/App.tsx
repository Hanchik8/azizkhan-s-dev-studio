import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";

const App = () => (
  <ThemeProvider>
    <TooltipProvider>
      <Sonner />
      <Index />
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
