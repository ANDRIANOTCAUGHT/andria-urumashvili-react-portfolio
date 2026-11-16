import { profile } from '../data'
import Button from './Button'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-surface-container-low px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1140px]">
        <div className="rounded-xl bg-surface-container-lowest p-6 shadow-sm sm:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="დამიკავშირდით"
                title="გსურთ თანამშრომლობა?"
                subtitle="სიამოვნებით განვიხილავ სტაჟირების, ჯუნიორ პოზიციისა თუ საინტერესო პროექტების შესაძლებლობებს."
              />
              <div className="flex flex-wrap items-center gap-4">
                <Button href={`mailto:${profile.email}`}>
                  <Icon name="mail" className="text-[20px]" />
                  მომწერეთ მეილზე
                </Button>
                <span className="select-all font-mono text-[13px] text-on-surface-variant">
                  {profile.email}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 rounded-xl bg-surface-container-low p-5 lg:col-span-5">
              <span className="mb-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-outline">
                საკონტაქტო დეტალები
              </span>
              <ContactRow icon="location_on" label="ლოკაცია" value={profile.location} />
              <ContactRow
                icon="code"
                label="GitHub"
                value="პროფილი"
                href={profile.github}
              />
              <ContactRow
                icon="share"
                label="LinkedIn"
                value="პროფილი"
                href={profile.linkedin}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ icon, label, value, href }) {
  const inner = (
    <>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container text-primary">
          <Icon name={icon} />
        </div>
        <div>
          <span className="block font-mono text-[11px] text-on-surface-variant">{label}</span>
          <span className="text-base font-semibold text-on-surface">{value}</span>
        </div>
      </div>
      {href && <Icon name="arrow_outward" className="text-[20px] text-outline" />}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between rounded-lg bg-surface-container-lowest p-3 shadow-sm transition hover:bg-surface-container"
      >
        {inner}
      </a>
    )
  }

  return (
    <div className="flex items-center gap-3 rounded-lg bg-surface-container-lowest p-3 shadow-sm">
      {inner}
    </div>
  )
}
