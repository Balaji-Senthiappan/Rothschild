import { useEffect, useRef, useState, useMemo } from "react";
import { useLocation } from "wouter";

interface SwipeConfig {
  threshold?: number;
  velocityThreshold?: number;
  enableNavigation?: boolean;
  routes?: string[];
}

interface SwipeState {
  isSwiping: boolean;
  swipeDirection: "left" | "right" | null;
  swipeDistance: number;
}

const defaultRoutes = ["/", "/about", "/services", "/portfolio", "/contact", "/blog", "/resources"];

export function useSwipeNavigation(config: SwipeConfig = {}) {
  const {
    threshold = 100,
    velocityThreshold = 0.5,
    enableNavigation = true,
    routes = defaultRoutes,
  } = config;

  const [location, setLocation] = useLocation();
  const [swipeState, setSwipeState] = useState<SwipeState>({
    isSwiping: false,
    swipeDirection: null,
    swipeDistance: 0,
  });

  const touchStart = useRef<{ x: number; y: number; time: number } | null>(null);
  const touchCurrent = useRef<{ x: number; y: number } | null>(null);
  const enableNavigationRef = useRef(enableNavigation);
  enableNavigationRef.current = enableNavigation;

  const currentIndex = useMemo(() => routes.indexOf(location), [routes, location]);
  const canSwipeLeft = currentIndex < routes.length - 1 && currentIndex !== -1;
  const canSwipeRight = currentIndex > 0;

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      touchStart.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now(),
      };
      touchCurrent.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStart.current) return;

      const touch = e.touches[0];
      touchCurrent.current = { x: touch.clientX, y: touch.clientY };

      const deltaX = touch.clientX - touchStart.current.x;
      const deltaY = touch.clientY - touchStart.current.y;

      if (Math.abs(deltaX) > Math.abs(deltaY) * 1.5 && Math.abs(deltaX) > 20) {
        e.preventDefault();
        
        setSwipeState({
          isSwiping: true,
          swipeDirection: deltaX > 0 ? "right" : "left",
          swipeDistance: Math.abs(deltaX),
        });
      }
    };

    const handleTouchEnd = () => {
      if (!touchStart.current || !touchCurrent.current) {
        resetSwipeState();
        return;
      }

      const deltaX = touchCurrent.current.x - touchStart.current.x;
      const deltaTime = Date.now() - touchStart.current.time;
      const velocity = Math.abs(deltaX) / deltaTime;

      const meetsThreshold = Math.abs(deltaX) > threshold;
      const meetsVelocity = velocity > velocityThreshold;

      if (enableNavigationRef.current && (meetsThreshold || meetsVelocity)) {
        const idx = routes.indexOf(location);
        
        if (idx !== -1) {
          if (deltaX > 0 && idx > 0) {
            setLocation(routes[idx - 1]);
            triggerHapticFeedback();
          } else if (deltaX < 0 && idx < routes.length - 1) {
            setLocation(routes[idx + 1]);
            triggerHapticFeedback();
          }
        }
      }

      resetSwipeState();
    };

    const resetSwipeState = () => {
      touchStart.current = null;
      touchCurrent.current = null;
      setSwipeState({
        isSwiping: false,
        swipeDirection: null,
        swipeDistance: 0,
      });
    };

    const triggerHapticFeedback = () => {
      if ("vibrate" in navigator) {
        navigator.vibrate(10);
      }
    };

    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });
    document.addEventListener("touchcancel", resetSwipeState, { passive: true });

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("touchcancel", resetSwipeState);
    };
  }, [threshold, velocityThreshold, location, setLocation, routes]);

  return {
    ...swipeState,
    currentRoute: location,
    currentIndex,
    totalRoutes: routes.length,
    canSwipeLeft,
    canSwipeRight,
  };
}
