import { ReactNode } from "react";
import { StaticImageData } from "next/image";

// Components
import SectionWrapper from "./SectionWrapper";
import AnimateOnScroll from "../components/utilities/AnimateOnScroll";

interface Props {
  align?: "left" | "center" | "right";
  backgroundImage?: StaticImageData;
  backgroundPositionX?: "left" | "center" | "right";
  backgroundPositionY?: "bottom" | "center" | "top";
  darkGradient?: boolean;
  extraPaddingY?: boolean;
  header?: string;
  children: ReactNode;
}

const SingleParagraphSection = ({
  align = "center",
  backgroundImage,
  backgroundPositionX,
  backgroundPositionY,
  darkGradient = false,
  extraPaddingY = false,
  header,
  children,
}: Props) => {
  const alignment = `${align == "left" ? "items-start" : align == "right" ? "items-end" : "items-center"}`;
  const paddingYClasses = `${extraPaddingY ? "py-30 md:py-50" : "py-20 md:py-40"}`;

  return (
    <SectionWrapper
      backgroundImage={backgroundImage}
      alignBackgroundX={backgroundPositionX}
      alignBackgroundY={backgroundPositionY}
      classes={`${paddingYClasses} px-5`}
      darkGradient={darkGradient}
    >
      <AnimateOnScroll className="flex justify-center">
        <div className={`max-w-200 flex flex-col gap-5 relative ${alignment}`}>
          {header && <h2>{header}</h2>}
          {children}
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
};

export default SingleParagraphSection;
