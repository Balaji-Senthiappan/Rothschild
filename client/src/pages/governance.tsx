import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/skeleton";
import bannerImage from "@assets/Databricks_landing_page_image_1765217418898.jpg";
import ceoImage from "@assets/R_Srikrishna_1765123460246.jpg";
import raviImage from "@assets/Ravi_Vaidyanathan_1765123769583.jpg";
import amrinderImage from "@assets/Amrinder_Singh_1765123858977.jpg";
import girishImage from "@assets/Girish_Ravindran_1765124178412.jpg";
import vijayImage from "@assets/Vijay_1765124178414.jpg";
import muraliImage from "@assets/Murali_J_1765124444313.jpg";
import vijaySImage from "@assets/Vijay_S_1765125111048.jpg";
import arnabImage from "@assets/image_(7)_1765125125573.png";
import karlImage from "@assets/Karl_Kispert_1765125185939.jpg";
import gauravImage from "@assets/image_1765125260253.png";

export default function Governance() {
  const [imageKey, setImageKey] = useState(0);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    // Retry loading the image after a short delay
    setTimeout(() => {
      setImageKey(prev => prev + 1);
    }, 500);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
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

        <div className="relative w-full py-16 md:py-24 overflow-hidden">
          <img 
            key={imageKey}
            src={bannerImage} 
            alt="Governance banner" 
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            decoding="async"
            onError={handleImageError}
            data-testid="img-banner"
          />
          <div className="absolute inset-0 bg-black/50" />
          
          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="font-display font-light text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-lg mb-6"
                data-testid="text-page-title"
              >
                Strong Governance. Seamless Collaboration
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="font-display text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
                data-testid="text-page-subtitle"
              >
                Backed by an executive governance structure with the CEO of Hexaware as the Corporate Sponsor
              </motion.p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-6">
            {/* Layer 1: Corporate Sponsor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white/5 border border-blue-400/30 rounded-xl p-6 backdrop-blur-sm"
              data-testid="layer-corporate-sponsor"
            >
              <h2 className="font-display font-light text-xl md:text-2xl text-blue-400 mb-6">
                Corporate Sponsor
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <a href="https://www.linkedin.com/in/srikrishna-ramakarthikeyan-4154452/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 cursor-pointer group">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-400/50 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400">
                    <img 
                      src={ceoImage} 
                      alt="Srikrishna R (Keech)" 
                      className="w-full h-full object-cover"
                      data-testid="img-ceo"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-light text-sm md:text-base text-white">
                      Srikrishna R (Keech)
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Chief Executive Officer
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Layer 2: Executive Sponsor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white/5 border border-blue-400/30 rounded-xl p-6 backdrop-blur-sm"
              data-testid="layer-executive-sponsor"
            >
              <h2 className="font-display font-light text-xl md:text-2xl text-blue-400 mb-6">
                Executive Sponsor
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <a href="https://www.linkedin.com/in/ravi-vaidyanathan-4631b85/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 cursor-pointer group">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-400/50 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400">
                    <img 
                      src={raviImage} 
                      alt="Ravi Vaidyanathan" 
                      className="w-full h-full object-cover"
                      data-testid="img-ravi"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-light text-sm md:text-base text-white">
                      Ravi Vaidyanathan
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Global Head of Financial Services
                    </p>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/amrinder-singh-233745/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 cursor-pointer group">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-400/50 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400">
                    <img 
                      src={amrinderImage} 
                      alt="Amrinder Singh" 
                      className="w-full h-full object-cover"
                      data-testid="img-amrinder"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-light text-sm md:text-base text-white">
                      Amrinder Singh
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Head of EMEA
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Layer 3: Strategic Governance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white/5 border border-blue-400/30 rounded-xl p-6 backdrop-blur-sm"
              data-testid="layer-strategic-governance"
            >
              <h2 className="font-display font-light text-xl md:text-2xl text-blue-400 mb-6">
                Strategic Governance
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <a href="https://www.linkedin.com/in/girishr1978/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 cursor-pointer group">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-400/50 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400">
                    <img 
                      src={girishImage} 
                      alt="Girish R." 
                      className="w-full h-full object-cover"
                      data-testid="img-girish"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-light text-sm md:text-base text-white">
                      Girish R.
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Solution and Delivery, Run Services
                    </p>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/vijay-raghavan-6204726/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 cursor-pointer group">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-400/50 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400">
                    <img 
                      src={vijayImage} 
                      alt="Vijay R." 
                      className="w-full h-full object-cover"
                      data-testid="img-vijay"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-light text-sm md:text-base text-white">
                      Vijay R.
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Customer Success Lead
                    </p>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/muralijambunathan/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 cursor-pointer group">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-400/50 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400">
                    <img 
                      src={muraliImage} 
                      alt="Murali J." 
                      className="w-full h-full object-cover"
                      data-testid="img-murali"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-light text-sm md:text-base text-white">
                      Murali J.
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Solution Assurance Lead
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Layer 4: Program Execution & Delivery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-white/5 border border-blue-400/30 rounded-xl p-6 backdrop-blur-sm"
              data-testid="layer-program-execution"
            >
              <h2 className="font-display font-light text-xl md:text-2xl text-blue-400 mb-6">
                Program Execution & Delivery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <a href="https://www.linkedin.com/in/vijaysrinivas/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 cursor-pointer group">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-400/50 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400">
                    <img 
                      src={vijaySImage} 
                      alt="Vijay S." 
                      className="w-full h-full object-cover"
                      data-testid="img-vijay-s"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-light text-sm md:text-base text-white">
                      Vijay S.
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Client Partner
                    </p>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/arnabsethi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 cursor-pointer group">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-400/50 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400">
                    <img 
                      src={arnabImage} 
                      alt="Arnab S." 
                      className="w-full h-full object-cover"
                      data-testid="img-arnab"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-light text-sm md:text-base text-white">
                      Arnab S.
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Infrastructure Solution Lead
                    </p>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/karlkispert/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 cursor-pointer group">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-400/50 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400">
                    <img 
                      src={karlImage} 
                      alt="Karl Kispert" 
                      className="w-full h-full object-cover"
                      data-testid="img-karl"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-light text-sm md:text-base text-white">
                      Karl Kispert
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      InfoSec Solution Lead
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-400/50 flex-shrink-0">
                    <img 
                      src={gauravImage} 
                      alt="Gaurav K." 
                      className="w-full h-full object-cover"
                      data-testid="img-gaurav"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-light text-sm md:text-base text-white">
                      Gaurav K.
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Service Delivery Manager
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
