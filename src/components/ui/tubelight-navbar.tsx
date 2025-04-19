import { ReactNode, useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-scroll"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: ReactNode,
  external: boolean
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  open?: boolean,
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export function NavBar({ items, className, open, setOpen }: NavBarProps) {
  const [activeTab, setActiveTab] = useState('')

  const handleClick = (name: string) => {
    setActiveTab(name)
    if(open && setOpen) {
      setOpen(false)
    }
  }

  return (
    <div
      className={cn(
        className,
      )}
    >
      <div className={cn(
        !open && "flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg",
        open && "flex flex-col items-start gap-5 bg-background/5 mt-5"
      )}>
        {items.map((item) => {
          const isActive = activeTab === item.name

          return (
            item.external
            ? 
            <a
              key={item.name}
              href={item.url}
              onClick={() => handleClick(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-secondary hover:text-primary",
                open && "border border-border backdrop-blur-lg py-2 px-4 shadow-lg",
                isActive && "bg-muted/20 text-secondary",
                isActive && open && "rounded-bl-none rounded-tl-none"
              )}
            >
              <div className="flex gap-2">
                <span>
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </div>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className={cn(
                    "absolute inset-0 w-full bg-primary/5 rounded-full -z-10",
                    open && "rounded-bl-none rounded-tl-none"
                  )}
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className={`absolute ${open ? '-top-[2px] left-0 w-1 h-10 rounded-full' : '-top-2 left-1/2 w-8 h-1 rounded-t-full'} -translate-x-1/2 bg-primary`}>
                    <div className={`absolute w-12 h-6 bg-primary/20 rounded-full blur-md ${open ? 'top-4 -left-0' : '-top-2 -left-2'} `} />
                    <div className={`absolute w-8 h-6 bg-primary/20 rounded-full blur-md  ${open ? 'top-2' : '-top-1'}`} />
                    <div className={`absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0  ${open ? 'left-0' : 'left-2'}`} />
                  </div>
                </motion.div>
              )}
            </a> 
            :
            <Link
              key={item.name}
              to={item.url}
              smooth={true} 
              duration={500} 
              offset={-100}
              onClick={() => handleClick(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-secondary hover:text-primary",
                open && "border border-border backdrop-blur-lg py-2 px-4 shadow-lg",
                isActive && "bg-muted/20 text-secondary",
                isActive && open && "rounded-bl-none rounded-tl-none"
              )}
            >
              <div className="flex gap-2">
                <span className="">
                  {item.icon}
                </span>
                <span className="">{item.name}</span>
              </div>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className={cn(
                    "absolute inset-0 w-full bg-primary/5 rounded-full -z-10",
                    open && "rounded-bl-none rounded-tl-none"
                  )}
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className={`absolute ${open ? '-top-[2px] left-0 w-1 h-10 rounded-full' : '-top-2 left-1/2 w-8 h-1 rounded-t-full'} -translate-x-1/2 bg-primary`}>
                    <div className={`absolute w-12 h-6 bg-primary/20 rounded-full blur-md ${open ? 'top-4 -left-0' : '-top-2 -left-2'} `} />
                    <div className={`absolute w-8 h-6 bg-primary/20 rounded-full blur-md  ${open ? 'top-2' : '-top-1'}`} />
                    <div className={`absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0  ${open ? 'left-0' : 'left-2'}`} />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
