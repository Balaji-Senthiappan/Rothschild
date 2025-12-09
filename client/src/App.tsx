import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/lib/theme-provider";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect, createContext, useContext } from "react";
import Login from "@/pages/login";
import Home from "@/pages/home";
import Vision from "@/pages/vision";
import Governance from "@/pages/governance";
import TargetOperatingModel from "@/pages/target-operating-model";
import DayInLife from "@/pages/day-in-life";
import ITWorkflows from "@/pages/it-workflows";
import DeliveryLocations from "@/pages/delivery-locations";
import Transition from "@/pages/transition";
import Transformation from "@/pages/transformation";
import About from "@/pages/about";
import Services from "@/pages/services";
import Portfolio from "@/pages/portfolio";
import Contact from "@/pages/contact";
import Blog from "@/pages/blog";
import Resources from "@/pages/resources";
import NotFound from "@/pages/not-found";

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

function ProtectedRoute({ component: Component }: { component: React.ComponentType }) {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }
  
  return <Component />;
}

function Router() {
  const { isAuthenticated } = useAuth();
  
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/login">
          {isAuthenticated ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/">
          <ProtectedRoute component={Home} />
        </Route>
        <Route path="/vision">
          <ProtectedRoute component={Vision} />
        </Route>
        <Route path="/governance">
          <ProtectedRoute component={Governance} />
        </Route>
        <Route path="/target-operating-model">
          <ProtectedRoute component={TargetOperatingModel} />
        </Route>
        <Route path="/day-in-life">
          <ProtectedRoute component={DayInLife} />
        </Route>
        <Route path="/it-workflows">
          <ProtectedRoute component={ITWorkflows} />
        </Route>
        <Route path="/delivery-locations">
          <ProtectedRoute component={DeliveryLocations} />
        </Route>
        <Route path="/transition">
          <ProtectedRoute component={Transition} />
        </Route>
        <Route path="/transformation">
          <ProtectedRoute component={Transformation} />
        </Route>
        <Route path="/about">
          <ProtectedRoute component={About} />
        </Route>
        <Route path="/services">
          <ProtectedRoute component={Services} />
        </Route>
        <Route path="/portfolio">
          <ProtectedRoute component={Portfolio} />
        </Route>
        <Route path="/contact">
          <ProtectedRoute component={Contact} />
        </Route>
        <Route path="/blog">
          <ProtectedRoute component={Blog} />
        </Route>
        <Route path="/resources">
          <ProtectedRoute component={Resources} />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem("isAuthenticated") === "true";
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(sessionStorage.getItem("isAuthenticated") === "true");
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const login = () => {
    sessionStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("userName");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
