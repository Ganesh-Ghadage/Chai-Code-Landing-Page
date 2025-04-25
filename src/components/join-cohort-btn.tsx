import { cn } from "@/lib/utils"
import { motion } from 'motion/react'

type props = {
  className?: String
}

function JoinCohortBtn({className}: props) {
  return (
    <motion.button
      type="button" 
      className={cn(className, 'bg-primary border-2 mt-2 px-4 py-2 rounded-lg border-primary cursor-pointer text-white hover:bg-transparent hover:text-primary')}
      initial={{
        y: 10,
        opacity: 0
      }}
      whileInView={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
      whileTap={{
        scale: [0.9, 1, 0.9]
      }}
      viewport={{once: true}}
    >
      <a 
        href='https://courses.chaicode.com/learn/view-all?show=batch&type=17'
      > 
        Join Cohorts Live Classes
      </a>
    </motion.button>
  )
}

export default JoinCohortBtn