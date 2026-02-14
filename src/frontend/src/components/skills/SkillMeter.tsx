import { Progress } from '@/components/ui/progress';

interface SkillMeterProps {
  name: string;
  level: number;
}

export default function SkillMeter({ name, level }: SkillMeterProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-medium text-sm">{name}</span>
        <span className="text-sm text-muted-foreground font-semibold">{level}%</span>
      </div>
      <Progress value={level} className="h-2" />
    </div>
  );
}
