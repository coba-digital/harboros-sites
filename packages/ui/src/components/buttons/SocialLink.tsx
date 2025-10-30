import { socialLinkType } from "@repo/types";

interface Props {
  clasName?: string;
  social: socialLinkType;
}

const SocialLink = ({ clasName, social }: Props) => {
  const { icon, link, name } = social;
  return (
    <a
      className={clasName}
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={name}
    >
      {icon}
    </a>
  );
};

export default SocialLink;
