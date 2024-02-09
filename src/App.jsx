import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Todos from "./pages/Todos";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
