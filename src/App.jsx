import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import PlajTime from "./pages/PlajTime";

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plajtime" element={<PlajTime />} />
      </Routes>
    </Router>
  );
}
