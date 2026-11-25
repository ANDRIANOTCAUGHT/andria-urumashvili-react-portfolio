import { learning, principles, profile, skills } from '../data'
import InfoCard from './InfoCard'
import SectionHeading from './SectionHeading'

export default function About({ embedded = false }) {
  return (
    <section id="about" className={embedded ? '' : 'w-full px-5 py-16 md:px-8 md:py-20'}>
      <div className="mx-auto max-w-[1140px]">
        <SectionHeading
          eyebrow="01 // პროფილი"
          title="ჩემ შესახებ"
          subtitle="ჩემი გზა ვებ-დეველოპმენტში, პრინციპები და ინტერესები."
        />

        <div className="mb-8 rounded-xl bg-surface-container-lowest p-6 shadow-sm sm:p-8">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-[13px] font-semibold text-primary">
              // {profile.name}
            </span>
            <span className="rounded-full bg-surface-container px-3 py-1 font-mono text-[11px] text-on-surface-variant">
              {profile.location}
            </span>
          </div>
          <p className="mb-3 text-base leading-relaxed text-on-surface">
            გამარჯობა! მე ვარ {profile.name}, {profile.role} თბილისიდან. ვსწავლობ
            React-ს და ვქმნი მარტივ, სუფთა და თანამედროვე ვებგვერდებს.
          </p>
          <p className="text-base leading-relaxed text-on-surface-variant">
            საიტი აწყობილია React კომპონენტებითა და react-router როუტინგით —
            მთავარი, ჩემ შესახებ და თანამშრომლების გვერდები. გამეორებადი
            ელემენტები (ბარათები, ღილაკები, თეგები) არის reusable კომპონენტები.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {principles.map((p) => (
            <InfoCard key={p.id} icon={p.icon} title={p.title} text={p.text} />
          ))}
        </div>

        <SectionHeading
          eyebrow="02 // უნარები"
          title="ტექნოლოგიური უნარები"
          subtitle="ტექნოლოგიები, რომლებითაც ვმუშაობ პრაქტიკაში."
        />
        <div className="mb-10 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill.id}
              className="rounded-lg border border-outline-variant/40 bg-surface-container-lowest px-4 py-2 font-medium text-on-surface shadow-sm"
            >
              {skill.title}
            </span>
          ))}
        </div>

        <SectionHeading
          eyebrow="03 // სწავლა"
          title="რას ვსწავლობ ახლა"
          subtitle="ტექნოლოგიები, რომლებზეც ყოველდღიურად ვატარებ პრაქტიკას."
        />
        <ul className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {learning.map((item) => (
            <li
              key={item.id}
              className="rounded-xl bg-surface-container-low p-4 text-sm text-on-surface-variant"
            >
              <span className="mb-1 block font-mono text-[11px] font-semibold text-primary">
                {item.code}
              </span>
              <span className="font-semibold text-on-surface">{item.title}</span>
              <p className="mt-1">{item.text}</p>
            </li>
          ))}
        </ul>

        <p className="text-on-surface-variant">
          დაკავშირება:{' '}
          <a
            href={`mailto:${profile.email}`}
            className="font-medium text-on-surface underline decoration-outline-variant underline-offset-2 hover:decoration-primary"
          >
            {profile.email}
          </a>
        </p>
      </div>
    </section>
  )
}
