export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
  onClick,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-all shadow-sm'
  const variants = {
    primary:
      'bg-primary-container text-on-primary hover:bg-primary hover:opacity-95',
    secondary:
      'bg-surface-container-low text-on-surface hover:bg-surface-container',
    ghost:
      'bg-transparent text-primary hover:underline shadow-none px-0 py-0',
  }
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
