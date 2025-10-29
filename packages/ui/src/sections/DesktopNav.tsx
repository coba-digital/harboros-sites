"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "../components/buttons/Button";
import { NavigationBarLinksType, NavigationMenuType } from "@repo/types";

interface Props {
  links: NavigationBarLinksType;
  onHover: (
    showMenu: boolean,
    menuItems: NavigationMenuType | undefined
  ) => void;
}

const DesktopNav = ({ links, onHover }: Props) => {
  const pathname = usePathname();
  const rootPath = pathname.split("/")[1];

  return (
    <div className="flex items-center gap-5">
      <nav className="flex items-center h-20">
        {links.links.map(({ link, menu, text }) => {
          const rootLink = link.split("/")[1];
          const isActive = pathname === link || rootPath === rootLink;

          return (
            <Link
              key={text}
              href={link}
              onClick={() => onHover(false, undefined)}
              onMouseEnter={() => {
                if (menu) {
                  onHover(true, menu);
                } else {
                  onHover(false, undefined);
                }
              }}
              className={`py-1 px-5 border-t-4 border-b-4 h-full flex items-center transition-colors hover:border-b-(--navLink-border-color-hover) ${
                isActive
                  ? "border-transparent text-(--primary) font-semibold"
                  : "border-transparent"
              }`}
            >
              {text}
            </Link>
          );
        })}
      </nav>
      {links.cta && (
        <Button
          button={{
            darkText: links.cta.darkText,
            link: links.cta.link,
            text: links.cta.text,
          }}
        />
      )}
    </div>
  );
};

export default DesktopNav;
