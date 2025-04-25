import { cn } from "@/lib/utils"
import { motion } from "motion/react"

function LogInButton({className} : {className?: string}) {
  return (
    <motion.button 
      className={cn(
        'px-4 py-1.5 bg-primary hover:bg-primary/20 rounded-[20px] border-2 border-primary text-white text-center',
          className
      )}
      whileTap={{
        scale: [0.9, 1, 0.9]
      }}
    >
      <a href="https://courses.chaicode.com/learn/account/signin">
        Login
      </a>
    </motion.button>
  )
}

export default LogInButton