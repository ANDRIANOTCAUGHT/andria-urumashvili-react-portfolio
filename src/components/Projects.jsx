import { projects } from '../data'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-surface-container-low px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1140px]">
        <SectionHeading
          eyebrow={`პორტფოლიო / ${String(projects.length).padStart(2, '0')} ნამუშევარი`}
          title="ჩემი პროექტები"
          subtitle="პრაქტიკული პროექტები, რომლებზეც ვიმუშავე სწავლის პროცესში."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
