
import CloudROICalculator from './ROICalculator/CloudROICalculator';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';
import { CheckCircle } from 'lucide-react';

const CalculateCloudROIPage = () => {
  return (
    <div className="flex flex-col items-center w-full">

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-blue-50 to-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900">
          Instantly Calculate Your Cloud ROI
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-700">
          Discover your potential savings and operational improvements by moving to the cloud. Use our free calculator to get personalized insights in minutes.
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
          Why Calculating Your Cloud ROI Matters
        </h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 text-gray-600">
          Moving to the cloud isn’t just about technology—it's about making your investment work harder for your business. By calculating your ROI, you can:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
          {[
            'Identify cost savings over your current infrastructure',
            'Improve scalability while reducing operational overhead',
            'Align your cloud strategy with your business goals',
            'Build a clear business case for stakeholders',
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
        <CloudROICalculator />
      </section>

      {/* Example Scenarios */}
      <section className="max-w-5xl w-full py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900">
          Real Businesses, Real Savings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Small Business | 30% Savings',
              description:
                'A growing retail brand reduced server costs while improving site speed and customer experience after moving to the cloud.',
            },
            {
              title: 'Mid-Size SaaS | 45% Savings',
              description:
                'A software company scaled globally, reduced downtime, and lowered operating expenses with a seamless cloud migration.',
            },
            {
              title: 'Enterprise | 50% CapEx Reduction',
              description:
                'An enterprise reduced hardware investments and improved scalability, resulting in significant cost reductions across departments.',
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

      {/* Testimonials */}
      <section className="max-w-3xl w-full py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
          What Our Users Are Saying
        </h2>
        <blockquote className="italic max-w-xl mx-auto text-gray-700 text-lg">
          “We cut infrastructure costs by 40% after using this tool to plan our migration. It gave us the confidence to scale globally while reducing risks.”
          <br />
          <span className="block mt-2 font-semibold text-blue-800">— Jane Doe, CTO, GrowthTech</span>
        </blockquote>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-gradient-to-b from-blue-50 to-white py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
          Ready to Unlock Your Cloud Savings?
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-gray-700">
          Don’t let high infrastructure costs slow you down. Get your personalized cloud ROI estimate today and take the first step toward smarter, scalable growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md shadow-md transition"
            onClick={() =>
              document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Calculate My Cloud ROI
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

export default CalculateCloudROIPage;
