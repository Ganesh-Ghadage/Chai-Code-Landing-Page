import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { TweetCard } from "./tweet-card"
import { motion, useAnimate, useInView, stagger } from "motion/react";
import { useEffect } from "react";

const tweetGridVariants = cva("max-w-4xl md:max-w-6xl px-2 mx-auto w-full", {
  variants: {
    columns: {
      1: "columns-1",
      2: "sm:columns-2", 
      3: "md:columns-3",
      4: "lg:columns-4",
      5: "xl:columns-5",
    },
  },
  defaultVariants: {
    columns: 3,
  },
})

const tweetItemVariants = cva("break-inside-avoid w-full", {
  variants: {
    spacing: {
      sm: "mb-0",
      md: "mb-0",
      lg: "mb-0",
    },
  },
  defaultVariants: {
    spacing: "md",
  },
})

export interface TweetGridProps
  extends VariantProps<typeof tweetGridVariants>,
    VariantProps<typeof tweetItemVariants> {
  tweets: string[]
  className?: string
}

function TweetGrid({ tweets, columns, spacing, className }: TweetGridProps) {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(
        "div", 
        {
          opacity: 1,
          filter: 'blur(0px)'
        },
        {
          duration: 0.5,
          delay: stagger(0.05 , {startDelay: 0.3}),
          ease: "easeInOut"
        }
      )
    }
  }, [isInView])
  
  return (
    <div 
      ref={scope} 
      className={cn(tweetGridVariants({ columns }), className)}
    >
      {tweets.map((tweetId, i) => (
        <motion.div
          key={`${tweetId}-${i}`}
          className={cn(tweetItemVariants({ spacing }), "overflow-hidden mb-4 text-secondary w-fit mx-auto")}
          style={{
            opacity: 0,
            filter: 'blur(5px)'
          }}
        >
          <TweetCard id={tweetId} />
        </motion.div>
      ))}
    </div>
  )
}

export { TweetGrid };
