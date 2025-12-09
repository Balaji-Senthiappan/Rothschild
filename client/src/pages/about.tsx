import { motion } from "framer-motion";
import { Users, Target, Heart, Award } from "lucide-react";
import { PageLayout } from "@/components/page-layout";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We focus on creating meaningful digital experiences that make a real impact.",
  },
  {
    icon: Heart,
    title: "User-Centered",
    description: "Every decision we make puts the end user first, ensuring intuitive interactions.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest quality in every project we undertake.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "We believe the best work comes from open communication and teamwork.",
  },
];

const team = [
  { name: "Alex Chen", role: "Founder & CEO", initials: "AC" },
  { name: "Sarah Miller", role: "Design Lead", initials: "SM" },
  { name: "Marcus Johnson", role: "Tech Director", initials: "MJ" },
  { name: "Emily Davis", role: "Product Manager", initials: "ED" },
];

export default function About() {
  return (
    <PageLayout title="About Us" subtitle="Our Story">
      <div className="grid gap-12 md:gap-16">
        <section>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6" data-testid="text-about-intro">
              We are a team of passionate designers, developers, and strategists dedicated to 
              creating exceptional digital experiences. Our tile-based navigation system represents 
              our commitment to innovation and user-centric design.
            </p>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-about-description">
              Founded with the belief that navigation should be both beautiful and intuitive, 
              we've reimagined how users interact with websites. Our approach combines modern 
              animation principles with accessibility best practices to create experiences that 
              delight while remaining functional.
            </p>
          </motion.div>
        </section>
        
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8"
            data-testid="text-values-heading"
          >
            Our Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2" data-testid={`text-value-${value.title.toLowerCase()}`}>
                          {value.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
        
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8"
            data-testid="text-team-heading"
          >
            Our Team
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-xl md:text-2xl font-bold text-foreground">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground" data-testid={`text-team-member-${index}`}>
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
