import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skillsDetails } from '@/data/skillsDetails';

interface SkillsDetailsSectionProps {
  showHeading?: boolean;
  className?: string;
}

export default function SkillsDetailsSection({
  showHeading = true,
  className = '',
}: SkillsDetailsSectionProps) {
  return (
    <div className={className}>
      {showHeading && (
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Skills{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Details
            </span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Comprehensive expertise across multiple disciplines
          </p>
        </div>
      )}

      <div className="space-y-8">
        {skillsDetails.map((skill) => (
          <Card
            key={skill.id}
            className="overflow-hidden bg-card/80 backdrop-blur-sm"
          >
            <CardHeader className="bg-gradient-to-r from-blue-600/10 to-cyan-500/10">
              <CardTitle className="text-2xl md:text-3xl">
                {skill.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] gap-6">
                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    src={skill.imagePath}
                    alt={skill.imageAlt}
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <p className="text-foreground/90 leading-relaxed">
                    {skill.description}
                  </p>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-foreground">
                      Key Areas:
                    </h3>
                    <ul className="space-y-2">
                      {skill.categories.map((category, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-foreground/80"
                        >
                          <span className="text-blue-500 mt-1.5 flex-shrink-0">
                            •
                          </span>
                          <span className="leading-relaxed">{category}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
