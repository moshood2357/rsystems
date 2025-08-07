import { useState, useRef } from 'react';
import { Card, CardContent } from '../../ui/Card';
import { Button } from '../../ui/Button';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Helmet } from 'react-helmet';

const CloudROICalculator = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    currentSpend: '',
    servers: '',
    storage: '',
    utilization: '',
    timeline: '',
  });

  const [generatedCompanyName, setGeneratedCompanyName] = useState('');


  const [results, setResults] = useState<{
    estimatedCloudCost: string;
    estimatedSavings: string;
    roiPercentage: string;
    utilizationApplied: string;
    timelineApplied: string;
  } | null>(null);

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

    const currentSpend = parseFloat(formData.currentSpend) || 0;
    const servers = parseInt(formData.servers) || 0;
    const storage = parseInt(formData.storage) || 0;
    const utilization = parseFloat(formData.utilization) || 100;
    const timeline = parseInt(formData.timeline) || 1;

    const adjustedSpend = currentSpend * (utilization / 100);
    const estimatedCloudCost = (adjustedSpend * 0.65) + (servers * 15) + (storage * 0.02);

    let estimatedSavings = adjustedSpend - estimatedCloudCost;
    if (estimatedSavings < 0) estimatedSavings = 0;

    let roiPercentage = ((estimatedSavings * 12 * timeline) / (adjustedSpend * 12 * timeline)) * 100;
    if (roiPercentage < 0) roiPercentage = 0;

    setTimeout(() => {
      setResults({
  estimatedCloudCost: estimatedCloudCost.toFixed(2),
  estimatedSavings: estimatedSavings.toFixed(2),
  roiPercentage: roiPercentage.toFixed(1),
  utilizationApplied: utilization.toFixed(0),
  timelineApplied: timeline.toString(),
});
setGeneratedCompanyName(formData.companyName); // ✅ ADD THIS

      setLoading(false);
      setButtonDisabled(true);
      setFormData({
        companyName: '',
        currentSpend: '',
        servers: '',
        storage: '',
        utilization: '',
        timeline: '',
      });
    }, 800);
  };

 const downloadPDF = async () => {
  if (!resultRef.current) return;

  const canvas = await html2canvas(resultRef.current);
  const imgData = canvas.toDataURL('image/jpeg');

  const logoUrl = '/CompanyLogo.jpeg';
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4',
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const margin = 40;
  const imgProps = pdf.getImageProperties(imgData);
  const imgHeight = (imgProps.height * (pageWidth - margin * 2)) / imgProps.width;

  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  const logoImg = new Image();
  logoImg.src = logoUrl;
  logoImg.onload = () => {
    pdf.addImage(logoImg, 'PNG', margin, 20, 80, 40); // logo
    drawText();
  };
  logoImg.onerror = () => {
    console.warn('Logo image failed to load, continuing without it.');
    drawText();
  };

  const drawText = () => {
    pdf.setFontSize(20);
    pdf.setTextColor(40);
    pdf.text('Cloud ROI Report - R2 system solution Ltd.', margin + 100, 45);

    pdf.setFontSize(12);
    pdf.setTextColor(100);
    pdf.text(`Generated for: ${generatedCompanyName}`, margin + 100, 65);
    pdf.text(`Date: ${date}`, margin + 100, 80);
    pdf.text(`Time: ${time}`, margin + 100, 95);
    pdf.line(margin, 110, pageWidth - margin, 110);

    pdf.addImage(imgData, 'PNG', margin, 120, pageWidth - margin * 2, imgHeight);

    pdf.setFontSize(10);
    pdf.setTextColor(120);
    pdf.text('Confidential - For internal analysis only', margin, 820);
    pdf.text('www.r2systemsolution.co.uk', margin, 835);

    pdf.save('cloud-roi-estimate.pdf');
  };
};

  return (
    <>
      <Helmet>
        <title>Cloud ROI Calculator | R2 System Solution</title>
        <meta name="description" content="Use our Cloud ROI Calculator to estimate your cloud cost savings and generate a downloadable report. Provided by R2 System Solution Ltd." />
        <meta name="keywords" content="Cloud ROI, ROI Calculator, Cloud Cost Savings, R2 System Solution, Cloud Migration, IT Optimization" />
        <meta name="author" content="R2 System Solution Ltd." />
        <meta property="og:title" content="Cloud ROI Calculator | R2 System Solution" />
        <meta property="og:description" content="Estimate your cloud cost savings with our Cloud ROI Calculator and download a personalized PDF report." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.r2systemsolution.co.uk/CloudROI" />
        <meta property="og:image" content="https://www.r2systemsolution.co.uk/CompanyLogo.jpeg" />
      </Helmet>

      <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-4 py-12">
        <Card className="w-full max-w-lg rounded-2xl shadow-2xl border border-gray-200 bg-white">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Cloud ROI Calculator</h2>
            <p className="text-center text-gray-600 mb-8 text-sm md:text-base">
              Estimate your potential cloud savings quickly and download your personalized report.
            </p>

            <form onSubmit={calculateROI} className="space-y-5">

              {/* Company Name Input with Centered Tooltip */}
              <div className="flex flex-col relative group">
                <label className="text-sm font-medium text-gray-700 mb-1 flex items-center  gap-1">
                  Company Name
                  <span className="relative group">
                      ⓘ
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded p-2 w-64 z-10 text-center shadow-lg">
                      Your business or organization name to personalize the report.
                    </span>
                  </span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Name of your company"
                  required
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>

              {/* Dynamic Input Fields */}
              {[
                {
                  label: "Current Monthly Spend (£)",
                  name: "currentSpend",
                  placeholder: "e.g., 2500",
                  tooltip: "Your current monthly infrastructure costs (servers, storage, network, etc.).",
                },
                {
                  label: "Number of Servers/VMs",
                  name: "servers",
                  placeholder: "e.g., 15",
                  tooltip: "Total servers or virtual machines you currently run on-premise.",
                },
                {
                  label: "Storage Needs (GB)",
                  name: "storage",
                  placeholder: "e.g., 1000",
                  tooltip: "Total storage used across your workloads in gigabytes.",
                },
                {
                  label: "Average Utilization (%)",
                  name: "utilization",
                  placeholder: "e.g., 75",
                  tooltip: "Average utilization across your servers, CPU, RAM, network, etc.",
                },
                {
                  label: "Migration Timeline (Years)",
                  name: "timeline",
                  placeholder: "e.g., 2",
                  tooltip: "Expected timeline for fully migrating to the cloud for accurate ROI projection.",
                },
              ].map((field, idx) => (
                <div key={idx} className="flex flex-col relative group">
                  <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                    {field.label}
                    <span className="relative group">
                      ⓘ
                      <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded p-2 w-64 z-10 text-center shadow-lg">
                        {field.tooltip}
                      </span>
                    </span>
                  </label>
                  <input
                    type="number"
                    name={field.name}
                    value={(formData as any)[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              ))}

              <Button
                type="submit"
                disabled={loading || buttonDisabled}
                className={`w-full py-3 ${
                  loading || buttonDisabled
                    ? 'bg-blue-300 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white text-lg font-semibold rounded-lg transition-all shadow-md hover:shadow-lg`}
              >
                {loading ? 'Calculating...' : 'Calculate ROI'}
              </Button>
            </form>

            {results && (
              <div
                ref={resultRef}
                className="mt-8 p-6 rounded-xl bg-blue-50 text-blue-900 shadow-inner"
              >
                <h3 className="text-xl font-semibold mb-4 text-center">Your Estimated Results</h3>
                <ul className="space-y-2 text-center">
                  <li>
                    <strong>Estimated Monthly Cloud Cost:</strong> £{results.estimatedCloudCost}
                  </li>
                  <li>
                    <strong>Estimated Monthly Savings:</strong> £{results.estimatedSavings}
                  </li>
                  <li>
                    <strong>Estimated ROI:</strong> {results.roiPercentage}% over {results.timelineApplied} year(s)
                  </li>
                  <li>
                    <strong>Utilization Applied:</strong> {results.utilizationApplied}%
                  </li>
                </ul>
              </div>
            )}
          </CardContent>
        </Card>

        {results && (
          <div className="mt-4">
            <Button
              onClick={downloadPDF}
              className="py-3 px-6 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Download Results as PDF
            </Button>
          </div>
        )}
      </section>
    </>
  );
};

export default CloudROICalculator;

