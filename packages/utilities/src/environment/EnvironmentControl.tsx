import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  environment: string;
}

const Environment = ({ children, environment }: Props) => {
  const currentEnvironment = process.env.NODE_ENV;
  if (currentEnvironment == environment) return <>{children}</>;
};

export default Environment;
