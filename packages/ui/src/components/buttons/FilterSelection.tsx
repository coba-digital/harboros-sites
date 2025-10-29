"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import AnimateOnScroll from "../utilities/AnimateOnScroll";

interface Props {
  filters: string[];
}

const FilterSelection = ({ filters }: Props) => {
  const Button = ({ text }: { text: string }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const selection = searchParams.get("filter");
    console.log(selection);

    const handleClick = (text: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (text) {
        params.set("filter", text);
      } else {
        params.delete("filter");
      }

      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const selectedClasses = "bg-gray-400 text-white";

    const buttonColor = `${text == "all" && !selection ? selectedClasses : selection == text ? selectedClasses : "hover:bg-gray-100"}`;

    return (
      <button
        className={`py-2 px-3 capitalize ${buttonColor} cursor-pointer rounded-md text-sm sm:text-base`}
        onClick={() => {
          if (text == "all") handleClick("");
          else handleClick(text);
        }}
      >
        {text}
      </button>
    );
  };

  if (filters)
    return (
      <AnimateOnScroll className="bg-white p-2 rounded-xl shadow-md flex items-center gap-3">
        <Button text="all" />
        {filters.map((filter) => {
          return <Button key={filter} text={filter} />;
        })}
      </AnimateOnScroll>
    );
};

export default FilterSelection;
