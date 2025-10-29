// Types
import { NavigationBarLinksType } from "@repo/types";

// Components
import NavLink from "./NavLink";
import Button from "../buttons/Button";

interface Props {
  links: NavigationBarLinksType;
  onClick?: () => void;
}

// TODO once navbar is updated, verify if this is still being used
const NavList = ({ links, onClick }: Props) => {
  return (
    <>
      {links.links.map((link) => {
        return (
          <NavLink
            key={link.text}
            onClick={onClick}
            text={link.text}
            link={link.link}
          />
        );
      })}
      {links.cta && (
        <Button
          button={{
            action: onClick,
            darkText: links.cta.darkText,
            link: links.cta.link,
            text: links.cta.text,
          }}
        />
      )}
    </>
  );
};

export default NavList;
