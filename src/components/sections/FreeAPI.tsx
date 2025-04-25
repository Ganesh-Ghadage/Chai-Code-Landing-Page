import { useEffect } from 'react';
import Heading from '../heading'
import { Button } from '../ui/button'
import { motion, useAnimate, useInView, stagger } from "motion/react";

function FreeAPI() {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(
        "#api-motion", 
        {
          opacity: 1,
          y: 0
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
    <div className='w-full relative overflow-hidden'>

      <Heading heading='Free API' description='Open Source' />

      <div ref={scope} className='relative w-full flex flex-col md:flex-row gap-4 justify-center items-center'>
        <motion.div 
          id='api-motion' 
          className='w-full h-full flex items-center p-1 bg-foreground rounded-xl m-4'
          style={{
            opacity: 0,
            y: 20
          }}
        >
          <iframe 
            className='w-full rounded-xl object-cover aspect-video' 
            src="https://www.youtube.com/embed/DxedlhTyR7Q?si=o5SRwaVHRBhgiM8e" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </motion.div>
        <div className='relative w-full h-full text-secondary text-center md:text-start flex flex-col gap-6 p-4 justify-evenly'>
          <motion.h1 
            id='api-motion' 
            className='text-2xl md:text-5xl text-wrap font-bold'
            style={{
              opacity: 0,
              y: 20
            }}
          >
            Unlock Your Potential <br/> with Our API Hub
          </motion.h1>
          <motion.p 
            id='api-motion' 
            className='text-wrap md:text-lg'
            style={{
              opacity: 0,
              y: 20
            }}
          >
            Our API Hub is designed to streamline your learning experience in API handling across various programming languages. With this resource, you can effortlessly build and showcase your front-end portfolio in both web and mobile applications. Join us to enhance your skills and take your coding projects to the next level!
          </motion.p>
          <motion.div
            id='api-motion'
            className='w-fit self-center cursor-pointer'
            style={{
              opacity: 0,
              y: 20
            }}
          >  
            <Button 
              className='w-fit px-4 py-2 hover:bg-primary/60 hover:text-secondary-foreground'
            >
              <a href="https://freeapi.app/">
                Check FreeAPI Docs
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default FreeAPI