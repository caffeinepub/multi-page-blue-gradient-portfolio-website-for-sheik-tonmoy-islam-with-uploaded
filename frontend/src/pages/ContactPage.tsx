import { useEffect } from 'react';
import Container from '../components/common/Container';
import GradientBackground from '../components/common/GradientBackground';
import ContactForm from '../components/contact/ContactForm';
import { setSEO } from '../lib/seo';
import { getCanonicalSiteUrl } from '../lib/siteUrl';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  useEffect(() => {
    setSEO({
      title: 'Contact - Sheik Tonmoy Islam',
      description:
        'Get in touch with Sheik Tonmoy Islam for legal consulting, business consulting, digital marketing, graphic design, video editing, or web development services. Professional support for your projects.',
      keywords: 'contact, hire legal consultant, hire business consultant, hire digital marketer, hire graphic designer, hire video editor, hire web developer',
      ogTitle: 'Contact Sheik Tonmoy Islam',
      ogDescription: 'Reach out for professional services and project inquiries.',
      canonicalUrl: getCanonicalSiteUrl() + '/contact',
    });
  }, []);

  return (
    <GradientBackground variant="subtle">
      <Container className="py-16 md:py-24">
        {/* Header - White text */}
        <div className="text-center mb-16 text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 text-white">
            Get in{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Let's discuss how I can help with your project
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form - Black text styling */}
          <ContactForm />

          {/* Contact Information - White text override */}
          <div className="space-y-8 [&_*]:!text-white [&_h2]:!text-white [&_h3]:!text-white [&_p]:!text-white [&_a]:!text-white">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-white">Email</h3>
                    <a
                      href="mailto:contact@sheiktonmoyislam.com"
                      className="text-white/90 hover:text-white transition-colors"
                    >
                      contact@sheiktonmoyislam.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-white">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-white/90 hover:text-white transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-white">Location</h3>
                    <p className="text-white/90">Available for remote work worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-3 text-white">Business Hours</h3>
              <div className="space-y-2 text-white/90">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </GradientBackground>
  );
}
