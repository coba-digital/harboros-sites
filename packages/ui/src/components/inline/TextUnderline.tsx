const TextUnderline = ({ children }: { children: string }) => {
  return (
    <span className="text-(--primary) font-semibold border-b-3 border-b-(--accent) transition-colors pb-0.5">
      {children}
    </span>
  );
};

export default TextUnderline;
