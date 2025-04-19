import LiveBlink from '../live-blink'
import { LaptopScroll } from '../laptop-scroll'
import { AuroraText } from '../magicui/aurora-text'
import { GitPullRequestCreateArrow, MessageSquare, Stars, Users, Video } from 'lucide-react'
import { BorderBeam } from '../magicui/border-beam'

function Hero() {
  return (
    <div className='w-full h-fit mb-10 flex flex-col items-center text-secondary'>
      <div className='relative my-5 p-2 rounded-lg border-1 w-fit'>
        <p>Trusted by 1.5M Code Learners</p>
        <BorderBeam 
          duration={6}
          delay={3}
          size={50}
          className="from-transparent via-amber-500 to-transparent" 
        />
        <BorderBeam 
          duration={6}
          size={50}
          className="from-transparent via-amber-500 to-transparent" 
        />
      </div>

      <div className='flex flex-col items-center gap-2 mb-4 max-w-[70%]'>
        <h1 className='flex gap-4 text-xl md:text-6xl font-bold'>
          <span>
            <AuroraText>
              Consistency
            </AuroraText> 
            <div className='bg-primary h-1 rounded-full '></div>
          </span>
          <span>and</span>
          <span>
            <AuroraText>
            Community
            </AuroraText> 
            <div className='bg-primary h-1 rounded-full '></div>
          </span>
        </h1>
        
        <h1 className='text-xl md:text-5xl font-semibold'>
          An unmatched Learning Experience for <AuroraText>coding</AuroraText> courses
        </h1>   
      </div>
      
      <p className='w-[60%] text-md md:text-lg my-2'>
        Content is every where, we provide a learning
        experience that is unmatched. Bounties, peer learning
        peer code reviews, Virtual hostel, Alumni Network, Doubt sessions,
        Group projects and so many other activities to keep you on track.
      </p>

      <div className='flex gap-4 my-4'>
        <div className='relative group flex gap-2 py-2 px-4 rounded-full border-1 w-fit hover:bg-secondary/10'>
          <Users className='text-[#FFC600]' />
          <p className='group-hover:text-[#FFC600]'>Peer learning</p>
          <BorderBeam 
            size={70}
            className="from-transparent via-amber-500 to-transparent" 
          />
        </div>
        <div className='relative group flex gap-2 py-2 px-4 rounded-full border-1 w-fit hover:bg-secondary/10'>
          <GitPullRequestCreateArrow className='text-[#eac71a]' />
          <p className='group-hover:text-[#eac71a]'>Code reviews</p>
          <BorderBeam 
            size={70}
            delay={2}
            className="from-transparent via-amber-500 to-transparent" 
          />
        </div>
        <div className='relative group flex gap-2 py-2 px-4 rounded-full border-1 w-fit hover:bg-secondary/10'>
          <Video className='text-[#fac62b]' />
          <p className='group-hover:text-[#fac62b]'>Virtual hostel</p>
          <BorderBeam 
            size={70}
            delay={4}
            className="from-transparent via-amber-500 to-transparent" 
          />
        </div>
        <div className='relative group flex gap-2 py-2 px-4 rounded-full border-1 w-fit hover:bg-secondary/10'>
          <MessageSquare className='text-[#fcbe20]' />
          <p className='group-hover:text-[#fcbe20]'>Doubt sessions</p>
          <BorderBeam 
            size={70}
            delay={6}
            className="from-transparent via-amber-500 to-transparent" 
          />
        </div>
        <div className='relative group flex gap-2 py-2 px-4 rounded-full border-1 w-fit hover:bg-secondary/10'>
          <Stars className='text-[#FA742B]' />
          <p className='group-hover:text-[#FA742B]'>Bounties</p>
          <BorderBeam 
            size={70}
            delay={8}
            className="from-transparent via-amber-500 to-transparent" 
          />
        </div>
      </div>

      <button type="button" className='group relative inline-flex my-5 w-[70%] md:w-[40%] lg:w-[25%] h-10 border-none rounded-full hover:bg-transparent overflow-hidden p-[1.3px] cursor-pointer'>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f3e8d5_0%,#f97316_50%,#f3e8d5_100%)]"></span>
        <a href='https://courses.chaicode.com/learn/view-all?show=batch&type=17' className='inline-flex relative w-full h-full items-center justify-evenly rounded-full  md:text-xl font-semibold text-[#4b1f04] bg-[#feb279] group-hover:bg-transparent'> 
          Check all Live Cohorts 
          <LiveBlink />
        </a>
      </button>

      <div className=' w-full flex items-center justify-center'>
        <LaptopScroll />
      </div>

      <div className='absolute w-[400px] aspect-square rounded-full top-0 -left-40 -z-30 blur-3xl bg-gradient-to-l from-primary via-amber-400 to-amber-500 opacity-20'></div>
      <div className='absolute w-[400px] aspect-square rounded-full -bottom-20 right-40 -z-30 blur-3xl bg-gradient-to-l from-amber-400 via-amber-500 to-primary opacity-20'></div>
    </div>
  )
}

export default Hero