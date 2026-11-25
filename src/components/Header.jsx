import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { navLinks, profile } from '../data'
import Icon from './Icon'

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open)
    return () => document.body.classList.remove('overflow-hidden')
  }, [open])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-outline-variant/40 bg-surface/80 shadow-[0_1px_8px_rgba(0,0,0,0.02)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1140px] items-center justify-between gap-2 px-5 md:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2 no-underline">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-container font-semibold text-primary">
            <span className="font-mono text-[13px]">{profile.initials}</span>
          </div>
          <span className="truncate text-base font-semibold tracking-tight text-on-surface max-[360px]:max-w-[9rem]">
            {profile.name}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-lg bg-surface-container-low/70 p-1 md:flex"
          aria-label="მთავარი ნავიგაცია"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `whitespace-nowrap rounded px-3 py-1.5 text-sm transition ${
                  isActive
                    ? 'bg-surface-container-high font-medium text-on-surface'
                    : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-outline-variant/50 bg-surface-container-low text-on-surface md:hidden"
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? 'მენიუს დახურვა' : 'მენიუს გახსნა'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} className="text-[24px]" />
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-outline-variant/40 bg-surface md:hidden"
        >
          <nav
            className="mx-auto flex max-w-[1140px] flex-col gap-1 px-5 py-3"
            aria-label="მობილური ნავიგაცია"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.to}
                end={link.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 transition ${
                    isActive
                      ? 'bg-surface-container-high font-medium text-on-surface'
                      : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
