import { motion } from "framer-motion";
import { PageTransition } from "@/components/skeleton";
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import worldMap from "@assets/image_1765253516836.png";
import bannerImage from "@assets/Hexaware-Abstract-Technology-Light-Lines-Background_1765253143698.jpg";

interface City {
  name: string;
  country: string;
  x: number;
  y: number;
  teamTitle: string;
  teamItems: string[];
}

const cities: City[] = [
  { 
    name: "New York", 
    country: "USA", 
    x: 26, 
    y: 35,
    teamTitle: "Onsite Support",
    teamItems: ["Local presence for R&Co."]
  },
  { 
    name: "Birmingham", 
    country: "UK", 
    x: 45.5, 
    y: 25,
    teamTitle: "Core Delivery Teams – Birmingham",
    teamItems: ["SDM Onsite", "EUC Lead", "Network & Security Lead"]
  },
  { 
    name: "London", 
    country: "UK", 
    x: 46, 
    y: 28,
    teamTitle: "Onsite Support",
    teamItems: ["Local presence for R&Co."]
  },
  { 
    name: "Paris", 
    country: "France", 
    x: 47, 
    y: 31,
    teamTitle: "Onsite Support",
    teamItems: ["Local presence for R&Co."]
  },
  { 
    name: "Luxembourg", 
    country: "Luxembourg", 
    x: 48.5, 
    y: 29.5,
    teamTitle: "Onsite Support",
    teamItems: ["Local presence for R&Co."]
  },
  { 
    name: "Marseille", 
    country: "France", 
    x: 47, 
    y: 34,
    teamTitle: "Onsite Support",
    teamItems: ["Local presence for R&Co."]
  },
  { 
    name: "Pune", 
    country: "India", 
    x: 67, 
    y: 52,
    teamTitle: "Core Delivery Teams – India",
    teamItems: ["SDM Offshore", "EUC Support", "Hosting, Storage & Cloud Support", "Network & Security Services", "DEO Team"]
  },
  { 
    name: "Chennai", 
    country: "India", 
    x: 68.5, 
    y: 55,
    teamTitle: "Core Delivery Teams – India",
    teamItems: ["SDM Offshore", "EUC Support", "Hosting, Storage & Cloud Support", "Network & Security Services", "DEO Team"]
  },
  { 
    name: "Hong Kong", 
    country: "China", 
    x: 78, 
    y: 47.5,
    teamTitle: "Onsite Support",
    teamItems: ["Local presence for R&Co."]
  },
  { 
    name: "Manila", 
    country: "Philippines", 
    x: 79.5, 
    y: 52,
    teamTitle: "Core Delivery Teams – Philippines",
    teamItems: ["Service Desk Team"]
  },
];

function CityMarker({ city, index }: { city: City; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const isOnsiteSupport = city.teamTitle === "Onsite Support";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
      className="absolute cursor-pointer"
      style={{ left: `${city.x}%`, top: `${city.y}%`, transform: 'translate(-50%, -50%)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`marker-${city.name.toLowerCase().replace(' ', '-')}`}
    >
      <div className={`relative transition-all duration-200 ${isHovered ? 'scale-125' : ''}`}>
        <div className={`w-4 h-4 rounded-full border border-white shadow-lg animate-pulse ${
          isOnsiteSupport 
            ? 'bg-purple-500 shadow-purple-500/50' 
            : 'bg-blue-500 shadow-blue-500/50'
        }`} />
        <div className={`absolute inset-0 w-4 h-4 rounded-full animate-ping opacity-75 ${
          isOnsiteSupport ? 'bg-purple-400' : 'bg-blue-400'
        }`} />
      </div>
      
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 z-50"
        >
          <div className="bg-black/95 backdrop-blur-sm border border-purple-500/50 rounded-lg px-4 py-3 shadow-xl min-w-[200px]">
            <p className="text-white font-medium text-sm">{city.name}</p>
            <p className="text-blue-300 text-xs mb-2">{city.country}</p>
            <div className="border-t border-white/10 pt-2 mt-1">
              <p className="text-purple-400 text-xs font-medium mb-1.5">{city.teamTitle}</p>
              <ul className="space-y-1">
                {city.teamItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <span className="w-1 h-1 bg-purple-400 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-2.5 h-2.5 bg-black/95 border-r border-b border-purple-500/50 transform rotate-45" />
        </motion.div>
      )}
    </motion.div>
  );
}

export default function DeliveryLocations() {
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
            alt="Delivery Locations Banner" 
            className="absolute inset-0 w-full h-full object-cover"
            data-testid="img-delivery-locations-banner"
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
                Global Presence
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="font-display font-light text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-lg mb-4"
                data-testid="text-page-title"
              >
                Delivery Locations
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
              >
                Our Right Shore strategy for R&Co.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <p className="text-muted-foreground max-w-3xl mx-auto">
                We will leverage Hexaware's globally distributed operations and R&Co. offices to set up operational teams for you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-8 backdrop-blur-sm overflow-visible"
            >
              <div className="relative w-full" style={{ aspectRatio: '2/1' }}>
                <img 
                  src={worldMap} 
                  alt="World Map" 
                  className="absolute inset-0 w-full h-full object-contain"
                  data-testid="img-world-map"
                />
                
                {cities.map((city, index) => (
                  <CityMarker key={city.name} city={city} index={index} />
                ))}
              </div>
              
              {/* Legend */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="flex items-center justify-center gap-8 mt-6 pt-4 border-t border-white/10"
                data-testid="map-legend"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500 border border-white shadow-lg" />
                  <span className="text-sm text-muted-foreground">Hexaware Delivery Centers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500 border border-white shadow-lg" />
                  <span className="text-sm text-muted-foreground">Onsite Locations</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-center"
            >
              <p className="text-sm text-muted-foreground">
                Hover over any location to see the delivery team details
              </p>
            </motion.div>

            {/* Delivery Teams Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Offshore - India Delivery Teams */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-5" data-testid="card-india-teams">
                <h3 className="font-display font-light text-lg text-blue-400 mb-4">
                  Offshore - India Delivery Teams
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                    SDM Offshore
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                    EUC Support
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                    Hosting, Storage & Cloud Support
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                    Network & Security Services
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                    DEO Team
                  </li>
                </ul>
              </div>

              {/* On-Site Services */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-5" data-testid="card-onsite-services">
                <h3 className="font-display font-light text-lg text-purple-400 mb-4">
                  On-Site Services
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0" />
                    London
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0" />
                    New York
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0" />
                    Paris
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0" />
                    Luxembourg
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0" />
                    Marseille
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0" />
                    Hong Kong
                  </li>
                </ul>
              </div>

              {/* Offshore - Philippines Delivery Teams */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-5" data-testid="card-philippines-teams">
                <h3 className="font-display font-light text-lg text-blue-400 mb-4">
                  Offshore - Philippines Delivery Teams
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                    Service Desk
                  </li>
                </ul>
              </div>

              {/* UK Delivery Teams */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-5" data-testid="card-uk-teams">
                <h3 className="font-display font-light text-lg text-blue-400 mb-4">
                  UK Delivery Teams
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                    SDM Onsite
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                    EUC Lead
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                    Network & Security Lead
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
