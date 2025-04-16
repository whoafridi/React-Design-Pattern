import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Example from "./ControlledVsUnControlled/Example";
import ExampleSplitScreen from "./patterns/layout-pattern/ExampleSplitScreen";
import ExampleList from "./patterns/layout-pattern/ExampleList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/layout-pattern" element={<ExampleList />} />
        {/* <Route path="/layout-pattern" element={<ExampleSplitScreen />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
