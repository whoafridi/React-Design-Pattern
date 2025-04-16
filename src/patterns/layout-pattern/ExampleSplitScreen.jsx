import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBAr";
import SplitScreen from "./components/SplitScreen";

const ExampleSplitScreen = () => {
  return (
    <SplitScreen>
      <LeftSideBar title={"Left"} />
      <RightSideBar title={"Right"} />
    </SplitScreen>
  );
};

export default ExampleSplitScreen;
