import Icon from './Icon'
import Tag from './Tag'

export default function ProjectCard({ project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm transition hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden bg-surface-container">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 rounded bg-surface/90 px-2.5 py-1 font-mono text-[11px] font-semibold text-on-surface shadow-sm backdrop-blur-sm">
          {project.badge}
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          <h3 className="mb-2 text-lg font-semibold text-on-surface">{project.title}</h3>
          <p className="mb-4 text-sm leading-relaxed text-on-surface-variant">
            {project.description}
          </p>
        </div>
        <div>
          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <div className="flex items-center justify-between gap-2 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[13px] text-on-surface transition hover:text-primary"
            >
              <Icon name="code" className="text-[16px]" />
              კოდი
            </a>
            <a
              href={project.demo}
              className="inline-flex items-center gap-1 font-mono text-[13px] font-semibold text-primary transition hover:opacity-80"
            >
              დემო
              <Icon name="open_in_new" className="text-[16px]" />
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
