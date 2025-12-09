import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "wouter";
import { LucideIcon } from "lucide-react";
import { useRef } from "react";

interface NavigationTileProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  index: number;
  color?: string;
  iconBg?: string;
  borderColor?: string;
  className?: string;
}

export function NavigationTile({
  title,
  description,
  icon: Icon,
  href,
  index,
  color = "from-primary to-primary",
  iconBg = "bg-primary/20",
  borderColor = "border-primary/30",
  className = "",
}: NavigationTileProps) {
  const tileRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), springConfig);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tileRef.current) return;
    const rect = tileRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      className={`group perspective-1000 ${className}`}
    >
      <Link
        href={href}
        data-testid={`tile-${title.toLowerCase().replace(/\s+/g, "-")}`}
        aria-label={`Navigate to ${title}: ${description}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl"
      >
        <motion.div
          ref={tileRef}
          className={`
            relative overflow-hidden cursor-pointer rounded-xl
            aspect-square p-4
            backdrop-blur-md
            bg-white/5
            border border-white/20
            shadow-lg shadow-black/20
            transition-[background-color,border-color,box-shadow] duration-300 ease-out
            flex flex-col items-center justify-center gap-2
            group-hover:bg-white/10
            group-hover:border-white/30
            group-hover:shadow-xl group-hover:shadow-black/30
            scale-100 group-hover:scale-[1.2]
          `}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileTap={{ scale: 0.98 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />
          
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]" 
            style={{ transition: "transform 0.7s ease-in-out, opacity 0.3s" }}
          />
          
          <div className="relative z-10">
            <motion.div
              className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/15"
            >
              <Icon 
                className="w-5 h-5 text-white"
                strokeWidth={1.5}
              />
            </motion.div>
          </div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-xs font-display font-light text-white group-hover:text-white transition-colors duration-200 leading-tight">
              {title}
            </h3>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
