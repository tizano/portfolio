import { Code2 } from 'lucide-react';
import { Magnetic } from './ui/magnetic';

const TechnicalStack = () => {
  const techs = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Angular',
    'Docker',
    'GraphQL',
    'Prisma',
    'Drizzle',
    'Tailwind CSS',
    'Wordpress',
  ];
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Code2 className="w-6 h-6 text-blue-500" />
        <h2 className="text-2xl font-bold">Stack Technique</h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {techs.map((tech) => (
          <div className="flex" key={tech}>
            <Magnetic>
              <div className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                {tech}
              </div>
            </Magnetic>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalStack;
