import * as React from "react"
import { cn } from "@/lib/utils"

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
        "w-full overflow-hidden sm:mt-24 z-10",
        className
      )} 
      {...props}
    >
      <div className="relative flex max-w-[100vw] overflow-hidden py-5">
        <div 
          className={cn(
            "flex gap-12 w-max marquee",
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
      speed={10}
      className=""
    >
      <img 
        src="./src/assets/brand-logos/cred-svgrepo-com.svg" 
        alt="" 
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <img 
        src="./src/assets/brand-logos/slack-logo-svgrepo-com.svg" 
        alt="" 
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <img 
        src="./src/assets/brand-logos/microsoft-logo-svgrepo-com.svg" 
        alt="" 
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <img 
        src="./src/assets/brand-logos/netflix-2-logo-svgrepo-com.svg" 
        alt="" 
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <img 
        src="./src/assets/brand-logos/google-2015-logo-svgrepo-com.svg" 
        alt="" 
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <img 
        src="./src/assets/brand-logos/visa-logo-svgrepo-com.svg" 
        alt="" 
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <img 
        src="./src/assets/brand-logos/amazon-2-logo-svgrepo-com.svg" 
        alt="" 
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <img 
        src="./src/assets/brand-logos/samsung-logo-svgrepo-com.svg" 
        alt="" 
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <img 
        src="./src/assets/brand-logos/oracle-6-logo-svgrepo-com.svg" 
        alt="" 
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <img 
        src="./src/assets/brand-logos/flipkart-logo-svgrepo-com.svg" 
        alt="" 
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <img 
        src="./src/assets/brand-logos/cisco-2-logo-svgrepo-com.svg" 
        alt="" 
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <img 
        src="./src/assets/brand-logos/bookingcom-logo-svgrepo-com.svg" 
        alt="" 
        className='aspect-square w-[120px] rounded-[4px]'
      />
    </Marquee>
  )
}