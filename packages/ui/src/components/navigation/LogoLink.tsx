import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import Image from "next/image";

interface Props {
  alt: string;
  className?: string;
  height?: number;
  image: StaticImport;
}

const LogoLink = ({ alt, className, height = 40, image }: Props) => {
  return (
    <Link className={className} href="/">
      <Image alt={alt} height={height} src={image} />
    </Link>
  );
};

export default LogoLink;
