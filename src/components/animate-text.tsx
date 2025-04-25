import { useEffect } from 'react'
import { motion, useAnimate, useInView, stagger } from "motion/react";
import { cn } from '@/lib/utils';

type props = {
  text: String,
  className?: String
}

function AnimateText({text, className}: props) {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(
        "span", 
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0
        },
        {
          duration: 0.5,
          delay: stagger(0.05),
          ease: "easeInOut"
        }
      )
    }
  }, [isInView])

  return (
    <p 
      ref={scope}
      className={cn(className)}
    >
      {text.split(" ").map((word, i) => (
        <motion.span
          style={{
            opacity: 0,
            filter: "blur(5px)",
            y: 10
          }}
          key={`text-word-${i}`}
          className='inline-block'
        >
          {word} &nbsp;
        </motion.span>
      ))}
    </p>
  )
}

export default AnimateText