import GradientText from "./GradientText";

export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <div className="mb-16">

      <p className="uppercase tracking-[6px] text-cyan-400 mb-3">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-black text-white">
        <GradientText>{title}</GradientText>
      </h2>

    </div>
  );
}