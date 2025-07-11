
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

// Direct import for homepage
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";

// Lazy imports
const About = lazy(() => import(/* webpackPrefetch: true */ "./components/About"));
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
const ITAssessmentLanding = lazy(() => import("./components/ITAssessmentLanding"));
const VoIPUnifiedCommunications = lazy(() => import("./components/VoIPUnifiedCommunications"));
const VoIPUnifiedCommunicationLanding = lazy(() => import("./components/VoIPUnifiedCommunicationLanding"));
const CyberSecurityLanding = lazy(() => import("./components/CyberSecurityLanding"));
const CloudInfrastructureLanding = lazy(() => import("./components/CloudInfrastructureLanding"));



function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* ✅ Directly loaded homepage without suspense, avoiding spinner flash */}
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />

        {/* ✅ Lazy-loaded routes wrapped individually with Suspense */}
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          }
        />
        
        <Route
          path="/support"
          element={
            <Suspense fallback={<Loader />}>
              <ManagedITSupport />
            </Suspense>
          }
        />
        <Route
          path="/cybersecurity"
          element={
            <Suspense fallback={<Loader />}>
              <CybersecurityService />
            </Suspense>
          }
        />
        <Route
          path="/cloud"
          element={
            <Suspense fallback={<Loader />}>
              <CloudInfrastructureServices />
            </Suspense>
          }
        />
        <Route
          path="/consultancy"
          element={
            <Suspense fallback={<Loader />}>
              <ITConsultancyService />
            </Suspense>
          }
        />
        <Route
          path="/compliance"
          element={
            <Suspense fallback={<Loader />}>
              <ComplianceGovernanceService />
            </Suspense>
          }
        />
        <Route
          path="/protection"
          element={
            <Suspense fallback={<Loader />}>
              <DeviceEndpointProtectionService />
            </Suspense>
          }
        />
        <Route
          path="/backup"
          element={
            <Suspense fallback={<Loader />}>
              <BackupDisasterRecovery />
            </Suspense>
          }
        />
        <Route
          path="/services"
          element={
            <Suspense fallback={<Loader />}>
              <ServicesOverview />
            </Suspense>
          }
        />
        <Route
          path="/network"
          element={
            <Suspense fallback={<Loader />}>
              <NetworkManagement />
            </Suspense>
          }
        />
        <Route
          path="/vendor"
          element={
            <Suspense fallback={<Loader />}>
              <VendorManagement />
            </Suspense>
          }
        />
        <Route
          path="/VoIP"
          element={
            <Suspense fallback={<Loader />}>
              <VoIPUnifiedCommunications />
            </Suspense>
          }
        />
        <Route
          path="/assessment"
          element={
            <Suspense fallback={<Loader />}>
              <ITAssessmentLanding />
            </Suspense>
          }
        />
        <Route
          path="/cyber"
          element={
            <Suspense fallback={<Loader />}>
              <CyberSecurityLanding />
            </Suspense>
          }
        />
        <Route
          path="/infrastructure"
          element={
            <Suspense fallback={<Loader />}>
              <CloudInfrastructureLanding />
            </Suspense>
          }
        />
         <Route
          path="/VoIPcommunication"
          element={
            <Suspense fallback={<Loader />}>
              <VoIPUnifiedCommunicationLanding />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
