const environment = process.env.NEXT_ENVIRONMENT;

const ConsoleLogString = (message: string) => {
  if (environment == "development") console.log(message);
};

export default ConsoleLogString;
