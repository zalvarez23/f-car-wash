import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./screens/home/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
