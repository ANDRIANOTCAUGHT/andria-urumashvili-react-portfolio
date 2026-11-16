import Icon from './Icon'
import Tag from './Tag'

export default function LearningCard({ item }) {
  return (
    <article className="flex flex-col justify-between rounded-xl bg-surface-container-low p-5 shadow-sm sm:p-6">
      <div>
        <div className="mb-3 flex items-center justify-between">
          <span className="font-mono text-[13px] font-semibold text-primary">
            {item.code}
          </span>
          <Icon name="bolt" className="text-[20px] text-primary" />
        </div>
        <h3 className="mb-1 text-lg font-semibold text-on-surface">{item.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-on-surface-variant">{item.text}</p>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </article>
  )
}
