import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./page/LandingPage";
import AboutMe from "./page/AboutMe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/AboutMe" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
