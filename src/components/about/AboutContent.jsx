import AboutCards from "./AbotCard";


export default function AboutContent() {
  return (
    <div className="max-w-2xl">

      {/* Section Tag */}
      <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium tracking-wide text-cyan-300 backdrop-blur-xl">
        ABOUT ME
      </span>

      {/* Heading */}
      <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
        Passionate About Building
        <br />

        <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
          Modern Web Experiences
        </span>
      </h2>

      {/* Description */}
      <p className="mt-8 text-lg leading-9 text-zinc-400">
        I'm <span className="font-semibold text-white">Anjali Mehra</span>, a
        Full Stack Developer focused on creating fast, responsive and visually
        appealing web applications. I enjoy transforming ideas into real
        products using modern technologies like React, Next.js, Node.js,
        Express and MongoDB.
      </p>

      <p className="mt-6 text-lg leading-9 text-zinc-400">
        My goal is to build premium digital products that not only look great
        but also deliver excellent performance, scalability and user
        experience.
      </p>

      <AboutCards/>

    </div>
  );
}