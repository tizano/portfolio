import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Magnetic } from '@/components/ui/magnetic';
import { Code2, Mail, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center gap-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-violet-500/10 to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDAgTCAyMCAwIE0gMCAwIEwgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col gap-6">
            <Magnetic range={20}>
              <Badge className="mb-8 py-2 bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-colors border-0">
                <Sparkles className="w-3 h-3 mr-1" />
                Open to Work
              </Badge>
            </Magnetic>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
              <span className=" leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Développeur Fullstack
                <br />
                avec une affinité pour le Frontend
              </span>
              &nbsp;
              <span className="">😁</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-xl">
              Je transforme des idées en expériences numériques uniques.
              Spécialisé dans le développement d&apos;applications web
              innovantes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="flex bg-zinc-200 text-black hover:bg-zinc-300 transition-colors text-lg px-5 py-3">
                <Mail className="mr-2 h-4 w-4" size={24} />
                Prends contact
              </Button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12 mt-4">
            <Code2 className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold">Stack Technique</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
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
            ].map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
