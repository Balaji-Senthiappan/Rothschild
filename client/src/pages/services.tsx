import { motion } from "framer-motion";
import { Code, Palette, Smartphone, Globe, Zap, Shield, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies like React, Next.js, and Node.js.",
    features: ["Custom Applications", "API Development", "Performance Optimization"],
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love. From wireframes to polished designs.",
    features: ["User Research", "Prototyping", "Design Systems"],
    color: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    features: ["React Native", "Flutter", "Native iOS/Android"],
    color: "from-amber-500/20 to-amber-500/5",
  },
  {
    icon: Globe,
    title: "E-Commerce",
    description: "Complete online store solutions with payment processing and inventory management.",
    features: ["Shopify", "Custom Stores", "Payment Integration"],
    color: "from-rose-500/20 to-rose-500/5",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Speed optimization and performance auditing for existing applications.",
    features: ["Core Web Vitals", "Load Time Optimization", "SEO"],
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Security audits, penetration testing, and secure development practices.",
    features: ["Security Audits", "Compliance", "Best Practices"],
    color: "from-blue-500/20 to-blue-500/5",
  },
];

export default function Services() {
  return (
    <PageLayout title="Our Services" subtitle="What We Offer">
      <div className="grid gap-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl"
          data-testid="text-services-intro"
        >
          We offer a comprehensive range of digital services to help your business 
          thrive in the modern landscape. Each service is tailored to meet your specific needs.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <Card className="h-full group overflow-visible">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 text-foreground" />
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2" data-testid={`text-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mt-auto">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="text-center pt-8"
        >
          <p className="text-muted-foreground mb-4" data-testid="text-cta-description">
            Ready to start your next project?
          </p>
          <Link href="/contact">
            <Button data-testid="button-get-started">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </PageLayout>
  );
}
