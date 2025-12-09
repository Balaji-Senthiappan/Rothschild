import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { PageTransition } from "@/components/skeleton";
import { Button } from "@/components/ui/button";
import { 
  Monitor, 
  AlertTriangle, 
  User,
  Bot,
  Clock,
  Mail,
  CheckCircle,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Phone,
  FileSearch,
  Package,
  Bell,
  Coffee,
  Wrench,
  BatteryCharging,
  Sunset,
  Play,
  Pause,
  RotateCcw,
  ArrowLeft,
  Home
} from "lucide-react";
import oliviaImage from "@assets/generated_images/professional_woman_executive_headshot.png";
import bannerImage from "@assets/Amaze_data_and_AI_webpage_Landing_1765220041629.jpg";

interface TimelineEvent {
  time: string;
  title: string;
  oliviaAction: string;
  technologyHelp: string;
  techDetails?: string[];
  icon: React.ReactNode;
  techIcon: React.ReactNode;
  highlight?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    time: "8:30 AM",
    title: "Starting the Day",
    oliviaAction: "Olivia kicks off her day by logging into the portfolio dashboard. She reviews markets with Bloomberg and Refinitiv Eikon, then attends a 15-minute standup with operations, compliance, and IT teams.",
    technologyHelp: "GenAI productivity tools boost her efficiency throughout the morning.",
    techDetails: [
      "Mail Mate - Responds to emails and handles renewal terms",
      "Echo Docs - Reviews prior term policy documents",
      "Tensai AgentVerse - Investment guidance assistance"
    ],
    icon: <TrendingUp className="w-5 h-5" />,
    techIcon: <Monitor className="w-4 h-4 text-blue-400" />,
    highlight: "GenAI Productivity Tools"
  },
  {
    time: "9:00 AM",
    title: "Auto-Incident Detection",
    oliviaAction: "Unknown to Olivia, SWIFT messages are timing out intermittently. The monitoring system springs into action without any manual intervention.",
    technologyHelp: "Monitoring detects the issue automatically and initiates corrective actions.",
    techDetails: [
      "Auto-collects logs and error traces",
      "Initiates corrective actions automatically",
      "Updates incident ticket with findings"
    ],
    icon: <AlertTriangle className="w-5 h-5" />,
    techIcon: <Zap className="w-4 h-4 text-yellow-400" />,
    highlight: "Auto-Detection & Self-Healing"
  },
  {
    time: "9:20 AM",
    title: "Incident Resolved",
    oliviaAction: "Olivia receives an email notification that an incident was detected and auto-resolved before any SLAs were breached.",
    technologyHelp: "Proactive monitoring ensured zero business impact. Olivia continues work without disruption.",
    icon: <Mail className="w-5 h-5" />,
    techIcon: <CheckCircle className="w-4 h-4 text-green-400" />,
    highlight: "Proactive Resolution"
  },
  {
    time: "10:00 AM",
    title: "Self-Service Request",
    oliviaAction: "Olivia needs access to new software for sanctions checks. She navigates to the self-service portal to submit her request.",
    technologyHelp: "The self-service portal provides an intuitive interface, eliminating manual ticket creation.",
    icon: <Package className="w-5 h-5" />,
    techIcon: <Shield className="w-4 h-4 text-purple-400" />,
    highlight: "Self-Service Portal"
  },
  {
    time: "10:30 AM",
    title: "Automated Deployment",
    oliviaAction: "Just 30 minutes after her request, Olivia receives confirmation that the software is deployed and ready to use.",
    technologyHelp: "Software deployed via 'tensai for experience' - rapid provisioning without IT intervention.",
    icon: <Zap className="w-5 h-5" />,
    techIcon: <Bot className="w-4 h-4 text-cyan-400" />,
    highlight: "30-Minute Deployment"
  },
  {
    time: "12:00 PM",
    title: "Service Desk Call",
    oliviaAction: "FIX/API connections fail. Olivia contacts service desk where a voice agent receives her call and Agentic RCA springs into action.",
    technologyHelp: "Agentic RCA pulls logs, correlates with recent changes, and identifies resolution path.",
    techDetails: [
      "Voice agent receives the call",
      "Agentic RCA analyzes logs automatically",
      "Assigns ticket with all required data"
    ],
    icon: <Phone className="w-5 h-5" />,
    techIcon: <FileSearch className="w-4 h-4 text-orange-400" />,
    highlight: "Voice Agent & Agentic RCA"
  },
  {
    time: "12:30 PM",
    title: "Customer Lunch",
    oliviaAction: "Olivia steps away for a customer lunch, knowing the system issue is being handled by L2/L3 support.",
    technologyHelp: "Transparent ticketing keeps Olivia informed without requiring constant attention.",
    icon: <Coffee className="w-5 h-5" />,
    techIcon: <Users className="w-4 h-4 text-amber-400" />,
    highlight: "Seamless Handoff"
  },
  {
    time: "1:30 PM",
    title: "Issue Resolved",
    oliviaAction: "While at lunch, L2/L3 SMEs resolve the ticket using Agentic RCA suggestions.",
    technologyHelp: "AI-driven insights accelerated resolution. ITSM ticket updated with full details.",
    icon: <Wrench className="w-5 h-5" />,
    techIcon: <CheckCircle className="w-4 h-4 text-green-400" />,
    highlight: "AI-Accelerated Resolution"
  },
  {
    time: "4:30 PM",
    title: "Hardware Issue",
    oliviaAction: "Olivia's laptop charger isn't working. She quickly raises a ticket in ITSM.",
    technologyHelp: "Simple interface for hardware issues. Auto-categorized and routed for quick resolution.",
    icon: <BatteryCharging className="w-5 h-5" />,
    techIcon: <Bell className="w-4 h-4 text-red-400" />,
    highlight: "Quick Ticket Creation"
  },
  {
    time: "4:45 PM",
    title: "Smart Vending",
    oliviaAction: "Olivia collects a spare charger from the smart vending machine. Instant self-service hardware replacement.",
    technologyHelp: "Smart vending integrated with ITSM. Inventory tracked automatically, ticket resolved.",
    icon: <Package className="w-5 h-5" />,
    techIcon: <Zap className="w-4 h-4 text-cyan-400" />,
    highlight: "Smart Device Vending"
  },
  {
    time: "5:00 PM",
    title: "End of Day",
    oliviaAction: "Olivia wraps up her day, having experienced seamless IT support throughout.",
    technologyHelp: "A full day of productivity enabled by proactive monitoring, GenAI tools, and smart automation.",
    icon: <Sunset className="w-5 h-5" />,
    techIcon: <CheckCircle className="w-4 h-4 text-green-400" />,
    highlight: "Seamless IT Experience"
  }
];

function TimeNode({ 
  event, 
  index, 
  isActive, 
  isPast,
  onClick 
}: { 
  event: TimelineEvent; 
  index: number; 
  isActive: boolean;
  isPast: boolean;
  onClick: () => void;
}) {
  return (
    <div className="flex flex-col items-center relative">
      <motion.button
        onClick={onClick}
        className={`
          relative z-10 w-14 h-14 rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isActive 
            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50 scale-110" 
            : isPast 
              ? "bg-green-600/80 text-white" 
              : "bg-white/10 text-white/60 hover:bg-white/20"
          }
        `}
        whileHover={{ scale: isActive ? 1.1 : 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-testid={`node-${index}`}
      >
        {event.icon}
      </motion.button>
      
      <div className={`mt-2 text-center transition-all duration-300 ${isActive ? "opacity-100" : "opacity-60"}`}>
        <div className={`font-mono text-xs font-bold ${isActive ? "text-blue-400" : "text-white/70"}`}>
          {event.time}
        </div>
        <div className={`text-xs mt-0.5 max-w-[80px] leading-tight ${isActive ? "text-white" : "text-white/50"}`}>
          {event.title}
        </div>
      </div>
    </div>
  );
}

export default function DayInLife() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!isAnimating) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % timelineEvents.length);
    }, 3500);
    
    return () => clearInterval(interval);
  }, [isAnimating]);

  // Auto-scroll to active node on mobile
  useEffect(() => {
    const container = scrollContainerRef.current;
    const activeNode = nodeRefs.current[activeIndex];
    
    if (container && activeNode) {
      // Small delay to ensure DOM is updated
      requestAnimationFrame(() => {
        const containerWidth = container.clientWidth;
        const nodeOffsetLeft = activeNode.offsetLeft;
        const nodeWidth = activeNode.offsetWidth;
        
        // Center the active node in the viewport
        const scrollLeft = nodeOffsetLeft - (containerWidth / 2) + (nodeWidth / 2);
        
        container.scrollTo({
          left: Math.max(0, scrollLeft),
          behavior: 'smooth'
        });
      });
    }
  }, [activeIndex]);

  const currentEvent = timelineEvents[activeIndex];
  
  const oliviaPosition = (activeIndex / (timelineEvents.length - 1)) * 100;

  const handleNodeClick = (index: number) => {
    setIsAnimating(false);
    setActiveIndex(index);
  };

  const handleRestart = () => {
    setActiveIndex(0);
    setIsAnimating(true);
  };

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
            alt="Day in the Life Banner" 
            className="absolute inset-0 w-full h-full object-cover"
            data-testid="img-day-in-life-banner"
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
                User Experience
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="font-display font-light text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-lg mb-4"
                data-testid="text-page-title"
              >
                Day in the Life
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
              >
                Experience seamless IT support through Olivia's journey
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-xl p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="w-20 h-20 rounded-full flex-shrink-0 overflow-hidden border-2 border-blue-400/50">
                <img src={oliviaImage} alt="Olivia" className="w-full h-full object-cover" data-testid="img-olivia-main" />
              </div>
              <div className="text-center md:text-left flex-1">
                <h2 className="font-display font-light text-xl md:text-2xl text-white mb-1">
                  Follow <span className="text-blue-400">Olivia</span> Through Her Day
                </h2>
                <p className="text-sm text-muted-foreground">
                  Client Services Executive at R&Co., London Office. Watch how modern IT services keep her productive.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsAnimating(!isAnimating)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm text-white"
                  data-testid="button-play-pause"
                >
                  {isAnimating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  {isAnimating ? "Pause" : "Play"}
                </button>
                <button
                  onClick={handleRestart}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm text-white"
                  data-testid="button-restart"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 backdrop-blur-sm mb-6">
          <div className="flex items-center gap-2 mb-6">
            <Clock className="w-5 h-5 text-blue-400" />
            <h3 className="font-display font-light text-lg text-white">Olivia's Journey</h3>
          </div>
          
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide"
            >
              <div className="relative min-w-[900px] pt-12">
                <div className="absolute top-[52px] left-7 right-7 h-1 bg-white/10 rounded-full" />
                
                <div 
                  className="absolute top-[52px] left-7 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `calc(${oliviaPosition}% * 0.92)` }}
                />
                
                <motion.div
                  className="absolute top-2 z-20"
                  animate={{ 
                    left: `calc(${oliviaPosition}% * 0.92 + 28px - 16px)`,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-blue-400 shadow-lg shadow-blue-500/50">
                      <img src={oliviaImage} alt="Olivia" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-blue-400" />
                  </motion.div>
                </motion.div>
                
                <div className="flex justify-between">
                  {timelineEvents.map((event, index) => (
                    <div
                      key={index}
                      ref={(el) => { nodeRefs.current[index] = el; }}
                    >
                      <TimeNode
                        event={event}
                        index={index}
                        isActive={activeIndex === index}
                        isPast={index < activeIndex}
                        onClick={() => handleNodeClick(index)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-gradient-to-br from-blue-600/10 via-white/5 to-purple-600/10 border border-white/20 rounded-xl p-5 md:p-6 backdrop-blur-sm"
            data-testid={`popup-${activeIndex}`}
          >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-400/50 flex-shrink-0">
                    <img src={oliviaImage} alt="Olivia" className="w-full h-full object-cover" />
                  </div>
                  <div className="md:hidden">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/30 flex items-center justify-center text-blue-400">
                        {currentEvent.icon}
                      </div>
                      <div>
                        <div className="font-mono text-sm font-bold text-blue-400">{currentEvent.time}</div>
                        <h3 className="font-display font-light text-lg text-white">{currentEvent.title}</h3>
                      </div>
                    </div>
                    {currentEvent.highlight && (
                      <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-purple-600/80 text-white mt-1">
                        {currentEvent.highlight}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="hidden md:flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/30 flex items-center justify-center text-blue-400">
                      {currentEvent.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-lg font-bold text-blue-400">{currentEvent.time}</span>
                        {currentEvent.highlight && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-purple-600/80 text-white">
                            {currentEvent.highlight}
                          </span>
                        )}
                      </div>
                      <h3 className="font-display font-light text-xl text-white">{currentEvent.title}</h3>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <User className="w-4 h-4 text-blue-400" />
                        <span className="text-xs text-blue-300 uppercase tracking-wider font-medium">Olivia's Action</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {currentEvent.oliviaAction}
                      </p>
                    </div>

                    <div className="bg-purple-600/10 border border-purple-400/30 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        {currentEvent.techIcon}
                        <span className="text-xs text-purple-300 uppercase tracking-wider font-medium">Hexaware Advantage</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                        {currentEvent.technologyHelp}
                      </p>
                      
                      {currentEvent.techDetails && (
                        <ul className="space-y-1">
                          {currentEvent.techDetails.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex justify-center gap-1.5">
          {timelineEvents.map((_, idx) => (
            <button
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activeIndex ? "bg-blue-500 w-6" : idx < activeIndex ? "bg-green-500/60 w-1.5" : "bg-white/30 w-1.5 hover:bg-white/50"
              }`}
              onClick={() => handleNodeClick(idx)}
              data-testid={`progress-dot-${idx}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 backdrop-blur-sm">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600/20 border border-blue-400/30 rounded-lg flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="font-display font-light text-lg text-white">Enabling productivity with improved user experience</h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                We leverage AI-driven observability, telemetry-first insights, and predictive analytics to monitor and improve user experience in real time. Integrated platforms like <span className="text-blue-400 font-medium">ServiceNow</span>, <span className="text-blue-400 font-medium">Nexthink</span>, and <span className="text-blue-400 font-medium">HappySignals</span> feed a unified dashboard, enabling proactive self-healing, automated fulfillment, and measurable happiness—delivering smarter, faster, frictionless IT experiences.
              </p>
            </div>
          </div>
        </motion.div>
        </main>
      </div>
    </PageTransition>
  );
}
