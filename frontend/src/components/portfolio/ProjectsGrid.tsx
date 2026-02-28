import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import ProjectImageGallery from './ProjectImageGallery';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../../data/projects';

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
          {/* Image Gallery at the top */}
          <ProjectImageGallery images={project.images} title={project.title} />

          <CardHeader>
            <div className="flex items-start justify-between gap-2">
              <CardTitle className="text-xl">{project.title}</CardTitle>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors flex-shrink-0"
                  aria-label={`View ${project.title} project`}
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
            </div>
            <CardDescription className="line-clamp-2">{project.description}</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
