import { useState, useRef } from 'react';
import { Card, CardContent } from '../../ui/Card';
import { Button } from '../../ui/Button';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ITConsultancyROICalculator = () => {
  const [formData, setFormData] = useState({
    currentSpend: '',
    teamSize: '',
    avgHourlyRate: '',
    productivityGain: '',
    timeline: '',
  });

  const [results, setResults] = useState<{
    estimatedConsultancyCost: string;
    estimatedSavings: string;
    roiPercentage: string;
    productivityApplied: string;
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
    const teamSize = parseInt(formData.teamSize) || 0;
    const avgHourlyRate = parseFloat(formData.avgHourlyRate) || 0;
    const productivityGain = parseFloat(formData.productivityGain) || 0;
    const timeline = parseInt(formData.timeline) || 1;

    const consultancyCost = teamSize * avgHourlyRate * 160 * 0.1; // Assuming 10% consultancy hours
    const potentialSavings = (currentSpend * (productivityGain / 100));
    const roiPercentage = ((potentialSavings * 12 * timeline - consultancyCost) / consultancyCost) * 100;

    setTimeout(() => {
      setResults({
        estimatedConsultancyCost: consultancyCost.toFixed(2),
        estimatedSavings: potentialSavings.toFixed(2),
        roiPercentage: roiPercentage.toFixed(1),
        productivityApplied: productivityGain.toFixed(0),
        timelineApplied: timeline.toString(),
      });
      setLoading(false);
      setButtonDisabled(true);
      setFormData({
        currentSpend: '',
        teamSize: '',
        avgHourlyRate: '',
        productivityGain: '',
        timeline: '',
      });
    }, 800);
  };

  const downloadPDF = async () => {
    if (!resultRef.current) return;
    const canvas = await html2canvas(resultRef.current);
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfHeight = (imgProps.height * (pageWidth - 80)) / imgProps.width;

    pdf.setFontSize(18);
    pdf.text('IT Consultancy ROI Estimate - R2 System Solution Ltd.', 40, 40);
    pdf.addImage(imgData, 'PNG', 40, 60, pageWidth - 80, pdfHeight);
    pdf.save('it-consultancy-roi-estimate.pdf');
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center justify-center px-4 py-12">
      <Card className="w-full max-w-xl rounded-2xl shadow-lg border border-gray-200 bg-white">
        <CardContent className="p-8 space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold text-green-900">IT Consultancy ROI Calculator</h2>
            <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
              Estimate your potential IT consultancy ROI and download your personalized report.
            </p>
          </div>

          <form onSubmit={calculateROI} className="space-y-5">
            {[
              {
                label: 'Current Monthly IT Spend (£)',
                name: 'currentSpend',
                placeholder: 'e.g., 5000',
                tooltip: 'Your current monthly IT operational and infrastructure costs.',
              },
              {
                label: 'Team Size (People)',
                name: 'teamSize',
                placeholder: 'e.g., 10',
                tooltip: 'Total IT staff that will benefit from consultancy improvements.',
              },
              {
                label: 'Average Hourly Rate (£)',
                name: 'avgHourlyRate',
                placeholder: 'e.g., 40',
                tooltip: 'Average hourly cost of your IT staff.',
              },
              {
                label: 'Expected Productivity Gain (%)',
                name: 'productivityGain',
                placeholder: 'e.g., 15',
                tooltip: 'Expected productivity improvement from consultancy engagement.',
              },
              {
                label: 'ROI Timeline (Years)',
                name: 'timeline',
                placeholder: 'e.g., 2',
                tooltip: 'Expected timeline for assessing ROI after consultancy implementation.',
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
                  value={(formData as any)[field.name]}
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
                loading || buttonDisabled
                  ? 'bg-green-300 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700'
              } text-white text-lg font-semibold rounded-lg transition-all shadow-md hover:shadow-lg`}
            >
              {loading ? 'Calculating...' : 'Calculate ROI'}
            </Button>
          </form>

          {results && (
            <div
              ref={resultRef}
              className="mt-6 p-6 rounded-xl bg-green-50 text-green-900 shadow-inner space-y-4"
            >
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-semibold">Your Estimated Results</h3>
                <p className="text-sm text-gray-700">
                  Review your estimated cost savings and ROI based on your inputs.
                </p>
              </div>
              <ul className="space-y-2 text-center">
                <li>
                  <strong>Estimated Consultancy Cost:</strong> £{results.estimatedConsultancyCost}
                </li>
                <li>
                  <strong>Estimated Annual Savings:</strong> £{results.estimatedSavings}
                </li>
                <li>
                  <strong>Estimated ROI:</strong> {results.roiPercentage}% over {results.timelineApplied} year(s)
                </li>
                <li>
                  <strong>Productivity Gain Applied:</strong> {results.productivityApplied}%
                </li>
              </ul>
              
            </div>
          )}
        </CardContent>
      </Card>
      <div className="flex justify-center">
        <Button
        onClick={downloadPDF}
        className="mt-4 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-all shadow-md hover:shadow-lg"
        >
          Download Results as PDF
        </Button>
    </div>
    </section>
  );
};

export default ITConsultancyROICalculator;
