
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
const ITAssessment = lazy(() => import("./components/ITAssessment"));
const VoIPUnifiedCommunications = lazy(() => import("./components/VoIPUnifiedCommunications"));

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
              <ITAssessment />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
