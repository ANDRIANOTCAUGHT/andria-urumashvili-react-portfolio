import { useEffect, useMemo, useState } from 'react'
import Icon from '../components/Icon'
import SectionHeading from '../components/SectionHeading'
import UserCard from '../components/UserCard'

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

export default function UsersPage() {
  const [users, setUsers] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')
  const [query, setQuery] = useState('')
  const [retryKey, setRetryKey] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      setStatus('loading')
      setError('')
      try {
        const res = await fetch(USERS_URL, { signal: controller.signal })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        setUsers(Array.isArray(data) ? data : [])
        setStatus('success')
      } catch (err) {
        if (err.name === 'AbortError') return
        setError('მონაცემების ჩატვირთვა ვერ მოხერხდა. შეამოწმეთ ინტერნეტი.')
        setStatus('error')
      }
    }

    load()
    return () => controller.abort()
  }, [retryKey])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return users
    return users.filter((user) =>
      [user.name, user.username, user.email, user.company?.name, user.address?.city]
        .filter(Boolean)
        .some((field) => field.toLowerCase().includes(q)),
    )
  }, [users, query])

  return (
    <div className="mx-auto max-w-[1140px] px-5 py-12 md:px-8 md:py-16">
      <SectionHeading
        eyebrow="API // JSONPlaceholder"
        title="თანამშრომლები"
        subtitle={
          <>
            სია იტვირთება{' '}
            <a
              href={USERS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline decoration-primary/30 underline-offset-2"
            >
              GET /users
            </a>{' '}
            მისამართიდან.
          </>
        }
        right={
          <span className="self-start rounded-lg bg-surface-container px-3 py-1.5 font-mono text-[11px] text-on-surface-variant">
            {status === 'success' ? `ნაპოვნია: ${filtered.length} / ${users.length}` : 'იტვირთება…'}
          </span>
        }
      />

      <div className="mb-6 rounded-xl bg-surface-container-lowest p-4 shadow-sm sm:p-5">
        <label htmlFor="user-search" className="sr-only">
          ძებნა
        </label>
        <div className="relative">
          <Icon
            name="search"
            className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[20px] text-on-surface-variant"
          />
          <input
            id="user-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ძებნა სახელით, ელფოსტით, კომპანიით ან ქალაქით…"
            autoComplete="off"
            className="w-full rounded-lg border border-outline-variant/50 bg-surface-container-low py-3 pr-10 pl-10 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="ძებნის გასუფთავება"
              className="absolute top-1/2 right-2 -translate-y-1/2 rounded p-1.5 text-on-surface-variant transition hover:bg-surface-container hover:text-on-surface"
            >
              <Icon name="close" className="text-[18px]" />
            </button>
          )}
        </div>
      </div>

      {status === 'loading' && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-48 animate-pulse rounded-xl bg-surface-container-low"
            />
          ))}
        </div>
      )}

      {status === 'error' && (
        <div
          role="alert"
          className="flex flex-col items-center gap-3 rounded-xl border border-error/30 bg-error-container p-6 text-center"
        >
          <Icon name="error" className="text-[28px] text-on-error-container" />
          <p className="text-on-error-container">{error}</p>
          <button
            type="button"
            onClick={() => setRetryKey((k) => k + 1)}
            className="rounded-lg bg-primary-container px-4 py-2 text-sm font-medium text-on-primary"
          >
            სცადეთ თავიდან
          </button>
        </div>
      )}

      {status === 'success' && filtered.length === 0 && (
        <div className="rounded-xl bg-surface-container-low p-8 text-center">
          <p className="text-on-surface-variant">
            „{query}“ — შედეგი ვერ მოიძებნა.
          </p>
          <button
            type="button"
            onClick={() => setQuery('')}
            className="mt-3 rounded-lg bg-surface-container px-4 py-2 text-sm font-medium text-on-surface"
          >
            ფილტრის გასუფთავება
          </button>
        </div>
      )}

      {status === 'success' && filtered.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  )
}
