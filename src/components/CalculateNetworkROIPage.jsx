import NetworkManagementROI from './ROICalculator/NetworkManagementROI';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';
import { CheckCircle } from 'lucide-react';

const CalculateNetworkROIPage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-blue-50 to-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900">
          Instantly Calculate Your Network Management ROI
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-700">
          Discover how optimizing your network management can reduce costs, improve reliability,
          and boost your IT team’s productivity. Use our free calculator to get tailored insights today.
        </p>
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md shadow-md transition"
          onClick={() =>
            document.getElementById('network-roi-calculator')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Calculate Now
        </Button>
      </section>

      {/* Why Calculate ROI */}
      <section className="max-w-4xl w-full py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
          Why Calculate Your Network Management ROI?
        </h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 text-gray-600">
          Managing your network efficiently means more than uptime—it means freeing up resources,
          controlling costs, and ensuring your business stays connected as it grows. By calculating
          your ROI, you can:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
          {[
            'Identify hidden costs in your current network operations',
            'Project savings from proactive monitoring and automation',
            'Align IT performance with your business goals',
            'Build a stronger business case for modern network investments',
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
            >
              <CheckCircle className="text-green-600 mt-1" size={20} />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="network-roi-calculator" className="w-full py-20 px-4 bg-gray-50">
        <NetworkManagementROI />
      </section>

      {/* Example Scenarios */}
      <section className="max-w-5xl w-full py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900">
          Real Results, Real Businesses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Retail Chain | 25% Cost Reduction',
              description:
                'A retail group streamlined its multi-location network, cutting downtime and cutting troubleshooting costs by a quarter.',
            },
            {
              title: 'Tech Startup | 40% Faster Issue Resolution',
              description:
                'A SaaS startup automated network monitoring, resolving user-impacting issues faster and scaling without extra headcount.',
            },
            {
              title: 'Large Enterprise | $500K Annual Savings',
              description:
                'A large enterprise consolidated tools, reduced manual tasks, and freed up IT teams for strategic projects.',
            },
          ].map((item, idx) => (
            <Card
              key={idx}
              className="shadow-lg hover:shadow-xl transition rounded-xl border border-gray-200"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-3xl w-full py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
          What IT Leaders Are Saying
        </h2>
        <blockquote className="italic max-w-xl mx-auto text-gray-700 text-lg">
          “This ROI calculator opened our eyes to savings we didn’t know we could unlock.
          It helped us justify investing in smarter network tools that paid for themselves
          in under a year.”
          <br />
          <span className="block mt-2 font-semibold text-blue-800">
            — John Smith, Head of IT, NetCore Solutions
          </span>
        </blockquote>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-gradient-to-b from-blue-50 to-white py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
          Ready to Optimize Your Network Costs?
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-gray-700">
          Stop wasting time and money on avoidable network issues. Calculate your personalized
          ROI and take your first step toward modern, cost-efficient network management.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md shadow-md transition"
            onClick={() =>
              document.getElementById('network-roi-calculator')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
          >
            Calculate My Network ROI
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

export default CalculateNetworkROIPage;

