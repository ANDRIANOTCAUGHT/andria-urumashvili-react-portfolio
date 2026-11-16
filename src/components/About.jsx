import { principles, profile } from '../data'
import InfoCard from './InfoCard'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="w-full px-5 py-16 md:px-8 md:py-20">
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
            მთავარი გვერდი დაყოფილია კომპონენტებად — Header, Hero, Projects,
            Skills, Contact — ხოლო გამეორებადი ელემენტები (ბარათები, ღილაკები,
            თეგები) არის reusable კომპონენტები.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {principles.map((p) => (
            <InfoCard key={p.id} icon={p.icon} title={p.title} text={p.text} />
          ))}
        </div>
      </div>
    </section>
  )
}
