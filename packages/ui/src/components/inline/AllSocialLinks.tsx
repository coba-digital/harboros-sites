import { SocialLink } from "@repo/ui";
import { SocialLinkListType, socialLinkType } from "@repo/types";

interface Props {
  size?: "small" | "medium" | "large";
  socials: SocialLinkListType;
}

const AllSocialLinks = ({ size = "medium", socials }: Props) => {
  const textSize = `${size == "large" ? "text-5xl" : size == "small" ? "text-xl" : "text-3xl"}`;

  if (socials)
    return (
      <div className={`flex items-center gap-3 text-gray-800 ${textSize}`}>
        {socials.map((social: socialLinkType) => {
          if (social.link)
            return <SocialLink key={social.name} social={social} />;
        })}
      </div>
    );
};

export default AllSocialLinks;
