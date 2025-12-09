import { motion } from "framer-motion";
import { 
  Eye,
  Shield,
  Target,
  Calendar,
  ArrowRightLeft,
  Rocket,
  ArrowRight,
  MapPin,
  Activity
} from "lucide-react";
import { NavigationTile } from "@/components/navigation-tile";
import backgroundVideo from "@assets/5453622-uhd_3840_2160_24fps_1764660375038.mp4";
import logo from "@assets/image_1764730901669.png";
import hexawareLogo from "@assets/White_Logo_1764731389638.png";

const tiles = [
  {
    title: "Our North Star Vision for R&Co.",
    description: "Strategic direction",
    icon: Eye,
    href: "/vision",
    color: "from-violet-500 to-purple-600",
    iconBg: "bg-violet-500/20",
    borderColor: "border-violet-500/30",
  },
  {
    title: "Target Operating Model",
    description: "Future state design",
    icon: Target,
    href: "/target-operating-model",
    color: "from-emerald-500 to-teal-600",
    iconBg: "bg-emerald-500/20",
    borderColor: "border-emerald-500/30",
  },
  {
    title: "Transition",
    description: "Implementation path",
    icon: ArrowRightLeft,
    href: "/transition",
    color: "from-indigo-500 to-blue-600",
    iconBg: "bg-indigo-500/20",
    borderColor: "border-indigo-500/30",
  },
  {
    title: "Transformation",
    description: "Change journey",
    icon: Rocket,
    href: "/transformation",
    color: "from-fuchsia-500 to-purple-600",
    iconBg: "bg-fuchsia-500/20",
    borderColor: "border-fuchsia-500/30",
  },
  {
    title: "Day in the Life",
    description: "User experience",
    icon: Calendar,
    href: "/day-in-life",
    color: "from-amber-500 to-orange-600",
    iconBg: "bg-amber-500/20",
    borderColor: "border-amber-500/30",
  },
  {
    title: "Day in the Life of IT with Hexaware",
    description: "IT workflow visualization",
    icon: Activity,
    href: "/it-workflows",
    color: "from-violet-500 to-fuchsia-600",
    iconBg: "bg-violet-500/20",
    borderColor: "border-violet-500/30",
  },
  {
    title: "Governance",
    description: "Policies & oversight",
    icon: Shield,
    href: "/governance",
    color: "from-cyan-500 to-blue-600",
    iconBg: "bg-cyan-500/20",
    borderColor: "border-cyan-500/30",
  },
  {
    title: "Delivery Locations",
    description: "Global presence",
    icon: MapPin,
    href: "/delivery-locations",
    color: "from-sky-500 to-cyan-600",
    iconBg: "bg-sky-500/20",
    borderColor: "border-sky-500/30",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background relative flex flex-col lg:flex-row overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        data-testid="video-background"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      
      {/* Dark translucent overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]" data-testid="overlay-dark"></div>
      
      {/* Logo */}
      <div className="absolute top-4 left-4 z-50">
        <img 
          src={logo} 
          alt="Rothschild & Co" 
          className="h-10 w-auto"
          data-testid="img-logo"
        />
      </div>
      
      <div className="flex-1 flex items-center justify-center p-6 py-16 lg:p-16 relative z-10">
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-3 leading-tight"
            data-testid="text-hero-title"
          >
            Enabling Future-ready IT for <span className="text-white">R&Co.</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="flex items-center gap-2 mt-2 mb-4 lg:mb-6"
            data-testid="text-powered-by"
          >
            <span className="text-sm text-muted-foreground">Powered by</span>
            <img 
              src={hexawareLogo} 
              alt="Hexaware" 
              className="h-4 w-auto"
              data-testid="img-hexaware-logo"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex items-center gap-2 text-muted-foreground mt-4"
          >
            <ArrowRight className="w-4 h-4 text-primary" />
            <span className="text-sm">Click any tile to explore</span>
          </motion.div>
          
        </div>
      </div>
      
      <div className="w-full lg:w-auto flex items-center justify-center lg:justify-end p-4 pb-8 lg:p-8 relative z-10">
        <div className="grid grid-cols-2 gap-3 lg:gap-4 max-w-[320px] lg:max-w-[360px]">
          {tiles.map((tile, index) => (
            <motion.div
              key={tile.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.1 + index * 0.06,
                ease: "easeOut"
              }}
            >
              <NavigationTile
                title={tile.title}
                description={tile.description}
                icon={tile.icon}
                href={tile.href}
                index={index}
                color={tile.color}
                iconBg={tile.iconBg}
                borderColor={tile.borderColor}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
