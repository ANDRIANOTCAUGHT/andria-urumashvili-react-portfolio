import { profile, stack } from '../data'
import Badge from './Badge'
import Button from './Button'
import Icon from './Icon'

export default function Hero() {
  return (
    <section id="home" className="w-full px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1140px]">
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <Badge>
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
            {profile.status}
          </Badge>
          <span className="hidden text-xs font-medium text-outline sm:inline">
            / {profile.location}
          </span>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-8">
            <h1 className="text-4xl font-bold tracking-tight text-on-surface sm:text-5xl md:text-[56px] md:leading-[1.1]">
              გამარჯობა, მე ვარ {profile.shortName}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant">
              {profile.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button href="#projects">
                ჩემი პროექტები
                <Icon name="arrow_downward" className="text-[18px]" />
              </Button>
              <Button href="#about" variant="secondary">
                ჩემ შესახებ
                <Icon name="east" className="text-[18px]" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded-xl bg-surface-container-lowest p-6 shadow-sm lg:col-span-4">
            <div className="flex items-center justify-between pb-2">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-outline">
                მიმდინარე ფოკუსი
              </span>
              <Icon name="terminal" className="text-[20px] text-primary" />
            </div>
            <p className="text-sm text-on-surface-variant">
              ორიენტირებული ვარ React კომპონენტებზე, სუფთა კოდსა და რესპონსიულ
              ინტერფეისებზე.
            </p>
            <div className="flex items-center justify-between pt-2">
              <span className="font-mono text-[11px] font-semibold text-on-surface">
                კომპონენტები &amp; Hooks
              </span>
              <span className="font-mono text-[11px] font-bold text-primary">React</span>
            </div>
            <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-surface-container">
              <div className="h-full w-4/5 rounded-full bg-primary-container" />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-outline-variant/20 pt-6 sm:flex-row sm:items-center">
          <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-outline">
            სტეკი:
          </span>
          <div className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-lg bg-surface-container-lowest px-3 py-1.5 font-mono text-[13px] text-on-surface shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
