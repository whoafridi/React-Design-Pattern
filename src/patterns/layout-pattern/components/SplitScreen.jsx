const SplitScreen = ({ children }) => {
  const [left, right] = children;
  return (
    <div className="flex h-screen">
      {left}
      {right}
    </div>
  );
};

export default SplitScreen;
