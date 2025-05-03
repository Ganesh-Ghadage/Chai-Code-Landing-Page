import LiveBlink from '../live-blink'
import { LaptopScroll } from '../laptop-scroll'
import { AuroraText } from '../magicui/aurora-text'
import { GitPullRequestCreateArrow, MessageSquare, Stars, Users, Video } from 'lucide-react'
import { BorderBeam } from '../magicui/border-beam'
import { motion, useAnimate, useInView, stagger } from "motion/react";
import { useEffect } from "react";
import AnimateText from '../animate-text'

function Hero() {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(
        "#hero-motion", 
        {
          opacity: 1,
          y: 0,
          x: 0
        },
        {
          duration: 0.5,
          delay: stagger(0.2),
          ease: "easeInOut"
        }
      )
    }
  }, [isInView])

  return (
    <div ref={scope} className=' relative w-full h-fit mb-10 flex flex-col items-center text-secondary'>
      <motion.div 
        id='hero-motion'
        style={{
          opacity: 0,
          x: 0,
          y: 20
        }}
        className='relative my-5 p-2 rounded-lg border-1 w-fit'
      >
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
      </motion.div>

      <div className='flex flex-col items-center gap-2 mb-4 max-w-[70%]'>
        <h1 className='flex flex-col md:flex-row gap-0 md:gap-4 text-5xl lg:text-6xl font-bold'>
          <motion.span
            id='hero-motion'
            style={{
              opacity: 0,
              x: -20,
              y: 0
            }}
          >
            <AuroraText>
              Consistency
            </AuroraText> 
            <div className='bg-primary h-1 rounded-full '></div>
          </motion.span>

          <motion.span
            id='hero-motion'
            style={{
              opacity: 0,
              x: -20,
              y: 0
            }}
          >
            and
          </motion.span>

          <motion.span
            id='hero-motion'
            style={{
              opacity: 0,
              x: -20,
              y: 0
            }}
          >
            <AuroraText>
            Community
            </AuroraText> 
            <div className='bg-primary h-1 rounded-full '></div>
          </motion.span>
        </h1>
        
        <motion.h1 
          className='text-xl md:text-3xl lg:text-5xl font-semibold'
          id='hero-motion'
          style={{
            opacity: 0,
            x: -20,
            y: 0
          }}
        >
          An unmatched Learning Experience for <AuroraText>coding</AuroraText> courses
        </motion.h1>   
      </div>
      
      <motion.div 
        className='w-[60%] text-md md:text-lg my-2'
        id='hero-motion'
        style={{
          opacity: 0,
          x: -20,
          y: 0
        }}
      >
        <AnimateText text={`Content is every where, we provide a learning experience that is unmatched. Bounties, peer learning peer code reviews, Virtual hostel, Alumni Network, Doubt sessions, Group projects and so many other activities to keep you on track.`} />
      </motion.div>

      <div className='flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 my-4'>
        <motion.div 
          className='relative group flex gap-2 py-2 px-4 rounded-full border-1 w-fit hover:bg-secondary/10'
          id='hero-motion'
          style={{
            opacity: 0,
            x: -20,
            y: 0
          }}
        >
          <Users className='text-[#FFC600]' />
          <p className='group-hover:text-[#FFC600]'>Peer learning</p>
          <BorderBeam 
            size={70}
            className="from-transparent via-amber-500 to-transparent" 
          />
        </motion.div>
        <motion.div 
          className='relative group flex gap-2 py-2 px-4 rounded-full border-1 w-fit hover:bg-secondary/10'
          id='hero-motion'
          style={{
            opacity: 0,
            x: -20,
            y: 0
          }}
        >
          <GitPullRequestCreateArrow className='text-[#eac71a]' />
          <p className='group-hover:text-[#eac71a]'>Code reviews</p>
          <BorderBeam 
            size={70}
            delay={2}
            className="from-transparent via-amber-500 to-transparent" 
          />
        </motion.div>
        <motion.div 
          className='relative group flex gap-2 py-2 px-4 rounded-full border-1 w-fit hover:bg-secondary/10'
          id='hero-motion'
          style={{
            opacity: 0,
            x: -20,
            y: 0
          }}
        >
          <Video className='text-[#fac62b]' />
          <p className='group-hover:text-[#fac62b]'>Virtual hostel</p>
          <BorderBeam 
            size={70}
            delay={4}
            className="from-transparent via-amber-500 to-transparent" 
          />
        </motion.div>
        <motion.div 
          className='relative group flex gap-2 py-2 px-4 rounded-full border-1 w-fit hover:bg-secondary/10'
          id='hero-motion'
          style={{
            opacity: 0,
            x: -20,
            y: 0
          }}
        >
          <MessageSquare className='text-[#fcbe20]' />
          <p className='group-hover:text-[#fcbe20]'>Doubt sessions</p>
          <BorderBeam 
            size={70}
            delay={6}
            className="from-transparent via-amber-500 to-transparent" 
          />
        </motion.div>
        <motion.div 
          className='relative group flex gap-2 py-2 px-4 rounded-full border-1 w-fit hover:bg-secondary/10'
          id='hero-motion'
          style={{
            opacity: 0,
            x: -20,
            y: 0
          }}
        >
          <Stars className='text-[#FA742B]' />
          <p className='group-hover:text-[#FA742B]'>Bounties</p>
          <BorderBeam 
            size={70}
            delay={8}
            className="from-transparent via-amber-500 to-transparent" 
          />
        </motion.div>
      </div>

      <motion.button 
        type="button" 
        className='group relative inline-flex my-5 w-[70%] md:w-[40%] lg:w-[25%] h-10 border-none rounded-full hover:bg-transparent overflow-hidden p-[1.3px] cursor-pointer hover:scale-105'
        id='hero-motion'
        style={{
          opacity: 0,
          x: 0,
          y: 20
        }}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f3e8d5_0%,#f97316_50%,#f3e8d5_100%)]"></span>
        <a href='https://courses.chaicode.com/learn/view-all?show=batch&type=17' className='inline-flex relative w-full h-full items-center justify-evenly rounded-full  md:text-xl font-semibold text-[#4b1f04] bg-[#feb279] group-hover:bg-primary/60'> 
          Check all Live Cohorts 
          <LiveBlink />
        </a>
      </motion.button>

      <motion.div 
        className='h-[90dvh] w-full flex items-center justify-center'
        id='hero-motion'
        style={{
          opacity: 0,
          x: 0,
          y: 20
        }}
      >
        <LaptopScroll />
      </motion.div>

      <motion.div 
        initial={{
          opacity: 0,
          scale: 0.7
        }}
        animate={{
          opacity: 0.2,
          scale: 1
        }}
        className='absolute w-[400px] aspect-square rounded-full top-0 -left-40 -z-30 blur-3xl bg-gradient-to-l from-primary via-amber-400 to-amber-500 opacity-20'
      ></motion.div>
      <motion.div 
        initial={{
          opacity: 0,
          scale: 0.7
        }}
        animate={{
          opacity: 0.2,
          scale: 1
        }}
        className='absolute w-[400px] aspect-square rounded-full top-80 right-5 -z-30 blur-3xl bg-gradient-to-l from-amber-400 via-amber-500 to-primary opacity-10'
      ></motion.div>
    </div>
  )
}

export default Hero