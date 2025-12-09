import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { PageTransition } from "@/components/skeleton";
import { Button } from "@/components/ui/button";
import { 
  Monitor, 
  Laptop,
  Smartphone,
  Phone,
  MessageSquare,
  Globe,
  Mail,
  CheckCircle,
  Users,
  Zap,
  Activity,
  HeadphonesIcon,
  Play,
  Pause,
  RotateCcw,
  Brain,
  FileText,
  Briefcase,
  TicketCheck,
  HelpCircle,
  AlertTriangle,
  Server,
  Database,
  ShieldAlert,
  BarChart3,
  ArrowLeft,
  Home
} from "lucide-react";
import nexthinkLogo from "@assets/image_1765180706355.png";
import bannerImage from "@assets/Hexaware-Digital-&-Software-Date-Centre-Warehouse_1765220268839.jpg";

type WorkflowType = "proactive" | "reactive" | "infrastructure";

interface WorkflowFilter {
  id: WorkflowType;
  label: string;
  subtitle?: string;
}

interface FlowStep {
  id: string;
  label: string;
  message: string;
  icon: string;
  isDecision?: boolean;
  isHappyEnd?: boolean;
}

const workflowFilters: WorkflowFilter[] = [
  { id: "proactive", label: "Proactive \"Fix before Fail\"", subtitle: "with NexThink" },
  { id: "reactive", label: "Advanced Reactive Support" },
  { id: "infrastructure", label: "Infrastructure Alert Resolution", subtitle: "with ELK" },
];

// Workflow 1: Proactive "Fix before Fail" with NexThink
const proactiveFlowSteps = [
  {
    id: "devices",
    label: "End User Devices",
    message: "End-user devices (laptops, desktops, mobiles) are continuously monitored for health and performance issues...",
    icon: "devices",
  },
  {
    id: "nexthink",
    label: "NexThink",
    message: "NexThink performs proactive monitoring and real-time healthchecks across all connected devices...",
    icon: "nexthink",
  },
  {
    id: "report",
    label: "All is Well Report",
    message: "The system generates an 'All is Well' health report summarizing device status across the organization...",
    icon: "report",
  },
  {
    id: "decision1",
    label: "All OK?",
    message: "Decision point: Is everything functioning correctly based on the health report?",
    isDecision: true,
    icon: "decision",
  },
  {
    id: "servicenow",
    label: "ServiceNow",
    message: "Issue detected! A ticket is automatically raised in ServiceNow with full diagnostic information...",
    icon: "ticket",
  },
  {
    id: "servicedesk",
    label: "Service Desk",
    message: "Service Desk receives the ticket and uses AI-based knowledge management to attempt first-level resolution...",
    icon: "servicedesk",
  },
  {
    id: "decision2",
    label: "Resolved?",
    message: "Decision point: Was the issue successfully resolved by the Service Desk team?",
    isDecision: true,
    icon: "decision",
  },
  {
    id: "l2l3",
    label: "L2/L3 Resolver",
    message: "Complex issue escalated to Advanced L2/L3 Resolver Groups for specialized technical attention...",
    icon: "escalation",
  },
  {
    id: "routine",
    label: "Routine Operations",
    message: "All systems are healthy! Business continues with routine operations. No intervention needed.",
    isHappyEnd: true,
    icon: "routine",
  },
  {
    id: "closed",
    label: "Ticket Closed",
    message: "Issue resolved successfully! The ticket is marked as closed and documented for future reference.",
    isHappyEnd: true,
    icon: "closed",
  },
];

// Workflow 2: Advanced Reactive Support
// YES path continues straight after P1 decision, NO branches down
const reactiveFlowSteps: FlowStep[] = [
  {
    id: "user_contact",
    label: "User Contacts",
    message: "End user contacts Service Desk through Phone, Virtual Assist, Web Portal, or Email...",
    icon: "contact_channels",
  },
  {
    id: "escalated_routing",
    label: "Escalated Routing",
    message: "Request is routed and escalated to the appropriate Service Desk team...",
    icon: "routing",
  },
  {
    id: "servicedesk",
    label: "Service Desk",
    message: "Service Desk receives the request and begins initial assessment...",
    icon: "servicedesk",
  },
  {
    id: "decision1",
    label: "P1 Issue?",
    message: "Decision point: Is this a Priority 1 (critical) issue requiring immediate attention?",
    isDecision: true,
    icon: "decision",
  },
  {
    id: "notification",
    label: "Notification Sent",
    message: "P1 confirmed! Notification sent to Onsite Support Champion and stakeholders...",
    icon: "notification",
  },
  {
    id: "mim",
    label: "MIM Activated",
    message: "Major Incident Management (MIM) function is activated for coordinated response...",
    icon: "mim",
  },
  {
    id: "l2l3",
    label: "L2/L3 Resolver",
    message: "Issue handed over to L2/L3 Resolver Groups with MIM coordination...",
    icon: "escalation",
  },
  {
    id: "closed_p1",
    label: "Ticket Closed",
    message: "P1 issue resolved! Ticket closed and post-incident review scheduled.",
    icon: "closed",
  },
  {
    id: "resolver_no",
    label: "L2/L3 Resolver Group",
    message: "Non-P1 issue routed directly to L2/L3 Resolver Group for resolution...",
    isHappyEnd: true,
    icon: "escalation",
  },
  {
    id: "closed",
    label: "Ticket Closed",
    message: "Issue resolved successfully! Ticket closed and documented.",
    isHappyEnd: true,
    icon: "closed",
  },
];

// Workflow 3: Infrastructure Alert Resolution with ELK
// Script exists: YES continues straight to Automation Suite, NO goes to Service Desk with P1 decision
const infrastructureFlowSteps: FlowStep[] = [
  {
    id: "alerts_events",
    label: "Alerts/Events",
    message: "Infrastructure triggers alerts and events from servers, networks, databases, and cloud resources...",
    icon: "alert",
  },
  {
    id: "elk_monitoring",
    label: "ELK Monitoring",
    message: "ELK Stack performs element monitoring, anomaly detection, event correlation & suppression...",
    icon: "elk",
  },
  {
    id: "auto_ticket",
    label: "Auto-Ticket Creation",
    message: "Automatic ticket creation on ServiceNow based on detected alerts...",
    icon: "ticket",
  },
  {
    id: "decision1",
    label: "Script Exists?",
    message: "Decision point: Does an automation script exist for this type of alert?",
    isDecision: true,
    icon: "decision",
  },
  {
    id: "automation_suite",
    label: "Automation Suite",
    message: "Task automation, process automation, and straight-through processing handle the resolution...",
    icon: "automation",
  },
  {
    id: "resolution",
    label: "Resolution",
    message: "Issue resolved through automated remediation...",
    icon: "routine",
  },
  {
    id: "ticket_closed",
    label: "Ticket Closure",
    message: "Ticket closed with resolution notes maintained and audit trails created in ITSM.",
    icon: "closed",
  },
];

// Infrastructure branch steps (NO path from Script Exists? leads to this sub-flow)
const infrastructureBranchSteps: FlowStep[] = [
  {
    id: "servicedesk_no",
    label: "Service Desk",
    message: "No script available. Alert routed to Service Desk for manual handling...",
    icon: "servicedesk",
  },
  {
    id: "p1_decision",
    label: "P1 Issue?",
    message: "Decision point: Is this a Priority 1 (critical) issue?",
    isDecision: true,
    icon: "decision",
  },
  {
    id: "notification_infra",
    label: "Notification Sent",
    message: "P1 confirmed! Notification sent to Onsite Support Champion...",
    icon: "notification",
  },
  {
    id: "mim_infra",
    label: "MIM Activated",
    message: "Major Incident Management function activated...",
    icon: "mim",
  },
  {
    id: "l2l3_infra",
    label: "L2/L3 Resolver",
    message: "Issue handed over to L2/L3 Resolver Groups...",
    icon: "escalation",
  },
  {
    id: "closed_infra",
    label: "Ticket Closed",
    message: "Issue resolved and ticket closed.",
    icon: "closed",
  },
  {
    id: "l2l3_no_branch",
    label: "L2/L3 Resolver Group",
    message: "Non-P1 issue routed directly to L2/L3 Resolver Group...",
    icon: "escalation",
  },
];

function FlowIcon({ type, isActive, isPast, size = 40 }: { type: string; isActive: boolean; isPast: boolean; size?: number }) {
  const activeColor = isActive ? "text-white" : isPast ? "text-green-400" : "text-white/60";
  const iconSize = size * 0.45;
  
  switch(type) {
    case "devices":
      return (
        <div className={`flex gap-0.5 ${activeColor}`}>
          <Laptop style={{ width: iconSize * 0.9, height: iconSize * 0.9 }} />
          <Monitor style={{ width: iconSize * 0.9, height: iconSize * 0.9 }} />
        </div>
      );
    case "nexthink":
      return <Activity className={activeColor} style={{ width: iconSize, height: iconSize }} />;
    case "report":
      return <FileText className={activeColor} style={{ width: iconSize, height: iconSize }} />;
    case "decision":
      return <HelpCircle className={activeColor} style={{ width: iconSize, height: iconSize }} />;
    case "routine":
      return <Briefcase className={activeColor} style={{ width: iconSize, height: iconSize }} />;
    case "ticket":
      return <TicketCheck className={activeColor} style={{ width: iconSize, height: iconSize }} />;
    case "servicedesk":
      return <Brain className={activeColor} style={{ width: iconSize, height: iconSize }} />;
    case "closed":
      return <CheckCircle className={activeColor} style={{ width: iconSize, height: iconSize }} />;
    case "escalation":
      return <Users className={activeColor} style={{ width: iconSize, height: iconSize }} />;
    case "phone":
      return <Phone className={activeColor} style={{ width: iconSize, height: iconSize }} />;
    case "triage":
      return <Zap className={activeColor} style={{ width: iconSize, height: iconSize }} />;
    case "investigate":
      return <FileText className={activeColor} style={{ width: iconSize, height: iconSize }} />;
    case "contact_channels":
      return (
        <div className={`flex gap-0.5 ${activeColor}`}>
          <Phone style={{ width: iconSize * 0.7, height: iconSize * 0.7 }} />
          <MessageSquare style={{ width: iconSize * 0.7, height: iconSize * 0.7 }} />
          <Globe style={{ width: iconSize * 0.7, height: iconSize * 0.7 }} />
        </div>
      );
    case "routing":
      return <Zap className={activeColor} style={{ width: iconSize, height: iconSize }} />;
    case "notification":
      return <Mail className={activeColor} style={{ width: iconSize, height: iconSize }} />;
    case "mim":
      return <ShieldAlert className={activeColor} style={{ width: iconSize, height: iconSize }} />;
    case "server":
      return (
        <div className={`flex gap-0.5 ${activeColor}`}>
          <Server style={{ width: iconSize * 0.9, height: iconSize * 0.9 }} />
          <Database style={{ width: iconSize * 0.9, height: iconSize * 0.9 }} />
        </div>
      );
    case "elk":
      return <BarChart3 className={activeColor} style={{ width: iconSize, height: iconSize }} />;
    case "alert":
      return <AlertTriangle className={activeColor} style={{ width: iconSize, height: iconSize }} />;
    case "automation":
      return <Zap className={activeColor} style={{ width: iconSize, height: iconSize }} />;
    default:
      return <Activity className={activeColor} style={{ width: iconSize, height: iconSize }} />;
  }
}

function TimelineNode({ 
  step, 
  isActive, 
  isPast,
  onClick,
  highlight
}: { 
  step: FlowStep;
  isActive: boolean;
  isPast: boolean;
  onClick: () => void;
  highlight?: string;
}) {
  const size = 52;
  const isDecision = step.isDecision;
  
  const bgColor = isActive 
    ? "bg-purple-600 shadow-lg shadow-purple-500/50" 
    : isPast 
      ? "bg-green-600/80" 
      : highlight === "green" 
        ? "bg-green-600/20 border-green-500/50" 
        : "bg-white/10 border-white/20";
  
  return (
    <motion.div
      className="flex flex-col items-center cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className={`
          relative flex items-center justify-center border-2
          ${isDecision ? "rotate-45 rounded-lg" : "rounded-full"}
          ${bgColor}
          ${isActive ? "border-transparent" : isPast ? "border-green-500" : ""}
        `}
        style={{ width: size, height: size }}
        animate={isActive ? { 
          boxShadow: ["0 0 15px rgba(168, 85, 247, 0.4)", "0 0 30px rgba(168, 85, 247, 0.6)", "0 0 15px rgba(168, 85, 247, 0.4)"]
        } : {}}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className={isDecision ? "-rotate-45" : ""}>
          <FlowIcon type={step.icon} isActive={isActive} isPast={isPast} size={size} />
        </div>
        
        {isActive && (
          <motion.div
            className={`absolute inset-0 border-2 border-white/40 ${isDecision ? "rounded-lg" : "rounded-full"}`}
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
        )}
      </motion.div>
      
      <div className="mt-2 text-center max-w-[70px]">
        <div className={`text-[9px] font-medium leading-tight ${isActive ? "text-white" : isPast ? "text-green-400" : "text-white/60"}`}>
          {step.label}
        </div>
      </div>
    </motion.div>
  );
}

export default function ITWorkflows() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [selectedWorkflow, setSelectedWorkflow] = useState<WorkflowType>("proactive");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Get the appropriate flow steps based on selected workflow
  const getFlowSteps = () => {
    switch (selectedWorkflow) {
      case "proactive":
        return proactiveFlowSteps;
      case "reactive":
        return reactiveFlowSteps;
      case "infrastructure":
        return infrastructureFlowSteps;
      default:
        return proactiveFlowSteps;
    }
  };

  const flowSteps = getFlowSteps();

  // Main flow path - dynamically based on flowSteps length
  const mainPath = flowSteps.map((_, index) => index);

  // Reset animation when workflow changes
  const handleWorkflowChange = (workflow: WorkflowType) => {
    setSelectedWorkflow(workflow);
    setActiveStep(0);
    setIsAnimating(true);
  };

  useEffect(() => {
    if (!isAnimating) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % mainPath.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isAnimating]);

  // Auto-scroll to active node on mobile
  useEffect(() => {
    const container = scrollContainerRef.current;
    const activeNode = nodeRefs.current[activeStep];
    
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
  }, [activeStep]);

  const handleRestart = () => {
    setActiveStep(0);
    setIsAnimating(true);
  };

  const currentStepIndex = mainPath[activeStep];
  const currentStepData = flowSteps[currentStepIndex];

  const isStepActive = (pathIndex: number) => activeStep === pathIndex;
  const isStepPast = (pathIndex: number) => pathIndex < activeStep;

  const handleNodeClick = (pathIndex: number) => {
    setIsAnimating(false);
    setActiveStep(pathIndex);
  };

  // Calculate progress for the line
  const progress = (activeStep / (mainPath.length - 1)) * 100;

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
            alt="Day in the Life of IT Banner" 
            className="absolute inset-0 w-full h-full object-cover"
            data-testid="img-it-workflows-banner"
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
                IT Operations
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="font-display font-light text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-lg mb-4"
                data-testid="text-page-title"
              >
                Day in the Life of IT with Hexaware
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
              >
                Explore proactive, reactive, and infrastructure workflows
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Pill-shaped workflow filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6"
        >
          {workflowFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleWorkflowChange(filter.id)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                flex items-center gap-2
                ${selectedWorkflow === filter.id 
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30 border-2 border-purple-400" 
                  : "bg-white/10 text-white/70 border-2 border-white/20 hover:bg-white/20 hover:text-white"
                }
              `}
              data-testid={`filter-${filter.id}`}
            >
              <span>{filter.label}</span>
              {filter.subtitle && (
                <span className={`text-xs ${selectedWorkflow === filter.id ? "text-purple-200" : "text-white/50"}`}>
                  {filter.subtitle}
                </span>
              )}
            </button>
          ))}
        </motion.div>

        <div className="flex justify-center gap-3 mb-4">
          <button
            onClick={() => setIsAnimating(!isAnimating)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30 hover:bg-purple-500/30 transition-colors text-sm text-white"
            data-testid="button-play-pause"
          >
            {isAnimating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isAnimating ? "Pause" : "Play"}
          </button>
          <button
            onClick={handleRestart}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-colors text-sm text-white"
            data-testid="button-restart"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        <AnimatePresence mode="wait">
          {currentStepData && (
            <motion.div
              key={currentStepIndex}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="bg-gradient-to-r from-purple-500/15 to-blue-500/15 border border-purple-500/30 rounded-xl p-4 mb-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-purple-500/30 border border-purple-500/40 flex items-center justify-center flex-shrink-0">
                  <FlowIcon type={currentStepData.icon} isActive={true} isPast={false} size={48} />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-white mb-1">{currentStepData.label}</h4>
                  <p className="text-sm text-purple-200/90">{currentStepData.message}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Timeline - Horizontal straight line */}
        <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4 md:p-6 mb-6">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-4 scrollbar-hide"
          >
            <div className={`relative min-w-[800px] pt-16 ${selectedWorkflow === 'infrastructure' ? 'pb-56' : 'pb-36'}`}>
              {/* Progress line background */}
              <div className="absolute top-[88px] left-8 right-8 h-1 bg-white/10 rounded-full" />
              
              {/* Progress line filled */}
              <div 
                className="absolute top-[88px] left-8 h-1 bg-gradient-to-r from-green-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
                style={{ width: `calc(${progress}% * 0.92)` }}
              />

              {/* Main flow nodes */}
              <div className="flex justify-between relative">
                {mainPath.map((stepIndex, pathIndex) => {
                  const step = flowSteps[stepIndex];
                  const isDecision = step.isDecision;
                  
                  // For reactive and infrastructure workflows: YES continues straight, NO goes down
                  // For proactive workflow: NO continues straight, YES goes down
                  const isYesContinuesStraight = selectedWorkflow === "reactive" || selectedWorkflow === "infrastructure";
                  const straightLabel = isYesContinuesStraight ? "YES" : "NO";
                  const straightColor = isYesContinuesStraight ? "text-green-400" : "text-red-400";
                  const branchLabel = isYesContinuesStraight ? "NO" : "YES";
                  const branchColor = isYesContinuesStraight ? "text-red-400" : "text-green-400";
                  const branchLineColor = isYesContinuesStraight ? "bg-red-500/60" : "bg-green-500/60";
                  const branchArrowColor = isYesContinuesStraight ? "rgba(239, 68, 68, 0.6)" : "rgba(34, 197, 94, 0.6)";
                  
                  return (
                    <div
                      key={stepIndex}
                      ref={(el) => { nodeRefs.current[pathIndex] = el; }}
                      className="relative flex flex-col items-center"
                    >
                      {/* Label positioned to the right of decision node, above the continuing line */}
                      {isDecision && (
                        <div className="absolute -top-3 left-full ml-4">
                          <span className={`text-[10px] font-bold ${straightColor}`}>{straightLabel}</span>
                        </div>
                      )}
                      
                      <TimelineNode
                        step={step}
                        isActive={isStepActive(pathIndex)}
                        isPast={isStepPast(pathIndex)}
                        onClick={() => handleNodeClick(pathIndex)}
                        highlight={stepIndex < 4 ? "green" : undefined}
                      />

                      {/* Branch going down with arrow */}
                      {step.id === "decision1" && selectedWorkflow !== "infrastructure" && (
                        <div className="absolute top-full mt-1 flex flex-col items-center">
                          <div className="flex items-center gap-1">
                            <span className={`text-[10px] font-bold ${branchColor}`}>{branchLabel}</span>
                          </div>
                          {/* Vertical arrow line */}
                          <div className={`w-0.5 h-5 ${branchLineColor}`} />
                          <svg width="10" height="6" viewBox="0 0 10 6" className="-mt-0.5">
                            <polygon points="5,6 0,0 10,0" fill={branchArrowColor} />
                          </svg>
                          <div className="mt-1">
                            <TimelineNode
                              step={flowSteps[8]}
                              isActive={false}
                              isPast={false}
                              onClick={() => {}}
                            />
                          </div>
                        </div>
                      )}
                      
                      {/* Infrastructure: NO branch goes to Service Desk with P1 decision sub-flow */}
                      {step.id === "decision1" && selectedWorkflow === "infrastructure" && (
                        <div className="absolute top-full mt-1 flex flex-col items-center">
                          <span className="text-[10px] font-bold text-red-400">NO</span>
                          {/* Vertical arrow line */}
                          <div className="w-0.5 h-4 bg-red-500/60" />
                          <svg width="10" height="6" viewBox="0 0 10 6" className="-mt-0.5">
                            <polygon points="5,6 0,0 10,0" fill="rgba(239, 68, 68, 0.6)" />
                          </svg>
                          {/* Service Desk centered under NO, rest flows to the right */}
                          <div className="mt-1 relative">
                            {/* Service Desk - centered */}
                            <div className="flex flex-col items-center">
                              <TimelineNode
                                step={infrastructureBranchSteps[0]}
                                isActive={false}
                                isPast={false}
                                onClick={() => {}}
                              />
                            </div>
                            {/* Rest of the flow positioned to the right of Service Desk */}
                            <div className="absolute top-0 left-full ml-1.5 flex items-start gap-1.5">
                              {/* Arrow */}
                              <div className="w-3 h-0.5 bg-white/30 mt-6" />
                              {/* P1 Decision with YES/NO */}
                              <div className="relative flex flex-col items-center">
                                {/* YES label above the continuing line */}
                                <div className="absolute -top-3 left-full ml-1">
                                  <span className="text-[10px] font-bold text-green-400">YES</span>
                                </div>
                                <TimelineNode
                                  step={infrastructureBranchSteps[1]}
                                  isActive={false}
                                  isPast={false}
                                  onClick={() => {}}
                                />
                                {/* NO branch going down */}
                                <div className="absolute top-full mt-0.5 flex flex-col items-center">
                                  <span className="text-[10px] font-bold text-red-400">NO</span>
                                  <div className="w-0.5 h-3 bg-red-500/60" />
                                  <svg width="8" height="5" viewBox="0 0 8 5" className="-mt-0.5">
                                    <polygon points="4,5 0,0 8,0" fill="rgba(239, 68, 68, 0.6)" />
                                  </svg>
                                  <div className="mt-0.5">
                                    <TimelineNode
                                      step={infrastructureBranchSteps[6]}
                                      isActive={false}
                                      isPast={false}
                                      onClick={() => {}}
                                    />
                                  </div>
                                </div>
                              </div>
                              {/* Arrow */}
                              <div className="w-3 h-0.5 bg-white/30 mt-6" />
                              {/* Notification */}
                              <TimelineNode
                                step={infrastructureBranchSteps[2]}
                                isActive={false}
                                isPast={false}
                                onClick={() => {}}
                              />
                              {/* Arrow */}
                              <div className="w-3 h-0.5 bg-white/30 mt-6" />
                              {/* MIM */}
                              <TimelineNode
                                step={infrastructureBranchSteps[3]}
                                isActive={false}
                                isPast={false}
                                onClick={() => {}}
                              />
                              {/* Arrow */}
                              <div className="w-3 h-0.5 bg-white/30 mt-6" />
                              {/* L2/L3 */}
                              <TimelineNode
                                step={infrastructureBranchSteps[4]}
                                isActive={false}
                                isPast={false}
                                onClick={() => {}}
                              />
                              {/* Arrow */}
                              <div className="w-3 h-0.5 bg-white/30 mt-6" />
                              {/* Ticket Closed */}
                              <TimelineNode
                                step={infrastructureBranchSteps[5]}
                                isActive={false}
                                isPast={false}
                                onClick={() => {}}
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {step.id === "decision2" && (
                        <div className="absolute top-full mt-1 flex flex-col items-center">
                          <div className="flex items-center gap-1">
                            <span className={`text-[10px] font-bold ${branchColor}`}>{branchLabel}</span>
                          </div>
                          {/* Vertical arrow line */}
                          <div className={`w-0.5 h-5 ${branchLineColor}`} />
                          <svg width="10" height="6" viewBox="0 0 10 6" className="-mt-0.5">
                            <polygon points="5,6 0,0 10,0" fill={branchArrowColor} />
                          </svg>
                          <div className="mt-1">
                            <TimelineNode
                              step={flowSteps[9]}
                              isActive={false}
                              isPast={false}
                              onClick={() => {}}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4"
          >
            <div className="flex items-center gap-2 mb-3">
              <HeadphonesIcon className="w-5 h-5 text-purple-400" />
              <h4 className="font-display font-light text-white">Centralized Service Desk</h4>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: Phone, label: "Phone", color: "text-blue-400" },
                { icon: MessageSquare, label: "Virtual Assist", color: "text-green-400" },
                { icon: Globe, label: "Web Portal", color: "text-purple-400" },
                { icon: Mail, label: "Email", color: "text-amber-400" },
                { icon: Zap, label: "VIP Routing", color: "text-cyan-400" },
                { icon: Brain, label: "AI-enabled Knowledge Management", color: "text-pink-400" },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                  <Icon className={`w-4 h-4 ${color}`} />
                  <span className="text-xs text-white/80">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4"
          >
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-orange-400" />
              <h4 className="font-display font-light text-white">L2/L3 Resolver Groups</h4>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["Onsite", "EUC/UCC", "Network", "Cloud", "Security", "DevSecOps", "Storage", "App Support"].map((group) => (
                <span key={group} className="text-xs bg-white/5 text-white/70 px-2 py-1 rounded">
                  {group}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center mt-6 gap-1">
          {mainPath.map((_, index) => (
            <button
              key={index}
              onClick={() => handleNodeClick(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeStep ? "w-6 bg-purple-500" : index < activeStep ? "w-2 bg-green-500" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
        </main>
      </div>
    </PageTransition>
  );
}
