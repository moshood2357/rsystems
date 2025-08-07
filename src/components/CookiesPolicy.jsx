

const CookiesPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Cookies Policy</h1>
      <p className="text-sm text-gray-500 mb-6">Effective Date: 17/06/2025</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website.
          They allow websites to recognize your device, improve functionality,
          track usage, and provide a more personalized experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. How We Use Cookies</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Ensure proper website functionality and security</li>
          <li>Analyze site traffic and user behavior using tools like Google Analytics</li>
          <li>Improve overall site performance and user experience</li>
          <li>Remember your preferences and settings for future visits</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Types of Cookies We Use</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <strong>Essential Cookies:</strong> Required for core site features and navigation
          </li>
          <li>
            <strong>Performance Cookies:</strong> Help us understand how visitors interact with the site
          </li>
          <li>
            <strong>Functionality Cookies:</strong> Store your preferences like language or region
          </li>
          <li>
            <strong>Marketing Cookies:</strong> Used (only if accepted) to deliver personalized ads
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Managing Cookies</h2>
        <p>
          You can manage cookie preferences via our cookie banner or through your browser settings.
          Use the links below to manage cookies on popular browsers:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1 text-blue-600 underline">
          <li><a href="https://support.google.com/chrome/answer/95647?hl=en" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
          <li><a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">Microsoft Edge / Internet Explorer</a></li>
        </ul>
        <p className="mt-2">Note: Blocking some cookies may affect website functionality.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Contact Us</h2>
        <p>
          If you have questions about our use of cookies, please contact us at:{" "}
          <a href="mailto:support@r2systemsolution.co.uk" className="text-blue-600 underline">
            support@r2systemsolution.co.uk
          </a>
        </p>
      </section>

      
    </div>
  );
};

export default CookiesPolicy;
