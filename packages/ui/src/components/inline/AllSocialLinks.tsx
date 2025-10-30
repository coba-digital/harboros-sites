import { SocialLink } from "@repo/ui";
import { SocialLinkListType, socialLinkType } from "@repo/types";

interface Props {
  color?: "black" | "white";
  size?: "small" | "medium" | "large";
  socials: SocialLinkListType;
}

const AllSocialLinks = ({
  color = "black",
  size = "medium",
  socials,
}: Props) => {
  const textSize = `${size == "large" ? "text-5xl" : size == "small" ? "text-xl" : "text-3xl"}`;
  const textColor = `${color == "black" ? "text-gray-800" : "text-white"}`;
  const hoverColor = `${color == "black" ? "hover:text-(--primary)" : "hover:text-(--accent)"}`;

  if (socials)
    return (
      <div className={`flex items-center gap-3 ${textColor} ${textSize}`}>
        {socials.map((social: socialLinkType) => {
          if (social.link)
            return (
              <SocialLink
                clasName={`transition-colors ${hoverColor}`}
                key={social.name}
                social={social}
              />
            );
        })}
      </div>
    );
};

export default AllSocialLinks;
