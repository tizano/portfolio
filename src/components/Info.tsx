import { Mail, Sparkles } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Magnetic } from './ui/magnetic';

const Info: React.FC = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex">
        <Magnetic>
          <Badge className="flex mb-2 py-2 bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-colors border-0">
            <Sparkles className="w-3 h-3 mr-1" />
            <span>Open to Work</span>
          </Badge>
        </Magnetic>
      </div>

      <h1 className="text-fluid-xl leading-tight md:leading-[1.1] font-bold mb-6 relative">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Développeur Fullstack
          <br />
          avec une affinité pour le Frontend
        </span>
        &nbsp;
        <span className="">😁</span>
      </h1>

      <p className="text-fluid-lg text-gray-400 leading-tight lg:max-w-[70vw] xl:max-w-[50vw] transition-all">
        Je transforme des idées en expériences numériques uniques. Spécialisé
        dans le développement d&apos;applications web innovantes{' '}
        <b>depuis plus de 8 ans.</b>
      </p>
      <div className="flex flex-wrap gap-4">
        <Button
          className="flex bg-zinc-200 text-black hover:bg-zinc-300 transition-colors text-lg px-5 py-3"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = 'mailto:ma.scarlatella@gmail.com';
          }}
        >
          <Mail className="mr-2 h-4 w-4" size={24} />
          Prends contact
        </Button>
      </div>
    </section>
  );
};

export default Info;
