import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  environment: string;
}

const Environment = ({ children, environment }: Props) => {
  const currentEnvironment = process.env.NEXT_ENVIRONMENT;
  if (currentEnvironment == environment) return <>{children}</>;
};

export default Environment;
