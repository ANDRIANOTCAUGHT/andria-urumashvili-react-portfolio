import { Link } from 'react-router'
import Button from '../components/Button'
import Icon from '../components/Icon'

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-[720px] flex-col items-center justify-center gap-4 px-5 py-16 text-center">
      <span className="font-mono text-[13px] uppercase tracking-widest text-primary">
        404
      </span>
      <h1 className="text-3xl font-bold text-on-surface sm:text-4xl">
        გვერდი ვერ მოიძებნა
      </h1>
      <p className="max-w-md text-on-surface-variant">
        მისამართი არასწორია ან გვერდი წაიშალა.
      </p>
      <Link to="/">
        <Button>
          <Icon name="arrow_back" className="text-[18px]" />
          მთავარ გვერდზე დაბრუნება
        </Button>
      </Link>
    </div>
  )
}
