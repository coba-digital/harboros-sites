import { StaticImageData } from "next/image";
import { ReactNode, ReactElement } from "react";
import { AlignmentType } from "./AlignmentTypes";
import { ButtonType } from "./ButtonTypes";
import { AllSocialsType } from "./ListTypes";

export type HeroSectionType = {
  alignment?: "left" | "center" | "right";
  backgroundAlignment?: AlignmentType;
  backgroundColor?: string;
  backgroundImage?: StaticImageData;
  children: ReactNode;
  className?: string;
  ctaButton?: ButtonType;
  darkGradient?: boolean;
  extraTopPadding?: boolean;
  glass?: boolean;
  header1: ReactElement<HTMLHeadingElement>;
  header2?: ReactElement<HTMLHeadingElement>;
  leftBorder?: boolean;
  noGradient?: boolean;
  socials?: AllSocialsType;
  whiteText?: boolean;
};
