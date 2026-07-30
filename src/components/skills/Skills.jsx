import SkillsHeader from "./SkillsHeader";
import SkillsGrid from "./SkillsGrid";


export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050816] py-32"
    >
      

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <SkillsHeader />
        <SkillsGrid />
      </div>
    </section>
  );
}