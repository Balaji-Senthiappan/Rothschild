import { motion } from "framer-motion";
import { Download, FileText, Palette, Code, Video, BookOpen, ArrowDown } from "lucide-react";
import { PageLayout } from "@/components/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const resources = [
  {
    icon: Palette,
    title: "Design System Kit",
    description: "A comprehensive Figma design kit with all components used in our tile navigation system.",
    type: "Figma",
    size: "12 MB",
    gradient: "from-purple-500/20 to-transparent",
  },
  {
    icon: Code,
    title: "React Component Library",
    description: "Production-ready React components for building tile-based navigation interfaces.",
    type: "GitHub",
    size: "8.5 MB",
    gradient: "from-cyan-500/20 to-transparent",
  },
  {
    icon: FileText,
    title: "Animation Guidelines",
    description: "Detailed documentation on animation principles and timing functions we use.",
    type: "PDF",
    size: "2.3 MB",
    gradient: "from-amber-500/20 to-transparent",
  },
  {
    icon: Video,
    title: "Tutorial Series",
    description: "Video tutorials covering everything from basics to advanced animation techniques.",
    type: "Video",
    size: "1.2 GB",
    gradient: "from-rose-500/20 to-transparent",
  },
  {
    icon: BookOpen,
    title: "Best Practices Guide",
    description: "Comprehensive guide on implementing accessible and performant tile navigation.",
    type: "E-Book",
    size: "4.7 MB",
    gradient: "from-emerald-500/20 to-transparent",
  },
  {
    icon: Code,
    title: "Tailwind Config",
    description: "Custom Tailwind CSS configuration with all our design tokens and utilities.",
    type: "Config",
    size: "45 KB",
    gradient: "from-blue-500/20 to-transparent",
  },
];

export default function Resources() {
  return (
    <PageLayout title="Resources" subtitle="Free Downloads">
      <div className="grid gap-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl"
          data-testid="text-resources-intro"
        >
          Access our collection of free resources to help you build amazing tile-based 
          navigation systems. From design files to code templates, we've got you covered.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <Card className="h-full overflow-hidden">
                <div className={`h-24 bg-gradient-to-br ${resource.gradient} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <resource.icon className="w-10 h-10 text-foreground/30" />
                  </div>
                </div>
                
                <CardContent className="p-6 flex flex-col h-[calc(100%-6rem)]">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{resource.type}</Badge>
                    <span className="text-xs text-muted-foreground">{resource.size}</span>
                  </div>
                  
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2" data-testid={`text-resource-${index}`}>
                    {resource.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                    {resource.description}
                  </p>
                  
                  <Button variant="outline" className="w-full" data-testid={`button-download-${index}`}>
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <Card className="bg-gradient-to-br from-primary/10 via-card to-card border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="font-display text-2xl font-bold text-foreground mb-3" data-testid="text-bundle-heading">
                Complete Resource Bundle
              </h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Get all resources in one convenient download. Perfect for teams looking to 
                implement tile-based navigation from scratch.
              </p>
              <Button size="lg" data-testid="button-download-bundle">
                <ArrowDown className="w-4 h-4 mr-2" />
                Download All Resources
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </PageLayout>
  );
}
