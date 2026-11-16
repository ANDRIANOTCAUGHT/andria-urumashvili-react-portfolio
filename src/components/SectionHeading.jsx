export default function SectionHeading({ eyebrow, title, subtitle, right }) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-3 md:mb-10 md:flex-row md:items-end">
      <div>
        {eyebrow && (
          <div className="mb-2 flex items-center gap-2">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-primary">
              {eyebrow}
            </span>
            <div className="h-px max-w-[100px] flex-1 bg-surface-container-high" />
          </div>
        )}
        <h2 className="text-2xl font-bold tracking-tight text-on-surface sm:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 max-w-xl text-base text-on-surface-variant">{subtitle}</p>
        )}
      </div>
      {right}
    </div>
  )
}
