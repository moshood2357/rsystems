import { Helmet } from "react-helmet";

const PrivacyNotice: React.FC = () => {
  return (
   <>
   

<Helmet>
  <title>Privacy Notice | R2 System Solution Ltd</title>
  <meta
    name="description"
    content="Learn how R2 System Solution Ltd collects, uses, and protects your personal data in accordance with UK GDPR."
  />
  <link rel="canonical" href="https://r2systemsolution.co.uk/privacy-notice" />

  <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "R2 System Solution Ltd",
    "url": "https://r2systemsolution.co.uk",
    "email": "privacy@r2systemsolution.co.uk",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Harley House, 29 Cambray Place",
      "addressLocality": "Cheltenham",
      "addressRegion": "Gloucestershire",
      "postalCode": "GL50 1JN",
      "addressCountry": "GB"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44 01452 905204",
      "contactType": "customer support"
    },
    "sameAs": []
  })}
</script>

</Helmet>

         <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-8">Privacy Notice</h1>
      <p className="text-sm text-gray-500 mb-6">Effective Date: 17/06/2025</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Who We Are</h2>
        <p>R2 System Solution Ltd</p>
        <p>Harley House, 29 Cambray Place, Cheltenham, Gloucestershire, England, GL50 1JN</p>
        <p>Email: <a href="mailto:support@r2systemsolution.co.uk" className="text-blue-600 underline">privacy@r2systemsolution.co.uk</a></p>
        <p>Tel: +44 01452 905204</p>
        <p>Data Controller: Ridwan Akorede</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. What Personal Data We Collect</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Name, email address, and phone number</li>
          <li>Business details (if B2B)</li>
          <li>IP address and browser information (via cookies)</li>
          <li>Communication history (emails, contact forms)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. How We Use Your Data</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Providing and managing our services</li>
          <li>Responding to enquiries or support requests</li>
          <li>Marketing (only with your consent)</li>
          <li>Website analytics and performance improvement</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Legal Basis for Processing</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Consent (e.g., for marketing)</li>
          <li>Contractual obligation (e.g., to provide services)</li>
          <li>Legitimate interests (e.g., to improve services)</li>
          <li>Legal obligation (e.g., to comply with tax laws)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Data Sharing</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Hosting providers (e.g., servers located in the UK or EU)</li>
          <li>CRM or helpdesk platforms</li>
          <li>Legal or regulatory authorities if required</li>
        </ul>
        <p className="mt-2">We do not sell your personal data.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Data Retention</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Contact form submissions: up to 12 months</li>
          <li>Contractual records: up to 6 years</li>
          <li>Analytics: up to 26 months</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Access your data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion ("right to be forgotten")</li>
          <li>Object to processing</li>
          <li>Request data portability</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p className="mt-2">To exercise these rights, contact: <a href="mailto:contact@r2systemsolution.co.uk" className="text-blue-600 underline">contact@r2systemsolution.co.uk</a></p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">8. Cookies and Tracking</h2>
        <p>We use cookies to improve the website experience and analytics. You can manage your preferences through our cookie banner.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">9. Complaints</h2>
        <p>
          If you believe your data has been misused, you have the right to complain to the UK Information Commissioner’s Office (ICO):{" "}
          <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            https://ico.org.uk
          </a>
        </p>
      </section>

      <footer className="border-t pt-6 text-center text-sm text-gray-500">
        © R2 System Solution Ltd. All rights reserved.
      </footer>
    </div>
   </>  
  );
};

export default PrivacyNotice;
