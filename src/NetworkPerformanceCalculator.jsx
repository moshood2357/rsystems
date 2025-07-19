// import { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { TrendingUp, Activity } from 'lucide-react';

// export default function AnalyzeNetworkPerformanceCalculator() {
//   const [bandwidth, setBandwidth] = useState('');
//   const [latency, setLatency] = useState('');
//   const [packetLoss, setPacketLoss] = useState('');
//   const [result, setResult] = useState(null);

//   const handleCalculate = () => {
//     const bandwidthNum = parseFloat(bandwidth);
//     const latencyNum = parseFloat(latency);
//     const packetLossNum = parseFloat(packetLoss);

//     if (isNaN(bandwidthNum) || isNaN(latencyNum) || isNaN(packetLossNum)) {
//       setResult('Please enter valid numeric values.');
//       return;
//     }

//     const networkScore =
//       (bandwidthNum / 100) * (100 - packetLossNum) / (latencyNum || 1);
//     setResult(`Estimated Network Performance Score: ${networkScore.toFixed(2)}`);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-6 space-y-6">
//       <Card className="w-full">
//         <CardContent className="p-6 space-y-4">
//           <div className="flex items-center space-x-2">
//             <Activity className="text-primary" />
//             <h2 className="text-xl font-semibold">Analyze Network Performance</h2>
//           </div>
//           <div className="space-y-4">
//             <div>
//               <Label htmlFor="bandwidth">Bandwidth (Mbps)</Label>
//               <Input
//                 id="bandwidth"
//                 type="number"
//                 placeholder="Enter bandwidth"
//                 value={bandwidth}
//                 onChange={(e) => setBandwidth(e.target.value)}
//               />
//             </div>
//             <div>
//               <Label htmlFor="latency">Latency (ms)</Label>
//               <Input
//                 id="latency"
//                 type="number"
//                 placeholder="Enter latency"
//                 value={latency}
//                 onChange={(e) => setLatency(e.target.value)}
//               />
//             </div>
//             <div>
//               <Label htmlFor="packetLoss">Packet Loss (%)</Label>
//               <Input
//                 id="packetLoss"
//                 type="number"
//                 placeholder="Enter packet loss"
//                 value={packetLoss}
//                 onChange={(e) => setPacketLoss(e.target.value)}
//               />
//             </div>
//           </div>
//           <Button onClick={handleCalculate} className="w-full mt-4">
//             <TrendingUp className="mr-2 h-4 w-4" /> Analyze
//           </Button>
//           {result && (
//             <div className="mt-4 p-4 rounded-lg bg-muted text-center">
//               <p className="text-lg font-medium text-primary-foreground">{result}</p>
//             </div>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
