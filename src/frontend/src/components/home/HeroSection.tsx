import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="flex flex-col items-center justify-center text-center space-y-6 max-w-5xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block text-foreground">Sheik Tonmoy Islam</span>
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-2">
                Multi-Disciplinary Professional
              </span>
            </h1>
            <p className="text-lg text-foreground sm:text-xl md:text-2xl max-w-3xl mx-auto">
              Internship Junior Lawyer • Business Professional • Digital Marketer • Graphics
              Designer • Video Editor • Website Designer
            </p>
          </div>

          <p className="text-base text-muted-foreground max-w-2xl">
            Combining legal expertise with creative and technical skills to deliver comprehensive
            solutions for modern business challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/portfolio">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:opacity-90 text-lg px-8 shadow-lg"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-foreground/40 bg-background/10 backdrop-blur-sm text-foreground hover:bg-background/20 text-lg px-8 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-8 justify-center pt-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">6+</div>
              <div className="text-sm text-muted-foreground">Skill Areas</div>
            </div>
            <div className="h-12 w-px bg-foreground/30" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Dedication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
