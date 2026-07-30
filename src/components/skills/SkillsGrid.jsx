import SkillCard from "./SkillCard";
// import { skills } from "@/data/skills";
import skills from "@/data/skills";

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4">
      {skills.map((skill) => (
        <SkillCard
          key={skill.id}
          skill={skill}
        />
      ))}
    </div>
  );
}