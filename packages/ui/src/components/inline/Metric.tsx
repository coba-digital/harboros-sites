import { MetricType } from "@repo/types";
import AnimateOnScroll from "../utilities/AnimateOnScroll";

interface Props {
  animationDelay?: number;
  data: MetricType;
}

const Metric = ({
  animationDelay,
  data: { topText, bottomText, metric, disclaimer },
}: Props) => {
  return (
    <AnimateOnScroll
      className="flex flex-col items-center gap-5"
      delay={animationDelay}
    >
      <div className="flex flex-col items-center gap-3">
        <h5>{topText}</h5>
        <h1>{metric}</h1>
        <h5>{bottomText}</h5>
      </div>
      {disclaimer && (
        <p className="text-(--gray-medium) text-sm italic">*{disclaimer}</p>
      )}
    </AnimateOnScroll>
  );
};

export default Metric;
