import DataBackupRecoveryROICalculator from './ROICalculator/DataBackupRecoveryROICalculator';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';
import { CheckCircle } from 'lucide-react';
import Back from './Back';

const CalculateDataBackupRecoveryROIPage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full  bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 text-center">
        <Back className="mt-20" />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900">
          Instantly Calculate Your Data & Backup Recovery ROI
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-700">
          Discover your potential savings, reduced downtime, and operational resilience by investing in data & backup recovery solutions.
          Use our free calculator to get personalized insights in minutes.
        </p>
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md shadow-md transition"
          onClick={() =>
            document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Calculate Now
        </Button>
      </section>

      {/* Why Calculate ROI */}
      <section className="max-w-4xl w-full py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ble-900">
          Why Calculating Your Data & Backup Recovery ROI Matters
        </h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 text-gray-600">
          Understanding your ROI helps justify investments in reliable backup and recovery systems, protecting your business from costly data loss and extended downtime:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
          {[
            'Identify potential downtime cost savings.',
            'Improve recovery time objectives and business continuity.',
            'Reduce operational costs associated with inefficient backup methods.',
            'Build a clear business case for advanced backup solutions.',
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
              <CheckCircle className="text-blue-600 mt-1" size={20} />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="roi-calculator" className="w-full py-20 px-4 bg-yellow-50">
        <DataBackupRecoveryROICalculator />
      </section>

      {/* Example Scenarios */}
      <section className="max-w-5xl w-full py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900">
          Real Businesses, Real Savings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Small Business | Reduced Downtime by 40%',
              description:
                'A local retailer improved recovery times, reducing data loss risks and ensuring business continuity after upgrading their backup systems.',
            },
            {
              title: 'SaaS Startup | 60% Faster Recovery',
              description:
                'A software company minimized downtime and reduced operational disruption with advanced automated backup and recovery solutions.',
            },
            {
              title: 'Enterprise | £100K Annual Savings',
              description:
                'An enterprise reduced downtime-related losses and operational inefficiencies, leading to significant cost savings and improved resilience.',
            },
          ].map((item, idx) => (
            <Card key={idx} className="shadow-lg hover:shadow-xl transition rounded-xl border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-gradient-to-b from-yellow-50 to-white py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
          Ready to Protect Your Business?
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-gray-700">
          Get your personalized data and backup recovery ROI estimate and start securing your operations today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md shadow-md transition"
            onClick={() =>
              document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Calculate My ROI
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg rounded-md transition"
          >
            Book a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CalculateDataBackupRecoveryROIPage;
