import { NavigationBarLinksType } from "@repo/types";
import {
  BsGithub,
  BsTwitterX,
  BsInstagram,
  BsFacebook,
  BsLinkedin,
} from "react-icons/bs";

export const socialLinks = [
  {
    name: "github",
    icon: <BsGithub />,
    link: "https://github.com/coreycollinsm/harbor-mail",
  },
  {
    name: "x",
    icon: <BsTwitterX />,
    link: "",
  },
  {
    name: "facebook",
    icon: <BsFacebook />,
    link: "",
  },
  {
    name: "instagram",
    icon: <BsInstagram />,
    link: "",
  },
  {
    name: "linkedin",
    icon: <BsLinkedin />,
    link: "",
  },
];

export const navigationBarLinks: NavigationBarLinksType = {
  links: [
    {
      link: "/",
      text: "Home",
    },
  ],
  cta: {
    color: "primary",
    link: "/contact",
    text: "Contact Us",
  },
};
