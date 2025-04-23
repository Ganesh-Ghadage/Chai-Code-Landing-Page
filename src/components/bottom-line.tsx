import { cn } from "@/lib/utils"
import { motion } from "motion/react"

function BottomLine({className} : {className?: string}) {
  return (
    <motion.div
      initial={{
        width: 0,
        opacity: 0,
      }} 
      whileInView={{
        width: '100%',
        opacity: 1,
        transition: {
          duration: 0.3,
          ease: "easeInOut"
        }
      }}
      className={cn(
        'flex justify-center bg-primary/30 w-[70%] md:w-[110%] h-1 rounded-full',
        className
      )}
    >
      <div className='flex justify-center bg-primary/60 w-[70%] h-1 rounded-full '>
        <div className='bg-primary w-[30%] h-1 rounded-full '></div>
      </div>
    </motion.div>
  )
}

export default BottomLine