import { learning, skills } from '../data'
import LearningCard from './LearningCard'
import SectionHeading from './SectionHeading'
import SkillCard from './SkillCard'
import Badge from './Badge'

export default function Skills() {
  return (
    <section id="skills" className="w-full px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1140px]">
        <SectionHeading
          eyebrow="02 // უნარები"
          title="ტექნოლოგიური უნარები"
          subtitle="ტექნოლოგიები, რომლებითაც ვმუშაობ პრაქტიკაში."
        />
        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>

        <SectionHeading
          eyebrow="03 // სწავლა"
          title="რას ვსწავლობ ახლა"
          subtitle="ტექნოლოგიები, რომლებზეც ყოველდღიურად ვატარებ პრაქტიკას."
          right={
            <Badge className="self-start">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary-container" />
              აქტიური პროცესი
            </Badge>
          }
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {learning.map((item) => (
            <LearningCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
