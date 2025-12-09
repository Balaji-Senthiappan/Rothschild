import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    title: "The Future of Web Navigation",
    excerpt: "Exploring how tile-based navigation is revolutionizing user experience on modern websites.",
    date: "Nov 28, 2024",
    readTime: "5 min read",
    category: "Design",
    gradient: "from-purple-500/20 to-transparent",
  },
  {
    title: "Mastering Framer Motion Animations",
    excerpt: "A comprehensive guide to creating smooth, performant animations with Framer Motion.",
    date: "Nov 25, 2024",
    readTime: "8 min read",
    category: "Development",
    gradient: "from-cyan-500/20 to-transparent",
  },
  {
    title: "Dark Mode Design Principles",
    excerpt: "Best practices for designing dark interfaces that are both beautiful and accessible.",
    date: "Nov 20, 2024",
    readTime: "6 min read",
    category: "Design",
    gradient: "from-amber-500/20 to-transparent",
  },
  {
    title: "Building Accessible Navigation",
    excerpt: "How to ensure your navigation patterns work for all users, including those using assistive technologies.",
    date: "Nov 15, 2024",
    readTime: "7 min read",
    category: "Accessibility",
    gradient: "from-emerald-500/20 to-transparent",
  },
  {
    title: "React Performance Optimization",
    excerpt: "Tips and tricks for optimizing your React applications for maximum performance.",
    date: "Nov 10, 2024",
    readTime: "10 min read",
    category: "Development",
    gradient: "from-rose-500/20 to-transparent",
  },
  {
    title: "The Psychology of User Interaction",
    excerpt: "Understanding how users think and interact with digital interfaces.",
    date: "Nov 5, 2024",
    readTime: "6 min read",
    category: "UX",
    gradient: "from-blue-500/20 to-transparent",
  },
];

export default function Blog() {
  return (
    <PageLayout title="Blog" subtitle="Latest Insights">
      <div className="grid gap-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl"
          data-testid="text-blog-intro"
        >
          Stay updated with our latest thoughts on design, development, and 
          everything in between. We share insights, tutorials, and industry perspectives.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <Card className="h-full overflow-hidden cursor-pointer">
                <div className={`h-32 bg-gradient-to-br ${post.gradient}`} />
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="outline">{post.category}</Badge>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors" data-testid={`text-post-${index}`}>
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
