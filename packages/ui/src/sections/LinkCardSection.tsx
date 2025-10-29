import { StaticImageData } from "next/image";

import Button from "../components/buttons/Button";
import SectionWrapper from "./SectionWrapper";
import AnimateOnScroll from "../components/utilities/AnimateOnScroll";

interface Props {
  background: StaticImageData;
  header: string;
  link: string;
  paragraph: string;
}

const LinkCardSection = ({ background, header, link, paragraph }: Props) => {
  return (
    <SectionWrapper classes="my-30 mx-5">
      <AnimateOnScroll
        className="pt-120 pb-10 px-10 lg:px-25 rounded-md text-white flex flex-col lg:flex-row justify-between lg:items-end gap-10 lg:gap-20"
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent, rgba(0,0,0,.7)), url(${background.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <AnimateOnScroll className="flex flex-col gap-5" delay={300}>
          <h2>{header}</h2>
          <p className="max-w-150">{paragraph}</p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={600}>
          <Button
            button={{
              color: "white",
              external: true,
              link,
              size: "large",
              style: "secondary",
              text: "Visit Dedicated Site",
              type: "button",
            }}
          />
        </AnimateOnScroll>
      </AnimateOnScroll>
    </SectionWrapper>
  );
};

export default LinkCardSection;
