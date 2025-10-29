"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

// Components
import FilterSelection from "../components/buttons/FilterSelection";
import ImageCard from "../components/cards/ImageCard";
import SectionWrapper from "./SectionWrapper";

// Types
import { ImageCardType } from "@repo/types";
import AnimateOnScroll from "../components/utilities/AnimateOnScroll";

interface Props {
  cards: ImageCardType[];
  id?: string;
  description?: string;
  filters?: string[];
  header?: string;
}

function ImageCardListContent({
  id,
  cards,
  description,
  filters,
  header,
}: Props) {
  const searchParams = useSearchParams();
  const currentFilter = searchParams.get("filter");

  return (
    <SectionWrapper
      backgroundColor="bg-gray-100"
      classes="py-20 md:py-50 px-5"
      id={id}
    >
      <div className="flex flex-col gap-20 items-center">
        {header && (
          <AnimateOnScroll className="flex flex-col gap-3 items-center max-w-200">
            <h1 className="text-gray-400">{header}</h1>
            {description && <p>{description}</p>}
          </AnimateOnScroll>
        )}

        {filters && <FilterSelection filters={filters} />}

        {cards
          .filter((card) => !currentFilter || currentFilter === card.category)
          .map((card) => (
            <ImageCard
              buttonText={card.buttonText}
              description={card.description}
              externalLink={card.externalLink}
              header={card.header}
              image={card.image}
              imageAlt={card.imageAlt}
              key={card.header}
              link={card.link}
              tag={card.tag}
            />
          ))}
      </div>
    </SectionWrapper>
  );
}

export default function ImageCardListSection(props: Props) {
  return (
    <Suspense fallback={<div>Loading cards...</div>}>
      <ImageCardListContent {...props} />
    </Suspense>
  );
}
