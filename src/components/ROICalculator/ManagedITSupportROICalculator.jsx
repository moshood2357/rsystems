import { useState, useRef } from 'react';
import { Card, CardContent } from '../../ui/Card';
import { Button } from '../../ui/Button';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Helmet } from 'react-helmet';

const ManagedITSupportROICalculator = () => {
  const [formData, setFormData] = useState({
    employeeCount: '',
    avgHourlyRate: '',
    avgDowntimeHours: '',
    downtimeReduction: '',
    monthlySupportCost: '',
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

    const employeeCount = parseInt(formData.employeeCount) || 0;
    const avgHourlyRate = parseFloat(formData.avgHourlyRate) || 0;
    const avgDowntimeHours = parseFloat(formData.avgDowntimeHours) || 0;
    const downtimeReduction = parseFloat(formData.downtimeReduction) || 0;
    const monthlySupportCost = parseFloat(formData.monthlySupportCost) || 0;

    const potentialDowntimeSavings =
      employeeCount * avgHourlyRate * avgDowntimeHours * (downtimeReduction / 100);
    const annualROI = ((potentialDowntimeSavings * 12 - monthlySupportCost * 12) / (monthlySupportCost * 12)) * 100;

    setTimeout(() => {
      setResults({
        potentialDowntimeSavings: potentialDowntimeSavings.toFixed(2),
        annualROI: annualROI.toFixed(1),
      });
      setLoading(false);
      setButtonDisabled(true);
      setFormData({
        employeeCount: '',
        avgHourlyRate: '',
        avgDowntimeHours: '',
        downtimeReduction: '',
        monthlySupportCost: '',
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
    pdf.text('Managed IT Support ROI Estimate - R2 System Solution Ltd.', 40, 40);
    pdf.addImage(imgData, 'PNG', 40, 60, pageWidth - 80, pdfHeight);
    pdf.save('managed-it-support-roi-estimate.pdf');
  };

  return (
    <>
    <Helmet>
  <title>Managed IT Support ROI Calculator | R2 System Solution Ltd.</title>
  <meta name="description" content="Estimate your potential cost savings and productivity boost with our Managed IT Support ROI Calculator by R2 System Solution Ltd." />
  <meta name="keywords" content="Managed IT Support, ROI Calculator, IT Services UK, R2 System Solution, Cost Savings, IT Downtime" />
  <meta property="og:title" content="Managed IT Support ROI Calculator | R2 System Solution Ltd." />
  <meta property="og:description" content="Calculate your potential ROI and downtime savings with our simple tool." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://r2systemsolution.co.uk/ManagedITSupportROI" />
  <meta property="og:image" content="https://r2systemsolution.co.uk/CompanyLogo.jpeg" />
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Managed IT Support ROI Calculator",
      "url": "https://r2systemsolution.co.uk/ManagedITSupportROI",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All",
      "creator": {
        "@type": "Organization",
        "name": "R2 System Solution Ltd.",
        "url": "https://r2systemsolution.co.uk"
      },
      "description": "A free tool to calculate the return on investment from managed IT support services, including downtime reduction and cost savings.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "GBP"
      }
    })}
  </script>
</Helmet>

    <section className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center justify-center px-4 py-12">
      <Card className="w-full max-w-xl rounded-2xl shadow-lg border border-gray-200 bg-white">
        <CardContent className="p-8 space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold text-green-900">Managed IT Support ROI Calculator</h2>
            <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
              Estimate your potential productivity gains and cost savings from managed IT support.
            </p>
          </div>

          <form onSubmit={calculateROI} className="space-y-5">
            {[
              {
                label: 'Number of Employees',
                name: 'employeeCount',
                placeholder: 'e.g., 25',
                tooltip: 'Total staff relying on IT systems.',
              },
              {
                label: 'Average Hourly Rate (£)',
                name: 'avgHourlyRate',
                placeholder: 'e.g., 20',
                tooltip: 'Average hourly cost of employees including benefits.',
              },
              {
                label: 'Average Monthly Downtime Hours',
                name: 'avgDowntimeHours',
                placeholder: 'e.g., 5',
                tooltip: 'Estimated hours lost per employee monthly due to IT issues.',
              },
              {
                label: 'Expected Downtime Reduction (%)',
                name: 'downtimeReduction',
                placeholder: 'e.g., 50',
                tooltip: 'Expected reduction in downtime with managed IT support.',
              },
              {
                label: 'Monthly Support Cost (£)',
                name: 'monthlySupportCost',
                placeholder: 'e.g., 1500',
                tooltip: 'Estimated monthly managed IT support fee.',
              },
            ].map((field, idx) => (
              <div key={idx} className="flex flex-col relative group">
                <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                  {field.label}
                  <span className="ml-1 text-green-600 cursor-pointer relative group">
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
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                />
              </div>
            ))}

            <Button
              type="submit"
              disabled={loading || buttonDisabled}
              className={`w-full py-3 ${
                loading || buttonDisabled ? 'bg-green-300 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
              } text-white text-lg font-semibold rounded-lg transition-all shadow-md hover:shadow-lg`}
            >
              {loading ? 'Calculating...' : 'Calculate ROI'}
            </Button>
          </form>

          {results && (
            <div ref={resultRef} className="mt-6 p-6 rounded-xl bg-green-50 text-green-900 shadow-inner space-y-4">
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-semibold">Your Estimated Results</h3>
                <p className="text-sm text-gray-700">
                  Review your estimated productivity gains and ROI based on your inputs.
                </p>
              </div>
              <ul className="space-y-2 text-center">
                <li>
                  <strong>Potential Monthly Downtime Savings:</strong> £{results.potentialDowntimeSavings}
                </li>
                <li>
                  <strong>Estimated Annual ROI:</strong> {results.annualROI}%
                </li>
              </ul>
              
            </div>
          )}
        </CardContent>
      </Card>
      <div className="flex justify-center">
        <Button
          onClick={downloadPDF}
          className="mt-4 py-3 px-6 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg transition-all shadow-md hover:shadow-lg no-print"
        >
          Download Results as PDF
        </Button>
      </div>
    </section>
    </>
  );
};

export default ManagedITSupportROICalculator;
