
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    
  );
}

export default App;
      