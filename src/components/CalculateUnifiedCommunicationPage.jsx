import VoIPUnifiedCommROICalculator from './ROICalculator/VoIPUnifiedCommROICalculator';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';
import { CheckCircle } from 'lucide-react';
import Back from './Back';

const CalculateVoIPUnifiedCommROIPage = () => {
  return (
    <div className="flex flex-col items-center w-full">

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-purple-50 to-white py-20 px-4 text-center">
        <Back className='mt-20' />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-purple-900">
          Instantly Calculate Your VoIP & Unified Communication ROI
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-700">
          Discover how much you can save and improve collaboration by switching to VoIP and unified communications. Use our free calculator to get your personalized ROI in minutes.
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
          Why Calculate Your VoIP ROI?
        </h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 text-gray-600">
          Transitioning to VoIP and unified communications isn’t just a tech upgrade; it’s a way to cut costs while empowering seamless collaboration. Calculating your ROI helps you:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
          {[
            'Quantify your savings on calls and conferencing.',
            'Align communication upgrades with your business objectives.',
            'Build a compelling business case for stakeholders.',
            'Enhance remote collaboration while lowering operational costs.',
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
        <VoIPUnifiedCommROICalculator />
      </section>

      {/* Example Scenarios */}
      <section className="max-w-5xl w-full py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-purple-900">
          Real Businesses, Real Savings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Small Business | 35% Savings',
              description:
                'A boutique agency reduced communication costs while improving call reliability by switching to VoIP.',
            },
            {
              title: 'Mid-Size SaaS | 40% Savings',
              description:
                'A SaaS provider reduced conferencing costs and enabled seamless remote collaboration.',
            },
            {
              title: 'Enterprise | 45% CapEx Reduction',
              description:
                'An enterprise achieved scalable collaboration tools while significantly reducing on-premise hardware costs.',
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
          What Our Users Are Saying
        </h2>
        <blockquote className="italic max-w-xl mx-auto text-gray-700 text-lg">
          “We reduced our communication costs by 40% and improved call quality across all departments using this calculator to guide our switch to VoIP.”
          <br />
          <span className="block mt-2 font-semibold text-purple-800">— John Smith, IT Director, TechGrowth</span>
        </blockquote>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-gradient-to-b from-purple-50 to-white py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-900">
          Ready to Unlock Communication Savings?
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-gray-700">
          Don’t overspend on outdated communication systems. Get your personalized VoIP ROI estimate today and take the first step toward efficient, scalable collaboration.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg rounded-md shadow-md transition"
            onClick={() =>
              document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Calculate My VoIP ROI
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

export default CalculateVoIPUnifiedCommROIPage;
