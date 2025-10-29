import { StaticImageData } from "next/image";
import { ButtonType } from "./ButtonTypes";
import { ReactElement, ReactNode } from "react";

// Social
export type socialLinkType = {
  icon: ReactElement;
  link: string;
  name: string;
};

export type SocialLinkListType = socialLinkType[];

// Cards
export type SimpleCardType = {
  buttonText?: string;
  external?: boolean;
  header: string;
  link?: string;
  paragraph: ReactNode;
};

export type ImageCardType = {
  buttonText?: string;
  category?: string;
  description: string;
  externalLink?: boolean;
  header: string;
  image: StaticImageData;
  imageAlt: string;
  link?: string;
  tag?: string;
};

export type NavigationMenuType = {
  header: string;
  links: { externalLink?: boolean; link: string; text: string }[];
}[];

export type NavigationLinkType = {
  link: string;
  menu?: NavigationMenuType;
  text: string;
};

// Navigation
export type NavigationBarLinksType = {
  links: NavigationLinkType[];
  cta?: ButtonType;
};
