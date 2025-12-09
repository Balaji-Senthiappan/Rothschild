import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Headphones, Laptop, Smartphone, Mail, Phone, Server, Cloud, Shield, Package, Bot, MonitorSmartphone, Settings, Activity, LayoutDashboard, Database, Gauge, Cog, ArrowLeft, Home, MessageCircle, X, Filter } from "lucide-react";
import azureLogo from "@assets/image_1764749212415.png";
import elkLogo from "@assets/image_1764752220435.png";
import solarwindsLogo from "@assets/image_1764752244639.png";
import bannerImage from "@assets/Code_Analysis_&_Assessment_Landing_page_banner_1765003848992.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { PageTransition } from "@/components/skeleton";

interface ModalContent {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

function LayerModal({ isOpen, onClose, content }: { isOpen: boolean; onClose: () => void; content: ModalContent | null }) {
  if (!content) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-4 md:inset-10 lg:inset-16 z-50 flex items-center justify-center pointer-events-none"
          >
            <div 
              className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl pointer-events-auto
                bg-gradient-to-br from-purple-900/60 via-background/98 to-blue-900/40
                border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                backdrop-blur-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top glow line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-purple-500/20">
                <div className="flex items-center gap-3">
                  {content.icon}
                  <h2 className="font-display font-light text-xl md:text-2xl text-white">{content.title}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  data-testid="button-close-modal"
                >
                  <X className="w-5 h-5 text-white/70" />
                </button>
              </div>
              
              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
                <div className="text-muted-foreground space-y-4">
                  {content.content}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

interface BoxProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  testId: string;
  variant?: "default" | "nested";
}

function ClickableBox({ children, className = "", onClick, testId, variant = "default" }: BoxProps) {
  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-lg cursor-pointer
        ${variant === "default" 
          ? "bg-gradient-to-br from-blue-500/[0.08] via-white/[0.06] to-purple-500/[0.05] border border-white/25 shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.15)]" 
          : "bg-gradient-to-br from-white/[0.07] via-blue-400/[0.03] to-white/[0.04] border border-white/20 shadow-[0_2px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]"
        }
        backdrop-blur-xl p-3
        transition-all duration-300 ease-out
        hover:border-white/50 hover:shadow-[0_6px_24px_rgba(147,51,234,0.1),inset_0_1px_0_rgba(255,255,255,0.2)]
        hover:bg-gradient-to-br hover:from-blue-400/[0.12] hover:via-white/[0.1] hover:to-purple-400/[0.08]
        group
        ${className}
      `}
      whileHover={{ y: -2, scale: 1.005 }}
      whileTap={{ scale: 0.998 }}
      onClick={onClick}
      data-testid={testId}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/[0.04] opacity-60" />
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/[0.08] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/[0.06] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}

function SectionBox({ children, className = "", testId }: { children: React.ReactNode; className?: string; testId?: string }) {
  return (
    <div 
      className={`
        relative overflow-hidden rounded-lg
        bg-gradient-to-br from-blue-500/[0.06] via-white/[0.04] to-purple-500/[0.04]
        border border-white/20
        shadow-[0_4px_16px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.12)]
        backdrop-blur-xl p-3
        ${className}
      `}
      data-testid={testId}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/[0.03] opacity-70" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent" />
      <div className="absolute top-4 bottom-4 left-0 w-px bg-gradient-to-b from-transparent via-blue-400/15 to-transparent" />
      <div className="absolute top-4 bottom-4 right-0 w-px bg-gradient-to-b from-transparent via-purple-400/15 to-transparent" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default function TargetOperatingModel() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  const openModal = (content: ModalContent) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const businessFunctionsContent: ModalContent = {
    icon: <Users className="w-6 h-6 text-purple-400" />,
    title: "R&Co Business Functions & Users",
    content: (
      <>
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="bg-purple-500/10 border border-purple-500/30 text-white text-xs md:text-sm px-3 py-2 rounded-md text-center flex-1 min-w-[120px]">
            Client Service Advisors
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 text-white text-xs md:text-sm px-3 py-2 rounded-md text-center flex-1 min-w-[100px]">
            Research Analysts
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 text-white text-xs md:text-sm px-3 py-2 rounded-md text-center flex-1 min-w-[100px]">
            Operations team
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 text-white text-xs md:text-sm px-3 py-2 rounded-md text-center flex-1 min-w-[100px]">
            Compliances
          </div>
        </div>

        <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-4 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-white border-b border-purple-500 pb-1 text-center">
                R&Co. End Users & Devices
              </h4>
              <div className="flex flex-wrap gap-3 justify-center">
                <div className="flex flex-col items-center gap-1">
                  <Users className="w-6 h-6 text-purple-400" />
                  <span className="text-xs text-muted-foreground">Users</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Laptop className="w-6 h-6 text-purple-400" />
                  <span className="text-xs text-muted-foreground">Desktop</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Smartphone className="w-6 h-6 text-purple-400" />
                  <span className="text-xs text-muted-foreground">Mobile</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Package className="w-6 h-6 text-purple-400" />
                  <span className="text-xs text-muted-foreground">Apps</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium text-white border-b border-purple-500 pb-1 text-center">
                Omni-channel
              </h4>
              <div className="flex flex-wrap gap-3 justify-center">
                <div className="flex flex-col items-center gap-1">
                  <Laptop className="w-6 h-6 text-purple-400" />
                  <span className="text-xs text-muted-foreground">Portal</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <span className="text-xs text-muted-foreground">Email</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <span className="text-xs text-muted-foreground">Phone</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <MessageCircle className="w-6 h-6 text-purple-400" />
                  <span className="text-xs text-muted-foreground">Chat</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium text-white border-b border-purple-500 pb-1 text-center">
                On Prem Servers, Cloud, Network, & Security
              </h4>
              <div className="flex flex-wrap gap-3 justify-center">
                <div className="flex flex-col items-center gap-1">
                  <Server className="w-6 h-6 text-purple-400" />
                  <span className="text-xs text-muted-foreground">Servers</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Cloud className="w-6 h-6 text-purple-400" />
                  <span className="text-xs text-muted-foreground">Cloud</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Shield className="w-6 h-6 text-purple-400" />
                  <span className="text-xs text-muted-foreground">Security</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <img src={azureLogo} alt="Azure" className="w-6 h-6 object-contain" />
                  <span className="text-xs text-muted-foreground">Azure</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-base leading-relaxed">
          Hexaware teams understand the application and business context at every layer of the operating model, enabling superior customer experiences. Trainings will enforce financial services-compliant ticketing, full traceability, and audit logging. An AI-driven, domain-specific knowledge base will learn from previous fixes and allow instant resolution of repeat problems.
        </p>
      </>
    )
  };

  const automationLayerContent: ModalContent = {
    icon: <Bot className="w-6 h-6 text-blue-400" />,
    title: "Automation & Self Service Layer",
    content: (
      <>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
          <div className="bg-purple-500/10 border border-purple-500/30 text-white text-sm px-4 py-3 rounded-md text-center">
            Smart Catalogue
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 text-white text-sm px-4 py-3 rounded-md text-center">
            IaC Templates
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 text-white text-sm px-4 py-3 rounded-md text-center">
            One Click Deployment
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 text-white text-sm px-4 py-3 rounded-md text-center">
            Automated Resolution
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 text-white text-sm px-4 py-3 rounded-md text-center">
            CI/CD Automation
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 text-white text-sm px-4 py-3 rounded-md text-center">
            SRE Readiness
          </div>
        </div>

        <p className="text-base leading-relaxed">
          This is the orchestration fabric which uses ServiceNow as the single pane of control, that turns repeatable operational work into fast, reliable, auditable outcomes. Includes workflow for Self-service provisioning and onboarding, and IaC and CI/CD pipeline for infra and automation artifacts. This layer will enable a good foundation in reducing operation toil and move towards a SRE based service delivery model in the future.
        </p>
      </>
    )
  };

  const experienceMgmtContent: ModalContent = {
    icon: <MonitorSmartphone className="w-6 h-6 text-green-400" />,
    title: "Experience Management",
    content: (
      <>
        <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-6 mb-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <Users className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
              <span className="text-xs md:text-sm text-white text-center">Services Desk Agents</span>
            </div>
            <span className="text-xl md:text-2xl text-purple-400 font-light">+</span>
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <Bot className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
              <span className="text-xs md:text-sm text-white text-center">Agentic AI & Augmented (24*7)</span>
            </div>
            <span className="text-xl md:text-2xl text-purple-400 font-light">+</span>
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <Shield className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
              <span className="text-xs md:text-sm text-white text-center">Self-Service Portals (24*7)</span>
            </div>
            <span className="text-xl md:text-2xl text-purple-400 font-light">+</span>
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <Settings className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
              <span className="text-xs md:text-sm text-white text-center max-w-[140px] md:max-w-[180px]">Proactive EUC Device Monitoring & predictive insights (24*7)</span>
            </div>
          </div>
        </div>

        <p className="text-base leading-relaxed mb-4">
          We will enable a next-generation, multi-channel Service Desk powered by Human + AI agents, with proactive observability and self-heal/self-help capabilities to deliver a consistent 24x7 user experience. A catalog-driven self-service layer will reduce wait times by automating frequent requests end-to-end. Key enhancements:
        </p>
        <ul className="space-y-3 text-base">
          <li className="flex gap-2">
            <span className="text-purple-400">•</span>
            <span><strong className="text-white">Multiple Self-Service channels suited to user preferences:</strong> Made available through voice/chat/portal which will enable users to request services. Additionally, integrating this layer with auto-fulfilment will allow requests to be completed without any human intervention.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-purple-400">•</span>
            <span><strong className="text-white">Proactive End-user device management to enhance productivity:</strong> AI-enabled proactive monitoring of end-user devices to detect and troubleshoot issues without waiting for failures to be reported.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-purple-400">•</span>
            <span><strong className="text-white">Agentic AI:</strong> Multi-modal (voice, portal, chat) autonomous AI agents designed to perform tasks by interpreting context, making decisions, and executing actions aligned with preset objectives. These agents are trained to respond to and assist users just like if they were interacting with human agents. This will allow a 24*7 'human-like' interaction for all users</span>
          </li>
        </ul>
      </>
    )
  };

  const efficiencyMgmtContent: ModalContent = {
    icon: <Gauge className="w-6 h-6 text-orange-400" />,
    title: "Efficiency Management",
    content: (
      <>
        <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-6 mb-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <Users className="w-10 h-10 md:w-12 md:h-12 text-purple-400" />
              <span className="text-xs md:text-sm text-white text-center">Command Center</span>
            </div>
            <span className="text-xl md:text-2xl text-purple-400 font-light">+</span>
            <div className="flex flex-col items-center gap-3 flex-shrink-0">
              <div className="border border-dashed border-white/30 rounded-lg p-4">
                <span className="text-xs text-muted-foreground block text-center mb-3">Ops Command center</span>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Database className="w-6 h-6 text-purple-400" />
                  <Activity className="w-6 h-6 text-purple-400" />
                  <LayoutDashboard className="w-6 h-6 text-purple-400" />
                  <img src={elkLogo} alt="ELK" className="h-6 w-auto" />
                  <img src={solarwindsLogo} alt="Solarwinds" className="h-6 w-auto" />
                  <Gauge className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-xs text-muted-foreground block text-center mt-3">Event Management / Event Correlation / Anomaly Detection / AIOps</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-base leading-relaxed mb-4">
          While mostly 'invisible', this layer is critical to the smooth functioning of the services. Ensuring that we are able to setup the tools and processes that allow this layer to function is critical to success. This layer enables seamless proactive, intelligent, integrated monitoring of all the elements in the landscape – this is mainly accomplished through the use of using Logstash & Elastic along with a round-the-clock Command Center team of cross-platform agents, who monitor operations and provide first-level incident resolution. This team is enabled by our AIOps toolsets that allow for rapid event detection, correlation & anomaly detection as well as being able to predict and prevent issues.
        </p>
        <p className="text-base mb-3">This layer includes:</p>
        <ul className="space-y-3 text-base">
          <li className="flex gap-2">
            <span className="text-purple-400">•</span>
            <span><strong className="text-white">Ops Command Center:</strong> A combination of monitoring tools and dashboards (Ops Insight) that enables an agent to have a full view of the entire R&CO infrastructure landscape.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-purple-400">•</span>
            <span><strong className="text-white">AIOps layer:</strong> A manager-of-manager layer (using Elastic, Logstash and Kibana) with intelligent dashboarding that sits on top of the integrated, standardized element monitoring tools (Solarwinds, Elastic agents, Azure Monitor, AWS Cloudwatch) and enables easy event correlation and anomaly detection.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-purple-400">•</span>
            <span><strong className="text-white">Command Center Agents:</strong> A 24*7 team that monitors and actions any alerts/issues that are highlighted by the different monitoring layers – this team is also responsible for alerting any other teams (and the Service Desk) of any failures that may be happening in the system to enable quick action.</span>
          </li>
        </ul>
      </>
    )
  };

  const serviceNowContent: ModalContent = {
    icon: <Database className="w-6 h-6 text-cyan-400" />,
    title: "ServiceNow – Single source of Truth",
    content: (
      <>
        <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-6 mb-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg px-6 py-4">
              <span className="text-sm text-white font-medium">ITSM</span>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg px-6 py-4">
              <span className="text-sm text-white font-medium">Service Catalogues</span>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg px-6 py-4">
              <span className="text-sm text-white font-medium">KEDB</span>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg px-6 py-4">
              <span className="text-sm text-white font-medium">Orchestration</span>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg px-6 py-4">
              <span className="text-sm text-white font-medium">SIAM & Governance</span>
            </div>
          </div>
        </div>

        <p className="text-base leading-relaxed">
          Our solution is built around building a single data repository which is used by all layers of the service – whether it is the ticket data (incident/request/problem/change) or it is the asset library, or even the KMDB with all the SOPs, this repository needs to act as the sole source for all types of data which are used to deliver the services. Building this layer requires a combination of processes and tools including ITSM & CMDB (ServiceNow), Discovery (ServiceNow Discovery), HAM/SAM database (ServiceNow ITAM), Knowledge Management DB (SharePoint) and a single Orchestration agent (Airflow / ServiceNow Orchestrator). Since R&Co already has chosen ServiceNow and is in the process of implementing it, we will work with R&Co for Catalog rationalization and workflow automation in this layer.
        </p>
      </>
    )
  };

  const productivityContent: ModalContent = {
    icon: <Laptop className="w-6 h-6 text-pink-400" />,
    title: "Productivity Enablers and Onsite Support Augmented with Smart Kiosks",
    content: (
      <>
        <div className="flex flex-wrap items-stretch justify-center gap-4 mb-4">
          <div className="bg-purple-500/10 border border-purple-500/30 text-white text-sm px-6 py-4 rounded-md min-w-[180px] flex items-center justify-center text-center">
            Gen AI interface to SOPs
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 text-white text-sm px-6 py-4 rounded-md min-w-[180px] flex items-center justify-center text-center">
            AI interface to KM-base
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 text-white text-sm px-6 py-4 rounded-md min-w-[180px] flex items-center justify-center text-center">
            Knowledge-base &<br />Operations Co-pilot
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 text-white text-sm px-6 py-4 rounded-md min-w-[180px] flex items-center justify-center text-center">
            Contact Centre Co-Pilot
          </div>
        </div>

        <p className="text-base leading-relaxed mb-3">
          Enabling easy access to the data (tickets, events, SOPs) in a way that allows users to query and easily consume it is enabled by our Gen-AI enabled toolsets for all teams. As this data set gets richer, so do the capabilities of these tools enabling rapid insights into the landscape, thereby facilitating proactive management & faster MTTRs.
        </p>
        <p className="text-base leading-relaxed">
          In addition allow user ability to DIY (Do it Yourself) with vending machines at London and Paris to self provision peripherals.
        </p>
      </>
    )
  };

  const resolverSquadsContent: ModalContent = {
    icon: <Headphones className="w-6 h-6 text-indigo-400" />,
    title: "L2, L3 Resolver Squads",
    content: (
      <>
        <div className="overflow-x-auto mb-4">
          <div className="min-w-[900px]">
            <div className="grid grid-cols-6 gap-1">
              <div className="bg-purple-600 text-white text-xs font-medium px-2 py-3 rounded-t text-center">
                Managed Network Services
              </div>
              <div className="bg-purple-600 text-white text-xs font-medium px-2 py-3 rounded-t text-center">
                Service Desk And Onsite Support
              </div>
              <div className="bg-purple-600 text-white text-xs font-medium px-2 py-3 rounded-t text-center">
                End User Computing
              </div>
              <div className="bg-purple-600 text-white text-xs font-medium px-2 py-3 rounded-t text-center">
                Unified Comms
              </div>
              <div className="bg-purple-600 text-white text-xs font-medium px-2 py-3 rounded-t text-center">
                Storage, Hosting and Cloud
              </div>
              <div className="bg-purple-600 text-white text-xs font-medium px-2 py-3 rounded-t text-center">
                Security and IAM
              </div>
            </div>

            <div className="grid grid-cols-6 gap-1 mt-1">
              <div className="flex items-center justify-center py-2 border-b border-white/20">
                <span className="text-xs text-white">Network SMEs</span>
              </div>
              <div className="flex items-center justify-center py-2 border-b border-white/20">
                <span className="text-xs text-white text-center">SD Lead and Agents<br/>+ Field Services</span>
              </div>
              <div className="flex items-center justify-center py-2 border-b border-white/20">
                <span className="text-xs text-white">EUC Leads and SMEs</span>
              </div>
              <div className="flex items-center justify-center py-2 border-b border-white/20">
                <span className="text-xs text-white">UC Leads and SMEs</span>
              </div>
              <div className="flex items-center justify-center py-2 border-b border-white/20">
                <span className="text-xs text-white">Data Center Leads and SMEs</span>
              </div>
              <div className="flex items-center justify-center py-2 border-b border-white/20">
                <span className="text-xs text-white">Security SMEs</span>
              </div>
            </div>

            <div className="grid grid-cols-6 gap-1 mt-1">
              <div className="bg-purple-500/10 border border-purple-500/30 p-2 space-y-1">
                <div className="bg-purple-900/50 text-white text-xs px-2 py-2 rounded text-center">SD-WAN</div>
                <div className="bg-purple-900/50 text-white text-xs px-2 py-2 rounded text-center">LAN, WAN, WiFi, Routers</div>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 p-2 space-y-1">
                <div className="bg-purple-900/50 text-white text-xs px-2 py-2 rounded text-center">Front Desk support</div>
                <div className="bg-purple-900/50 text-white text-xs px-2 py-2 rounded text-center">Trouble shoot and Resolve</div>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 p-2 space-y-1">
                <div className="bg-purple-900/50 text-white text-xs px-2 py-2 rounded text-center">MDM</div>
                <div className="bg-purple-900/50 text-white text-xs px-2 py-2 rounded text-center">Patching, Device mgmt, VDI</div>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 p-2 space-y-1">
                <div className="bg-purple-900/50 text-white text-xs px-2 py-2 rounded text-center">M365 collaboration</div>
                <div className="bg-purple-900/50 text-white text-xs px-2 py-2 rounded text-center">Meeting room management</div>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 p-2 space-y-1">
                <div className="bg-purple-900/50 text-white text-xs px-2 py-2 rounded text-center">On-prem servers and cloud</div>
                <div className="bg-purple-900/50 text-white text-xs px-2 py-2 rounded text-center">Storage & Backup, Database</div>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 p-2 space-y-1">
                <div className="bg-purple-900/50 text-white text-xs px-2 py-2 rounded text-center">IAM</div>
                <div className="bg-purple-900/50 text-white text-xs px-2 py-2 rounded text-center">Email security and firewall</div>
              </div>
            </div>

            {/* AI in the Loop - thin layer below boxes */}
            <div className="mt-2 bg-blue-500/10 border border-blue-500/30 rounded py-2 px-4">
              <div className="flex items-center justify-center gap-2">
                <Bot className="w-4 h-4 text-blue-400" />
                <span className="text-xs text-white font-medium">AI in the Loop</span>
              </div>
            </div>

            {/* Swarm Teams - thin layer below AI */}
            <div className="mt-1 bg-purple-500/10 border border-purple-500/30 rounded py-2 px-4">
              <div className="flex items-center justify-center gap-2">
                <Users className="w-4 h-4 text-purple-400" />
                <span className="text-xs text-white font-medium">Swarm Teams</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-base leading-relaxed">
            These layers constitute the solution behind the 3 in-scope bundles – the L2/L3 SMEs that are part of these services deliver Run and Change (along with Transformation) services for each value streams – ensuring the right mix of deep technology expertise at these layers is critical for this program.
          </p>
          
          <ul className="space-y-3 text-base">
            <li className="flex gap-2">
              <span className="text-purple-400">•</span>
              <span><strong className="text-white">SD & Onsite Support:</strong> Responsible for delivering seamless experiences for R&Co end-users</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-400">•</span>
              <span><strong className="text-white">EUC and UCC Services:</strong> Provide remote workplace engineering and Collaboration support on M365 platform</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-400">•</span>
              <span><strong className="text-white">Storage Hosting and Cloud Services:</strong> Responsible for the smooth functioning of R&Co infrastructure landscape</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-400">•</span>
              <span><strong className="text-white">Network:</strong> Responsible for designing, implementing, and maintaining secure, resilient network infrastructure while protecting R&Co systems and data from threats</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-400">•</span>
              <span><strong className="text-white">Security & IAM Services:</strong> Responsible for protecting R&Co information assets and ensuring regulatory compliance</span>
            </li>
          </ul>
        </div>
      </>
    )
  };

  const siamContent: ModalContent = {
    icon: <Settings className="w-6 h-6 text-yellow-400" />,
    title: "SIAM and Cross functional Services",
    content: (
      <>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <div className="bg-purple-500/10 border border-purple-500/30 text-white text-sm px-4 py-4 rounded-md text-center min-w-[140px]">
            Service Governance (e.g. Incident, MIM, Problem, Change, Release)
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 text-white text-sm px-4 py-4 rounded-md text-center min-w-[100px]">
            SIAM
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 text-white text-sm px-4 py-4 rounded-md text-center min-w-[100px]">
            Quality Assurance
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 text-white text-sm px-4 py-4 rounded-md text-center min-w-[100px]">
            Compliance Manager
          </div>
          <div className="bg-blue-900 border border-blue-700 text-white text-sm px-4 py-4 rounded-md text-center min-w-[100px]">
            Architecture
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 text-white text-sm px-4 py-4 rounded-md text-center min-w-[100px]">
            Change and Release Board
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-end mb-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-900 border border-blue-700 rounded"></div>
            <span className="text-xs text-muted-foreground">Retained by R&Co</span>
          </div>
        </div>

        <p className="text-base leading-relaxed">
          Responsible for end-to-end ITIL process adherence, management, and optimisation of service delivery, delivering SIAM capabilities for R&Co by collaborating closely with all R&Co partners & vendors.
        </p>
      </>
    )
  };

  const deoContent: ModalContent = {
    icon: <Bot className="w-6 h-6 text-purple-400" />,
    title: "AI Enabled DEO",
    content: (
      <>
        {/* Team structure diagram */}
        <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-6 mb-4">
          {/* Two person icons with plus sign */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <Users className="w-6 h-6 text-purple-400" />
            <span className="text-purple-400 text-xl">+</span>
            <Users className="w-6 h-6 text-purple-400" />
          </div>

          {/* Advisory Teams label */}
          <div className="text-center mb-4">
            <span className="text-xs text-muted-foreground">Change & Transformation Advisory Teams (Domain SMEs, Tech Council, Innovation Labs)</span>
          </div>

          {/* Two main boxes */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-purple-500/10 border border-purple-500/30 text-white text-sm px-4 py-4 rounded-md text-center">
              Transformation & Innovation Management
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 text-white text-sm px-4 py-4 rounded-md text-center">
              CSI & Automation Program Office
            </div>
          </div>

          {/* Automation Squads */}
          <div className="flex flex-col items-center">
            <Users className="w-8 h-8 text-purple-400 mb-2" />
            <span className="text-xs text-muted-foreground">Automation Squads</span>
          </div>
        </div>

        <p className="text-base leading-relaxed">
          A specialised team comprising architects and automation experts working along with the different support teams to proactively identify innovation ideas, automation use cases, opportunities for incidents/ticket elimination, and improvements to end-user experience. In addition, we have also identified the roles of an Innovation Strategist & Facilitator whose responsibility would be to funnel top-down ideas, and bottom-up 'disruptions' (generated through hackathons, industry groups & our partner ecosystem) – we believe this role will play a key part in ensuring that we are constantly looking at correctly prioritising for the short and long term.
        </p>
      </>
    )
  };

  const governanceContent: ModalContent = {
    icon: <Cog className="w-6 h-6 text-blue-400" />,
    title: "Platform Governance",
    content: (
      <>
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-purple-500/10 border border-purple-500/30 text-white text-sm px-4 py-4 rounded-md text-center">
            Engineering Excellence
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 text-white text-sm px-4 py-4 rounded-md text-center">
            Platform Governance
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 text-white text-sm px-4 py-4 rounded-md text-center">
            R&Co Academy
          </div>
        </div>

        <p className="text-base leading-relaxed">
          A PMO team that works with the business & technology teams along with the Change/Project teams to prioritise and manage all changes and projects that will be delivered across the different Value Streams. In addition, this team will work with the different R&Co BU's to ensure smooth SI.
        </p>
      </>
    )
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        {/* Modal */}
        <LayerModal isOpen={modalOpen} onClose={closeModal} content={modalContent} />

        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
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
            alt="Target Operating Model Banner" 
            className="absolute inset-0 w-full h-full object-cover"
            data-testid="img-tom-banner"
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
                Operating Model
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="font-display font-light text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-lg mb-6"
                data-testid="text-page-title"
              >
                Target Operating Model
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto"
                data-testid="text-tom-description"
              >
                Click on any component to learn more about our operating model
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="w-full space-y-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 space-y-3">
                {/* R&Co Business Functions & Users */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <ClickableBox
                    testId="box-business-functions"
                    onClick={() => openModal(businessFunctionsContent)}
                  >
                    <div className="flex items-center justify-center gap-3">
                      <Users className="w-5 h-5 text-purple-400" />
                      <h3 className="font-display font-light text-sm text-white tracking-wide">
                        R&Co Business Functions & Users
                      </h3>
                    </div>
                  </ClickableBox>
                </motion.div>

                {/* Automation & Self Service Layer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  <ClickableBox
                    testId="box-automation-layer"
                    onClick={() => openModal(automationLayerContent)}
                  >
                    <div className="flex items-center justify-center gap-3">
                      <Bot className="w-5 h-5 text-blue-400" />
                      <h3 className="font-display font-light text-sm text-white tracking-wide">
                        Automation & Self Service Layer
                      </h3>
                    </div>
                  </ClickableBox>
                </motion.div>

                {/* Experience & Efficiency Management */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <ClickableBox
                    testId="box-experience-mgmt"
                    onClick={() => openModal(experienceMgmtContent)}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <MonitorSmartphone className="w-4 h-4 text-green-400" />
                      <h3 className="font-display font-light text-xs text-white tracking-wide">
                        Experience Management
                      </h3>
                    </div>
                  </ClickableBox>
                  <ClickableBox
                    testId="box-efficiency-mgmt"
                    onClick={() => openModal(efficiencyMgmtContent)}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Gauge className="w-4 h-4 text-orange-400" />
                      <h3 className="font-display font-light text-xs text-white tracking-wide">
                        Efficiency Management
                      </h3>
                    </div>
                  </ClickableBox>
                </motion.div>

                {/* ServiceNow */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                >
                  <ClickableBox
                    testId="box-servicenow"
                    onClick={() => openModal(serviceNowContent)}
                  >
                    <div className="flex items-center justify-center gap-3">
                      <Database className="w-5 h-5 text-cyan-400" />
                      <h3 className="font-display font-light text-sm text-white tracking-wide">
                        ServiceNow – Single source of Truth
                      </h3>
                    </div>
                  </ClickableBox>
                </motion.div>

                {/* Productivity Enablers */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <ClickableBox
                    testId="box-productivity"
                    onClick={() => openModal(productivityContent)}
                  >
                    <div className="flex items-center justify-center gap-3">
                      <Laptop className="w-5 h-5 text-pink-400" />
                      <h3 className="font-display font-light text-sm text-white tracking-wide">
                        Productivity Enablers & Onsite Support with Smart Kiosks
                      </h3>
                    </div>
                  </ClickableBox>
                </motion.div>

                {/* Digital Backbone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                >
                  <SectionBox>
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Server className="w-4 h-4 text-indigo-400" />
                      <h3 className="font-display font-light text-sm text-white tracking-wide">
                        Digital Backbone
                      </h3>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2">
                      <ClickableBox
                        testId="box-resolver-squads"
                        className="flex-1 flex items-center"
                        onClick={() => openModal(resolverSquadsContent)}
                        variant="nested"
                      >
                        <div className="flex items-center gap-2">
                          <Headphones className="w-4 h-4 text-white/80 flex-shrink-0" />
                          <p className="text-sm text-white/90 leading-tight">
                            L2, L3 Resolver Squads – Network, Cloud, EUC, UC, Hosting
                          </p>
                        </div>
                      </ClickableBox>
                      <ClickableBox
                        testId="box-retained-support"
                        className="md:w-32"
                        variant="nested"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <Package className="w-4 h-4 text-white/80" />
                          <p className="text-xs text-white text-center">
                            Retained App Support
                          </p>
                        </div>
                      </ClickableBox>
                    </div>
                  </SectionBox>
                </motion.div>

                {/* SIAM */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <ClickableBox
                    testId="box-siam"
                    onClick={() => openModal(siamContent)}
                  >
                    <div className="flex items-center justify-center gap-3">
                      <Settings className="w-5 h-5 text-yellow-400" />
                      <h3 className="font-display font-light text-sm text-white tracking-wide">
                        SIAM and Cross functional Services
                      </h3>
                    </div>
                  </ClickableBox>
                </motion.div>
              </div>

              {/* Right column */}
              <div className="flex flex-row lg:flex-col gap-2 lg:w-36">
                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.45 }}
                >
                  <ClickableBox
                    testId="box-ai-deo"
                    className="h-full py-4"
                    onClick={() => openModal(deoContent)}
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/15 to-white/5 flex items-center justify-center mb-2 border border-white/15">
                        <Bot className="w-5 h-5 text-purple-400" />
                      </div>
                      <h3 className="font-display font-light text-xs text-white text-center leading-tight tracking-wide">
                        AI Enabled DEO
                      </h3>
                    </div>
                  </ClickableBox>
                </motion.div>
                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <ClickableBox
                    testId="box-collaborative"
                    className="h-full py-4"
                    onClick={() => openModal(governanceContent)}
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/15 to-white/5 flex items-center justify-center mb-2 border border-white/15">
                        <Cog className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="font-display font-light text-xs text-white text-center leading-tight tracking-wide">
                        Platform Governance
                      </h3>
                    </div>
                  </ClickableBox>
                </motion.div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
