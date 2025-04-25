import { ThemeToggle } from '@/components/theme-toogle'
import { MyGraduationCap, MyScrollText, MyMessageCircleHeart } from "../icons/LucideIcons"
import Udemy from "../icons/Udemy"
import { NavBar } from "../ui/tubelight-navbar"
import { useMobileView } from '@/hooks/useMobileView'
import SideBarMenu from '../ui/sidebar-menu'
import LogInButton from '../logIn-button'
import ChaicodeLogo from '../chaicode-logo'
import { motion } from 'motion/react'

function Header() {
  const isMobile = useMobileView()

  const navItems = [
    { name: 'Cohorts', url: 'cohort', icon: <MyGraduationCap />, external: false },
    { name: 'Udemy', url: 'udemy', icon: <Udemy />, external: false },
    { name: 'Docs', url: 'https://docs.chaicode.com/', icon: <MyScrollText />, external: true },
    { name: 'Reviews', url: 'review', icon: <MyMessageCircleHeart />, external: false }
  ]

  return (
    <motion.div 
      className='fixed top-0 left-1/2 -translate-x-1/2 z-50 min-w-full bg-foreground'
      initial={{
        y: -20,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      <div className='relative flex p-4 justify-between items-center'>
        {
          isMobile ? 
          <div className='w-full flex justify-between items-center'>
            <ChaicodeLogo />
            <SideBarMenu items={navItems} />    
          </div> 
          : 
          <div className='w-full flex justify-between items-center'>
            <ChaicodeLogo />
            <NavBar items={navItems} />

            <div className='flex gap-2 items-center'>
              <ThemeToggle />
              <LogInButton />
            </div>
          </div>
        }
      </div>
    </motion.div>
  )
}

export default Header