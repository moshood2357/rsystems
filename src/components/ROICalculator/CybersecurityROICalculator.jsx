import { useState, useRef } from 'react';
import { Card, CardContent } from '../../ui/Card';
import { Button } from '../../ui/Button';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Helmet } from 'react-helmet';

const CybersecurityROICalculator = () => {
  const [formData, setFormData] = useState({
    annualRevenue: '',
    potentialBreachCost: '',
    breachProbability: '',
    reductionPercentage: '',
    annualSecuritySpend: '',
  });

  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const resultRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (results) {
      setResults(null);
      setButtonDisabled(false);
    }
  };

  const calculateROI = (e) => {
    e.preventDefault();
    setLoading(true);

    const annualRevenue = parseFloat(formData.annualRevenue) || 0;
    const potentialBreachCost = parseFloat(formData.potentialBreachCost) || 0;
    const breachProbability = parseFloat(formData.breachProbability) / 100 || 0;
    const reductionPercentage = parseFloat(formData.reductionPercentage) / 100 || 0;
    const annualSecuritySpend = parseFloat(formData.annualSecuritySpend) || 0;

    const expectedLossWithoutSecurity = potentialBreachCost * breachProbability;
    const expectedLossWithSecurity = expectedLossWithoutSecurity * (1 - reductionPercentage);
    const annualSavings = expectedLossWithoutSecurity - expectedLossWithSecurity;
    const roiPercentage = ((annualSavings - annualSecuritySpend) / annualSecuritySpend) * 100;
    const savingsAsPercentOfRevenue = annualRevenue ? (annualSavings / annualRevenue) * 100 : 0;

    setTimeout(() => {
      setResults({
        annualSavings: annualSavings.toFixed(2),
        roiPercentage: roiPercentage.toFixed(1),
        savingsPercentOfRevenue: savingsAsPercentOfRevenue.toFixed(1),
      });
      setLoading(false);
      setButtonDisabled(true);
      setFormData({
        annualRevenue: '',
        potentialBreachCost: '',
        breachProbability: '',
        reductionPercentage: '',
        annualSecuritySpend: '',
      });
    }, 800);
  };

  const downloadPDF = async () => {
    if (!resultRef.current) return;
    const elementsToHide = resultRef.current.querySelectorAll('.no-print');
    elementsToHide.forEach((el) => (el.style.display = 'none'));
    const canvas = await html2canvas(resultRef.current);
    const imgData = canvas.toDataURL('image/png');
    elementsToHide.forEach((el) => (el.style.display = ''));

    const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfHeight = (imgProps.height * (pageWidth - 80)) / imgProps.width;

    pdf.setFontSize(18);
    pdf.text('Cybersecurity ROI Estimate - R2 System Solution Ltd.', 40, 40);
    pdf.addImage(imgData, 'PNG', 40, 60, pageWidth - 80, pdfHeight);
    pdf.save('cybersecurity-roi-estimate.pdf');
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col items-center justify-center px-4 py-12">
      <Helmet>
  <title>Cybersecurity ROI Calculator | R2 System Solution Ltd.</title>
  <meta name="description" content="Calculate your business's return on investment (ROI) for cybersecurity spending. Save costs and assess breach risks with R2 System Solution Ltd." />
  <meta name="keywords" content="cybersecurity ROI calculator, data breach risk, security investment savings, business cybersecurity, ROI tool, R2 System Solution Ltd." />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.r2systemsolution.co.uk/CybersecurityROI" />
  
  {/* Open Graph for social sharing */}
  <meta property="og:title" content="Cybersecurity ROI Calculator | R2 System Solution Ltd." />
  <meta property="og:description" content="Estimate potential savings and return on your cybersecurity investment with our simple calculator." />
  <meta property="og:image" content="https://www.r2systemsolution.co.uk/CompanyLogo.jpeg" />
  <meta property="og:url" content="https://www.r2systemsolution.co.uk/CybersecurityROI" />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Cybersecurity ROI Calculator | R2 System Solution Ltd." />
  <meta name="twitter:description" content="Estimate potential ROI from investing in cybersecurity solutions." />
  <meta name="twitter:image" content="https://www.r2systemsolution.co.uk/CompanyLogo.jpeg" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Cybersecurity ROI Calculator",
      "description": "Use this tool by R2 System Solution Ltd. to estimate the return on investment (ROI) for cybersecurity consultancy and prevent potential data breach losses.",
      "url": "https://www.r2systemsolution.co.uk/CybersecurityROI",
      "publisher": {
        "@type": "Organization",
        "name": "R2 System Solution Ltd.",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.r2systemsolution.co.uk/CompanyLogo.jpeg"
        }
      }
    }
    `}
  </script>
</Helmet>

      <Card className="w-full max-w-xl rounded-2xl shadow-lg border border-gray-200 bg-white">
        <CardContent className="p-8 space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold text-purple-900">Cybersecurity ROI Calculator</h2>
            <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
              Estimate the potential ROI from investing in cybersecurity solutions to protect your business.
            </p>
          </div>

          <form onSubmit={calculateROI} className="space-y-5">
  {[
    {
      label: 'Annual Revenue (£)',
      name: 'annualRevenue',
      placeholder: 'e.g., 500000',
      tooltip: 'Your business’s total annual revenue.',
    },
    {
      label: 'Potential Breach Cost (£)',
      name: 'potentialBreachCost',
      placeholder: 'e.g., 100000',
      tooltip: 'Estimated cost if a data breach occurs.',
    },
    {
      label: 'Breach Probability (%)',
      name: 'breachProbability',
      placeholder: 'e.g., 30',
      tooltip: 'Estimated probability of experiencing a breach in a year.',
    },
    {
      label: 'Expected Reduction in Risk (%)',
      name: 'reductionPercentage',
      placeholder: 'e.g., 60',
      tooltip: 'Expected reduction in breach risk with security investment.',
    },
    {
      label: 'Annual Security Spend (£)',
      name: 'annualSecuritySpend',
      placeholder: 'e.g., 15000',
      tooltip: 'Planned annual spend on cybersecurity solutions.',
    },
  ].map((field, idx) => (
    <div key={idx} className="flex flex-col relative group">
      <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
        {field.label}
        <span className="ml-1 text-purple-600 cursor-pointer relative group">
          ⓘ
          <span className="absolute bottom-full mb-1 hidden group-hover:block bg-black text-white text-xs rounded p-1 w-60 z-10 text-left">
            {field.tooltip}
          </span>
        </span>
      </label>
      <input
        type="number"
        name={field.name}
        value={formData[field.name]}
        onChange={handleChange}
        placeholder={field.placeholder}
        required
        className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
      />
    </div>
  ))}

  <Button
    type="submit"
    disabled={loading || buttonDisabled}
    className={`w-full py-3 ${
      loading || buttonDisabled ? 'bg-purple-300 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'
    } text-white text-lg font-semibold rounded-lg transition-all shadow-md hover:shadow-lg`}
  >
    {loading ? 'Calculating...' : 'Calculate ROI'}
  </Button>
</form>


          {results && (
            <div ref={resultRef} className="mt-6 p-6 rounded-xl bg-purple-50 text-purple-900 shadow-inner space-y-4">
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-semibold">Your Estimated Results</h3>
                <p className="text-sm text-gray-700">
                  Review your estimated cost savings and ROI based on your cybersecurity investment.
                </p>
              </div>
              <ul className="space-y-2 text-center">
                <li>
                  <strong>Estimated Annual Risk Savings:</strong> £{results.annualSavings}
                </li>
                <li>
                  <strong>Estimated ROI:</strong> {results.roiPercentage}%
                </li>
                <li>
                  <strong>Savings as % of Annual Revenue:</strong> {results.savingsPercentOfRevenue}%
                </li>
              </ul>
              <div className="flex justify-center">
                <Button
                  onClick={downloadPDF}
                  className="mt-4 py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-lg transition-all shadow-md hover:shadow-lg no-print"
                >
                  Download Results as PDF
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
};

export default CybersecurityROICalculator;
  