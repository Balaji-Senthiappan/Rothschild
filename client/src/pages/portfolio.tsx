import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { PageLayout } from "@/components/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "FinanceFlow",
    category: "Web Application",
    description: "A comprehensive financial dashboard for tracking investments, expenses, and portfolio performance.",
    tags: ["React", "Node.js", "PostgreSQL"],
    featured: true,
    gradient: "from-purple-500/30 via-purple-500/10 to-transparent",
  },
  {
    title: "HealthTrack",
    category: "Mobile App",
    description: "Health and fitness tracking application with AI-powered insights and personalized recommendations.",
    tags: ["React Native", "Python", "ML"],
    featured: false,
    gradient: "from-emerald-500/30 via-emerald-500/10 to-transparent",
  },
  {
    title: "ShopEase",
    category: "E-Commerce",
    description: "Modern e-commerce platform with real-time inventory management and seamless checkout.",
    tags: ["Next.js", "Stripe", "Prisma"],
    featured: true,
    gradient: "from-amber-500/30 via-amber-500/10 to-transparent",
  },
  {
    title: "ConnectHub",
    category: "Social Platform",
    description: "Professional networking platform designed for remote teams and digital nomads.",
    tags: ["Vue.js", "GraphQL", "Redis"],
    featured: false,
    gradient: "from-cyan-500/30 via-cyan-500/10 to-transparent",
  },
  {
    title: "DataViz Pro",
    category: "Analytics Tool",
    description: "Data visualization and analytics platform for business intelligence teams.",
    tags: ["D3.js", "Python", "AWS"],
    featured: true,
    gradient: "from-rose-500/30 via-rose-500/10 to-transparent",
  },
  {
    title: "TaskMaster",
    category: "Productivity",
    description: "Team collaboration and project management tool with Kanban boards and time tracking.",
    tags: ["React", "Firebase", "TypeScript"],
    featured: false,
    gradient: "from-blue-500/30 via-blue-500/10 to-transparent",
  },
];

export default function Portfolio() {
  return (
    <PageLayout title="Our Portfolio" subtitle="Featured Work">
      <div className="grid gap-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl"
          data-testid="text-portfolio-intro"
        >
          Explore our collection of projects across various industries. Each project 
          represents our commitment to quality, innovation, and user-centric design.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <Card className="h-full overflow-hidden">
                <div className={`h-40 bg-gradient-to-br ${project.gradient} relative`}>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="gap-1">
                        <Star className="w-3 h-3" />
                        Featured
                      </Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-3xl font-bold text-foreground/20">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{project.category}</Badge>
                    <button 
                      className="text-muted-foreground hover:text-foreground transition-colors opacity-0 group-hover:opacity-100"
                      aria-label={`View ${project.title} project`}
                      data-testid={`button-view-${project.title.toLowerCase()}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2" data-testid={`text-project-${project.title.toLowerCase()}`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
