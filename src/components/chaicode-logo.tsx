import { useTheme } from "@/contextAPI/ThemeProvider"

function ChaicodeLogo() {

  const { theme } = useTheme()

  return (
    <img className="hover:scale-105 hover:drop-shadow-lg" src={`${theme === 'dark' ? './src/assets/chaicode-white.svg' : './src/assets/chaicode-black.svg'}`} width='130px' />
  )
}

export default ChaicodeLogo