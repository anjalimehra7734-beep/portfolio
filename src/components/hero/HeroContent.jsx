import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">

      {/* Badge */}
      <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 backdrop-blur-xl">

        <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

        <span className="text-sm font-medium tracking-wide text-cyan-300">
          Available For Freelance Work
        </span>

      </div>

      {/* Heading */}

      <h1 className="text-white font-black leading-[0.95] tracking-tight">

        <span className="block text-5xl md:text-6xl xl:text-7xl">
          Building
        </span>

        <span className="mt-2 block bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-5xl text-transparent md:text-6xl xl:text-7xl">
          Modern
        </span>

        <span className="mt-2 block text-5xl md:text-6xl xl:text-7xl">
          Web Experiences
        </span>

      </h1>

      {/* Subtitle */}

      <h2 className="mt-8 text-2xl font-semibold text-zinc-200">
        Hi, I'm
        <span className="ml-2 bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
          Anjali Mehra
        </span>
      </h2>

      {/* Description */}

      <p className="mt-8 max-w-xl text-lg leading-9 text-zinc-400">
        I create premium websites, scalable web applications and
        beautiful digital experiences using React, Next.js,
        Node.js and MongoDB with a strong focus on performance,
        responsiveness and clean UI.
      </p>

      <HeroButtons />

      <HeroStats />

    </div>
  );
}