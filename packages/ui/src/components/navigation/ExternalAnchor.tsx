interface Props {
  inline?: boolean;
  link: string;
  reverse?: boolean;
  text: string;
  textColor?: "base" | "lightGray" | "primary";
  textHoverColor?: "accent" | "white";
  textSize?: "small" | "medium" | "large";
}

import { FiExternalLink } from "react-icons/fi";

const ExternalAnchor = ({
  inline = false,
  link,
  reverse,
  text,
  textColor = "base",
  textHoverColor = "accent",
  textSize = "medium",
}: Props) => {
  const textSizeClass = `${textSize == "small" ? "text-xs" : textSize == "large" ? "text-xl" : ""}`;
  const iconSizeClass = `${textSize == "small" ? "text-xs" : textSize == "large" ? "text-lg" : ""}`;

  const textColorClass = `${textColor == "lightGray" ? "text-gray-400" : textColor == "primary" ? "text-(--primary)" : "text-base"}`;
  const textHoverClasses = `${textHoverColor == "white" ? "hover:text-white" : "hover:text-(--accent)"}`;

  return (
    <a
      className={`${textSizeClass} ${textColorClass} items-center cursor-pointer gap-2 ${textHoverClasses} ${inline ? "inline-flex" : "flex"}`}
      href={link}
      rel="noreferrer"
      target="_blank"
    >
      {!reverse ? (
        <>
          <FiExternalLink
            aria-hidden="true"
            className={`flex items-center ${iconSizeClass}`}
          />
          {text}
        </>
      ) : (
        <>
          {text}
          <FiExternalLink
            aria-hidden="true"
            className={`flex items-center ${iconSizeClass}`}
          />
        </>
      )}
    </a>
  );
};

export default ExternalAnchor;
