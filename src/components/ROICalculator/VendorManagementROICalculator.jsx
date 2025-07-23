import { useState, useRef } from 'react';
import { Card, CardContent } from '../../ui/Card';
import { Button } from '../../ui/Button';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const VendorManagementROICalculator = () => {
  const [formData, setFormData] = useState({
    annualVendorSpend: '',
    estimatedSavingsPercentage: '',
    annualVendorManagementCost: '',
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

    const annualVendorSpend = parseFloat(formData.annualVendorSpend) || 0;
    const estimatedSavingsPercentage = parseFloat(formData.estimatedSavingsPercentage) / 100 || 0;
    const annualVendorManagementCost = parseFloat(formData.annualVendorManagementCost) || 0;

    const estimatedSavings = annualVendorSpend * estimatedSavingsPercentage;
    const roiPercentage = ((estimatedSavings - annualVendorManagementCost) / annualVendorManagementCost) * 100;
    const savingsPercentOfSpend = annualVendorSpend ? (estimatedSavings / annualVendorSpend) * 100 : 0;

    setTimeout(() => {
      setResults({
        estimatedSavings: estimatedSavings.toFixed(2),
        roiPercentage: roiPercentage.toFixed(1),
        savingsPercentOfSpend: savingsPercentOfSpend.toFixed(1),
      });
      setLoading(false);
      setButtonDisabled(true);
      setFormData({
        annualVendorSpend: '',
        estimatedSavingsPercentage: '',
        annualVendorManagementCost: '',
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
    pdf.text('Vendor Management ROI Estimate - R2 System Solution Ltd.', 40, 40);
    pdf.addImage(imgData, 'PNG', 40, 60, pageWidth - 80, pdfHeight);
    pdf.save('vendor-management-roi-estimate.pdf');
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col items-center justify-center px-4 py-12">
      <Card className="w-full max-w-xl rounded-2xl shadow-lg border border-gray-200 bg-white">
        <CardContent className="p-8 space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold text-purple-900">Vendor Management ROI Calculator</h2>
            <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
              Estimate the potential ROI of improving your vendor management to reduce costs and improve performance.
            </p>
          </div>

          <form onSubmit={calculateROI} className="space-y-5">
            {[
              {
                label: 'Annual Vendor Spend (£)',
                name: 'annualVendorSpend',
                placeholder: 'e.g., 250000',
                tooltip: 'Your total annual spend on vendors and suppliers.',
              },
              {
                label: 'Estimated Savings from Vendor Management (%)',
                name: 'estimatedSavingsPercentage',
                placeholder: 'e.g., 15',
                tooltip: 'Expected % savings through vendor negotiations and management.',
              },
              {
                label: 'Annual Vendor Management Cost (£)',
                name: 'annualVendorManagementCost',
                placeholder: 'e.g., 10000',
                tooltip: 'Your planned annual spend on vendor management resources/tools.',
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
                  Review your estimated cost savings and ROI from your vendor management investment.
                </p>
              </div>
              <ul className="space-y-2 text-center">
                <li>
                  <strong>Estimated Annual Savings:</strong> £{results.estimatedSavings}
                </li>
                <li>
                  <strong>Estimated ROI:</strong> {results.roiPercentage}%
                </li>
                <li>
                  <strong>Savings as % of Annual Vendor Spend:</strong> {results.savingsPercentOfSpend}%
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

export default VendorManagementROICalculator;
