import CybersecurityROICalculator from './ROICalculator/CybersecurityROICalculator';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';
import { CheckCircle } from 'lucide-react';
import Back from './Back';

const CalculateCybersecurityROICalculatorPage = () => {
  return (
    <div className="flex flex-col items-center w-full">

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-purple-50 to-white py-20 px-4 text-center">
        <Back className="mt-20" />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-purple-900">
          Instantly Calculate Your Cybersecurity ROI
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-700">
          Discover the potential cost savings and risk reductions your business can achieve with strategic cybersecurity investments.
        </p>
        <Button
          size="lg"
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg rounded-md shadow-md transition"
          onClick={() =>
            document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Calculate Now
        </Button>
      </section>

      {/* Why Calculate ROI */}
      <section className="max-w-4xl w-full py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-900">
          Why Calculating Your Cybersecurity ROI Matters
        </h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 text-gray-600">
          Cybersecurity investments are not just a compliance checkbox—they protect your revenue, reputation, and customer trust. By calculating your ROI, you can:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
          {[
            'Quantify potential cost savings from avoided breaches',
            'Align security spending with business risk reduction goals',
            'Support your business case for cybersecurity investments',
            'Understand the financial impact of improving your security posture',
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
              <CheckCircle className="text-purple-600 mt-1" size={20} />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="roi-calculator" className="w-full py-20 px-4 bg-gray-50">
        <CybersecurityROICalculator />
      </section>

      {/* Example Scenarios */}
      <section className="max-w-5xl w-full py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-purple-900">
          Real Results for Real Businesses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'E-commerce Business | Avoided Breach Losses',
              description:
                'An online retailer avoided potential losses from customer data breaches through proactive cybersecurity investments.',
            },
            {
              title: 'Law Firm | Improved Compliance',
              description:
                'A law firm achieved regulatory compliance and reduced data breach risks while maintaining client trust.',
            },
            {
              title: 'Healthcare Provider | Protected Patient Data',
              description:
                'A healthcare provider strengthened patient data protection while reducing potential breach costs.',
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
          What Our Clients Say
        </h2>
        <blockquote className="italic max-w-xl mx-auto text-gray-700 text-lg">
          “Using R2 System Solution Ltd.'s cybersecurity ROI calculator helped us justify and prioritise our security investments with confidence.”
          <br />
          <span className="block mt-2 font-semibold text-purple-800">— Sarah Lee, CIO, SafeGuard Systems</span>
        </blockquote>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-gradient-to-b from-purple-50 to-white py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-900">
          Ready to Secure Your Business with Confidence?
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-gray-700">
          Calculate your cybersecurity ROI now and take the first step toward a secure, resilient business future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg rounded-md shadow-md transition"
            onClick={() =>
              document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Calculate My Cybersecurity ROI
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg rounded-md transition"
          >
            Book a Free Cybersecurity Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CalculateCybersecurityROICalculatorPage;
