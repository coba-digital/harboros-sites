const ConsoleLogString = (message: string) => {
  if (process.env.NODE_ENV == "development") console.log(message);
};

export default ConsoleLogString;
