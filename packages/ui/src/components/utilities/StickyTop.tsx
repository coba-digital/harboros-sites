import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const StickyTop = ({ children }: Props) => {
  return (
    <div className="bg-white w-full sticky top-0 z-100 border-b-3 border-(--section-border)">
      {children}
    </div>
  );
};

export default StickyTop;
