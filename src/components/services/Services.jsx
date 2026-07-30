import ServicesHeader from "./ServicesHeader";
import ServicesGrid from "./ServicesGrid";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#050816]" />

      <div className="absolute top-20 -left-32 h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[150px]" />

      <div className="absolute bottom-10 -right-32 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        <ServicesHeader />

        <ServicesGrid />

      </div>
    </section>
  );
}