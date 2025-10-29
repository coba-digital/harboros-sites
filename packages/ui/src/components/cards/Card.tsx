import { ReactNode } from "react";
import { StaticImageData } from "next/image";
import AnimateOnScroll from "../utilities/AnimateOnScroll";

interface Props {
  background?: StaticImageData;
  children: ReactNode;
  className?: string;
  darkmode?: boolean;
  fillWidth?: boolean;
  noBackground?: boolean;
  padding?: "small" | "medium" | "large";
  textColor?: string;
}

const Card = ({
  background,
  children,
  className,
  darkmode = false,
  fillWidth = false,
  noBackground = false,
  padding,
  textColor,
}: Props) => {
  const darkModeClasses = `${
    darkmode
      ? `md:border-[var(--darker-gray)] md:shadow-xl ${
          noBackground ? "" : "bg-[rgba(0,0,0,.8)]"
        } text-white`
      : `border-transparent md:border-gray-100 md:shadow-md ${noBackground ? "" : "bg-white"}`
  }`;
  const paddingClasses = `${
    padding == "small" ? "p-2" : padding == "large" ? "lg:p-10 p-5" : "p-4"
  }`;
  const textColorClass = `${textColor ? `text-${textColor}` : ""}`;
  const widthClass = `${fillWidth ? "w-full" : ""}`;

  return (
    <AnimateOnScroll
      className={`border-3 rounded-md ${textColorClass} ${darkModeClasses} ${widthClass} ${paddingClasses} ${className}`}
      style={{
        backgroundImage: `${background ? `url(${background.src})` : ""}`,
        backgroundSize: "cover",
        backdropFilter: darkmode ? "blur(15px)" : "",
      }}
    >
      {children}
    </AnimateOnScroll>
  );
};

export default Card;
