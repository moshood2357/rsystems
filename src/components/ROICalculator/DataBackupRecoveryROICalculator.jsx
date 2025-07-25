import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '../../ui/Card';
import { Button } from '../../ui/Button';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const DataBackupRecoveryROICalculator = () => {
  const [formData, setFormData] = useState({
    currentBackupCosts: '',
    potentialDowntimeCost: '',
    downtimeProbability: '',
    recoveryImprovement: '',
    solutionCost: '',
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

    const currentBackupCosts = parseFloat(formData.currentBackupCosts) || 0;
    const potentialDowntimeCost = parseFloat(formData.potentialDowntimeCost) || 0;
    const downtimeProbability = parseFloat(formData.downtimeProbability) / 100 || 0;
    const recoveryImprovement = parseFloat(formData.recoveryImprovement) / 100 || 0;
    const solutionCost = parseFloat(formData.solutionCost) || 0;

    const expectedLossWithout = potentialDowntimeCost * downtimeProbability;
    const expectedLossWith = expectedLossWithout * (1 - recoveryImprovement);
    const annualSavings = (expectedLossWithout - expectedLossWith + currentBackupCosts) - solutionCost;
    const roiPercentage = (annualSavings / solutionCost) * 100;

    setTimeout(() => {
      setResults({
        annualSavings: annualSavings.toFixed(2),
        roiPercentage: roiPercentage.toFixed(1),
      });
      setLoading(false);
      setButtonDisabled(true);
      setFormData({
        currentBackupCosts: '',
        potentialDowntimeCost: '',
        downtimeProbability: '',
        recoveryImprovement: '',
        solutionCost: '',
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
    pdf.text('Data & Backup Recovery ROI Estimate - R2 System Solution Ltd.', 40, 40);
    pdf.addImage(imgData, 'PNG', 40, 60, pageWidth - 80, pdfHeight);
    pdf.save('data-backup-recovery-roi-estimate.pdf');
  };

  return (
    <>
      <Helmet>
        <title>Data & Backup Recovery ROI Calculator | R2 System Solution Ltd.</title>
        <meta name="description" content="Quickly calculate your potential ROI when investing in data and backup recovery solutions for your business with our free, interactive tool." />
        <meta name="keywords" content="Data Backup ROI, Backup Recovery ROI Calculator, Business Continuity ROI, R2 System Solution Ltd." />
      </Helmet>

      <section className="min-h-screen  bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center px-4 py-12">
        <Card className="w-full max-w-xl rounded-2xl shadow-lg border border-gray-200 bg-white">
          <CardContent className="p-8 space-y-6">
            <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold text-blue-900">Data & Backup Recovery ROI Calculator</h2>
            <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
              Estimate the potential ROI from investing in backup solutions to protect your business.
            </p>
          </div>
            <form onSubmit={calculateROI} className="space-y-5">
            {[{
                label: 'Current backup cost(£)',
                name: 'currentBackupCosts',
                placeholder: 'e.g., 50000',
                tooltip: ' How much your business is currently spending annually on your existing backup and recovery systems.',
              },
              {
                label: 'Potential Data Loss Cost (£)',
                name: 'potentialDataLossCost',
                placeholder: 'e.g., 50000',
                tooltip: 'Estimated financial impact if significant data loss occurs.',
              },
              {
                label: 'Risk Probability (%)',
                name: 'riskProbability',
                placeholder: 'e.g., 25',
                tooltip: 'Probability of data loss or downtime occurring within a year.',
              },
              {
                label: 'Expected Risk Reduction (%)',
                name: 'reductionPercentage',
                placeholder: 'e.g., 80',
                tooltip: 'Estimated reduction in risk by implementing backup and recovery solutions.',
              },
              {
                label: 'Annual Backup & Recovery Spend (£)',
                name: 'annualBackupSpend',
                placeholder: 'e.g., 7000',
                tooltip: 'Total annual expenditure on backup and disaster recovery solutions.',
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
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-indigo-500 outline-none transition-all"
                />
              </div>
            ))}

            <Button
              type="submit"
              disabled={loading || buttonDisabled}
              className={`w-full py-3 ${
                loading || buttonDisabled ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              } text-white text-lg font-semibold rounded-lg transition-all shadow-md hover:shadow-lg`}
            >
              {loading ? 'Calculating...' : 'Calculate ROI'}
            </Button>
          </form>
          {results && (
            <div ref={resultRef} className="mt-6 p-6 rounded-xl bg-blue-50 text-blue-900 shadow-inner space-y-4">
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-semibold">Your Estimated Results</h3>
                <p className="text-sm text-gray-700">
                  Review your estimated cost savings and ROI based on your data backup and recovery investment.
                </p>
              </div>
              <ul className="space-y-2 text-center">
                <li>
                  <strong>Estimated Annual Risk Savings:</strong> £{results.annualSavings}
                </li>
                <li>
                  <strong>Estimated ROI:</strong> {results.roiPercentage}%
                </li>
              </ul>
              <div className="flex justify-center">
                <Button
                  onClick={downloadPDF}
                  className="mt-4 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-all shadow-md hover:shadow-lg no-print"
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

export default DataBackupRecoveryROICalculator;
