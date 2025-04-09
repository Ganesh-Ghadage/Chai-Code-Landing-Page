import { useState, ReactNode } from "react"
import { Drawer, DrawerContent } from "@/components/ui/drawer"
import { X, Menu } from 'lucide-react'
import { cn } from "@/lib/utils"
import LogInButton from "./logIn-button"
import { ThemeToggle } from "../ui/theme-toogle"
import { NavBar } from "./tubelight-navbar"

interface NavItem {
  name: string
  url: string
  icon: ReactNode
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

function SideBarMenu({ items, className }: NavBarProps) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={cn(
        "",
        className,
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
            <button role='button' className='p-2 bg-border rounded-full' 
              onClick={() => {
                setOpen(true)
              }}
            >
                <Menu className='text-secondary hover:scale-105'/>
            </button>
        </div>

        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent side={'right'}>
          <div className="flex flex-col items-start ml-8 gap-5 bg-background/5 mt-5">

          <div className="flex gap-2 items-center self-end mr-4">
            <ThemeToggle />
            <button role='button' className='p-2 bg-border rounded-full' 
                onClick={() => {
                  setOpen(false)
                }}
              >
                  <X className='text-secondary hover:scale-105'/>
            </button>
          </div>

          <NavBar items={items} open={open} />
          <LogInButton className="self-end mr-4 mt-10" />
        </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  )
}

export default SideBarMenu