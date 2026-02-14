import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SkillMeter from './SkillMeter';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-600/10 to-cyan-500/10">
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <SkillMeter key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
