import { ReactNode } from "react";
import AnimateOnScroll from "../utilities/AnimateOnScroll";

interface Props {
  alwaysLeftAligned?: boolean;
  animate?: boolean;
  children: ReactNode;
  className?: string;
}

const InlineColumn = ({
  alwaysLeftAligned = false,
  animate = true,
  children,
  className,
}: Props) => {
  const classes = `h-full w-full flex ${alwaysLeftAligned ? "" : "sm:justify-center"} ${className}`;
  const innerClasses = `flex flex-col gap-10`;

  if (!animate)
    return (
      <div className={classes}>
        <div className={innerClasses}>{children}</div>
      </div>
    );
  return (
    <AnimateOnScroll className={classes}>
      <div className={innerClasses}>{children}</div>
    </AnimateOnScroll>
  );
};

export default InlineColumn;
