export default function SkillCard({ skill }) {
  return (
    <article className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-5 shadow-sm transition hover:shadow-md sm:p-6">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container-high font-mono text-sm font-bold text-primary">
            {skill.icon}
          </div>
          <span className="rounded bg-surface-container px-2.5 py-1 font-mono text-[11px] font-medium text-on-surface">
            {skill.badge}
          </span>
        </div>
        <h3 className="mb-1 text-xl font-semibold text-on-surface">{skill.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-on-surface-variant">
          {skill.description}
        </p>
      </div>
      <div className="rounded-lg bg-surface-container-low p-3">
        <div className="mb-1.5 flex justify-between font-mono text-[11px] text-on-surface-variant">
          <span>მზადყოფნა</span>
          <span className="font-semibold text-on-surface">{skill.levelLabel}</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-surface-container-high">
          <div
            className={`h-1.5 rounded-full ${skill.barClass}`}
            style={{ width: `${skill.level}%` }}
          />
        </div>
      </div>
    </article>
  )
}
