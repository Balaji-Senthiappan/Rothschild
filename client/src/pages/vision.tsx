import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/skeleton";
import bannerImage from "@assets/image_1765001459580.png";

const pillars = [
  {
    number: "01",
    boldText: "Operating Model Journey",
    description: "Operating Model Journey from discrete structure to AI-first model leveraging economies of scale & eliminating silos",
  },
  {
    number: "02",
    boldText: "elevated user experience",
    description: "Create an elevated user experience across all interfaces with a Digital Experience Office (DEO)",
  },
  {
    number: "03",
    boldText: "R&Co. ways of working",
    description: "Rigour and focus in design aligning to R&Co. ways of working",
  },
  {
    number: "04",
    boldText: "Culturally Aligned",
    description: "Culturally Aligned Service Delivery Team",
  },
  {
    number: "05",
    boldText: "single pane of glass",
    description: "Create a single pane of glass observability framework and create an AI enabled framework for pragmatic implementation of automation",
  },
  {
    number: "06",
    boldText: "Land safe",
    description: "Land safe by over investing in transition and ensuring zero risk to operations",
  },
  {
    number: "07",
    boldText: "Innovation",
    description: "Innovation as a bedrock of our solution",
  },
  {
    number: "08",
    boldText: "strong governance",
    description: "Underpinned by strong governance and executive commitments",
  },
];

export default function Vision() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm" data-testid="button-back-home">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
              <Link href="/">
                <Button variant="ghost" size="icon" data-testid="button-home">
                  <Home className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Banner Section */}
        <div className="relative w-full min-h-[350px] md:min-h-[420px] overflow-hidden flex items-center justify-center">
          <img 
            src={bannerImage} 
            alt="North Star Vision Banner" 
            className="absolute inset-0 w-full h-full object-cover"
            data-testid="img-vision-banner"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-sm font-medium text-blue-400 tracking-widest uppercase mb-4"
                data-testid="text-page-subtitle"
              >
                Strategic Direction
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="font-display font-light text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-lg mb-8"
                data-testid="text-page-title"
              >
                Our North Star Vision for R&Co.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto"
                data-testid="text-vision-description"
              >
                Our overall North Star vision for R&Co. is to deliver a secure, intelligent, and future-ready 
                operating model powered by AI/GenAI technologies, designed to elevate customer experience, 
                drive continuous innovation, and ensure full alignment to R&Co ways of working.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Main Content - Key Solution Pillars */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
              >
                <Card className="h-full min-h-[140px] bg-white/5 border-white/20 backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center">
                  <CardContent className="p-6 md:p-8 w-full">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 border bg-white/10 border-white/20">
                        <span className="font-display font-light text-xl text-white">{pillar.number}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed" data-testid={`text-pillar-${index}`}>
                          {pillar.description.split(pillar.boldText).map((part, i, arr) => (
                            <span key={i}>
                              {part}
                              {i < arr.length - 1 && <span className="font-bold text-blue-400">{pillar.boldText}</span>}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Outcomes Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16"
          >
            <h2 className="font-display font-light text-2xl md:text-3xl text-white text-center mb-8" data-testid="text-outcomes-heading">
              Outcomes we will deliver
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { metric: "50%", description: "Increase in Employee experience Levels" },
                { metric: "One Team", description: "Culture" },
                { metric: ">35%", description: "Reduction in IT Operations Spend" },
                { metric: ">40%", description: "Incidents/Tickets resolved via AI" },
                { metric: "30%", description: "Faster time to resolve through AIOps & Proactive operations" },
                { metric: "30%", description: "Lower lead time to release changes" },
                { metric: "200 hours", description: "Training hours per FTE, certification uptake and skill-matrix coverage for key roles." },
                { metric: "Zero", description: "Transition-related incidents and business-impacting outages during change." },
              ].map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.06 }}
                  className="flex flex-col items-center text-center bg-white/5 border border-white/15 rounded-xl p-5 hover:bg-white/8 hover:border-white/25 transition-all"
                  data-testid={`outcome-${index}`}
                >
                  <span className="text-2xl md:text-3xl font-semibold text-blue-400 mb-3">{outcome.metric}</span>
                  <div className="w-12 h-px bg-blue-400/40 mb-3" />
                  <p className="text-sm text-white/80 leading-relaxed">{outcome.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </main>

        {/* Footer */}
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
