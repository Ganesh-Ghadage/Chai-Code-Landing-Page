import { cn } from '@/lib/utils'
import BottomLine from './bottom-line'

type headingProps = {
  heading: string,
  description?: string,
  className?: string
}

function Heading({heading, description, className}: headingProps) {
  return (
    <div className={cn(
      'mb-6 flex flex-col items-center',
      className
    )}>
      <h1 className='text-4xl md:text-5xl font-bold opacity-100 transform-none'>
        <span className='bg-gradient-to-r from-orange-400 to-amber-500 text-transparent bg-clip-text'>{heading}</span>
      </h1>
      <BottomLine className='-z-10' />
      <p className='text-secondary text-xl font-semibold'>{description}</p>
    </div>
  )
}

export default Heading