"use client";

import { useState } from "react";
import { StaticImageData } from "next/image";
import { IoReorderThreeOutline } from "react-icons/io5";
import {
  NavigationBarLinksType,
  NavigationMenuType,
  SocialLinkListType,
} from "@repo/types";

import SectionWrapper from "./SectionWrapper";
import FullScreenModal from "../components/utilities/FullScreenModal";
import LogoLink from "../components/navigation/LogoLink";
import NavList from "../components/navigation/NavList";
import DesktopNav from "./DesktopNav";
import NavigationMenu from "./NavigationMenu";
import Link from "next/link";

interface Props {
  darkMode?: boolean;
  links: NavigationBarLinksType;
  logoAlt?: string;
  logoHeight?: number;
  logoImage?: StaticImageData;
  logoText?: string;
  socials?: SocialLinkListType;
}

interface NavMenuState {
  showMenu: boolean;
  menuItems: NavigationMenuType | undefined;
}

const NavigationBar = ({
  darkMode = false,
  links,
  logoAlt = "No alt provided",
  logoHeight,
  logoImage,
  logoText = "Logo Here",
  socials,
}: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [navMenu, setNavMenu] = useState<NavMenuState>({
    showMenu: false,
    menuItems: undefined,
  });

  const handleHover = (
    showMenu: boolean,
    menuItems: NavigationMenuType | undefined
  ) => {
    setNavMenu({ showMenu, menuItems });
  };

  return (
    <SectionWrapper
      backgroundColor={darkMode ? "bg-[var(--blackest)]" : "bg-white"}
      noRelative
    >
      <div className="flex items-center justify-between px-5">
        <div>
          {logoImage ? (
            <LogoLink
              alt={logoAlt}
              image={logoImage}
              className="py-5"
              height={logoHeight}
            />
          ) : (
            <Link className="font-bold text-3xl text-gray-800" href="/">
              {logoText}
            </Link>
          )}
        </div>

        <div className="lg:inline hidden">
          <DesktopNav links={links} onHover={handleHover} />

          <NavigationMenu
            menu={navMenu}
            onHover={handleHover}
            socials={socials}
          />
        </div>
        {/* TODO Implement a mobile nav menu */}
        <div className="lg:hidden inline">
          <FullScreenModal
            icon={IoReorderThreeOutline}
            showModal={showModal}
            toggle={() => setShowModal((prev) => !prev)}
          >
            <nav className="flex flex-col items-center gap-5 text-3xl">
              <NavList
                links={links}
                onClick={() => setTimeout(() => setShowModal(false), 500)}
              />
            </nav>
          </FullScreenModal>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default NavigationBar;
