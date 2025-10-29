// Components
import { AnimateOnScroll, Button, FeaturedCard, SectionWrapper } from "../";
import { ButtonType, SimpleCardType } from "@repo/types";
import { StaticImageData } from "next/image";

interface Props {
  backgrounds?: StaticImageData[];
  cards: SimpleCardType[];
  className?: string;
  ctaCard?: ButtonType;
  header: string;
}

const SquareCardListSection = ({
  backgrounds,
  cards,
  className,
  ctaCard,
  header,
}: Props) => {
  const hasBackgrounds = Array.isArray(backgrounds) && backgrounds.length > 0;

  return (
    <SectionWrapper classes={className}>
      <div className="my-15 mx-5 lg:my-50 flex flex-col items-center gap-20">
        <AnimateOnScroll>
          <h1 className="text-center">{header}</h1>
        </AnimateOnScroll>

        {/* The Cards */}
        <div className="grid 2xl:grid-cols-3 md:grid-cols-2 lg:gap-10 gap-5 items-stretch">
          {cards.map((card, i) => {
            const bg = hasBackgrounds
              ? backgrounds![i % backgrounds!.length]
              : undefined;

            const { link, external, buttonText, paragraph } = card;
            const cardHeader = card.header;

            return (
              <AnimateOnScroll key={cardHeader}>
                <FeaturedCard
                  background={bg}
                  button={
                    link
                      ? {
                          link: link,
                          style: "tertiary",
                          color: "white",
                          text: `${buttonText ? buttonText : external ? "Visit Website" : "Learn More"}`,
                          external: external,
                        }
                      : null
                  }
                  className="h-full"
                  header={cardHeader}
                  paragraph={paragraph}
                  textColor="white"
                />
              </AnimateOnScroll>
            );
          })}
          {ctaCard && (
            <AnimateOnScroll className="border-2 border-gray-200 bg-gray-50 rounded-md flex items-center justify-center min-h-50">
              <Button
                button={{
                  color: ctaCard.color,
                  link: ctaCard.link,
                  size: ctaCard.size,
                  style: ctaCard.style,
                  text: ctaCard.text || "Learn More",
                }}
              />
            </AnimateOnScroll>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SquareCardListSection;
