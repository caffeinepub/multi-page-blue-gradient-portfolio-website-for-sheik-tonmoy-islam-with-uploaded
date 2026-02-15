import { useEffect } from 'react';
import Container from '../components/common/Container';
import GradientBackground from '../components/common/GradientBackground';
import ShareSiteLinkCard from '../components/common/ShareSiteLinkCard';
import { setSEO } from '../lib/seo';
import ContactForm from '../components/contact/ContactForm';
import { Mail, MapPin, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  useEffect(() => {
    setSEO({
      title: 'Contact - Sheik Tonmoy Islam',
      description:
        'Get in touch with Sheik Tonmoy Islam for legal support, business consulting, digital marketing, design, video editing, or web development services.',
    });
  }, []);

  return (
    <GradientBackground variant="subtle">
      <Container className="py-16 md:py-24">
        {/* Header + Contact Content - Black text override for this section */}
        <div className="[&_*]:!text-black [&_h1]:!text-black [&_h2]:!text-black [&_h3]:!text-black [&_p]:!text-black [&_label]:!text-black [&_input]:!text-black [&_textarea]:!text-black [&_a]:!text-black">
          {/* Header */}
          <div className="text-center lg:text-left mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Get In{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto lg:mx-0">
              Let's discuss how I can help bring your project to life
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:official.tonmoyislam@gmail.com"
                        className="text-sm hover:underline transition-colors"
                      >
                        official.tonmoyislam@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-sm">
                        453, Thukra, Dumuria, Khulna
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex-shrink-0">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <a
                        href="https://wa.me/8801999785559"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:underline transition-colors"
                      >
                        01999785559
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <ShareSiteLinkCard />
            </div>
          </div>
        </div>
      </Container>
    </GradientBackground>
  );
}
