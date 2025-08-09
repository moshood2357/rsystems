
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from "./components/Loader";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import CookieConsentBanner from './components/CookieConsentBanner';
import GoogleAnalytics from './components/GoogleAnalytics';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';




// Direct import for homepage
import Index from "./components/HomePage";
import Contact from "./components/Contact";
import ITAssessment from "./components/Assessment";

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
const WebsiteDesignDevelopmentLandingPage = lazy(() => import("./components/WebsiteDesignAndDevelopment"));
const WebsiteDesignLanding = lazy(() => import("./components/WebDesignLanding"));




const CalculateROIPage = lazy(() => import("./components/CalculateROIPage"));
const CalculateProtectionROIPage = lazy(() => import("./components/CalculateProtectioROIPage"));
const CalculateComplianceROIPage = lazy(() => import("./components/CalculateComplianceROIPage"));
const CalculateITConsultancyROIPage = lazy(() => import("./components/CalculateITConsultancyROIPage"));
const CalculateManagedITROICalculatorPage = lazy(() => import("./components/CalculateManagedITROICalculatorPage"));
const CalculateCybersecurityROICalculatorPage = lazy(() => import("./components/CalculateCybersecurityROICalculatorPage"));
const CalculateVendorManagementROIPage = lazy(() => import("./components/CalculateVendorManagementROIPage"));
const CalculateUnifiedCommunicationPage = lazy(() => import("./components/CalculateUnifiedCommunicationPage"));  
const CalculateDataBackupRecoveryROIPage = lazy(() => import("./components/CalculateDataBackupRecoveryROIPage")); 


const PrivacyNotice = lazy(() => import("./components/PrivacyPolicyPage"));
const CookiesPolicy = lazy(() => import("./components/CookiesPolicy")); 


const CheckOut1 = lazy(() => import("./components/Checkout1"));


const TermsAndConditions = lazy(() => import("./components/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyNotice"));



const stripePromise = loadStripe('pk_live_51RiHD7JJmkIkymUOi5eBN1TJQ28TLUwsS4OEGJAQqmtJ1XfJXWOVY12EgP2L2uFPOYrPJd9ttWxYmZIVdEVus3br007tsiCtuw'); 

function App() {
  

  return (
    
    <>
      <CookieConsentBanner />
      <GoogleAnalytics />
      <Layout>
        <Routes>
        {/* ✅ Directly loaded homepage without suspense, avoiding spinner flash */}
       
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/assess" element={<ITAssessment />} />

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
          path="/webdesign&developmement"
          element={
            <Suspense fallback={<Loader />}>
              <WebsiteDesignDevelopmentLandingPage />
            </Suspense>
          }
        />

        <Route
          path="/development"
          element={
            <Suspense fallback={<Loader />}>
              <WebsiteDesignLanding />
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
              <VendorManagementLanding />
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
        <Route
          path="/privacy-notice"
          element={
            <Suspense fallback={<Loader />}>
              <PrivacyNotice />
            </Suspense>
          }
        />
        <Route
          path="/cookies"
          element={
            <Suspense fallback={<Loader />}>
              <CookiesPolicy />
            </Suspense>
          }
        />

       <Route
            path="/checkout1"
            element={
              <Suspense fallback={<Loader />}>
                <Elements stripe={stripePromise}>
                  <CheckOut1 />
                </Elements>
              </Suspense>
            }
          />
        <Route
          path="/terms-and-conditions"
          element={
            <Suspense fallback={<Loader />}>
              <TermsAndConditions />
            </Suspense>
          }
        />
        <Route
          path="/policy-of-use"
          element={
            <Suspense fallback={<Loader />}>
              <PrivacyPolicy />
            </Suspense>
          }
        />
      </Routes>
      </Layout>
      <Footer />
      
    </>
  );
}

export default App;
