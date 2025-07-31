import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '../../ui/Card';
import { Button } from '../../ui/Button';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ComplianceROICalculator = () => {
  const [formData, setFormData] = useState({
    annualRevenue: '',
    potentialNonComplianceCost: '',
    nonComplianceProbability: '',
    reductionPercentage: '',
    annualComplianceSpend: '',
  });

  const [results, setResults] = useState<null | {
    annualSavings: string;
    roiPercentage: string;
    savingsPercentOfRevenue: string;
  }>(null);

  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (results) {
      setResults(null);
      setButtonDisabled(false);
    }
  };

  const calculateROI = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const potentialNonComplianceCost = parseFloat(formData.potentialNonComplianceCost) || 0;
    const nonComplianceProbability = parseFloat(formData.nonComplianceProbability) / 100 || 0;
    const reductionPercentage = parseFloat(formData.reductionPercentage) / 100 || 0;
    const annualComplianceSpend = parseFloat(formData.annualComplianceSpend) || 0;

    const expectedLossWithoutCompliance = potentialNonComplianceCost * nonComplianceProbability;
    const expectedLossWithCompliance = expectedLossWithoutCompliance * (1 - reductionPercentage);
    const annualSavings = expectedLossWithoutCompliance - expectedLossWithCompliance;
    const roiPercentage = ((annualSavings - annualComplianceSpend) / annualComplianceSpend) * 100;
    const savingsAsPercentOfRevenue = formData.annualRevenue
      ? (annualSavings / parseFloat(formData.annualRevenue)) * 100
      : 0;

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
        potentialNonComplianceCost: '',
        nonComplianceProbability: '',
        reductionPercentage: '',
        annualComplianceSpend: '',
      });
    }, 800);
  };

  const downloadPDF = async () => {
  if (!resultRef.current) return;
  const elementsToHide = resultRef.current.querySelectorAll('.no-print');

  // Hide elements
  elementsToHide.forEach((el) => {
    (el as HTMLElement).style.display = 'none';
  });

  const canvas = await html2canvas(resultRef.current);
  const imgData = canvas.toDataURL('image/png');

  // Restore visibility
  elementsToHide.forEach((el) => {
    (el as HTMLElement).style.display = '';
  });

  const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
  const pageWidth = pdf.internal.pageSize.getWidth();
  const imgProps = pdf.getImageProperties(imgData);
  const pdfHeight = (imgProps.height * (pageWidth - 80)) / imgProps.width;

  pdf.setFontSize(18);
  pdf.text('Compliance ROI Estimate - R2 System Solution Ltd.', 40, 40);
  pdf.addImage(imgData, 'PNG', 40, 60, pageWidth - 80, pdfHeight);
  pdf.save('compliance-roi-estimate.pdf');
};


  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Compliance ROI Calculator",
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication",
    "description": "Estimate the potential ROI of investing in compliance solutions to reduce legal risks and inefficiencies.",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "GBP"
    },
    "publisher": {
      "@type": "Organization",
      "name": "R2 System Solution Ltd.",
      "url": "https://www.r2systemsolution.co.uk"
    }
  };

  return (
    <>
      <Helmet>
        <title>Compliance ROI Calculator | R2 System Solution</title>
        <meta
          name="description"
          content="Use our Compliance ROI Calculator to evaluate the return on investment of your compliance strategy. Instantly get insights and download a custom report."
        />
        <meta
          name="keywords"
          content="Compliance ROI, Risk Reduction, Cost Savings, R2 System Solution, Compliance Calculator"
        />
        <meta name="author" content="R2 System Solution Ltd." />
        <meta property="og:title" content="Compliance ROI Calculator | R2 System Solution" />
        <meta
          property="og:description"
          content="Evaluate your compliance ROI and risk savings with this free tool. Developed by R2 System Solution Ltd."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.r2systemsolution.co.uk/compliance-roi-calculator"
        />
        <meta
          property="og:image"
          content="https://www.r2systemsolution.co.uk/assets/compliance-roi-banner.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col items-center justify-center px-4 py-12">
        <Card className="w-full max-w-xl rounded-2xl shadow-lg border border-gray-200 bg-white">
          <CardContent className="p-8 space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold text-purple-900">Compliance ROI Calculator</h2>
              <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
                Estimate the potential ROI from investing in compliance solutions to reduce fines, legal risks, and inefficiencies.
              </p>
            </div>

            <form onSubmit={calculateROI} className="space-y-5">
              {[
                {
                  label: 'Annual Revenue (£)',
                  name: 'annualRevenue',
                  placeholder: 'e.g., 500000',
                  tooltip: 'Your business’s total annual revenue (optional).',
                },
                {
                  label: 'Potential Non-Compliance Cost (£)',
                  name: 'potentialNonComplianceCost',
                  placeholder: 'e.g., 100000',
                  tooltip: 'Estimated cost if non-compliance occurs, including fines and legal fees.',
                },
                {
                  label: 'Non-Compliance Probability (%)',
                  name: 'nonComplianceProbability',
                  placeholder: 'e.g., 20',
                  tooltip: 'Estimated probability of facing non-compliance in a year.',
                },
                {
                  label: 'Expected Reduction in Risk (%)',
                  name: 'reductionPercentage',
                  placeholder: 'e.g., 70',
                  tooltip: 'Expected reduction in non-compliance risk with compliance investment.',
                },
                {
                  label: 'Annual Compliance Spend (£)',
                  name: 'annualComplianceSpend',
                  placeholder: 'e.g., 15000',
                  tooltip: 'Planned annual spend on compliance solutions and processes.',
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
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required={field.name !== 'annualRevenue'}
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
              <div
                ref={resultRef}
                className="mt-6 p-6 rounded-xl bg-purple-50 text-purple-900 shadow-inner space-y-4"
              >
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-semibold">Your Estimated Results</h3>
                  <p className="text-sm text-gray-700">
                    Review your estimated cost savings and ROI based on your compliance investment.
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
    </>
  );
};

export default ComplianceROICalculator;
 
