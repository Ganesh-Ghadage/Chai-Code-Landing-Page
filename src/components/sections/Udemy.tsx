import { Star } from 'lucide-react'
import { Button } from '../ui/button'
import Heading from '../heading'
import { motion } from 'motion/react'

function Udemy() {
  return (
    <div className='w-full relative overflow-hidden'>

      <Heading heading='Udemy' description='Not only in India, we are global leaders in tech education' />

      <div className='relative w-full flex flex-col md:flex-row gap-4 justify-center items-center'>
        <motion.div 
          initial={{
            x: -20,
            opacity: 0
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.3,
              type: "spring"
            }
          }}
          viewport={{ once: true }}
          className='w-full h-full flex items-center p-4'
        >
          <iframe 
            className='w-full rounded-xl object-cover aspect-video' 
            src="https://www.youtube.com/embed/KZ31wDjYleI?si=CuwYC9mQ_ECIwzBr" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </motion.div>
        <motion.div 
          initial={{
            x: 20,
            opacity: 0
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.3,
              type: "spring"
            }
          }}
          viewport={{ once: true }}
          className='relative w-full h-full'
        >
          <UdemyCard />
        </motion.div>
      </div>
    </div>
  )
}

export default Udemy


function UdemyCard() {
  return (
    <div className='w-full h-full'>
      <img src="./src/assets/udemy-wordmark-1.svg" 
        className='opacity-25 absolute inset-auto w-full h-full scale-75'
      />
      <div className='relative w-fit h-fit my-auto flex flex-col gap-4 bg-amber-200/10 p-4 rounded-2xl border-2 m-4'>
        <h1 className='text-2xl md:text-4xl text-primary font-bold'>Complete web development course</h1>
        <p className='md:text-md text-secondary md:font-semibold'>Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment, etc.</p>
        <div className='flex flex-col md:flex-row gap-0 md:gap-6 md:items-center md:self-end'>
          <h1 className='flex text-primary text-2xl md:text-3xl font-bold items-center'>&#8377; 399</h1>
          <div className='flex gap-4 md:gap-0 md:flex-col'>
            <h1 className='flex text-muted md:text-lg line-through'>&#8377; 3,099</h1>
            <span className='px-2 bg-primary/10 text-primary text-sm md:text-lg rounded-4xl' >87% off</span>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-2 items-end md:items-center md:justify-between'>
          <div className='flex  gap-2 text-start'>
            <h1 className='text-4xl font-black text-secondary'>4.7</h1>
            <div >
              <div className='flex '>
                <Star className='fill-amber-600 text-amber-600 ' />
                <Star className='fill-amber-600 text-amber-600' />
                <Star className='fill-amber-600 text-amber-600' />
                <Star className='fill-amber-600 text-amber-600' />
                <Star className='fill-amber-600 text-amber-600' />
              </div>
              <p className='text-secondary'>Top Rated</p>
            </div>
          </div>
          <Button className='w-fit'>
            <a href="https://www.udemy.com/course/web-dev-master/?couponCode=CHAIFRIDAY80">
              Check it Out!
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
