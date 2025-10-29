import { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface Props {
  alignBackgroundY?: "top" | "center" | "bottom";
  alignBackgroundX?: "left" | "center" | "right";
  backgroundColor?: string;
  backgroundImage?: StaticImageData;
  classes?: string;
  darkGradient?: boolean;
  children: ReactNode;
  id?: string;
  noGradient?: boolean;
  noRelative?: boolean;
  nowrap?: boolean;
  sticky?: boolean;
  styles?: React.CSSProperties;
}

const SectionWrapper = ({
  alignBackgroundY,
  alignBackgroundX,
  backgroundColor,
  backgroundImage,
  classes,
  children,
  darkGradient = false,
  id,
  noGradient = false,
  noRelative = false,
  nowrap,
  sticky = false,
  styles,
}: Props) => {
  const setBackground = () => {
    if (noGradient) return `url(${backgroundImage?.src})`;
    if (darkGradient)
      return `linear-gradient(to bottom, rgba(0,0,0,.2), rgba(0,0,0,.7)), url(${backgroundImage?.src})`;
    if (backgroundImage)
      return `linear-gradient(to bottom, rgba(255,255,255,.6) 40%, white), url(${backgroundImage?.src})`;
  };
  const position = `${
    sticky ? "sticky top-0 z-[100]" : noRelative ? "" : "relative"
  }`;

  const compStyles = {
    backgroundImage: setBackground(),
    backgroundSize: "cover",
    backgroundPosition: `${
      alignBackgroundY ? alignBackgroundY : "center"
    } ${alignBackgroundX ? alignBackgroundX : "center"}`,
  };

  if (nowrap) return children;
  else
    return (
      <div
        className={`${position} w-full flex justify-center ${backgroundColor} overflow-hidden ${classes} ${
          darkGradient ? "text-white" : ""
        }`}
        id={id}
        style={{ ...compStyles, ...styles }}
      >
        <div className="w-full max-w-[1400px]">{children}</div>
      </div>
    );
};

export default SectionWrapper;
