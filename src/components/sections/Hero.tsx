import { Link } from 'react-scroll'
import LiveBlink from '../live-blink'
import { LaptopScroll } from '../laptop-scroll'

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

      <button type="button" className='relative inline-flex my-5 w-[70%] md:w-[40%] lg:w-[25%] h-10 border-none rounded-full hover:bg-transparent overflow-hidden p-[1.3px]'>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f3e8d5_0%,#f97316_50%,#f3e8d5_100%)]"></span>
        <Link to='#' className='inline-flex relative w-full h-full items-center justify-evenly rounded-full  md:text-xl font-semibold text-[#4b1f04] bg-[#feb279]'> 
          Check all Live Cohorts 
          <LiveBlink />
        </Link>
      </button>

      <LaptopScroll />

    </div>
  )
}

export default Hero