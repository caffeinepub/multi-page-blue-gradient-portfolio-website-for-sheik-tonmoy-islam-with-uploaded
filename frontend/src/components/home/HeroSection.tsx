import Container from '../common/Container';
import ProfilePortrait from '../common/ProfilePortrait';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20">
      <Container>
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          {/* Portrait */}
          <ProfilePortrait size="lg" />

          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
              Sheik Tonmoy Islam
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-3xl">
              Legal Consultant | Business Consultant | Digital Marketer
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-3xl">
              Graphic Designer | Video Editor | Website Designer & Developer
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mt-4">
              Multi-disciplinary professional combining legal expertise, business acumen, creative design, and technical development to deliver comprehensive solutions
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="/portfolio">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white">
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="/contact">
              <Button size="lg" variant="outline">
                Get in Touch
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
