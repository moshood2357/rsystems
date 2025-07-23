import { useState } from 'react';
import { Card, CardContent } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { Info } from 'lucide-react';

const ComplianceROICalculator = () => {
  const [complianceCost, setComplianceCost] = useState('');
  const [benefits, setBenefits] = useState('');
  const [roi, setRoi] = useState(null);

  const calculateROI = () => {
    const cost = parseFloat(complianceCost);
    const totalBenefits = parseFloat(benefits);
    if (!isNaN(cost) && !isNaN(totalBenefits) && cost !== 0) {
      const result = ((totalBenefits - cost) / cost) * 100;
      setRoi(result.toFixed(2));
    } else {
      setRoi(null);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <Card className="p-6 shadow-xl rounded-2xl">
        <CardContent className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Compliance ROI Calculator</h2>

          <div className="flex flex-col space-y-2">
            <label className="font-medium flex items-center gap-1">
              Current Compliance Costs (£)
              <span title="Total annual cost of compliance efforts including audits, training, tools, and external consultants.">
                <Info size={16} className="text-blue-500 cursor-pointer" />
              </span>
            </label>
            <input
              type="number"
              value={complianceCost}
              onChange={(e) => setComplianceCost(e.target.value)}
              placeholder="e.g., 100000"
              className="border rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="font-medium flex items-center gap-1">
              Total Benefits from Compliance (£)
              <span title="Estimated annual financial benefits including avoided fines, reduced downtime, increased contracts, and cost savings.">
                <Info size={16} className="text-blue-500 cursor-pointer" />
              </span>
            </label>
            <input
              type="number"
              value={benefits}
              onChange={(e) => setBenefits(e.target.value)}
              placeholder="e.g., 250000"
              className="border rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <Button onClick={calculateROI} className="w-full mt-4">
            Calculate ROI
          </Button>

          {roi !== null && (
            <div className="text-center mt-4 text-lg font-semibold">
              Compliance ROI: <span className="text-green-600">{roi}%</span>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ComplianceROICalculator;
