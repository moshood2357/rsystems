import VendorManagementROICalculator from './ROICalculator/VendorManagementROICalculator';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';
import { CheckCircle } from 'lucide-react';
import Back from './Back';

const CalculateVendorManagementROIPage = () => {
  return (
    <div className="flex flex-col items-center w-full">

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-purple-50 to-white py-20 px-4 text-center">
        <Back className="mt-20" />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-purple-900">
          Calculate Your Vendor Management ROI
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-700">
          Discover how much your business can save by improving vendor management practices. Use our free calculator for instant insights.
        </p>
        <Button
          size="lg"
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg rounded-md shadow-md transition"
          onClick={() =>
            document.getElementById('vendor-roi-calculator')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Calculate Now
        </Button>
      </section>

      {/* Why Calculate ROI */}
      <section className="max-w-4xl w-full py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-900">
          Why Calculating Vendor Management ROI Matters
        </h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 text-gray-600">
          Effective vendor management helps you lower costs, improve service quality, and strengthen supplier relationships. By calculating ROI, you can:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
          {[
            'Identify potential savings through better negotiations.',
            'Improve vendor performance and accountability.',
            'Reduce operational inefficiencies across supply chains.',
            'Build a clear business case for vendor management investments.',
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
              <CheckCircle className="text-green-600 mt-1" size={20} />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="vendor-roi-calculator" className="w-full py-20 px-4 bg-purple-50">
        <VendorManagementROICalculator />
      </section>

      {/* Example Scenarios */}
      <section className="max-w-5xl w-full py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-purple-900">
          Real Businesses, Real Savings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Retail | 12% Spend Reduction',
              description:
                'A retail chain reduced vendor costs while improving delivery reliability using structured vendor management practices.',
            },
            {
              title: 'Manufacturing | 20% Savings',
              description:
                'A manufacturing SME optimized supplier contracts and reduced delays, leading to significant cost savings.',
            },
            {
              title: 'Enterprise | £500k Saved',
              description:
                'An enterprise company improved supplier audits and negotiations, leading to six-figure annual savings.',
            },
          ].map((item, idx) => (
            <Card key={idx} className="shadow-lg hover:shadow-xl transition rounded-xl border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-purple-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-3xl w-full py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-900">
          What Our Clients Are Saying
        </h2>
        <blockquote className="italic max-w-xl mx-auto text-gray-700 text-lg">
          “R2 System Solution Ltd.’s vendor management insights helped us save over £80,000 annually while improving supplier service levels.”
          <br />
          <span className="block mt-2 font-semibold text-purple-800">— Mark Adeyemi, Operations Director</span>
        </blockquote>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-gradient-to-b from-purple-50 to-white py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-900">
          Ready to Reduce Your Vendor Costs?
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-gray-700">
          Get your personalized Vendor Management ROI estimate today and see how much your business could save.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg rounded-md shadow-md transition"
            onClick={() =>
              document.getElementById('vendor-roi-calculator')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Calculate My Vendor ROI
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg rounded-md transition"
          >
            Book a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CalculateVendorManagementROIPage;
