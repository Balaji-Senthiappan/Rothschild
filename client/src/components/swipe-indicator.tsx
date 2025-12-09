import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwipeNavigation } from "@/hooks/use-swipe-navigation";

export function SwipeIndicator() {
  const {
    isSwiping,
    swipeDirection,
    swipeDistance,
    canSwipeLeft,
    canSwipeRight,
  } = useSwipeNavigation({ enableNavigation: true });

  const opacity = Math.min(swipeDistance / 150, 1);
  const scale = 0.8 + (opacity * 0.4);

  return (
    <>
      <AnimatePresence>
        {isSwiping && swipeDirection === "right" && canSwipeRight && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity, x: 0, scale }}
            exit={{ opacity: 0, x: -20 }}
            className="fixed left-4 top-1/2 -translate-y-1/2 z-50 pointer-events-none"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
              <ChevronLeft className="w-6 h-6 text-primary" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSwiping && swipeDirection === "left" && canSwipeLeft && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity, x: 0, scale }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed right-4 top-1/2 -translate-y-1/2 z-50 pointer-events-none"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
              <ChevronRight className="w-6 h-6 text-primary" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function MobileNavDots() {
  const { currentIndex, totalRoutes } = useSwipeNavigation({ enableNavigation: false });

  if (currentIndex === -1) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden"
    >
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border">
        {Array.from({ length: totalRoutes }).map((_, i) => (
          <motion.div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
            }`}
            animate={{
              scale: i === currentIndex ? 1.2 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        ))}
      </div>
    </motion.div>
  );
}
