import { useEffect } from 'react';
import Container from '../components/common/Container';
import GradientBackground from '../components/common/GradientBackground';
import ShareSiteLinkCard from '../components/common/ShareSiteLinkCard';
import { setSEO } from '../lib/seo';
import ContactForm from '../components/contact/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

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
        {/* Header */}
        <div className="text-center lg:text-left mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Get In{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto lg:mx-0">
            Let's discuss how I can help bring your project to life
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out through the contact form or connect with me directly. I'm
                always open to discussing new projects, creative ideas, or opportunities to be part
                of your vision.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:gamil-official.tonmoyislam@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors underline"
                  >
                    gamil-official.tonmoyislam@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/8801999785559"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors underline"
                  >
                    01999785559
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">Available for remote work worldwide</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 rounded-lg bg-gradient-to-br from-blue-600/10 to-cyan-500/10 border border-blue-200/20">
              <h3 className="font-semibold text-lg mb-2">Response Time</h3>
              <p className="text-muted-foreground">
                I typically respond to all inquiries within 24-48 hours. For urgent matters, please
                indicate this in your message.
              </p>
            </div>

            {/* Share Site Link Card */}
            <ShareSiteLinkCard />
          </div>
        </div>
      </Container>
    </GradientBackground>
  );
}
