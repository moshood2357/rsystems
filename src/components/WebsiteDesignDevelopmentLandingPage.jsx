import { Helmet } from 'react-helmet';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';
import { CheckCircle } from 'lucide-react';
import Back from './Back';

const WebsiteDesignDevelopmentLandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Website Design & Development Services | R2 System Solution Ltd.</title>
        <meta
          name="description"
          content="Get a high-converting website that elevates your brand and drives results. R2 System Solution Ltd. offers bespoke website design and development services for SMEs and enterprises."
        />
        <meta
          name="keywords"
          content="Website Design, Web Development, Business Website, SEO Websites, R2 System Solution Ltd."
        />
      </Helmet>

      <div className="flex flex-col items-center w-full">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-blue-50 to-white py-20 px-4 text-center">
          <Back className="mt-20" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900">
            Get a Website That Converts Visitors into Customers
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-700">
            Elevate your online presence with a bespoke, mobile-friendly website that reflects your brand and drives measurable results.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md shadow-md transition"
            onClick={() =>
              document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Get Started Today
          </Button>
        </section>

        {/* Why a Professional Website Matters */}
        <section className="max-w-4xl w-full py-20 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
            Why Your Business Needs a Professional Website
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 text-gray-600">
            A well-designed website is your 24/7 salesperson, providing credibility, improving customer trust, and driving leads while you focus on your core business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
            {[
              'Attract and convert more customers',
              'Enhance your brand’s online credibility',
              'Optimized for SEO and mobile devices',
              'Seamless user experience and fast loading times',
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

        {/* Example Projects */}
        <section className="max-w-5xl w-full py-20 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900">
            Websites We've Built
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'E-commerce Store',
                description:
                  'Increased sales by 50% with a user-friendly online store for a local retailer.',
              },
              {
                title: 'Consulting Firm Website',
                description:
                  'Boosted lead generation with a clean, SEO-optimized site for a consulting business.',
              },
              {
                title: 'Portfolio Website',
                description:
                  'Created a professional portfolio site, showcasing services and case studies to attract clients.',
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

        {/* Testimonials */}
        <section className="max-w-3xl w-full py-20 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
            What Our Clients Are Saying
          </h2>
          <blockquote className="italic max-w-xl mx-auto text-gray-700 text-lg">
            “R2 System Solution Ltd. built us a beautiful, mobile-friendly website that not only looks great but also brings in consistent leads every week.”
            <br />
            <span className="block mt-2 font-semibold text-blue-800">— Sarah A., Director, FreshStart Consulting</span>
          </blockquote>
        </section>

        {/* Final CTA */}
        <section id="contact-section" className="w-full bg-gradient-to-b from-blue-50 to-white py-20 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
            Ready to Elevate Your Online Presence?
          </h2>
          <p className="max-w-xl mx-auto mb-8 text-gray-700">
            Let our team craft a high-converting, beautiful website tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md shadow-md transition"
              onClick={() =>
                document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Get a Free Quote
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
    </>
  );
};

export default WebsiteDesignDevelopmentLandingPage;
