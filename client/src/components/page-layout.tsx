import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Home } from "lucide-react";
import { PageTransition } from "@/components/skeleton";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  centerTitle?: boolean;
}

export function PageLayout({ title, subtitle, children, centerTitle = true }: PageLayoutProps) {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background transition-colors duration-300">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-4">
            <Link href="/">
              <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="button-back-home">
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            </Link>
            
            <Link href="/">
              <button className="text-muted-foreground hover:text-foreground transition-colors" data-testid="button-home">
                <Home className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`mb-12 ${centerTitle ? 'text-center' : ''}`}
        >
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-sm font-medium text-primary tracking-widest uppercase mb-3"
              data-testid="text-page-subtitle"
            >
              {subtitle}
            </motion.p>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-foreground"
            data-testid="text-page-title"
          >
            {title}
          </motion.h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {children}
        </motion.div>
      </main>
      
      <footer className="border-t border-border py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p data-testid="text-footer-copyright">Tile Navigation Demo</p>
            <nav className="flex items-center gap-6">
              <Link href="/" className="hover:text-foreground transition-colors" data-testid="link-footer-home">
                Home
              </Link>
              <Link href="/about" className="hover:text-foreground transition-colors" data-testid="link-footer-about">
                About
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors" data-testid="link-footer-contact">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
      </div>
    </PageTransition>
  );
}
