import Icon from './Icon'

export default function InfoCard({ icon, title, text }) {
  return (
    <article className="flex flex-col justify-between gap-3 rounded-xl bg-surface-container-low p-4 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-highest text-primary">
        <Icon name={icon} />
      </div>
      <div>
        <h3 className="mb-1 text-base font-semibold text-on-surface">{title}</h3>
        <p className="text-sm text-on-surface-variant">{text}</p>
      </div>
    </article>
  )
}
