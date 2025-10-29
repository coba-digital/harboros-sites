import IconHeader from "./IconHeader";
import { IconType } from "react-icons";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  icon: IconType;
  title: string;
}

const IconHeaderList = ({ children, icon, title }: Props) => {
  return (
    <div className="flex items-start flex-col">
      <IconHeader className="mb-5" icon={icon} text={title} />
      {children}
    </div>
  );
};

export default IconHeaderList;
