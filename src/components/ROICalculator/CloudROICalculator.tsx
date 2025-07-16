// import { useState } from 'react';
// import { Card, CardContent } from '../../ui/Card';
// import { Button } from '../../ui/Button';
// // import { Input } from '../ui/Input';
// // import { Label } from '../ui/Label';
// // import { Progress } from '../ui/Progress';

// const CloudROICalculator = () => {
//   const [formData, setFormData] = useState({
//     currentSpend: '',
//     servers: '',
//     storage: '',
//     utilization: '',
//     timeline: '',
//   });
  
//   const [results, setResults] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const calculateROI = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const currentSpend = parseFloat(formData.currentSpend) || 0;
//     const servers = parseInt(formData.servers) || 0;
//     const storage = parseInt(formData.storage) || 0;
//     const utilization = parseFloat(formData.utilization) || 0;
//     const timeline = parseInt(formData.timeline) || 1;

//     const estimatedCloudCost = (currentSpend * 0.65) + (servers * 15) + (storage * 0.02);
//     const estimatedSavings = currentSpend - estimatedCloudCost;
//     const roiPercentage = ((estimatedSavings * 12 * timeline) / (currentSpend * 12 * timeline)) * 100;

//     setTimeout(() => {
//       setResults({
//         estimatedCloudCost: estimatedCloudCost.toFixed(2),
//         estimatedSavings: estimatedSavings.toFixed(2),
//         roiPercentage: roiPercentage.toFixed(1),
//       });
//       setLoading(false);
//     }, 1000);
//   };

//   return (
//     <Card className="max-w-xl mx-auto mt-10 p-6">
//       <CardContent>
//         <h2 className="text-2xl font-bold mb-4">Calculate Your Cloud ROI</h2>
//         <form onSubmit={calculateROI} className="space-y-4">
//           <div>
//             <label>Current Monthly Infrastructure Spend (&pound;)</label>
//             <input type="number" name="currentSpend" value={formData.currentSpend} onChange={handleChange} required />
//           </div>
//           <div>
//             <label>Number of Servers/VMs</label>
//             <input type="number" name="servers" value={formData.servers} onChange={handleChange} required />
//           </div>
//           <div>
//             <label>Storage Needs (GB)</label>
//             <input type="number" name="storage" value={formData.storage} onChange={handleChange} required />
//           </div>
//           <div>
//             <label>Average Utilization (%)</label>
//             <input type="number" name="utilization" value={formData.utilization} onChange={handleChange} required />
//           </div>
//           <div>
//             <label>Expected Migration Timeline (Years)</label>
//             <input type="number" name="timeline" value={formData.timeline} onChange={handleChange} required />
//           </div>
//           <Button type="submit" disabled={loading} className="w-full">
//             {loading ? 'Calculating...' : 'Calculate ROI'}
//           </Button>
//         </form>

//         {results && (
//           <div className="mt-6 space-y-4">
//             <h3 className="text-xl font-semibold">Your Results</h3>
//             <p><strong>Estimated Monthly Cloud Cost:</strong> ${results.estimatedCloudCost}</p>
//             <p><strong>Estimated Monthly Savings:</strong> ${results.estimatedSavings}</p>
//             <p><strong>Estimated ROI:</strong> {results.roiPercentage}% over {formData.timeline} year(s)</p>

//             <div className="mt-4">
//               <label>Estimated ROI Progress</label>
//               <progress value={parseFloat(results.roiPercentage)}></progress>
//             </div>
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   );
// };

// export default CloudROICalculator;

import { useState } from 'react';
import { Card, CardContent } from '../../ui/Card';
import  { Button } from '../../ui/Button';

const CloudROICalculator = () => {
  const [formData, setFormData] = useState({
    currentSpend: '',
    servers: '',
    storage: '',
    timeline: '',
  });

  const [results, setResults] = useState<{
    estimatedCloudCost: string;
    estimatedSavings: string;
    roiPercentage: string;
  } | null>(null);

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateROI = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const currentSpend = parseFloat(formData.currentSpend) || 0;
    const servers = parseInt(formData.servers) || 0;
    const storage = parseInt(formData.storage) || 0;
    const timeline = parseInt(formData.timeline) || 1;

    const estimatedCloudCost = (currentSpend * 0.65) + (servers * 15) + (storage * 0.02);
    const estimatedSavings = currentSpend - estimatedCloudCost;
    const roiPercentage = ((estimatedSavings * 12 * timeline) / (currentSpend * 12 * timeline)) * 100;

    setTimeout(() => {
      setResults({
        estimatedCloudCost: estimatedCloudCost.toFixed(2),
        estimatedSavings: estimatedSavings.toFixed(2),
        roiPercentage: roiPercentage.toFixed(1),
      });
      setLoading(false);
    }, 800);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-lg rounded-2xl shadow-2xl border border-gray-200 bg-white">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Cloud ROI Calculator</h2>
          <p className="text-center text-gray-600 mb-8 text-sm md:text-base">
            Quickly estimate your potential savings by migrating to the cloud.
          </p>
          <form onSubmit={calculateROI} className="space-y-5">
            {[
              { label: "Current Monthly Spend (£)", name: "currentSpend", placeholder: "e.g., 2500" },
              { label: "Number of Servers/VMs", name: "servers", placeholder: "e.g., 15" },
              { label: "Storage Needs (GB)", name: "storage", placeholder: "e.g., 1000" },
              { label: "Migration Timeline (Years)", name: "timeline", placeholder: "e.g., 2" },
            ].map((field, idx) => (
              <div key={idx} className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">{field.label}</label>
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
              disabled={loading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              {loading ? 'Calculating...' : 'Calculate ROI'}
            </Button>
          </form>

          {results && (
            <div className="mt-8 p-6 rounded-xl bg-blue-50 text-blue-900 shadow-inner">
              <h3 className="text-xl font-semibold mb-4 text-center">Your Estimated Results</h3>
              <ul className="space-y-2 text-center">
                <li><strong>Estimated Monthly Cloud Cost:</strong> £{results.estimatedCloudCost}</li>
                <li><strong>Estimated Monthly Savings:</strong> £{results.estimatedSavings}</li>
                <li><strong>Estimated ROI:</strong> {results.roiPercentage}% over {formData.timeline} year(s)</li>
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
};

export default CloudROICalculator;
