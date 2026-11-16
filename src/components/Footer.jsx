import { profile } from '../data'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/30 bg-surface-container-lowest py-10">
      <div className="mx-auto flex max-w-[1140px] flex-col items-center justify-between gap-6 px-5 md:flex-row md:px-8">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-on-surface">{profile.name}</span>
            <span className="rounded bg-surface-container px-2 py-0.5 font-mono text-[11px] text-on-surface-variant">
              React Portfolio
            </span>
          </div>
          <p className="text-sm text-on-surface-variant">
            &copy; 2026. შექმნილია React კომპონენტებით.
          </p>
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-1.5 rounded-lg bg-surface-container-low px-3 py-1.5 font-mono text-[13px] text-on-surface-variant transition hover:bg-surface-container hover:text-on-surface"
        >
          <Icon name="mail" className="text-[16px]" />
          {profile.email}
        </a>
      </div>
    </footer>
  )
}
