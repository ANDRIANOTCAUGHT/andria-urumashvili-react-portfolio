export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-surface-container px-3 py-1 text-xs font-medium text-on-surface-variant ${className}`}
    >
      {children}
    </span>
  )
}
