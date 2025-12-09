import { motion } from "framer-motion";
import { Star, Filter, ArrowLeft, Home } from "lucide-react";
import { Link } from "wouter";
import { PageTransition } from "@/components/skeleton";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroBanner from "@assets/Heraware-Global-Head-Digital-&-Customer_(1)_1765262625807.jpg";

const timelineColumns = ["Transition", "Year 1 (6-12 months)", "Year 2", "Year 3-5"];

interface TransformationItem {
  text: string;
  type: "priority" | "other" | "hexaware";
  timeline: string;
  bundle: "B1" | "B2" | "B3";
}

const transformationData: TransformationItem[] = [
  // B3 - Cloud
  { text: "Tensai Ops Insight Dashboard", type: "hexaware", timeline: "Transition", bundle: "B3" },
  { text: "Container Platform", type: "priority", timeline: "Year 1", bundle: "B3" },
  { text: "FinOps", type: "other", timeline: "Year 1", bundle: "B3" },
  { text: "On Prem to Cloud Migration", type: "other", timeline: "Year 1 to Year 2", bundle: "B3" },
  { text: "Everything as Code", type: "other", timeline: "Year 1", bundle: "B3" },
  { text: "Migrate Business Apps to PaaS or SaaS", type: "other", timeline: "Year 2 to Year 3-5", bundle: "B3" },
  
  // B2 - Others (Hosting, SD, EUC, UCC)
  { text: "JML Automation", type: "hexaware", timeline: "Transition", bundle: "B2" },
  { text: "3rd Party Apps patching - Patch My PC", type: "hexaware", timeline: "Transition", bundle: "B2" },
  { text: "AI Call Summarization", type: "hexaware", timeline: "Transition", bundle: "B2" },
  { text: "HappySignals - Experience Measurement", type: "hexaware", timeline: "Transition", bundle: "B2" },
  { text: "ACD/IVR with Sentiment Analytics - AWS Connect", type: "hexaware", timeline: "Transition", bundle: "B2" },
  { text: "Enhance CyberArk PAM", type: "priority", timeline: "Year 1", bundle: "B2" },
  { text: "Global DDoS and WAF", type: "other", timeline: "Year 1", bundle: "B2" },
  { text: "Improve DRA & NexThink", type: "other", timeline: "Transition to Year 1", bundle: "B2" },
  { text: "Vending Machines", type: "hexaware", timeline: "Transition to Year 1", bundle: "B2" },
  { text: "Move to Modern Management", type: "priority", timeline: "Year 1", bundle: "B2" },
  { text: "Network Segmentation", type: "priority", timeline: "Year 1", bundle: "B2" },
  { text: "Deploy Unified Observability", type: "other", timeline: "Year 1", bundle: "B2" },
  { text: "Rubrik Backup and Recovery", type: "other", timeline: "Year 1 to Year 2", bundle: "B2" },
  { text: "ServiceNow Enhancements", type: "other", timeline: "Year 1", bundle: "B2" },
  { text: "Mac Support", type: "other", timeline: "Year 1", bundle: "B2" },
  { text: "Centralize SSL Certificate Management", type: "other", timeline: "Year 1", bundle: "B2" },
  { text: "Replace Leapfile File Transfer", type: "other", timeline: "Year 2 to Year 3-5", bundle: "B2" },
  { text: "Spacelift & Ansible for IaC", type: "other", timeline: "Year 2 to Year 3-5", bundle: "B2" },
  { text: "BCP Resilient Identity Platform", type: "other", timeline: "Year 2", bundle: "B2" },
  { text: "IT Crisis Management", type: "other", timeline: "Year 2", bundle: "B2" },
  { text: "Passwordless Authentication", type: "other", timeline: "Year 2", bundle: "B2" },
  { text: "Replace VxRail", type: "other", timeline: "Year 3-5", bundle: "B2" },
  { text: "Decommission File and Print Servers", type: "other", timeline: "Year 2 to Year 3-5", bundle: "B2" },
  
  // B1 - Network
  { text: "AI Productivity Tools - KB System, Echo Docs, Ticket Analyzer", type: "hexaware", timeline: "Transition", bundle: "B1" },
  { text: "ELK Observability and Event Correlation", type: "hexaware", timeline: "Transition", bundle: "B1" },
  { text: "Agentic RCA", type: "hexaware", timeline: "Transition", bundle: "B1" },
  { text: "User Experience Management Framework", type: "hexaware", timeline: "Transition", bundle: "B1" },
  { text: "Remove VPN", type: "priority", timeline: "Year 1", bundle: "B1" },
  { text: "Remove MPLS", type: "priority", timeline: "Year 1", bundle: "B1" },
  { text: "SD WAN Replacement", type: "priority", timeline: "Year 1", bundle: "B1" },
  { text: "WiFi Refresh", type: "other", timeline: "Year 1", bundle: "B1" },
  { text: "Migrating DNS/DHCP/IPAM services to Infoblox", type: "other", timeline: "Year 1", bundle: "B1" },
];

const getTimelinePosition = (timeline: string): { start: number; end: number } => {
  switch (timeline) {
    case "Transition": return { start: 0, end: 1 };
    case "Year 1": return { start: 1, end: 2 };
    case "Year 2": return { start: 2, end: 3 };
    case "Year 3-5": return { start: 3, end: 4 };
    case "Transition to Year 1": return { start: 0.5, end: 1.5 };
    case "Year 1 to Year 2": return { start: 1.5, end: 2.5 };
    case "Year 2 to Year 3-5": return { start: 2.5, end: 3.5 };
    default: return { start: 0, end: 1 };
  }
};

const TOTAL_COLUMNS = 4;

const getTimelineMatch = (timeline: string, filterCols: number[]): boolean => {
  const pos = getTimelinePosition(timeline);
  return filterCols.some(col => col >= Math.floor(pos.start) && col <= Math.floor(pos.end));
};

export default function Transformation() {
  const [isVisible, setIsVisible] = useState(false);
  const [timelineFilter, setTimelineFilter] = useState<number[]>([0, 1, 2, 3]);
  const [typeFilter, setTypeFilter] = useState<string[]>(["priority", "other", "hexaware"]);
  const [bundleFilter, setBundleFilter] = useState<string[]>(["B1", "B2", "B3"]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const toggleTimelineFilter = (col: number) => {
    if (timelineFilter.includes(col)) {
      setTimelineFilter(timelineFilter.filter(c => c !== col));
    } else {
      setTimelineFilter([...timelineFilter, col]);
    }
  };

  const toggleTypeFilter = (type: string) => {
    if (typeFilter.includes(type)) {
      setTypeFilter(typeFilter.filter(t => t !== type));
    } else {
      setTypeFilter([...typeFilter, type]);
    }
  };

  const toggleBundleFilter = (bundle: string) => {
    if (bundleFilter.includes(bundle)) {
      setBundleFilter(bundleFilter.filter(b => b !== bundle));
    } else {
      setBundleFilter([...bundleFilter, bundle]);
    }
  };

  const isItemVisible = (item: TransformationItem) => {
    const bundleMatch = bundleFilter.includes(item.bundle);
    const typeMatch = typeFilter.includes(item.type);
    const timelineMatch = getTimelineMatch(item.timeline, timelineFilter);
    return bundleMatch && typeMatch && timelineMatch;
  };

  const resetFilters = () => {
    setTimelineFilter([0, 1, 2, 3]);
    setTypeFilter(["priority", "other", "hexaware"]);
    setBundleFilter(["B1", "B2", "B3"]);
  };

  const getTypeStyles = (type: string) => {
    switch (type) {
      case "priority":
        return { starColor: "text-red-500", textColor: "text-red-400" };
      case "hexaware":
        return { starColor: "text-yellow-400", textColor: "text-white" };
      case "other":
        return { starColor: "text-green-400", textColor: "text-green-400" };
      default:
        return { starColor: "", textColor: "text-white" };
    }
  };

  const getBundleItems = (bundle: "B1" | "B2" | "B3") => {
    return transformationData.filter(item => item.bundle === bundle);
  };

  const renderBundleRow = (bundle: "B1" | "B2" | "B3", label: string, sublabel: string, color: string, delay: number) => {
    const items = getBundleItems(bundle);
    if (!bundleFilter.includes(bundle)) return null;

    const visibleItems = items.filter(item => isItemVisible(item));
    const rowHeight = Math.max(120, visibleItems.length * 24 + 40);

    return (
      <motion.div
        key={bundle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay }}
        className="grid grid-cols-[80px_1fr] border-b border-white/10"
      >
        <div className="bg-slate-800/50 py-4 px-3 flex items-center border-r border-white/10">
          <div className="flex flex-col">
            <span className={`${color} font-semibold text-sm`}>{label}</span>
            <span className="text-white/60 text-[10px] leading-tight">{sublabel}</span>
          </div>
        </div>
        <div className="relative" style={{ minHeight: `${rowHeight}px` }}>
          {/* Grid lines */}
          <div className="absolute inset-0 grid grid-cols-4">
            {[0, 1, 2, 3].map(idx => (
              <div 
                key={idx} 
                className={`border-r border-white/5 ${!timelineFilter.includes(idx) ? 'bg-slate-900/30' : ''}`}
              />
            ))}
          </div>
          
          {/* Flowing items */}
          {isVisible && visibleItems.map((item, idx) => {
            const pos = getTimelinePosition(item.timeline);
            const styles = getTypeStyles(item.type);
            const leftPercent = (pos.start / TOTAL_COLUMNS) * 100;
            const widthPercent = ((pos.end - pos.start) / TOTAL_COLUMNS) * 100;
            const topOffset = 12 + (idx * 24);
            
            return (
              <motion.div
                key={`${bundle}-${idx}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: delay + (idx * 0.05) }}
                className="absolute flex items-center gap-1 z-10"
                style={{
                  left: `${leftPercent}%`,
                  width: `${widthPercent}%`,
                  top: `${topOffset}px`,
                }}
              >
                <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800/60 backdrop-blur-sm">
                  <Star className={`w-3 h-3 ${styles.starColor} fill-current flex-shrink-0`} />
                  <span className={`text-[10px] whitespace-nowrap ${styles.textColor}`}>{item.text}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    );
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
            src={heroBanner} 
            alt="Transformation Banner" 
            className="absolute inset-0 w-full h-full object-cover"
            data-testid="img-transformation-banner"
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
                className="text-sm font-medium text-purple-400 tracking-widest uppercase mb-4"
                data-testid="text-page-subtitle"
              >
                Strategic Roadmap
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="font-display font-light text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-lg mb-4"
                data-testid="text-page-title"
              >
                Transformation
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
              >
                Driving R&Co towards future-ready IT capabilities
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Description Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 text-muted-foreground"
        >
          <p className="text-sm md:text-base leading-relaxed mb-4">
            Based on the list of transformations provided by R&Co. and insights gathered from RFP data, we have developed a high level understanding of the objectives and plans for each transformation area. The graphic below provides a summarized view of all transformations, categorized into four distinct time blocks:
          </p>
          <ul className="list-disc list-inside text-sm md:text-base mb-4 ml-4 space-y-1">
            <li>Transition</li>
            <li>Year 1 (6-12 Months)</li>
            <li>Year 2</li>
            <li>Year 3-5</li>
          </ul>
          <p className="text-sm md:text-base leading-relaxed mb-4">
            This classification is based on the priority/urgency of each transformation, its dependencies on BAU (Business-As-Usual) operations, and other factors such as timelines. Recognizing the number of parallel streams during the transition phase, we recommend prioritizing and advancing certain transformations accordingly.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            The list also includes a few transformations beyond the provided list, which we recommend being incorporated into the base proposal (such as AI productivity solutions, AI RCA and agent resolvers).
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mb-6 bg-slate-900/50 border border-white/10 rounded-xl p-4"
        >
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-white">Filters</span>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={resetFilters}
              className="ml-auto text-xs text-muted-foreground hover:text-white"
              data-testid="button-reset-filters"
            >
              Reset All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <span className="text-xs text-muted-foreground mb-2 block">Timeline</span>
              <div className="flex flex-wrap gap-1">
                {timelineColumns.map((col, idx) => (
                  <Badge
                    key={col}
                    variant={timelineFilter.includes(idx) ? "default" : "outline"}
                    className={`cursor-pointer text-[10px] ${
                      timelineFilter.includes(idx) 
                        ? "bg-purple-600 hover:bg-purple-700" 
                        : "hover:bg-purple-600/20"
                    }`}
                    onClick={() => toggleTimelineFilter(idx)}
                    data-testid={`filter-timeline-${idx}`}
                  >
                    {col}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs text-muted-foreground mb-2 block">Transition Type</span>
              <div className="flex flex-wrap gap-1">
                <Badge
                  variant={typeFilter.includes("priority") ? "default" : "outline"}
                  className={`cursor-pointer text-[10px] ${
                    typeFilter.includes("priority") 
                      ? "bg-red-600 hover:bg-red-700" 
                      : "hover:bg-red-600/20 text-red-400 border-red-400/50"
                  }`}
                  onClick={() => toggleTypeFilter("priority")}
                  data-testid="filter-type-priority"
                >
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  Priority Requested
                </Badge>
                <Badge
                  variant={typeFilter.includes("other") ? "default" : "outline"}
                  className={`cursor-pointer text-[10px] ${
                    typeFilter.includes("other") 
                      ? "bg-green-600 hover:bg-green-700" 
                      : "hover:bg-green-600/20 text-green-400 border-green-400/50"
                  }`}
                  onClick={() => toggleTypeFilter("other")}
                  data-testid="filter-type-other"
                >
                  Other Requested
                </Badge>
                <Badge
                  variant={typeFilter.includes("hexaware") ? "default" : "outline"}
                  className={`cursor-pointer text-[10px] ${
                    typeFilter.includes("hexaware") 
                      ? "bg-yellow-600 hover:bg-yellow-700" 
                      : "hover:bg-yellow-600/20 text-yellow-400 border-yellow-400/50"
                  }`}
                  onClick={() => toggleTypeFilter("hexaware")}
                  data-testid="filter-type-hexaware"
                >
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  Hexaware Proposed
                </Badge>
              </div>
            </div>

            <div>
              <span className="text-xs text-muted-foreground mb-2 block">Bundles</span>
              <div className="flex flex-wrap gap-1">
                <Badge
                  variant={bundleFilter.includes("B3") ? "default" : "outline"}
                  className={`cursor-pointer text-[10px] ${
                    bundleFilter.includes("B3") 
                      ? "bg-blue-600 hover:bg-blue-700" 
                      : "hover:bg-blue-600/20 text-blue-400 border-blue-400/50"
                  }`}
                  onClick={() => toggleBundleFilter("B3")}
                  data-testid="filter-bundle-cloud"
                >
                  B3 - Cloud
                </Badge>
                <Badge
                  variant={bundleFilter.includes("B2") ? "default" : "outline"}
                  className={`cursor-pointer text-[10px] ${
                    bundleFilter.includes("B2") 
                      ? "bg-purple-600 hover:bg-purple-700" 
                      : "hover:bg-purple-600/20 text-purple-400 border-purple-400/50"
                  }`}
                  onClick={() => toggleBundleFilter("B2")}
                  data-testid="filter-bundle-others"
                >
                  B2 - Others
                </Badge>
                <Badge
                  variant={bundleFilter.includes("B1") ? "default" : "outline"}
                  className={`cursor-pointer text-[10px] ${
                    bundleFilter.includes("B1") 
                      ? "bg-green-600 hover:bg-green-700" 
                      : "hover:bg-green-600/20 text-green-400 border-green-400/50"
                  }`}
                  onClick={() => toggleBundleFilter("B1")}
                  data-testid="filter-bundle-network"
                >
                  B1 - Network
                </Badge>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ScrollArea className="w-full">
            <div className="min-w-[1000px] bg-gradient-to-br from-slate-900/80 to-slate-950/90 rounded-xl border border-white/10 overflow-hidden">
              <div className="grid grid-cols-[80px_1fr]">
                <div className="bg-slate-800/80 py-3 px-2 border-r border-white/10"></div>
                <div className="grid grid-cols-4">
                  {timelineColumns.map((col, idx) => (
                    <motion.div
                      key={col}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: timelineFilter.includes(idx) ? 1 : 0.3, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * idx }}
                      className={`py-3 px-2 text-center text-sm font-medium border-b border-white/10 ${
                        idx === 0 ? "bg-blue-600/80 text-white" :
                        idx === 1 ? "bg-teal-500/80 text-white" :
                        idx === 2 ? "bg-blue-500/80 text-white" :
                        "bg-indigo-500/80 text-white"
                      }`}
                    >
                      {col}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative">
                {renderBundleRow("B3", "B3", "Cloud", "text-blue-400", 0.3)}
                {renderBundleRow("B2", "B2", "Others (Hosting, SD, EUC, UCC)", "text-purple-400", 0.5)}
                {renderBundleRow("B1", "B1", "Network", "text-green-400", 0.7)}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                className="h-3 bg-gradient-to-r from-cyan-400 via-blue-400 to-slate-500 mx-4 my-4 rounded-full"
              />
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.4 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-8 text-sm"
          >
            <span className="text-muted-foreground font-medium">Legend</span>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-red-500 fill-red-500" />
              <span className="text-red-400">Priority Requested Transformations</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-green-400 fill-green-400" />
              <span className="text-green-400">Other Requested Transformations</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-white">Hexaware Proposed and Priced</span>
            </div>
          </motion.div>
        </motion.div>
        </main>
      </div>
    </PageTransition>
  );
}
