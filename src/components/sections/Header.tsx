import { useTheme } from '@/contextAPI/ThemeProvider'
import { ThemeToggle } from '@/components/ui/theme-toogle'
import { MyGraduationCap, MyScrollText, MyMessageCircleHeart } from "../icons/LucideIcons"
import Udemy from "../icons/Udemy"
import { NavBar } from "../ui/tubelight-navbar"
import { useMobileView } from '@/hooks/useMobileView'

import SideBarMenu from '../ui/sidebar-menu'
import LogInButton from '../ui/logIn-button'
import ChaicodeLogo from '../ui/chaicode-logo'

function Header() {
  const {theme} = useTheme()
  const isMobile = useMobileView()

  const navItems = [
    { name: 'Cohorts', url: '#', icon: <MyGraduationCap /> },
    { name: 'Udemy', url: '#', icon: <Udemy /> },
    { name: 'Docs', url: '#', icon: <MyScrollText /> },
    { name: 'Reviews', url: '#', icon: <MyMessageCircleHeart /> }
  ]

  return (
    <div className='fixed top-0 left-1/2 -translate-x-1/2 z-50 min-w-full bg-foreground'>
      <div className='relative flex p-4 justify-between items-center'>
        {
          isMobile ? 
          <div className='w-full flex justify-between items-center'>
            <ChaicodeLogo theme={theme} />
            <SideBarMenu items={navItems} />    
          </div> 
          : 
          <div className='w-full flex justify-between items-center'>
            <ChaicodeLogo theme={theme} />
            <NavBar items={navItems} />

            <div className='flex gap-2 items-center'>
              <ThemeToggle />
              <LogInButton />
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Header