export default function Icon({ name, className = 'text-[20px]' }) {
  return (
    <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
      {name}
    </span>
  )
}
