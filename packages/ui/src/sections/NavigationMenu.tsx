import { NavigationMenuType, SocialLinkListType } from "@repo/types";
import Link from "next/link";
import ExternalAnchor from "../components/navigation/ExternalAnchor";
import AllSocialLinks from "../components/inline/AllSocialLinks";

interface Props {
  menu: {
    showMenu: boolean;
    menuItems: NavigationMenuType | undefined;
  };
  socials?: SocialLinkListType;
  onHover: (showMenu: boolean, menuItems: undefined) => void;
}

const NavigationMenu = ({ menu, onHover, socials }: Props) => {
  const { showMenu, menuItems } = menu;

  if (showMenu && menuItems)
    return (
      <div
        className="bg-gray-100 border-y-2 shadow-xl border-gray-200 w-full absolute bottom-0 left-0 right-0 flex flex-col items-center"
        onMouseLeave={() => onHover(false, undefined)}
        style={{
          transform: "translateY(100%)",
        }}
      >
        <div className="max-w-[1400px] w-full grid grid-cols-4 items-start py-10 px-5">
          {menuItems.map((section) => {
            return (
              <div className="flex flex-col gap-5" key={section.header}>
                <h5 className="text-gray-500">{section.header}</h5>
                <div className="flex flex-col gap-2 items-start">
                  {section.links.map((link) => {
                    if (!link.externalLink)
                      return (
                        <Link
                          className="hover:text-[var(--primary)]"
                          href={link.link}
                          key={link.text}
                          onClick={() => onHover(false, undefined)}
                        >
                          {link.text}
                        </Link>
                      );
                    else
                      return (
                        <ExternalAnchor
                          key={link.text}
                          link={link.link}
                          reverse
                          text={link.text}
                        />
                      );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        {socials && (
          <div className="w-full bg-white flex justify-center">
            <div className="max-w-[1400px] w-full p-5 flex gap-3 items-center">
              Connect with Us:
              <AllSocialLinks size="small" socials={socials} />
            </div>
          </div>
        )}
      </div>
    );
};

export default NavigationMenu;
