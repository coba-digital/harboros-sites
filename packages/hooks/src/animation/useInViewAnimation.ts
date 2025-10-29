"use client";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
} from "react";

export type AnimationVariant =
  | "fade"
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "zoom-in"
  | "zoom-out";

export interface UseInViewAnimationOptions {
  animation?: AnimationVariant;
  duration?: number;
  delay?: number;
  distance?: number | string;
  easing?: string;
  once?: boolean;
  threshold?: number | number[];
  rootMargin?: string;
}

export interface UseInViewAnimationResult {
  ref: (node: HTMLElement | null) => void;
  inView: boolean;
  hasAnimated: boolean;
  className: string;
  style: CSSVariableProperties;
}

type CSSVariableProperties = CSSProperties & {
  [key: `--${string}`]: string | number;
};

const animationClassMap: Record<AnimationVariant, string> = {
  fade: "ui-animate-fade",
  "fade-up": "ui-animate-fade-up",
  "fade-down": "ui-animate-fade-down",
  "fade-left": "ui-animate-fade-left",
  "fade-right": "ui-animate-fade-right",
  "slide-up": "ui-animate-slide-up",
  "slide-down": "ui-animate-slide-down",
  "slide-left": "ui-animate-slide-left",
  "slide-right": "ui-animate-slide-right",
  "zoom-in": "ui-animate-zoom-in",
  "zoom-out": "ui-animate-zoom-out",
};

const DEFAULT_OPTIONS: Required<
  Omit<UseInViewAnimationOptions, "distance" | "threshold">
> & {
  distance?: number | string;
  threshold: number | number[];
} = {
  animation: "fade-up",
  duration: 600,
  delay: 0,
  distance: undefined,
  easing: "cubic-bezier(0.33, 1, 0.68, 1)",
  once: true,
  threshold: 0.2,
  rootMargin: "0px 0px -10% 0px",
};

export function useInViewAnimation(
  options: UseInViewAnimationOptions = {}
): UseInViewAnimationResult {
  const {
    animation = DEFAULT_OPTIONS.animation,
    duration = DEFAULT_OPTIONS.duration,
    delay = DEFAULT_OPTIONS.delay,
    distance = DEFAULT_OPTIONS.distance,
    easing = DEFAULT_OPTIONS.easing,
    once = DEFAULT_OPTIONS.once,
    threshold = DEFAULT_OPTIONS.threshold,
    rootMargin = DEFAULT_OPTIONS.rootMargin,
  } = options;

  const [node, setNode] = useState<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const ref = useCallback((nextNode: HTMLElement | null) => {
    setNode(nextNode ?? null);
  }, []);

  useEffect(() => {
    if (!node) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      setHasAnimated(true);
      return;
    }

    const thresholdValue = Array.isArray(threshold)
      ? threshold.length > 0
        ? Math.max(...threshold)
        : 0
      : typeof threshold === "number"
        ? threshold
        : 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting ||
            entry.intersectionRatio >= thresholdValue
          ) {
            setInView(true);
            setHasAnimated(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { rootMargin, threshold }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
      observer.disconnect();
    };
  }, [node, once, rootMargin, threshold]);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      setInView(true);
      setHasAnimated(true);
    }

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setInView(true);
        setHasAnimated(true);
      } else if (!once) {
        setInView(false);
      }
    };

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, [once]);

  const animationKey = animationClassMap[animation]
    ? animation
    : DEFAULT_OPTIONS.animation;

  const className = useMemo(() => {
    const classes = ["ui-animate", animationClassMap[animationKey]];
    const shouldShow = once ? hasAnimated || inView : inView;

    if (shouldShow) {
      classes.push("ui-animate-visible");
    }

    return classes.filter(Boolean).join(" ");
  }, [animationKey, hasAnimated, inView, once]);

  const style = useMemo(() => {
    const inlineStyle: CSSVariableProperties = {};

    if (typeof duration === "number") {
      inlineStyle["--ui-animate-duration"] = `${duration}ms`;
    }

    if (typeof delay === "number" && delay > 0) {
      inlineStyle["--ui-animate-delay"] = `${delay}ms`;
    }

    if (typeof easing === "string") {
      inlineStyle["--ui-animate-easing"] = easing;
    }

    if (typeof distance !== "undefined") {
      inlineStyle["--ui-animate-distance"] =
        typeof distance === "number" ? `${distance}px` : distance;
    }

    return inlineStyle;
  }, [delay, distance, duration, easing]);

  return {
    ref,
    inView,
    hasAnimated,
    className,
    style,
  };
}
