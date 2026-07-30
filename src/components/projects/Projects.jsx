import ProjectsGrid from "./ProjectsGrid";
import ProjectsHeader from "./ProjectsHeader";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 bg-[#050816]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <ProjectsHeader />

        <ProjectsGrid />

      </div>
    </section>
  );
}