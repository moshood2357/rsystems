import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function GoogleAnalytics(){
    const location = useLocation();

  // Load the Google Analytics script
  useEffect(() => {
    // Add the external gtag.js script
    const script1 = document.createElement('script');
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-G-5CZ2MKY96X';
    script1.async = true;
    document.head.appendChild(script1);

    // Add the inline gtag config
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-5CZ2MKY96X');
    `;
    document.head.appendChild(script2);
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-5CZ2MKY96X', {
        page_path: location.pathname,
      });
    }
  }, [location]);
}