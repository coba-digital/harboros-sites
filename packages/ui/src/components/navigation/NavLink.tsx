"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  onClick?: () => void;
  text: string;
  link: string;
}

const NavLink = ({ text, link, onClick }: Props) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const rootPath = pathSegments[1];

  const linkSegments = link.split("/");
  const rootLink = linkSegments[1];

  return (
    <Link
      href={link}
      className={`py-1 px-2 border-b-2 hover:border-(--navLink-border-color-hover) transition-colors ${
        pathname === link || rootPath == rootLink
          ? "border-(--navLink-border-color)"
          : "border-transparent"
      }`}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default NavLink;
