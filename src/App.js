
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from "./components/Loader";
import Layout from "./components/Layout";


// Direct import for homepage
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";


// Lazy imports
const About = lazy(() => import(/* webpackPrefetch: true */ "./components/About"));
const ManagedITSupport = lazy(() => import("./components/ManagedITSupport"));
const CybersecurityService = lazy(() => import("./components/CybersecurityService"));
const CloudInfrastructureServices = lazy(() => import("./components/CloudInfrastructureServices"));
const ITConsultancyService = lazy(() => import("./components/ITConsultancyServices"));
const ITConsultancyLanding = lazy(() => import("./components/ITConsultancyLanding"));
const ComplianceGovernanceService = lazy(() => import("./components/ComplianceGovernanceService"));
const ComplianceGovernanceLanding = lazy(() => import("./components/ComplianceGovernanceLanding"));
const DeviceEndpointProtectionService = lazy(() => import("./components/DeviceEndpointProtectionService"));
const DeviceProtectionLanding = lazy(() => import("./components/DeviceProtectionLanding"));
const BackupDisasterRecovery = lazy(() => import("./components/BackupDisasterRecoveryService"));
const BackupRecoveryLanding = lazy(() => import("./components/BackupRecoveryLanding"));
const ServicesOverview = lazy(() => import("./components/ServicesOverview"));
const NetworkManagement = lazy(() => import("./components/NetworkManagement"));
const NetworkManagementLanding = lazy(() => import("./components/NetworkManagementLanding"));
const CalculateNetworkROIPage = lazy(() => import("./components/CalculateNetworkROIPage"));
const VendorManagement = lazy(() => import("./components/VendorManagement"));
const VendorManagementLanding = lazy(() => import("./components/VendorManagementLanding"));
const ITAssessmentLanding = lazy(() => import("./components/ITAssessmentLanding"));
const VoIPUnifiedCommunications = lazy(() => import("./components/VoIPUnifiedCommunications"));
const VoIPUnifiedCommunicationLanding = lazy(() => import("./components/VoIPUnifiedCommunicationLanding"));
const CyberSecurityLanding = lazy(() => import("./components/CyberSecurityLanding"));
const CloudInfrastructureLanding = lazy(() => import("./components/CloudInfrastructureLanding"));


const CalculateROIPage = lazy(() => import("./components/CalculateROIPage"));
const CalculateProtectionROIPage = lazy(() => import("./components/CalculateProtectioROIPage"));
const CalculateComplianceROIPage = lazy(() => import("./components/CalculateComplianceROIPage"));
const CalculateITConsultancyROIPage = lazy(() => import("./components/CalculateITConsultancyROIPage"));
const CalculateManagedITROICalculatorPage = lazy(() => import("./components/CalculateManagedITROICalculatorPage"));
const CalculateCybersecurityROICalculatorPage = lazy(() => import("./components/CalculateCybersecurityROICalculatorPage"));
const CalculateVendorManagementROIPage = lazy(() => import("./components/CalculateVendorManagementROIPage"));
const CalculateUnifiedCommunicationPage = lazy(() => import("./components/CalculateUnifiedCommunicationPage"));  
const CalculateDataBackupRecoveryROIPage = lazy(() => import("./components/CalculateDataBackupRecoveryROIPage"));  



function App() {
  return (
    <Router>
      <Layout>
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
        <Route
          path="/deviceprotection"
          element={
            <Suspense fallback={<Loader />}>
              <DeviceProtectionLanding />
            </Suspense>
          }
        />
        <Route
          path="/governance"
          element={
            <Suspense fallback={<Loader />}>
              <ComplianceGovernanceLanding />
            </Suspense>
          }
        />
        <Route
          path="/vendormanagement"
          element={
            <Suspense fallback={<Loader />}>
              <VendorManagementLanding        Landing />
            </Suspense>
          }
        />
        <Route
          path="/recovery"
          element={
            <Suspense fallback={<Loader />}>
              <BackupRecoveryLanding />
            </Suspense>
          }
        />
        <Route
          path="/networkmanagement"
          element={
            <Suspense fallback={<Loader />}>
              <NetworkManagementLanding />
            </Suspense>
          }
        />
        <Route
          path="/ITConsultancy"
          element={
            <Suspense fallback={<Loader />}>
              <ITConsultancyLanding />
            </Suspense>
          }
        />
        <Route
          path="/CloudROI"
          element={
            <Suspense fallback={<Loader />}>
              <CalculateROIPage />
            </Suspense>
          }
        />
        <Route
          path="/networkROI"
          element={
            <Suspense fallback={<Loader />}>
              <CalculateNetworkROIPage />
            </Suspense>
          }
        />
        <Route
          path="/ProtectionROI"
          element={
            <Suspense fallback={<Loader />}>
              <CalculateProtectionROIPage />
            </Suspense>
          }
        />
        <Route
          path="/ComplianceROI"
          element={
            <Suspense fallback={<Loader />}>
              <CalculateComplianceROIPage />
            </Suspense>
          }
        />
        <Route
          path="/ITConsultancyROI"
          element={
            <Suspense fallback={<Loader />}>
              <CalculateITConsultancyROIPage />
            </Suspense>
          }
        />
        <Route
          path="/ManagedITSupportROI"
          element={
            <Suspense fallback={<Loader />}>
              <CalculateManagedITROICalculatorPage />
            </Suspense>
          }
        />
        <Route
          path="/CybersecurityROI"
          element={
            <Suspense fallback={<Loader />}>
              <CalculateCybersecurityROICalculatorPage />
            </Suspense>
          }
        />
        <Route
          path="/vendormanagementROI"
          element={
            <Suspense fallback={<Loader />}>
              <CalculateVendorManagementROIPage />
            </Suspense>
          }
        />
        <Route
          path="/VOIPROI"
          element={
            <Suspense fallback={<Loader />}>
              <CalculateUnifiedCommunicationPage />
            </Suspense>
          }
        />
        <Route
          path="/backupROI"
          element={
            <Suspense fallback={<Loader />}>
              <CalculateDataBackupRecoveryROIPage />
            </Suspense>
          }
        />

      </Routes>
      </Layout>
      
    </Router>
  );
}

export default App;
