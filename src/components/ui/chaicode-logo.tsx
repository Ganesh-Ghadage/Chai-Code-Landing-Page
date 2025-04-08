function ChaicodeLogo({theme}: {theme: string}) {
  return (
    <img src={`${theme === 'dark' ? './src/assets/chaicode-white.svg' : './src/assets/chaicode-black.svg'}`} width='130px' />
  )
}

export default ChaicodeLogo