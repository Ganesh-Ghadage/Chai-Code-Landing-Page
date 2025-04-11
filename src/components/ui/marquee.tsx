import * as React from "react"
import { cn } from "@/lib/utils"
import { Logos } from "@/shared/logosData"

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  pauseOnHover?: boolean
  direction?: "left" | "right"
  speed?: number
}

export function Marquee({
  children,
  pauseOnHover = true,
  direction = "left",
  speed = 30,
  className,
  ...props
}: MarqueeProps) {
  return (
    <div 
      className={cn(
        "w-full overflow-hidden sm:mt-24 mt-10 z-10",
        className
      )} 
      {...props}
    >
      <div className="relative flex max-w-[100vw] overflow-hidden py-5">
        <div 
          className={cn(
            "flex w-max marquee",
            pauseOnHover && "hover:[animation-play-state:paused]",
            direction === "right" && "marquee"
          )}
          style={{ "--duration": `${speed}s` } as React.CSSProperties}
        >
          {children}
          {children}
        </div>
      </div>
    </div>
  )
}


export function MarqueeStrip() {
  const arr = [Logos.tailwindcss, Logos.aws, Logos.postman, Logos.react, Logos.node, Logos.express, Logos.typescript, Logos.javascript, Logos.html, Logos.mongodb, Logos.postgres, Logos.docker, Logos.git, Logos.gitHub]

  return (
    <Marquee>
      {arr.map((Logo, index) => (
        <div
          key={index}
          className="relative h-full w-fit mx-[4rem] flex items-center justify-start -mt-10 z-10"
        >
          <Logo />
        </div>
      ))}
    </Marquee>
  )
}