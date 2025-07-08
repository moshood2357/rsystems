
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader"; // ✅ import loader

// Direct import for homepage
import HomePage from "./components/HomePage";


// Lazy imports

const About = lazy(() => import(/* webpackPrefetch: true */ "./components/About"));
const Contact = lazy(() => import(/* webpackPrefetch: true */ "./components/Contact"));
const ManagedITSupport = lazy(() => import("./components/ManagedITSupport"));
const CybersecurityService = lazy(() => import("./components/CybersecurityService"));
const CloudInfrastructureServices = lazy(() => import("./components/CloudInfrastructureServices"));
const ITConsultancyService = lazy(() => import("./components/ITConsultancyServices"));
const ComplianceGovernanceService = lazy(() => import("./components/ComplianceGovernanceService"));
const DeviceEndpointProtectionService = lazy(() => import("./components/DeviceEndpointProtectionService"));
const BackupDisasterRecovery = lazy(() => import("./components/BackupDisasterRecoveryService"));
const ServicesOverview = lazy(() => import("./components/ServicesOverview"));
const NetworkManagement = lazy(() => import("./components/NetworkManagement"));
const VendorManagement = lazy(() => import("./components/VendorManagement"));
const VoIPUnifiedCommunications = lazy(() => import("./components/VoIPUnifiedCommunications"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<Loader />}> {/* ✅ Replaces "Loading..." with branded loader */}
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
          <Route path="/backup" element={<BackupDisasterRecovery />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/network" element={<NetworkManagement />} />
          <Route path="/vendor" element={<VendorManagement />} />
          <Route path="/VoIP" element={<VoIPUnifiedCommunications />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
