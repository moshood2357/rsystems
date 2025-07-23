import ITConsultancyROICalculator from './ROICalculator/ITConsultancyROICalculator';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';
import { CheckCircle } from 'lucide-react';
import Back from './Back';

const CalculateITConsultancyROIPage = () => {
  return (
    <div className="flex flex-col items-center w-full">

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-green-50 to-white py-20 px-4 text-center">
        <Back className='mt-20' />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-green-900">
          Instantly Calculate Your IT Consultancy ROI
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-700">
          Discover your potential productivity gains and cost savings from IT consultancy. Use our free calculator to get personalized insights in minutes.
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
          Why Calculating Your IT Consultancy ROI Matters
        </h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 text-gray-600">
          Engaging IT consultancy isn’t just an expense—it's an investment in your operational efficiency and business growth. By calculating your ROI, you can:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
          {[
            'Identify productivity gains across your IT teams',
            'Reduce operational inefficiencies and hidden costs',
            'Align technology improvements with business objectives',
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
        <ITConsultancyROICalculator />
      </section>

      {/* Example Scenarios */}
      <section className="max-w-5xl w-full py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-900">
          Real Businesses, Real Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Small Business | 20% Productivity Gain',
              description:
                'A retail SME streamlined their IT operations, reducing downtime and improving customer response times with consultancy guidance.',
            },
            {
              title: 'Mid-Size SaaS | 35% Efficiency Improvement',
              description:
                'A SaaS company optimized workflows and reduced bottlenecks, enabling faster feature delivery and improved customer satisfaction.',
            },
            {
              title: 'Enterprise | 40% Cost Reduction',
              description:
                'An enterprise optimized IT spending and improved team efficiency, achieving significant operational savings while enhancing service quality.',
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
          “We improved team productivity by 30% after using this tool to evaluate our consultancy ROI, allowing us to scale confidently while controlling costs.”
          <br />
          <span className="block mt-2 font-semibold text-green-800">— John Smith, CIO, InnovateX</span>
        </blockquote>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-gradient-to-b from-green-50 to-white py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-900">
          Ready to Unlock Your IT Consultancy ROI?
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-gray-700">
          Don’t let inefficiencies drain your resources. Get your personalized IT consultancy ROI estimate today and take the first step towards smarter operations and growth.
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

export default CalculateITConsultancyROIPage;
