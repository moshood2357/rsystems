
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import ManagedITSupport from './components/ManagedITSupport.';
import CybersecurityService from './components/CybersecurityService';
import CloudInfrastructureServices from './components/CloudInfrastructureServices';


function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/support" element={<ManagedITSupport />} />
         <Route path="/cybersecurity" element={<CybersecurityService />} />
         <Route path="/cloud" element={<CloudInfrastructureServices />} />
      </Routes>
    </Router>
    
  );
}

export default App;
      