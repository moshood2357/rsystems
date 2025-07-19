
import { useState, useRef } from 'react';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ArrowLeft } from 'lucide-react';

const CloudROICalculator = () => {
  const [formData, setFormData] = useState({
    currentSpend: '',
    servers: '',
    storage: '',
    utilization: '',
    timeline: '',
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

    const currentSpend = parseFloat(formData.currentSpend) || 0;
    const servers = parseInt(formData.servers) || 0;
    const storage = parseInt(formData.storage) || 0;
    const utilization = parseFloat(formData.utilization) || 100;
    const timeline = parseInt(formData.timeline) || 1;

    const adjustedSpend = currentSpend * (utilization / 100);
    const estimatedCloudCost = (adjustedSpend * 0.65) + (servers * 15) + (storage * 0.02);
    const estimatedSavings = adjustedSpend - estimatedCloudCost;
    const roiPercentage = ((estimatedSavings * 12 * timeline) / (adjustedSpend * 12 * timeline)) * 100;

    setTimeout(() => {
      setResults({
        estimatedCloudCost: estimatedCloudCost.toFixed(2),
        estimatedSavings: estimatedSavings.toFixed(2),
        roiPercentage: roiPercentage.toFixed(1),
        utilizationApplied: utilization.toFixed(0),
        timelineApplied: timeline.toString(),
      });
      setLoading(false);
      setButtonDisabled(true);
      setFormData({
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
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: 'a4',
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfHeight = (imgProps.height * pageWidth) / imgProps.width;

    pdf.setFontSize(18);
    pdf.text('Cloud ROI Estimate - R2 System Solution Ltd.', 40, 40);
    pdf.addImage(imgData, 'PNG', 40, 60, pageWidth - 80, pdfHeight);
    pdf.save('cloud-roi-estimate.pdf');
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-4 py-12 relative">

      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-6 left-6 flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back
      </button>

      <Card className="w-full max-w-lg rounded-2xl shadow-2xl border border-gray-200 bg-white">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Cloud ROI Calculator</h2>
          <p className="text-center text-gray-600 mb-8 text-sm md:text-base">
            Estimate your potential cloud savings quickly and download your personalized report.
          </p>

          <form onSubmit={calculateROI} className="space-y-5">
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
                tooltip: "Average utilization across your servers, CPU, RAM, network bandwidth, etc.",
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
                  <span className="ml-1 text-blue-600 cursor-pointer relative group">
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
  );
};

export default CloudROICalculator;
