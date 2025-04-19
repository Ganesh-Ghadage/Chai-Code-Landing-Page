import * as React from "react"
import { cn } from "@/lib/utils"
import { BrandLogs } from "@/shared/brandLogos"

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  pauseOnHover?: boolean
  direction?: "left" | "right"
  speed?: number
}

export function Marquee({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = 30,
  className,
  ...props
}: MarqueeProps) {
  return (
    <div 
      className={cn(
        "w-full overflow-hidden z-10",
        className
      )} 
      {...props}
    >
      <div className="relative flex max-w-[100vw] overflow-hidden">
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

  return (
    <Marquee
      speed={20}
    >
      {BrandLogs.map((brand, idx) => (
        <img 
          src={brand} 
          key={`brand-${idx}`}
          alt="brand" 
          className='aspect-square w-[120px] rounded-[4px] mx-10 '
        />
      ))}
      
    </Marquee>
  )
}