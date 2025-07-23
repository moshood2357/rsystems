import ManagedITSupportROICalculator from './ROICalculator/ManagedITSupportROICalculator';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';
import { CheckCircle } from 'lucide-react';
import Back from './Back';

const CalculateManagedITROICalculatorPage = () => {
  return (
    <div className="flex flex-col items-center w-full">

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-green-50 to-white py-20 px-4 text-center">
        <Back className="mt-20" />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-green-900">
          Instantly Calculate Your Managed IT Support ROI
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-700">
          Discover your potential productivity gains and cost savings with managed IT support. Use our free calculator to get personalized insights in minutes.
        </p>
        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg rounded-md shadow-md transition"
          onClick={() =>
            document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Calculate Now
        </Button>
      </section>

      {/* Why Calculate ROI */}
      <section className="max-w-4xl w-full py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-900">
          Why Calculating Your Managed IT ROI Matters
        </h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 text-gray-600">
          Managed IT support is not just an expense—it's an investment that boosts productivity, reduces downtime, and strengthens your security posture. By calculating your ROI, you can:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
          {[
            'Quantify potential productivity gains by reducing IT-related downtime',
            'Understand cost savings by preventing major system failures',
            'Align IT investments with your business goals',
            'Build a clear business case for managed IT services to stakeholders',
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
        <ManagedITSupportROICalculator />
      </section>

      {/* Example Scenarios */}
      <section className="max-w-5xl w-full py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-900">
          Real Businesses, Real Improvements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Retail Chain | 35% Downtime Reduction',
              description:
                'A retail company reduced IT-related downtime while improving customer service and checkout reliability with managed IT support.',
            },
            {
              title: 'Law Firm | Improved Security',
              description:
                'A law firm enhanced data protection and reduced security incidents by implementing proactive monitoring and patch management.',
            },
            {
              title: 'Healthcare Provider | Cost Savings',
              description:
                'A healthcare organization reduced unplanned outages and improved staff productivity by outsourcing their IT management.',
            },
          ].map((item, idx) => (
            <Card key={idx} className="shadow-lg hover:shadow-xl transition rounded-xl border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-green-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-3xl w-full py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-900">
          What Our Clients Are Saying
        </h2>
        <blockquote className="italic max-w-xl mx-auto text-gray-700 text-lg">
          “R2 System Solution Ltd. helped us reduce IT headaches, minimize downtime, and improve our overall workflow efficiency. Their managed IT support pays for itself.”
          <br />
          <span className="block mt-2 font-semibold text-green-800">— John Smith, Operations Manager, TechGrow</span>
        </blockquote>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-gradient-to-b from-green-50 to-white py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-900">
          Ready to Transform Your IT Operations?
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-gray-700">
          Don’t let IT challenges slow your business down. Calculate your managed IT ROI today and discover the benefits of proactive, reliable IT support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg rounded-md shadow-md transition"
            onClick={() =>
              document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Calculate My ROI
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg rounded-md transition"
          >
            Book a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CalculateManagedITROICalculatorPage;