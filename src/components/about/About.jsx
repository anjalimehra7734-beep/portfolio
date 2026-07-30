import AboutCards from "./AbotCard";
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#070B16] py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-10">

        <AboutImage />

        <AboutContent />
        {/* <AboutCards/> */}

      </div>
    </section>
  );
}