import { useState, useRef } from 'react';
import { Card, CardContent } from '../../ui/Card';
import { Button } from '../../ui/Button';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const VoIPUnifiedCommROICalculator = () => {
  const [formData, setFormData] = useState({
    currentMonthlyCommSpend: '',
    numOfUsers: '',
    estimatedSavingsPerUser: '',
    implementationCost: '',
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

    const currentMonthlyCommSpend = parseFloat(formData.currentMonthlyCommSpend) || 0;
    const numOfUsers = parseInt(formData.numOfUsers) || 0;
    const estimatedSavingsPerUser = parseFloat(formData.estimatedSavingsPerUser) || 0;
    const implementationCost = parseFloat(formData.implementationCost) || 0;

    const annualCurrentSpend = currentMonthlyCommSpend * 12;
    const annualSavings = estimatedSavingsPerUser * numOfUsers * 12;
    const roiPercentage = implementationCost
      ? ((annualSavings - implementationCost) / implementationCost) * 100
      : 0;
    const savingsAsPercentOfSpend = annualCurrentSpend
      ? (annualSavings / annualCurrentSpend) * 100
      : 0;

    setTimeout(() => {
      setResults({
        annualSavings: annualSavings.toFixed(2),
        roiPercentage: roiPercentage.toFixed(1),
        savingsPercentOfSpend: savingsAsPercentOfSpend.toFixed(1),
      });
      setLoading(false);
      setButtonDisabled(true);
      setFormData({
        currentMonthlyCommSpend: '',
        numOfUsers: '',
        estimatedSavingsPerUser: '',
        implementationCost: '',
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
    pdf.text('VoIP & Unified Communication ROI Estimate - R2 System Solution Ltd.', 40, 40);
    pdf.addImage(imgData, 'PNG', 40, 60, pageWidth - 80, pdfHeight);
    pdf.save('voip-unified-comm-roi-estimate.pdf');
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col items-center justify-center px-4 py-12">
      <Card className="w-full max-w-xl rounded-2xl shadow-lg border border-gray-200 bg-white">
        <CardContent className="p-8 space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold text-purple-900">
              VoIP & Unified Communication ROI Calculator
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
              Estimate your potential ROI and annual cost savings by switching to VoIP and unified communication solutions.
            </p>
          </div>

          <form onSubmit={calculateROI} className="space-y-5">
            {[
              {
                label: 'Current Monthly Communication Spend (£)',
                name: 'currentMonthlyCommSpend',
                placeholder: 'e.g., 500',
                tooltip: 'Your business’s current monthly spend on calls, conferencing, and communications.',
              },
              {
                label: 'Number of Users',
                name: 'numOfUsers',
                placeholder: 'e.g., 25',
                tooltip: 'Total employees/users who will be using VoIP/UC solutions.',
              },
              {
                label: 'Estimated Monthly Savings Per User (£)',
                name: 'estimatedSavingsPerUser',
                placeholder: 'e.g., 10',
                tooltip: 'Estimated monthly savings per user after switching to VoIP/UC.',
              },
              {
                label: 'Implementation Cost (£)',
                name: 'implementationCost',
                placeholder: 'e.g., 1500',
                tooltip: 'Estimated one-time implementation cost for VoIP/UC solutions.',
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
                  Review your estimated cost savings and ROI after switching to VoIP and unified communication solutions.
                </p>
              </div>
              <ul className="space-y-2 text-center">
                <li>
                  <strong>Estimated Annual Savings:</strong> £{results.annualSavings}
                </li>
                <li>
                  <strong>Estimated ROI:</strong> {results.roiPercentage}%
                </li>
                <li>
                  <strong>Savings as % of Current Spend:</strong> {results.savingsPercentOfSpend}%
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

export default VoIPUnifiedCommROICalculator;
