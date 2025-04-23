import { cn } from '@/lib/utils'
import BottomLine from './bottom-line'
import { AuroraText } from './magicui/aurora-text'
import { motion } from 'motion/react'

type headingProps = {
  heading: string,
  description?: string,
  className?: string
}

function Heading({heading, description, className}: headingProps) {
  return (
    <div 
      className={cn(
        'mb-6 flex flex-col items-center text-center',
        className
      )}
    >
      <div className='w-fit mx-auto flex flex-col items-center'>
        <motion.h1 
          initial={{
            opacity: 0,
            scale: 0.98,
            filter: "blur(10px)"
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
              delay: 0.4,
              duration: 0.6,
              ease: "easeInOut"
            },
          }}
          className='text-3xl md:text-5xl font-bold opacity-100 transform-none'
        >
          <AuroraText>{heading}</AuroraText>
        </motion.h1>
        <BottomLine className='-z-10' />
      </div>
      <motion.p 
        initial={{
          opacity: 0,
          scale: 0.98,
          filter: "blur(10px)"
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          transition: {
            delay: 0.5,
            duration: 0.6,
            ease: "easeInOut"
          },
        }}
        className='text-secondary text-lg md:text-xl font-semibold mx-2'
      >
        {description}
      </motion.p>
    </div>
  )
}

export default Heading