import Icon from './Icon'

export default function UserCard({ user }) {
  const company = user.company?.name ?? '—'
  const city = user.address?.city ?? '—'
  const initials = user.name
    .split(' ')
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <article className="flex flex-col rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-5 shadow-sm transition hover:shadow-md">
      <div className="mb-4 flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-fixed font-mono text-sm font-semibold text-on-primary-fixed">
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-lg font-semibold text-on-surface">{user.name}</h3>
          <p className="truncate font-mono text-[11px] text-on-surface-variant">
            @{user.username}
          </p>
        </div>
      </div>

      <ul className="space-y-1.5 text-sm text-on-surface-variant">
        <Row icon="mail" value={user.email} href={`mailto:${user.email}`} />
        <Row icon="apartment" value={company} />
        <Row icon="location_on" value={city} />
        <Row icon="call" value={user.phone} href={`tel:${user.phone.replace(/[^+\d]/g, '')}`} />
        <Row icon="language" value={user.website} href={`https://${user.website}`} />
      </ul>
    </article>
  )
}

function Row({ icon, value, href }) {
  const content = (
    <>
      <Icon name={icon} className="shrink-0 text-[16px] text-primary" />
      <span className="truncate">{value}</span>
    </>
  )

  return (
    <li className="flex min-w-0 items-center gap-2">
      {href ? (
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          className="flex min-w-0 items-center gap-2 transition hover:text-primary"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  )
}
