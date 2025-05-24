import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Play from "./pages/Play";
import Scores from "./pages/Scores";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/scoreboard" element={<Scores />} />
        <Route path="/about" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
