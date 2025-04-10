import { Link } from 'react-scroll'
import LiveBlink from '../ui/live-blink'
import { GlowingEffect } from '../ui/glowing-effect'
import { LaptopScroll } from '../ui/laptop-scroll'

function Hero() {
  return (
    <div className='w-full h-fit mb-10 flex flex-col items-center text-secondary'>
      <div className='my-5 p-2 rounded-lg border-1 w-fit'>
        <p>Trusted by 1.5M Code Learners</p>
      </div>
      <div className='mb-4'>
      <h1 className='text-xl md:text-5xl font-semibold'>
        Consistency and Community
      </h1>
      <h1 className='text-xl md:text-5xl font-semibold'>
        Learning for coding courses
      </h1>
      </div>
      
      <p className='w-[60%] text-md md:text-lg my-2'>
        Content is every where, we provide a learning
        experience that is unmatched. Bounties, peer learning
        peer code reviews, Virtual hostel, Alumni Network, Doubt sessions,
        Group projects and so many other activities to keep you on track.
      </p>

      <button type="button" className='relative my-5 w-[70%] md:w-fit py-2 px-2 md:px-10 md:text-xl border-none rounded-lg text-[#ff6000] bg-[#ff6f0051] hover:bg-transparent'>
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <Link to='#' className='flex gap-1 md:gap-4 items-center justify-around'> 
          Check all Live Cohorts 
          <LiveBlink />
        </Link>
      </button>

      <LaptopScroll />

    </div>
  )
}

export default Hero