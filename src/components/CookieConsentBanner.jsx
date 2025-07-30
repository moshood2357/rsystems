import { useEffect, useState } from "react";

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    } else if (consent === "accepted") {
      loadAnalyticsScript();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
    loadAnalyticsScript(true); // true triggers tracking event
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
  };

  const loadAnalyticsScript = (trackEvent = false) => {
    if (document.getElementById("ga-script")) return; // prevent duplicate load

    const script = document.createElement("script");
    script.id = "ga-script";
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"; // Replace with your GA ID
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;

      gtag("js", new Date());
      gtag("config", "G-XXXXXXX"); // Replace with your GA ID

      if (trackEvent) {
        gtag("event", "cookie_consent", {
          event_category: "Consent",
          event_label: "Accepted",
          value: 1,
        });
      }
    };
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 w-full bg-gray-900 text-white p-4 z-50 shadow-md flex flex-col sm:flex-row items-center justify-between">
      <p className="text-sm mb-2 sm:mb-0">
        We use cookies to improve your experience. By continuing, you agree to our{" "}
        <a href="/cookies" className="underline text-blue-400">Cookies Policy</a>.
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleReject}
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
        >
          Reject
        </button>
        <button
          onClick={handleAccept}
          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
