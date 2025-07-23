import ComplianceROICalculator from './ROICalculator/ComplianceROICalculator';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';
import { CheckCircle } from 'lucide-react';
import Back from './Back';

const CalculateComplianceROIPage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-blue-50 to-white py-20 px-4 text-center">
        <Back className='mt-20' />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900">
          Instantly Calculate Your Compliance ROI
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-700">
          Discover your potential savings and risk reduction by investing in compliance. Use our free calculator to get personalized insights in minutes.
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
          Why Calculating Your Compliance ROI Matters
        </h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 text-gray-600">
          Compliance is not just a regulatory checkbox; it drives operational efficiency, reduces risks, and protects your brand. By calculating your ROI, you can:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
          {[
            'Identify cost savings from avoided fines and legal fees',
            'Reduce operational and reputational risks effectively',
            'Align compliance spending with measurable business value',
            'Build a strong business case for compliance investments',
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
              <CheckCircle className="text-green-600 mt-1" size={20} />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="roi-calculator" className="w-full py-20 px-4 bg-gray-50">
        <ComplianceROICalculator />
      </section>

      {/* Example Scenarios */}
      <section className="max-w-5xl w-full py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900">
          Real Businesses, Real Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Small Business | 25% Savings',
              description: 'A retail company reduced legal fees and improved operational efficiency with structured compliance frameworks.',
            },
            {
              title: 'Healthcare | Risk Reduction',
              description: 'A clinic avoided regulatory fines while protecting patient data by implementing a compliance roadmap.',
            },
            {
              title: 'Tech Startup | Investment Readiness',
              description: 'A startup attracted investors by demonstrating strong compliance and risk management posture.',
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
      <section className="w-full bg-gradient-to-b from-blue-50 to-white py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
          Ready to Maximize Your Compliance ROI?
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-gray-700">
          Get a clear view of how your compliance investments protect and grow your business. Calculate your personalized ROI today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md shadow-md transition"
            onClick={() =>
              document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Calculate My Compliance ROI
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg rounded-md transition"
          >
            Book a Free Compliance Review
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CalculateComplianceROIPage;
