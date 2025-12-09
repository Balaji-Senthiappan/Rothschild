import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { PageTransition } from "@/components/skeleton";
import { 
  ArrowLeftRight, 
  Search, 
  Handshake, 
  Fingerprint, 
  Settings,
  Calendar,
  Shuffle,
  Users,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Cog,
  FileText,
  Network,
  Star,
  ArrowLeft,
  Home
} from "lucide-react";
import bannerImage from "@assets/Hexaware-Transportation-And-Logistics-Road-Travel_1765220571879.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface TimelineBarProps {
  start: number;
  end: number;
  label: string;
  color: string;
  isChevron?: boolean;
  chevronColor?: string;
  delay?: number;
  isExpanded: boolean;
  labelRight?: string;
  hasCheck?: boolean;
  twoLine?: boolean;
  secondLine?: string;
}

const TimelineBar = ({ 
  start, 
  end, 
  label, 
  color, 
  isChevron = false,
  chevronColor,
  delay = 0,
  isExpanded,
  labelRight,
  hasCheck,
  twoLine = false,
  secondLine
}: TimelineBarProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isExpanded ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ 
            duration: 0.4, 
            delay: isExpanded ? delay : 0,
            ease: "easeOut"
          }}
          style={{ 
            position: 'absolute',
            left: `${(start / 5) * 100}%`, 
            width: isChevron ? `calc(${((end - start) / 5) * 100}% - 10px)` : `${((end - start) / 5) * 100}%`,
            top: '2px',
            bottom: '2px',
            transformOrigin: 'left center'
          }}
          className={`${color} ${isChevron ? 'rounded-l' : 'rounded'} text-[10px] text-white flex ${twoLine ? 'flex-col' : ''} items-center ${labelRight ? 'justify-between' : 'justify-center'} px-2 overflow-hidden cursor-pointer`}
        >
          {twoLine ? (
            <>
              <span className="font-medium leading-tight truncate">{label}</span>
              {secondLine && <span className="text-white/80 text-[8px] leading-tight truncate">{secondLine}</span>}
            </>
          ) : (
            <>
              <span className="truncate">{label}</span>
              {labelRight && (
                <span className="truncate flex items-center gap-1">
                  {labelRight}
                  {hasCheck && <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0" />}
                </span>
              )}
              {!labelRight && hasCheck && <CheckCircle2 className="w-3 h-3 ml-1 text-green-400 flex-shrink-0" />}
            </>
          )}
        </motion.div>
      </TooltipTrigger>
      <TooltipContent side="top" className="bg-gray-900 text-white border-gray-700">
        <p className="text-xs font-medium">{label}</p>
      </TooltipContent>
    </Tooltip>
  );
};

const ChevronArrow = ({ 
  position, 
  color, 
  delay, 
  isExpanded,
  size = 10
}: { 
  position: number; 
  color: string; 
  delay: number;
  isExpanded: boolean;
  size?: number;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={isExpanded ? { opacity: 1 } : { opacity: 0 }}
    transition={{ duration: 0.2, delay: isExpanded ? delay + 0.35 : 0 }}
    className={`absolute top-1/2 -translate-y-1/2 w-0 h-0`}
    style={{ 
      left: `calc(${position}% - ${size}px)`,
      borderTop: `${size}px solid transparent`,
      borderBottom: `${size}px solid transparent`,
      borderLeft: `${size}px solid`,
      borderLeftColor: color
    }}
  />
);

const QualityGate = ({ 
  position, 
  delay, 
  isExpanded,
  gateNumber
}: { 
  position: number; 
  delay: number;
  isExpanded: boolean;
  gateNumber: 1 | 2 | 3 | 4;
}) => {
  const colors = {
    1: "text-yellow-400",
    2: "text-orange-400",
    3: "text-pink-400",
    4: "text-green-400"
  };
  
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isExpanded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.2, delay: isExpanded ? delay + 0.4 : 0 }}
          className={`absolute top-1/2 -translate-y-1/2 z-10 ${colors[gateNumber]}`}
          style={{ 
            left: `calc(${position}% - 5px)`,
          }}
        >
          <Star className="w-[10px] h-[10px] fill-current" />
        </motion.div>
      </TooltipTrigger>
      <TooltipContent side="top" className="bg-gray-900 text-white border-gray-700">
        <p className="text-xs font-medium">Quality Gate {gateNumber}</p>
      </TooltipContent>
    </Tooltip>
  );
};

const principles = [
  {
    number: "01",
    title: "Minimal Business Disruption",
    icon: ArrowLeftRight,
    bgColor: "bg-gradient-to-br from-indigo-600 to-indigo-800",
    borderColor: "border-indigo-500/30",
  },
  {
    number: "02",
    title: "Low-Risk Approach",
    icon: Search,
    bgColor: "bg-gradient-to-br from-indigo-700 to-purple-800",
    borderColor: "border-purple-500/30",
  },
  {
    number: "03",
    title: "Respect for SME Bandwidth",
    icon: Handshake,
    bgColor: "bg-gradient-to-br from-purple-500 to-purple-700",
    borderColor: "border-purple-400/30",
  },
  {
    number: "04",
    title: "Gen AI Driven Efficient Knowledge Management",
    icon: Fingerprint,
    bgColor: "bg-gradient-to-br from-gray-700 to-gray-900",
    borderColor: "border-gray-500/30",
  },
  {
    number: "05",
    title: "Effective Governance",
    icon: Settings,
    bgColor: "bg-gradient-to-br from-gray-400 to-gray-600",
    borderColor: "border-gray-400/30",
  },
];

const keyHighlights = [
  {
    icon: Calendar,
    title: "3-Month Transition Timeline",
    description: "Given the scale and size expected to transition, we propose completion in 3 months, ensuring a de-risked transition and well-paced organization change management execution.",
  },
  {
    icon: Shuffle,
    title: "Flexible Staggered Start Model",
    description: "Our recommendation is a staggered start for tracks/services depending on complexity, with flexibility to accommodate constraints like pacing out change management for enhanced business comfort.",
  },
  {
    icon: Users,
    title: "Collaborative Planning Approach",
    description: "We intend to use our approach and model for reference, then work collaboratively with you during subsequent stages to finalize the detailed plan with exact dates, activities, and cut-over plan.",
  },
];

const timelineMonths = ["May", "June", "July", "August", "Year 1"];

const transitionEnablementRows = [
  { 
    activity: "Governance", 
    bars: [
      { start: 0, end: 0.5, label: "OCM, Tools & Plan Build", color: "bg-gray-500" },
      { start: 0.5, end: 4, label: "Transition tools, governance & reporting, OCM inputs", color: "bg-gray-400" },
    ]
  },
  { 
    activity: "SME Ramp Up", 
    bars: [
      { start: 0, end: 0.25, label: "TPMO Launch", color: "bg-gray-500" },
      { start: 0.25, end: 3, label: "SME Ramp up", color: "bg-gray-400" },
    ]
  },
  { 
    activity: "Access for SME", 
    bars: [
      { start: 0, end: 0.5, label: "Preparation", color: "bg-gray-500" },
      { start: 0.5, end: 3, label: "Read only", labelRight: "Admin Level", color: "bg-gray-400", hasCheck: true },
    ]
  },
  { 
    activity: "Logistics", 
    bars: [
      { start: 0, end: 0.5, label: "Preparation", color: "bg-gray-500" },
      { start: 0.5, end: 1.5, label: "ODC Enablement", color: "bg-gray-400" },
    ]
  },
];

const servicesTransitionRows = [
  { bundle: "B1", service: "Managed Network Service", trackEnd: 0.5, kaStart: 0.5, kaEnd: 1.5, fsStart: 1.5, fsEnd: 2.25, rsStart: 2.25, rsEnd: 3 },
  { bundle: "B2", service: "Cloud", trackEnd: 0.5, kaStart: 0.75, kaEnd: 1.5, fsStart: 1.5, fsEnd: 2.25, rsStart: 2.25, rsEnd: 3 },
  { bundle: "B2", service: "SD & On-site Support", trackEnd: 0.5, kaStart: 0.5, kaEnd: 1.5, fsStart: 1.5, fsEnd: 2.25, rsStart: 2.25, rsEnd: 3 },
  { bundle: "B2", service: "End User Computing", trackEnd: 0.5, kaStart: 0.5, kaEnd: 1.5, fsStart: 1.5, fsEnd: 2.25, rsStart: 2.25, rsEnd: 3 },
  { bundle: "B2", service: "Storage & Hosting", trackEnd: 0.5, kaStart: 0.5, kaEnd: 1.5, fsStart: 1.5, fsEnd: 2.25, rsStart: 2.25, rsEnd: 3 },
  { bundle: "B3", service: "Unified Comms", trackEnd: 0.5, kaStart: 1, kaEnd: 1.5, fsStart: 1.5, fsEnd: 2.25, rsStart: 2.25, rsEnd: 3 },
  { bundle: "B3", service: "Security", trackEnd: 0.5, kaStart: 0.5, kaEnd: 1.5, fsStart: 1.5, fsEnd: 2.25, rsStart: 2.25, rsEnd: 3 },
  { bundle: "B3", service: "IAM", trackEnd: 0.5, kaStart: 1, kaEnd: 1.5, fsStart: 1.5, fsEnd: 2.25, rsStart: 2.25, rsEnd: 3 },
  { bundle: "B3", service: "SIAM", trackEnd: 0.5, kaStart: 0.5, kaEnd: 1.5, fsStart: 1.5, fsEnd: 2.25, rsStart: 2.25, rsEnd: 3 },
];

const operationalRows = [
  { activity: "AI Based Tools", mobiliseEnd: 0.5, toolsStart: 0.5, toolsEnd: 3, tools: "Contact Center Co-Pilot, GenAI KB System, Voice Co-Pilot, EchoDocs, AI Ticket Analyzer" },
  { activity: "User Experience", mobiliseEnd: 0.5, toolsStart: 0.5, toolsEnd: 3, tools: "AugVue, HappySignals" },
  { activity: "Other Enablers", mobiliseEnd: 0.5, toolsStart: 0.5, toolsEnd: 3, tools: "Tensai OpsInsight, Patch My PC, AWS Connect, ELK" },
];

const contractsRows = [
  { activity: "3rd Party Contracts", gatherEnd: 0.5, dueDiligenceStart: 0.5, dueDiligenceEnd: 3, dueDiligence: "Due diligence, Transfer Planning, Roadmaps, Contracting", implStart: 3, implEnd: 4 },
  { activity: "RFP Transformations", highlightStart: 3, highlightEnd: 5, highlight: "Seven Priority Transformations" },
];

function TransitionPlanTimeline() {
  const [expandedSections, setExpandedSections] = useState({
    transitionEnablement: true,
    servicesTransition: false,
    operationalTransformation: false,
    contractsRfp: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="mt-12"
    >
      <h3 className="font-display font-light text-lg md:text-xl text-foreground mb-4 text-center" data-testid="text-timeline-heading">
        Transition Plan Timeline
      </h3>
      
      {/* Mobile hint */}
      <p className="text-xs text-muted-foreground mb-4 md:hidden flex items-center gap-2">
        <ChevronRight className="w-3 h-3" />
        Scroll horizontally to view full timeline
      </p>
      
      <ScrollArea className="w-full">
        <div className="min-w-[900px] bg-gradient-to-br from-white/[0.03] to-white/[0.01] rounded-xl border border-white/10 p-4 md:p-6">
          
          <div className="grid grid-cols-[180px_1fr] gap-2 mb-4 border-b border-white/10 pb-3">
            <div></div>
            <div className="grid grid-cols-5 gap-1">
              {timelineMonths.map((month) => (
                <div key={month} className="text-center text-sm text-foreground font-medium py-2 bg-white/5 rounded-lg border border-white/10">
                  {month}
                </div>
              ))}
            </div>
          </div>
          
          {/* Transition Enablement Section */}
          <div className="space-y-1 mb-6">
            <button 
              onClick={() => toggleSection('transitionEnablement')}
              className="w-full flex items-center justify-between gap-2 py-2 px-2 bg-blue-900/30 rounded-lg border-l-4 border-blue-500 hover:bg-blue-900/40 transition-colors cursor-pointer"
              data-testid="button-toggle-transition-enablement"
            >
              <div className="flex items-center gap-2">
                <Network className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">Transition Enablement</span>
              </div>
              {expandedSections.transitionEnablement ? (
                <ChevronUp className="w-4 h-4 text-blue-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-blue-400" />
              )}
            </button>
            <AnimatePresence>
              {expandedSections.transitionEnablement && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {transitionEnablementRows.map((row, idx) => (
                    <div key={idx} className="grid grid-cols-[180px_1fr] gap-2 py-1">
                      <div className="text-xs text-muted-foreground pl-6 flex items-center">{row.activity}</div>
                      <div className="relative h-6 bg-white/5 rounded">
                        {row.bars.map((bar, bi) => (
                          <TimelineBar
                            key={bi}
                            start={bar.start}
                            end={bar.end}
                            label={bar.label}
                            color={bar.color}
                            delay={bar.start * 0.15}
                            isExpanded={expandedSections.transitionEnablement}
                            labelRight={bar.labelRight}
                            hasCheck={bar.hasCheck}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                  {/* SLA Reporting - Gray Chevron */}
                  <div className="grid grid-cols-[180px_1fr] gap-2 py-1">
                    <div className="text-xs text-muted-foreground pl-6 flex items-center">SLA Reporting</div>
                    <div className="relative h-6 bg-white/5 rounded flex items-center">
                      <TimelineBar
                        start={3}
                        end={4}
                        label="SLA Reporting"
                        color="bg-gray-500"
                        isChevron={true}
                        delay={3 * 0.15}
                        isExpanded={expandedSections.transitionEnablement}
                      />
                      <ChevronArrow position={(4 / 5) * 100} color="#6b7280" delay={3 * 0.15} isExpanded={expandedSections.transitionEnablement} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Services Transition Section */}
          <div className="space-y-1 mb-6">
            <button 
              onClick={() => toggleSection('servicesTransition')}
              className="w-full flex items-center justify-between gap-2 py-2 px-2 bg-indigo-900/30 rounded-lg border-l-4 border-indigo-500 hover:bg-indigo-900/40 transition-colors cursor-pointer"
              data-testid="button-toggle-services-transition"
            >
              <div className="flex items-center gap-2">
                <Cog className="w-5 h-5 text-indigo-400" />
                <span className="text-sm font-medium text-indigo-300">Services Transition</span>
                <span className="text-xs text-indigo-400/70">(RUN + Change + In-flight projects)</span>
              </div>
              {expandedSections.servicesTransition ? (
                <ChevronUp className="w-4 h-4 text-indigo-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-indigo-400" />
              )}
            </button>
            <AnimatePresence>
              {expandedSections.servicesTransition && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {servicesTransitionRows.map((row, idx) => (
                    <div key={idx} className="grid grid-cols-[180px_1fr] gap-2 py-1">
                      <div className="text-xs text-muted-foreground pl-2 flex items-center gap-2">
                        <span className="px-2 py-1 bg-indigo-500/30 text-indigo-200 rounded text-[11px] font-semibold border border-indigo-400/30">{row.bundle}</span>
                        <span className="truncate">{row.service}</span>
                      </div>
                      <div className="relative h-6 bg-white/5 rounded flex items-center">
                        <TimelineBar start={0} end={row.trackEnd} label="Track Planning" color="bg-gray-500" delay={0} isExpanded={expandedSections.servicesTransition} />
                        <QualityGate position={(row.trackEnd / 5) * 100} delay={row.trackEnd * 0.15} isExpanded={expandedSections.servicesTransition} gateNumber={1} />
                        <TimelineBar start={row.kaStart} end={row.kaEnd} label="Knowledge Acquisition" color="bg-blue-600" delay={row.kaStart * 0.15} isExpanded={expandedSections.servicesTransition} />
                        <QualityGate position={(row.kaEnd / 5) * 100} delay={row.kaEnd * 0.15} isExpanded={expandedSections.servicesTransition} gateNumber={2} />
                        <TimelineBar start={row.fsStart} end={row.fsEnd} label="Forward Shadow" color="bg-blue-800" delay={row.fsStart * 0.15} isExpanded={expandedSections.servicesTransition} />
                        <QualityGate position={(row.fsEnd / 5) * 100} delay={row.fsEnd * 0.15} isExpanded={expandedSections.servicesTransition} gateNumber={3} />
                        <TimelineBar start={row.rsStart} end={row.rsEnd} label="Reverse Shadow" color="bg-gray-600" delay={row.rsStart * 0.15} isExpanded={expandedSections.servicesTransition} />
                        <QualityGate position={(row.rsEnd / 5) * 100} delay={row.rsEnd * 0.15} isExpanded={expandedSections.servicesTransition} gateNumber={4} />
                      </div>
                    </div>
                  ))}
                  {/* Hypercare */}
                  <div className="grid grid-cols-[180px_1fr] gap-2 py-1">
                    <div className="text-xs text-muted-foreground pl-6 flex items-center">Hypercare</div>
                    <div className="relative h-8 bg-white/5 rounded flex items-center">
                      <TimelineBar start={3} end={4.5} label="Hypercare (6 weeks)" secondLine="Tools teams retained for troubleshooting" color="bg-green-600" isChevron={true} delay={3 * 0.15} isExpanded={expandedSections.servicesTransition} twoLine={true} />
                      <ChevronArrow position={(4.5 / 5) * 100} color="#16a34a" delay={3 * 0.15} isExpanded={expandedSections.servicesTransition} size={14} />
                    </div>
                  </div>
                  {/* Stabilisation */}
                  <div className="grid grid-cols-[180px_1fr] gap-2 py-1">
                    <div className="text-xs text-muted-foreground pl-6 flex items-center">Stabilisation</div>
                    <div className="relative h-8 bg-white/5 rounded flex items-center">
                      <TimelineBar start={3} end={5} label="Stabilisation (12 months)" secondLine="Daily Stand ups, surge resources retained" color="bg-green-600" isChevron={true} delay={3 * 0.15} isExpanded={expandedSections.servicesTransition} twoLine={true} />
                      <ChevronArrow position={100} color="#16a34a" delay={3 * 0.15} isExpanded={expandedSections.servicesTransition} size={14} />
                    </div>
                  </div>
                  
                  {/* Quality Gates Legend */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-4 pt-3 border-t border-white/10"
                  >
                    <div className="flex flex-wrap items-center gap-4 text-xs">
                      <span className="text-muted-foreground font-medium">Quality Gates:</span>
                      <div className="flex items-center gap-1.5">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-yellow-400">Quality Gate 1 - Planning</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Star className="w-3 h-3 text-orange-400 fill-orange-400" />
                        <span className="text-orange-400">Quality Gate 2 - Knowledge Acquisition</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Star className="w-3 h-3 text-pink-400 fill-pink-400" />
                        <span className="text-pink-400">Quality Gate 3 - Forward Shadow</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Star className="w-3 h-3 text-green-400 fill-green-400" />
                        <span className="text-green-400">Quality Gate 4 - Reverse Shadow</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Operational Transformation Section */}
          <div className="space-y-1 mb-6">
            <button 
              onClick={() => toggleSection('operationalTransformation')}
              className="w-full flex items-center justify-between gap-2 py-2 px-2 bg-purple-900/30 rounded-lg border-l-4 border-purple-500 hover:bg-purple-900/40 transition-colors cursor-pointer"
              data-testid="button-toggle-operational-transformation"
            >
              <div className="flex items-center gap-2">
                <Cog className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-medium text-purple-300">Operational Transformation</span>
              </div>
              {expandedSections.operationalTransformation ? (
                <ChevronUp className="w-4 h-4 text-purple-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-purple-400" />
              )}
            </button>
            <AnimatePresence>
              {expandedSections.operationalTransformation && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {operationalRows.map((row, idx) => (
                    <div key={idx} className="grid grid-cols-[180px_1fr] gap-2 py-1">
                      <div className="text-xs text-muted-foreground pl-6 flex items-center">{row.activity}</div>
                      <div className="relative h-6 bg-white/5 rounded flex items-center">
                        <TimelineBar start={0} end={row.mobiliseEnd} label="Mobilise" color="bg-purple-600" delay={0} isExpanded={expandedSections.operationalTransformation} />
                        <TimelineBar start={row.toolsStart} end={row.toolsEnd} label={row.tools} color="bg-purple-800/60" isChevron={true} delay={row.toolsStart * 0.15} isExpanded={expandedSections.operationalTransformation} />
                        <ChevronArrow position={(row.toolsEnd / 5) * 100} color="rgba(107, 33, 168, 0.6)" delay={row.toolsStart * 0.15} isExpanded={expandedSections.operationalTransformation} />
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Contracts & RFP Transformation Section */}
          <div className="space-y-1 mb-4">
            <button 
              onClick={() => toggleSection('contractsRfp')}
              className="w-full flex items-center justify-between gap-2 py-2 px-2 bg-emerald-900/30 rounded-lg border-l-4 border-emerald-500 hover:bg-emerald-900/40 transition-colors cursor-pointer"
              data-testid="button-toggle-contracts-rfp"
            >
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-300">Contracts & RFP Transformation</span>
              </div>
              {expandedSections.contractsRfp ? (
                <ChevronUp className="w-4 h-4 text-emerald-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-emerald-400" />
              )}
            </button>
            <AnimatePresence>
              {expandedSections.contractsRfp && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {/* 3rd Party Contracts */}
                  <div className="grid grid-cols-[180px_1fr] gap-2 py-1">
                    <div className="text-xs text-muted-foreground pl-6 flex items-center">3rd Party Contracts</div>
                    <div className="relative h-6 bg-white/5 rounded flex items-center">
                      <TimelineBar start={0} end={0.5} label="Gather Data" color="bg-gray-500" delay={0} isExpanded={expandedSections.contractsRfp} />
                      <TimelineBar start={0.5} end={3} label="Due diligence, Transfer Planning, Roadmaps, Contracting" color="bg-gray-600" delay={0.5 * 0.15} isExpanded={expandedSections.contractsRfp} />
                      <TimelineBar start={3} end={4} label="Implementation & Management" color="bg-gray-500" isChevron={true} delay={3 * 0.15} isExpanded={expandedSections.contractsRfp} />
                      <ChevronArrow position={(4 / 5) * 100} color="#6b7280" delay={3 * 0.15} isExpanded={expandedSections.contractsRfp} />
                    </div>
                  </div>
                  {/* RFP Transformations */}
                  <div className="grid grid-cols-[180px_1fr] gap-2 py-1">
                    <div className="text-xs text-muted-foreground pl-6 flex items-center">RFP Transformations</div>
                    <div className="relative h-8 bg-white/5 rounded flex items-center">
                      <TimelineBar start={3} end={5} label="Seven Priority Transformations" color="bg-green-600" isChevron={true} delay={3 * 0.15} isExpanded={expandedSections.contractsRfp} />
                      <ChevronArrow position={100} color="#16a34a" delay={3 * 0.15} isExpanded={expandedSections.contractsRfp} size={14} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10 text-[10px]">
            <div className="flex items-center gap-1.5">
              <span className="text-muted-foreground font-medium">B1/2/3</span>
              <span className="text-muted-foreground/60">Bundle</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-3 bg-gray-500 rounded" />
              <span className="text-muted-foreground">Track planning</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-3 bg-blue-600 rounded" />
              <span className="text-muted-foreground">Knowledge Acquisition</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-3 bg-blue-800 rounded" />
              <span className="text-muted-foreground">Forward Shadow</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-3 bg-gray-600 rounded" />
              <span className="text-muted-foreground">Reverse Shadow</span>
            </div>
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </motion.div>
  );
}

const qualityGatesData = [
  {
    gate: 1,
    title: "Quality Gate 1",
    subtitle: "End of Planning Phase",
    color: "yellow",
    deliverables: [
      { name: "Transition Plan Document", purpose: "This document provides an overview of Hexaware's overall approach to transitioning. It also describes the overall objectives and guiding principles." },
      { name: "KT Knowledge Map", purpose: "Captures all SME details and knowledge areas." },
      { name: "Transition Schedule (Microsoft Project Plan)", purpose: "Captures the end-to-end activities with milestones owners and tentative timelines." },
    ]
  },
  {
    gate: 2,
    title: "Quality Gate 2",
    subtitle: "End of Knowledge Transfer Phase",
    color: "orange",
    deliverables: [
      { name: "Transition Responsibility Document", purpose: "Captures all responsibility matrices of resources deployed during respective phases." },
      { name: "Quality Index Checklist", purpose: "Measures the compliance index through weightage and rating and view the overall health status of the transition." },
      { name: "Systems Overview Document", purpose: "Captures the tools and systems across infrastructure and application estate." },
      { name: "High-Level Technical Specification", purpose: "Provides a high-level technical view of the infrastructure and application environment." },
      { name: "Run Book", purpose: "Run book containing all existing SOPs, KEDB, process, alert, and incident triaging flows." },
      { name: "Playback PowerPoint Presentation", purpose: "Playback to the current R&Co staff on the knowledge gained during this phase to get their sign-off." },
      { name: "Knowledge Repository", purpose: "Creation of Knowledge repository." },
      { name: "Updated Quality Index Checklist", purpose: "Measuring the compliance index through weightage and rating and have an overall health status of the phase." },
    ]
  },
  {
    gate: 3,
    title: "Quality Gate 3",
    subtitle: "End of Forward Shadow Phase",
    color: "pink",
    deliverables: [
      { name: "Systems Overview Document (Final)", purpose: "Capturing tacit knowledge; internal review." },
      { name: "Transition KPI Statistics Report", purpose: "Documenting the KPIs achieved during this stage of the transition and build improvement plans." },
      { name: "Playback PowerPoint Presentation", purpose: "Required to playback our understanding after the Shadow Support phase." },
      { name: "Updated Quality Index Checklist", purpose: "Measuring the compliance index through weightage and rating and have an overall health status of the phase." },
    ]
  },
  {
    gate: 4,
    title: "Quality Gate 4",
    subtitle: "End of Reverse Shadow & Overall Transition",
    color: "green",
    deliverables: [
      { name: "Transition Phase End Closure Report", purpose: "Details of metrics, best practices, lessons learned, and summary information with respect to transition." },
      { name: "Transition KPI Statistics Report", purpose: "To generate a report in which the KPIs achieved are documented over the transition period." },
      { name: "Updated Quality Index Checklist", purpose: "Measuring the compliance index through weightage and rating and have an overall health status of the phase." },
      { name: "Issue Management Tracker", purpose: "Logging and tracking issues in the complete transition cycle." },
      { name: "Risk Management Tracker", purpose: "Logging and tracking risks in the complete transition cycle and updating the mitigation procedures." },
      { name: "Runbook Sign-off", purpose: "Getting sign-off on the runbook from R&Co." },
      { name: "Playback PowerPoint Presentation", purpose: "Required to playback the understanding after the end of the transition phase and before cutover to BAU." },
    ]
  }
];

function QualityGatesSection() {
  const [expandedGate, setExpandedGate] = useState<number | null>(null);
  
  const colorClasses = {
    yellow: {
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/30",
      hoverBorder: "hover:border-yellow-500/50",
      text: "text-yellow-400",
      star: "text-yellow-400 fill-yellow-400",
      headerBg: "bg-yellow-500/20",
    },
    orange: {
      bg: "bg-orange-500/10",
      border: "border-orange-500/30",
      hoverBorder: "hover:border-orange-500/50",
      text: "text-orange-400",
      star: "text-orange-400 fill-orange-400",
      headerBg: "bg-orange-500/20",
    },
    pink: {
      bg: "bg-pink-500/10",
      border: "border-pink-500/30",
      hoverBorder: "hover:border-pink-500/50",
      text: "text-pink-400",
      star: "text-pink-400 fill-pink-400",
      headerBg: "bg-pink-500/20",
    },
    green: {
      bg: "bg-green-500/10",
      border: "border-green-500/30",
      hoverBorder: "hover:border-green-500/50",
      text: "text-green-400",
      star: "text-green-400 fill-green-400",
      headerBg: "bg-green-500/20",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-8"
    >
      <h3 className="font-display font-light text-lg md:text-xl text-foreground mb-4 text-center" data-testid="text-quality-gates-heading">
        Quality Gates
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {qualityGatesData.map((gate) => {
          const colors = colorClasses[gate.color as keyof typeof colorClasses];
          const isExpanded = expandedGate === gate.gate;
          
          return (
            <div key={gate.gate} className="relative">
              <button
                onClick={() => setExpandedGate(isExpanded ? null : gate.gate)}
                className={`w-full p-3 rounded-lg border ${colors.bg} ${colors.border} ${colors.hoverBorder} transition-all duration-200 cursor-pointer`}
                data-testid={`button-quality-gate-${gate.gate}`}
              >
                <div className="flex items-center gap-2">
                  <Star className={`w-4 h-4 ${colors.star}`} />
                  <div className="text-left">
                    <div className={`text-sm font-medium ${colors.text}`}>Quality Gate {gate.gate}</div>
                    <div className="text-[10px] text-muted-foreground truncate">{gate.subtitle}</div>
                  </div>
                  <ChevronDown className={`w-3 h-3 ml-auto ${colors.text} transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </div>
              </button>
            </div>
          );
        })}
      </div>
      
      <AnimatePresence>
        {expandedGate !== null && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-3"
          >
            {qualityGatesData.filter(g => g.gate === expandedGate).map((gate) => {
              const colors = colorClasses[gate.color as keyof typeof colorClasses];
              return (
                <div key={gate.gate} className={`rounded-lg border ${colors.border} overflow-hidden`}>
                  <div className={`px-4 py-2 ${colors.headerBg} border-b ${colors.border}`}>
                    <div className="flex items-center gap-2">
                      <Star className={`w-4 h-4 ${colors.star}`} />
                      <span className={`font-medium ${colors.text}`}>{gate.title}</span>
                      <span className="text-xs text-muted-foreground">- {gate.subtitle}</span>
                    </div>
                  </div>
                  <div className="divide-y divide-white/5">
                    {gate.deliverables.map((item, idx) => (
                      <div key={idx} className="flex flex-col md:grid md:grid-cols-[200px_1fr] gap-1 md:gap-4 p-3 hover:bg-white/5 transition-colors">
                        <div className="text-sm font-medium text-white">{item.name}</div>
                        <div className="text-xs md:text-sm text-muted-foreground">{item.purpose}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function KeyHighlightsGrid() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.0 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      {keyHighlights.map((highlight, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
        >
          <Card className="h-full bg-gradient-to-br from-white/[0.06] via-blue-500/[0.03] to-white/[0.04] border-white/15 backdrop-blur-sm hover:border-white/30 transition-all duration-300">
            <CardContent className="p-5 h-full">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/15 flex items-center justify-center flex-shrink-0 mb-4">
                  <highlight.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-display font-light text-base text-white mb-2" data-testid={`text-highlight-title-${index}`}>
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1" data-testid={`text-highlight-desc-${index}`}>
                  {highlight.description}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function Transition() {
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
            alt="Transition Banner" 
            className="absolute inset-0 w-full h-full object-cover"
            data-testid="img-transition-banner"
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
                className="text-sm font-medium text-green-400 tracking-widest uppercase mb-4"
                data-testid="text-page-subtitle"
              >
                Implementation Path
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="font-display font-light text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-lg mb-4"
                data-testid="text-page-title"
              >
                Transition
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
              >
                A proven framework for seamless service delivery transformation
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid gap-12 md:gap-16">
        <section>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10" data-testid="text-transition-intro">
              Hexaware uses a proven transition framework which focuses on minimal service disruption and at the same time, 
              also lays the foundation for modernizing the service delivery, streamline and enhance processes.
            </p>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="font-display font-light text-xl md:text-2xl text-foreground mb-6 text-center"
            data-testid="text-principles-heading"
          >
            Our Transition Principles
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <div 
                  className={`
                    relative h-full min-h-[120px] md:min-h-[160px] lg:min-h-[180px] rounded-xl overflow-hidden
                    ${principle.bgColor}
                    border ${principle.borderColor}
                    p-3 md:p-4 lg:p-5 flex flex-col
                    transition-all duration-300
                    hover:scale-[1.02] hover:shadow-lg hover:shadow-white/10
                  `}
                  data-testid={`card-principle-${index}`}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  
                  <span className="text-xl md:text-2xl lg:text-3xl font-light text-white/80 mb-2 md:mb-3 border-b border-white/20 pb-1 md:pb-2 inline-block">
                    {principle.number}
                  </span>
                  
                  <h3 className="font-display font-light text-xs md:text-sm lg:text-base text-white leading-snug flex-1">
                    {principle.title}
                  </h3>
                  
                  <div className="mt-2 md:mt-4">
                    <principle.icon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white/70" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <TransitionPlanTimeline />
          
          <QualityGatesSection />
        </section>
        
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            className="font-display font-light text-xl md:text-2xl text-foreground mb-6 text-center"
            data-testid="text-highlights-heading"
          >
            Key Highlights
          </motion.h2>
          
          <KeyHighlightsGrid />
        </section>
      </div>
        </main>
      </div>
    </PageTransition>
  );
}
