// import { useState, useRef } from 'react';
// import { Card, CardContent } from '../../ui/Card';
// import { Button } from '../../ui/Button';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// const NetworkManagementROI = () => {
//   const [formData, setFormData] = useState({
//     currentNetworkSpend: '',
//     devices: '',
//     supportTickets: '',
//     utilization: '',
//     timeline: '',
//   });

//   const [results, setResults] = useState<{
//     estimatedCloudCost: string;
//     estimatedSavings: string;
//     roiPercentage: string;
//     utilizationApplied: string;
//     timelineApplied: string;
//   } | null>(null);

//   const [loading, setLoading] = useState(false);
//   const [buttonDisabled, setButtonDisabled] = useState(false);
//   const resultRef = useRef<HTMLDivElement>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     if (results) {
//       setResults(null);
//       setButtonDisabled(false);
//     }
//   };

//   const calculateROI = (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     const currentNetworkSpend = parseFloat(formData.currentNetworkSpend) || 0;
//     const devices = parseInt(formData.devices) || 0;
//     const supportTickets = parseInt(formData.supportTickets) || 0;
//     const utilization = parseFloat(formData.utilization) || 100;
//     const timeline = parseInt(formData.timeline) || 1;

//     const adjustedSpend = currentNetworkSpend * (utilization / 100);
//     const estimatedCloudCost = (adjustedSpend * 0.7) + (devices * 10) + (supportTickets * 5);
//     const estimatedSavings = adjustedSpend - estimatedCloudCost;
//     const roiPercentage = ((estimatedSavings * 12 * timeline) / (adjustedSpend * 12*timeline)) * 100;

//     setTimeout(() => {
//       setResults({
//         estimatedCloudCost: estimatedCloudCost.toFixed(2),
//         estimatedSavings: estimatedSavings.toFixed(2),
//         roiPercentage: roiPercentage.toFixed(1),
//         utilizationApplied: utilization.toFixed(0),
//         timelineApplied: timeline.toString(),
//       });
//       setLoading(false);
//       setButtonDisabled(true);
//       setFormData({
//         currentNetworkSpend: '',
//         devices: '',
//         supportTickets: '',
//         utilization: '',
//         timeline: '',
//       });
//     }, 800);
//   };

//   const downloadPDF = async () => {
//     if (!resultRef.current) return;
//     const canvas = await html2canvas(resultRef.current);
//     const imgData = canvas.toDataURL('image/png');

//     const pdf = new jsPDF({
//       orientation: 'portrait',
//       unit: 'pt',
//       format: 'a4',
//     });

//     const pageWidth = pdf.internal.pageSize.getWidth();
//     const imgProps = pdf.getImageProperties(imgData);
//     const pdfHeight = (imgProps.height * (pageWidth - 80)) / imgProps.width;

//     pdf.setFontSize(18);
//     pdf.text('Network Management ROI Estimate - R2 System Solution Ltd.', 40, 40);
//     pdf.addImage(imgData, 'PNG', 40, 60, pageWidth - 80, pdfHeight);
//     pdf.save('network-management-roi-estimate.pdf');
//   };

//   return (
//     <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-4 py-12">
//       <Card className="w-full max-w-xl rounded-2xl shadow-lg border border-gray-200 bg-white">
//         <CardContent className="p-8 space-y-6">
//           <div className="space-y-2 text-center">
//             <h2 className="text-3xl font-bold text-blue-900">Network Management ROI Calculator</h2>
//             <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
//               Estimate potential savings from migrating your network management to the cloud and download a personalized report.
//             </p>
//           </div>

//           <form onSubmit={calculateROI} className="space-y-5">
//             {[
//               {
//                 label: "Current Monthly Network Spend (£)",
//                 name: "currentNetworkSpend",
//                 placeholder: "e.g., 1500",
//                 tooltip: "Your current monthly spend on network management and operations.",
//               },
//               {
//                 label: "Number of Network Devices",
//                 name: "devices",
//                 placeholder: "e.g., 50",
//                 tooltip: "Total routers, switches, and firewalls managed in your network.",
//               },
//               {
//                 label: "Monthly Support Tickets",
//                 name: "supportTickets",
//                 placeholder: "e.g., 100",
//                 tooltip: "Average number of network-related support tickets per month.",
//               },
//               {
//                 label: "Average Utilization (%)",
//                 name: "utilization",
//                 placeholder: "e.g., 70",
//                 tooltip: "Typical network utilization across your infrastructure.",
//               },
//               {
//                 label: "Projection Timeline (Years)",
//                 name: "timeline",
//                 placeholder: "e.g., 2",
//                 tooltip: "Number of years to project ROI for your migration plan.",
//               },
//             ].map((field, idx) => (
//               <div key={idx} className="flex flex-col relative group">
//                 <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
//                   {field.label}
//                   <span className="ml-1 text-blue-600 cursor-pointer relative group">
//                     ⓘ
//                     <span className="absolute bottom-full mb-1 hidden group-hover:block bg-black text-white text-xs rounded p-1 w-60 z-10 text-left">
//                       {field.tooltip}
//                     </span>
//                   </span>
//                 </label>
//                 <input
//                   type="number"
//                   name={field.name}
//                   value={(formData as any)[field.name]}
//                   onChange={handleChange}
//                   placeholder={field.placeholder}
//                   required
//                   className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
//                 />
//               </div>
//             ))}

//             <Button
//               type="submit"
//               disabled={loading || buttonDisabled}
//               className={`w-full py-3 ${
//                 loading || buttonDisabled
//                   ? 'bg-blue-300 cursor-not-allowed'
//                   : 'bg-blue-600 hover:bg-blue-700'
//               } text-white text-lg font-semibold rounded-lg transition-all shadow-md hover:shadow-lg`}
//             >
//               {loading ? 'Calculating...' : 'Calculate ROI'}
//             </Button>
//           </form>

//           {results && (
//             <div
//               ref={resultRef}
//               className="mt-6 p-6 rounded-xl bg-blue-50 text-blue-900 shadow-inner space-y-4"
//             >
//               <div className="space-y-1 text-center">
//                 <h3 className="text-xl font-semibold">Your Estimated Results</h3>
//                 <p className="text-sm text-gray-700">
//                   Review your estimated cost savings and ROI for your network management transition.
//                 </p>
//               </div>
//               <ul className="space-y-2 text-center">
//                 <li>
//                   <strong>Estimated Monthly Cloud Network Cost:</strong> £{results.estimatedCloudCost}
//                 </li>
//                 <li>
//                   <strong>Estimated Monthly Savings:</strong> £{results.estimatedSavings}
//                 </li>
//                 <li>
//                   <strong>Estimated ROI:</strong> {results.roiPercentage}% over {results.timelineApplied} year(s)
//                 </li>
//                 <li>
//                   <strong>Utilization Applied:</strong> {results.utilizationApplied}%
//                 </li>
//               </ul>
//               <div className="flex justify-center">
//                 <Button
//                   onClick={downloadPDF}
//                   className="mt-4 py-3 px-6 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg transition-all shadow-md hover:shadow-lg"
//                 >
//                   Download Results as PDF
//                 </Button>
//               </div>
//             </div>
//           )}
//         </CardContent>
//       </Card>
//     </section>
//   );
// };import { useState, useRef } from 'react';
import { useState, useRef } from 'react';
import { Card, CardContent } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { TrendingUp, Activity, Info } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function NetworkManagementROI() {
  const [bandwidth, setBandwidth] = useState('');
  const [latency, setLatency] = useState('');
  const [packetLoss, setPacketLoss] = useState('');
  const [result, setResult] = useState(null);

  const resultRef = useRef(null);

  const handleCalculate = () => {
    const bandwidthNum = parseFloat(bandwidth);
    const latencyNum = parseFloat(latency);
    const packetLossNum = parseFloat(packetLoss);

    if (isNaN(bandwidthNum) || isNaN(latencyNum) || isNaN(packetLossNum)) {
      setResult('Please enter valid numeric values.');
      return;
    }

    const networkScore = (bandwidthNum / 100) * (100 - packetLossNum) / (latencyNum || 1);
    setResult(`Estimated Network Performance Score: ${networkScore.toFixed(2)}`);

    // Reset inputs when results are displayed
    setBandwidth('');
    setLatency('');
    setPacketLoss('');
  };

  const handleDownloadPdf = async () => {
    if (!resultRef.current) return;

    const canvas = await html2canvas(resultRef.current, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    pdf.setFontSize(16);
    pdf.text('R2 System Solution Ltd.', pageWidth / 2, 40, { align: 'center' });
    pdf.setFontSize(12);
    pdf.text('Network Performance Report', pageWidth / 2, 60, { align: 'center' });

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pageWidth * 0.8;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    const x = (pageWidth - pdfWidth) / 2;
    const y = 80;

    pdf.addImage(imgData, 'PNG', x, y, pdfWidth, pdfHeight);

    pdf.setFontSize(10);
    pdf.text('Generated via R2 System Solution Ltd. Network Analyzing Tool', pageWidth / 2, pageHeight - 20, { align: 'center' });

    pdf.save('network-performance-report.pdf');
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    if (result) {
      setResult(null);
    }
  };

  const isAnalyzeDisabled = result !== null;

  return (
    <div className="flex flex-col items-center justify-center w-full p-6 space-y-6">
      <div className="w-full max-w-md">
        <Card className="w-full">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center space-x-2">
              <Activity className="text-primary" />
              <h2 className="text-xl font-semibold">Analyze Network Performance</h2>
            </div>
            <div className="space-y-4">
              <div className="relative group">
                <label htmlFor="bandwidth" className="flex items-center space-x-1">
                  Bandwidth (Mbps)
                  <div className="relative flex items-center">
                    <Info className="w-4 h-4 text-muted cursor-pointer" />
                    <span className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded p-1 whitespace-nowrap z-10">Total available data transfer capacity (Mbps).</span>
                  </div>
                </label>
                <input
                  id="bandwidth"
                  type="number"
                  placeholder="e.g., 100"
                  value={bandwidth}
                  onChange={handleInputChange(setBandwidth)}
                  className="w-full p-2 border rounded mt-1"
                />
              </div>
              <div className="relative group">
                <label htmlFor="latency" className="flex items-center space-x-1">
                  Latency (ms)
                  <div className="relative flex items-center">
                    <Info className="w-4 h-4 text-muted cursor-pointer" />
                    <span className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded p-1 whitespace-nowrap z-10">Time taken for data to travel across the network (ms).</span>
                  </div>
                </label>
                <input
                  id="latency"
                  type="number"
                  placeholder="e.g., 50"
                  value={latency}
                  onChange={handleInputChange(setLatency)}
                  className="w-full p-2 border rounded mt-1"
                />
              </div>
              <div className="relative group">
                <label htmlFor="packetLoss" className="flex items-center space-x-1">
                  Packet Loss (%)
                  <div className="relative flex items-center">
                    <Info className="w-4 h-4 text-muted cursor-pointer" />
                    <span className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded p-1 whitespace-nowrap z-10">Percentage of lost data packets during transmission.</span>
                  </div>
                </label>
                <input
                  id="packetLoss"
                  type="number"
                  placeholder="e.g., 2"
                  value={packetLoss}
                  onChange={handleInputChange(setPacketLoss)}
                  className="w-full p-2 border rounded mt-1"
                />
              </div>
            </div>
            <Button onClick={handleCalculate} disabled={isAnalyzeDisabled} className={`w-full mt-4 ${isAnalyzeDisabled ? 'bg-gray-400 cursor-not-allowed' : ''}`}>
              <TrendingUp className="mr-2 h-4 w-4" /> Analyze
            </Button>
            {result && (
              <div ref={resultRef} className="mt-4 p-4 rounded-lg bg-muted text-center">
                <p className="text-lg font-medium text-primary-foreground">{result}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      {result && (
        <div className="mt-4 flex justify-center">
          <Button
            onClick={handleDownloadPdf}
            className="py-3 px-6 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg transition-all shadow-md hover:shadow-lg"
          >
            Download Results as PDF
          </Button>
        </div>
      )}
    </div>
  );
}




