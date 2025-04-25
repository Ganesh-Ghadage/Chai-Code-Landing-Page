import { chaiCodeData } from '@/shared/whyChaiCodeData'
import { cn } from '@/lib/utils'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { motion } from "motion/react";

function ChaiCodeGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4 text-secondary">
      {
        chaiCodeData.map((data, i) => (
          <motion.div 
            key={`chaicode-${i}`} 
            className={cn(
              "border-2 border-border p-4 rounded-xl hover:bg-primary/10",
              data.className
            )}
            initial={{
              opacity: 0,
              filter: 'blur(5px)',
              y: 50
            }}
            whileInView={{
              opacity: 1,
              filter: 'blur(0px)',
              y: 0,
              transition: {
                delay: (i * 0.15),
                duration: 0.3,
                ease: "easeInOut"
              }
            }}
            viewport={{ once: true }}
          >
            {data.id === 2 ?
              <div className='flex flex-col justify-between h-full w-full'>
                <img src={data.image} alt={data.title} className='object-cover rounded-xl mb-2' />
                <div className='flex flex-col justify-center items-center gap-4 text-start'>
                  <h1 className='text-2xl text-primary font-bold'>{data.title}</h1>
                  <p className='text-start'>{data.description}</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 text-start'>
                  <h1 className='text-2xl text-primary font-bold'>{data.title2}</h1>
                  <p className='text-start'>{data.description2}</p>
                </div>
                <div className='flex gap-6 mt-4'>
                  <a href="https://x.com/Hiteshdotcom">
                    <Twitter className='hover:fill-sky-600 hover:text-transparent' />
                  </a>
                  <a href="https://www.linkedin.com/in/hiteshchoudhary/">
                    <Linkedin className='hover:fill-sky-600 hover:text-transparent' />
                  </a>
                  <a href="https://github.com/hiteshchoudhary/">
                    <Github className='hover:fill-secondary hover:text-transparent' />
                  </a>
                </div>
              </div>
              :
              <div className='flex flex-col justify-between items-center gap-4 w-full h-full'>
                <h1 className='text-2xl text-primary font-bold'>{data.title}</h1>
                <p className='text-start'>{data.description}</p>
              </div>
            }
          </motion.div>
        ))
      }
    </div>
  )
}

export default ChaiCodeGrid