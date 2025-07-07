
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import ManagedITSupport from './components/ManagedITSupport.';
import CybersecurityService from './components/CybersecurityService';
import CloudInfrastructureServices from './components/CloudInfrastructureServices';
import ITConsultancyService from './components/ITConsultancyServices.';
import ComplianceGovernanceService from './components/ComplianceGovernanceService';
import DeviceEndpointProtectionService from './components/DeviceEndpointProtectionService';

import BackupDisasterRecovery from './components/BackupDisasterRecoveryService';
import ServicesOverview from './components/ServicesOverview';
import NetworkManagement from './components/NetworkManagement';
import VendorManagement from './components/VendorManagement';
import VoIPUnifiedCommunications from './components/VoIPUnifiedCommunications';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/support" element={<ManagedITSupport />} />
         <Route path="/cybersecurity" element={<CybersecurityService />} />
         <Route path="/cloud" element={<CloudInfrastructureServices />} />
         <Route path="/consultancy" element={<ITConsultancyService />} />
         <Route path="/compliance" element={<ComplianceGovernanceService />} />
         <Route path="/protection" element={<DeviceEndpointProtectionService />} />
         <Route path="/backup" element={<BackupDisasterRecovery/>} />
         <Route path="/services" element={<ServicesOverview />} />
         <Route path="/network" element={<NetworkManagement />} />
         <Route path="/vendor" element={<VendorManagement />} />
         <Route path="/VoIP" element={<VoIPUnifiedCommunications />} />

      </Routes>
    </Router>
    
  );
}

export default App;
      