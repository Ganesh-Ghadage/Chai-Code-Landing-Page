import React from 'react'
import { useTheme } from '@/contextAPI/ThemeProvider'
import { ThemeToggle } from '@/components/theme-toogle'

import { MyGraduationCap, MyScrollText, MyMessageCircleHeart } from "../icons/LucideIcons"
import Udemy from "../icons/Udemy"
import { NavBar } from "../ui/tubelight-navbar"

function Header() {
  const {theme, } = useTheme()

  const navItems = [
    { name: 'Cohorts', url: '#', icon: <MyGraduationCap /> },
    { name: 'Udemy', url: '#', icon: <Udemy /> },
    { name: 'Docs', url: '#', icon: <MyScrollText /> },
    { name: 'Reviews', url: '#', icon: <MyMessageCircleHeart /> }
  ]

  return (
    <div className='flex p-4 justify-between items-center sticky-top bg-[#dbdbdb] dark:bg-[#1F1F1F]'>
      <h1>
        <img src={`${theme === 'dark' ? './src/assets/chaicode-white.svg' : './src/assets/chaicode-black.svg'}`} width='130px' />
      </h1>

      <NavBar items={navItems} />

      <div className='flex gap-2 items-center'>
        <ThemeToggle />
        <button className='px-4 py-2 bg-[#1167B1] hover:bg-[#1166b1cf] rounded-[20px] text-white border-none'>Log In</button>
      </div>
    </div>
  )
}

export default Header