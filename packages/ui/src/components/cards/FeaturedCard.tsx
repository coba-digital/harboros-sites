import { ReactNode } from "react";
import { StaticImageData } from "next/image";

// Components
import Button from "../buttons/Button";
import Card from "./Card";

// Types
import { ButtonType } from "@repo/types";
import { IconType } from "react-icons";

interface Props {
  background?: StaticImageData;
  button?: ButtonType | null;
  className?: string;
  darkMode?: boolean;
  header: string;
  icon?: IconType;
  center?: boolean;
  paragraph: ReactNode;
  tags?: string[];
  textColor?: string;
}

const FeaturedCard = ({
  background,
  button,
  className,
  darkMode,
  icon: Icon,
  center,
  header,
  paragraph,
  tags,
  textColor,
}: Props) => {
  const Tag = ({ tag }: { tag: string }) => {
    return (
      <div className="border-2 border-gray-100 text-gray-300 py-1 px-3 text-xs rounded-full text-nowrap">
        {tag}
      </div>
    );
  };

  return (
    <Card
      background={background}
      className={className}
      padding="large"
      darkmode={darkMode}
      textColor={textColor}
    >
      <div
        className={`max-w-100 flex flex-col gap-5 ${
          center ? "text-center items-center" : ""
        }`}
      >
        {Icon && <Icon className="text-[72px]" />}
        <h3>{header}</h3>
        {paragraph}
        {button && (
          <div className="mt-3">
            <Button button={button} />
          </div>
        )}
        {tags && (
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => {
              return <Tag key={tag} tag={tag} />;
            })}
          </div>
        )}
      </div>
    </Card>
  );
};

export default FeaturedCard;
