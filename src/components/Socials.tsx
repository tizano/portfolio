import { Github, Linkedin } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';

const Socials: React.FC = () => {
  return (
    <div className="flex gap-2">
      <Button
        size="icon"
        variant={'link'}
        className="hover:bg-zinc-900/50 transition-colors"
        onClick={() => window.open('https://github.com/tizano', '_blank')}
      >
        <Github color="white"></Github>
      </Button>
      <Button
        size="icon"
        variant={'link'}
        className="hover:bg-zinc-900/50 transition-colors"
        onClick={() =>
          window.open(
            'https://www.linkedin.com/in/mathieu-scarlatella-0307545b/',
            '_blank'
          )
        }
      >
        <Linkedin color="white"></Linkedin>
      </Button>
    </div>
  );
};

export default Socials;
