import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#050816]"
    >
      <HeroBackground />

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-36 pb-20 lg:px-10">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          <HeroContent />

          <HeroImage />

        </div>

      </div>
    </section>
  );
}