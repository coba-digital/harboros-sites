import { IconType } from "react-icons";

interface Props {
  className?: string;
  icon: IconType;
  text: string;
}

const IconHeader = ({ className, icon: Icon, text }: Props) => {
  return (
    <div className={`flex items-center gap-2  text-xl ${className}`}>
      <div className="flex items-center" aria-hidden="true">
        <Icon />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default IconHeader;
