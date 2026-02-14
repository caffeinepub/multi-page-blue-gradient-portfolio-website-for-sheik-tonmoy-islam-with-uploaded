import { Link } from '@tanstack/react-router';
import { Separator } from '@/components/ui/separator';
import { Heart } from 'lucide-react';

const footerLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/contact', label: 'Contact' },
];

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'unknown-app';

  return (
    <footer className="relative z-10 border-t bg-background/80 backdrop-blur-md">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-bold text-xl">
                STI
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Sheik Tonmoy Islam
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Internship Junior Lawyer, Business Professional, Digital Marketer, Graphics Designer,
              Video Editor & Website Designer
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Get In Touch</h3>
            <p className="text-sm text-muted-foreground">
              Ready to collaborate? Reach out through the contact page to discuss your project.
            </p>
            <Link to="/contact">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:opacity-90 h-10 px-6">
                Contact Me
              </button>
            </Link>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sheik Tonmoy Islam. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Built with <Heart className="h-4 w-4 fill-red-500 text-red-500" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                appIdentifier
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
