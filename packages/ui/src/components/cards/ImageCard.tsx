import Image from "next/image";

// Components
import Button from "../buttons/Button";
import Card from "./Card";
import { ImageCardType } from "@repo/types";
import AnimateOnScroll from "../utilities/AnimateOnScroll";

const ImageCard = ({
  buttonText = "Learn More",
  description,
  externalLink = false,
  header,
  image,
  imageAlt,
  link,
  tag,
}: ImageCardType) => {
  return (
    <AnimateOnScroll className="max-w-250 shadow-md">
      <Card>
        <div className="flex flex-col md:flex-row items-center gap-5 pb-5 md:pb-0">
          <Image
            className="rounded-md border-2 border-gray-100"
            src={image}
            alt={imageAlt}
            width="400"
            height="225"
          />
          <div className="flex flex-col items-start gap-5 md:gap-3 px-5">
            <h2>{header}</h2>
            <p>{description}</p>
            {link && (
              <Button
                button={{
                  external: externalLink,
                  link,
                  style: "secondary",
                  text: buttonText,
                  type: "button",
                }}
              />
            )}
            {tag && (
              <div className="bg-gray-200 text-gray-400 text-sm py-1 px-2 rounded-sm">
                {tag}
              </div>
            )}
          </div>
        </div>
      </Card>
    </AnimateOnScroll>
  );
};

export default ImageCard;
