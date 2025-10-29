import { ReactNode } from "react";
import { StaticImageData } from "next/image";

// Components
import Button from "../components/buttons/Button";
import Metric from "../components/inline/Metric";
import SectionWrapper from "./SectionWrapper";

// Types
import { ButtonType, MetricType } from "@repo/types";
import AnimateOnScroll from "../components/utilities/AnimateOnScroll";

interface Props {
  backgroundImage?: StaticImageData;
  metrics: [MetricType, MetricType, MetricType];
  cta?: { button: ButtonType; paragraph: ReactNode };
}

const ThreeMetricsSection = ({ backgroundImage, cta, metrics }: Props) => {
  const { button, paragraph } = cta || {};
  return (
    <SectionWrapper
      backgroundImage={backgroundImage}
      classes="py-30 md:py-50 px-5"
    >
      <div className="w-full flex flex-col gap-20">
        <AnimateOnScroll>
          <h1 className="text-center">A Glance At The Numbers</h1>
        </AnimateOnScroll>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-20">
          {metrics.map(({ topText, bottomText, metric, disclaimer }, i) => {
            return (
              <Metric
                data={{
                  topText,
                  metric,
                  bottomText,
                  disclaimer,
                }}
                key={`${topText} ${metric} ${bottomText}`}
              />
            );
          })}
        </div>
        {paragraph && button && (
          <AnimateOnScroll className="flex flex-col md:flex-row items-center justify-center gap-3 text-[15px]">
            {paragraph}
            {button && <Button button={button} />}
          </AnimateOnScroll>
        )}
      </div>
    </SectionWrapper>
  );
};

export default ThreeMetricsSection;
