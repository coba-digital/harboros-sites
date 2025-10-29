"use client";
import {
  forwardRef,
  type HTMLAttributes,
  type MutableRefObject,
  useCallback,
} from "react";

import {
  useInViewAnimation,
  type UseInViewAnimationOptions,
} from "@repo/hooks";

type AnimateOnScrollProps = HTMLAttributes<HTMLDivElement> &
  UseInViewAnimationOptions;

const AnimateOnScroll = forwardRef<HTMLDivElement, AnimateOnScrollProps>(
  (
    {
      animation = "fade-up",
      duration,
      delay,
      distance = 32,
      easing,
      once,
      threshold,
      rootMargin,
      className,
      style,
      children,
      ...rest
    },
    forwardedRef
  ) => {
    const {
      ref,
      className: animationClass,
      style: animationStyle,
    } = useInViewAnimation({
      animation,
      duration,
      delay,
      distance,
      easing,
      once,
      threshold,
      rootMargin,
    });

    const setRef = useCallback(
      (node: HTMLDivElement | null) => {
        ref(node);

        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          (forwardedRef as MutableRefObject<HTMLDivElement | null>).current =
            node;
        }
      },
      [forwardedRef, ref]
    );

    const mergedClassName = [animationClass, className]
      .filter(Boolean)
      .join(" ");
    const mergedStyle = { ...animationStyle, ...style };

    return (
      <div
        ref={setRef}
        className={mergedClassName}
        style={mergedStyle}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

AnimateOnScroll.displayName = "AnimateOnScroll";

export default AnimateOnScroll;
