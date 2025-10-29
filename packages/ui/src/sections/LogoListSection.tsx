import Image, { StaticImageData } from "next/image";
import AnimateOnScroll from "../components/utilities/AnimateOnScroll";

interface Props {
  header: string;
  description?: string;
  logos: {
    image: StaticImageData;
    alt: string;
    height?: number;
    link?: string;
  }[];
}

const LogoListSection = ({ logos, header, description }: Props) => {
  const maxColCount = 6;
  const logoCount = logos.length;
  const colCount = logoCount < maxColCount ? logoCount : maxColCount;

  return (
    <div className="py-30 md:py-50 px-5 flex flex-col items-center gap-20 w-full">
      <AnimateOnScroll className="flex flex-col gap-3 items-center">
        <h2>{header}</h2>
        <p className="text-[var(--dark-gray)] text-center">{description}</p>
      </AnimateOnScroll>
      <div
        className="md:grid flex flex-col gap-20 md:gap-10 items-center place-items-center"
        style={{ gridTemplateColumns: `repeat(${colCount}, 1fr)` }}
      >
        {logos.map(({ image, alt, height, link }) => {
          if (link)
            return (
              <a href={link} key={alt} target="_blank" rel="noreferrer">
                <AnimateOnScroll>
                  <Image src={image} alt={alt} height={height ? height : 30} />
                </AnimateOnScroll>
              </a>
            );
          return (
            <AnimateOnScroll key={alt}>
              <Image src={image} alt={alt} height={height ? height : 30} />
            </AnimateOnScroll>
          );
        })}
      </div>
    </div>
  );
};

export default LogoListSection;
