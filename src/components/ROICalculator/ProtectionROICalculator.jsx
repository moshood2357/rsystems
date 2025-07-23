

import { useState } from 'react';
import { Card, CardContent } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { Label } from '../../ui/Label';
import { BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';
import { CheckCircle, Info } from 'lucide-react';


export default function CalculateProtectionROIPage() {
  const [dataLossCost, setDataLossCost] = useState('');
  const [downtimeHours, setDowntimeHours] = useState('');
  const [downtimeCostPerHour, setDowntimeCostPerHour] = useState('');
  const [protectionCost, setProtectionCost] = useState('');
  const [roi, setRoi] = useState(null);

  const calculateROI = () => {
    const totalLoss =
      (parseFloat(dataLossCost) || 0) +
      (parseFloat(downtimeHours) || 0) * (parseFloat(downtimeCostPerHour) || 0);
    const calculatedROI = protectionCost
      ? ((totalLoss - parseFloat(protectionCost)) / parseFloat(protectionCost)) * 100
      : 0;
    setRoi(calculatedROI);
  };

  const chartData =
    roi !== null
      ? [
          {
            name: 'Loss Avoided',
            value:
              (parseFloat(dataLossCost) || 0) +
              (parseFloat(downtimeHours) || 0) * (parseFloat(downtimeCostPerHour) || 0),
          },
          { name: 'Protection Investment', value: parseFloat(protectionCost) || 0 },
        ]
      : [];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Calculate Protection ROI</h1>
      <Card>
        <CardContent className="space-y-4">
          <div>
            <Label>
              Estimated Data Loss Cost (£)
              <span className="ml-1 text-gray-400 cursor-pointer group relative">
                <Info size={16} />
                <span className="absolute left-6 top-0 w-48 bg-gray-800 text-white text-xs p-2 rounded opacity-0 group-hover:opacity-100 transition">
                  Estimated cost if data is lost or stolen (e.g., fines, recovery costs).
                </span>
              </span>
            </Label>
            <Input
              type="number"
              value={dataLossCost}
              onChange={(e) => setDataLossCost(e.target.value)}
              placeholder="e.g., 50000"
            />
          </div>

          <div>
            <Label>
              Expected Downtime Hours
              <span className="ml-1 text-gray-400 cursor-pointer group relative">
                <Info size={16} />
                <span className="absolute left-6 top-0 w-48 bg-gray-800 text-white text-xs p-2 rounded opacity-0 group-hover:opacity-100 transition">
                  How many hours your operations may stop due to incidents.
                </span>
              </span>
            </Label>
            <Input
              type="number"
              value={downtimeHours}
              onChange={(e) => setDowntimeHours(e.target.value)}
              placeholder="e.g., 10"
            />
          </div>

          <div>
            <Label>
              Downtime Cost per Hour (£)
              <span className="ml-1 text-gray-400 cursor-pointer group relative">
                <Info size={16} />
                <span className="absolute left-6 top-0 w-48 bg-gray-800 text-white text-xs p-2 rounded opacity-0 group-hover:opacity-100 transition">
                  Revenue or cost lost per hour when operations are down.
                </span>
              </span>
            </Label>
            <Input
              type="number"
              value={downtimeCostPerHour}
              onChange={(e) => setDowntimeCostPerHour(e.target.value)}
              placeholder="e.g., 1000"
            />
          </div>

          <div>
            <Label>
              Protection Investment Cost (£)
              <span className="ml-1 text-gray-400 cursor-pointer group relative">
                <Info size={16} />
                <span className="absolute left-6 top-0 w-48 bg-gray-800 text-white text-xs p-2 rounded opacity-0 group-hover:opacity-100 transition">
                  Annual cost of your device and endpoint protection solution.
                </span>
              </span>
            </Label>
            <Input
              type="number"
              value={protectionCost}
              onChange={(e) => setProtectionCost(e.target.value)}
              placeholder="e.g., 20000"
            />
          </div>

          <Button onClick={calculateROI}>Calculate ROI</Button>

          {roi !== null && (
            <div className="mt-6 p-4 bg-green-50 rounded-xl text-green-800 flex items-center space-x-2">
              <CheckCircle className="w-6 h-6" />
              <p>
                Estimated ROI: <span className="font-bold">{roi.toFixed(2)}%</span>
              </p>
            </div>
          )}

          {roi !== null && (
            <div className="h-64 mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <RechartsTooltip />
                  <Bar dataKey="value" fill="#16a34a" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}