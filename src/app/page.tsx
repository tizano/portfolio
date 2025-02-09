'use client';

import Info from '@/components/Info';
import Socials from '@/components/Socials';
import TechnicalStack from '@/components/TechnicalStack';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <div className="relative min-h-screen flex flex-col items-center justify-between gap-16 pt-12 md:pt-20 xl:pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-violet-500/10 to-transparent pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDAgTCAyMCAwIE0gMCAwIEwgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
          </div>
          <article className="container mx-auto px-6 py-12 lg:py-6 xl:py-0 relative">
            <div className="flex flex-col gap-16">
              <Info />
              <TechnicalStack />
            </div>
          </article>
          <div className="absolute right-8 top-8">
            <Socials />
          </div>
          <footer className="container mx-auto mt-2 mb-8 px-6">
            <p className="text-sm text-center text-gray-700">
              Fait avec ❤️ à Montréal
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
