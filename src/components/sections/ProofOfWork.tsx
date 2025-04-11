import { MarqueeStrip } from '../ui/marquee'

function POW() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-wrap text-center max-w-[70%] text-secondary text-2xl'>
        Our students are not only working in big tech companies
        but are now founders of funded startups and product creators
      </p>

      <MarqueeStrip />
    </div>
  )
}

export default POW