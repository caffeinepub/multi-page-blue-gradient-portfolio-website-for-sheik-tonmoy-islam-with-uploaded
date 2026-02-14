import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ProjectFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'legal', label: 'Legal' },
  { value: 'business', label: 'Business' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'design', label: 'Design' },
  { value: 'video', label: 'Video' },
  { value: 'web', label: 'Web' },
];

export default function ProjectFilter({ selectedCategory, onCategoryChange }: ProjectFilterProps) {
  return (
    <div className="mb-12 flex justify-center">
      <Tabs value={selectedCategory} onValueChange={onCategoryChange} className="w-full max-w-4xl">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 h-auto gap-2">
          {categories.map((category) => (
            <TabsTrigger
              key={category.value}
              value={category.value}
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-500 data-[state=active]:text-white"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
