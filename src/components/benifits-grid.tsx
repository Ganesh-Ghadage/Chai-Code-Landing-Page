import { benifitsData } from '@/shared/benifitsData'
import { Network } from './network'
import { motion } from "motion/react";

function BenifitsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4 text-secondary">
      {
        benifitsData.map((data, i) => {
        const Icon = data.icon

        return (
          <motion.div 
            key={`benifits-${i}`} 
            className="border-2 border-border p-4 rounded-xl col-span-1 hover:bg-primary/10" 
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
            <div className='flex md:justify-center items-center gap-4 text-start'>
              <Icon className='min-w-15 h-10 text-primary' /> 
              <div className=''>
                <h1 className='text-2xl text-primary font-semibold'>{data.title}</h1>
                <p>{data.description}</p>
              </div>
            </div>
          </motion.div>
        )
        })
      }
      <motion.div 
        className="border-2 border-border p-4 rounded-xl col-span-1 md:col-span-2 lg:col-span-3 inline-block hover:bg-primary/10"
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
            delay: 1,
            duration: 0.3,
            ease: "easeInOut"
          }
        }}
        viewport={{ once: true }}
      >
        <div className='flex flex-col md:flex-row md:justify-center md:items-center gap-4 text-start'>
          <div className='w-full'>
            <Network />
          </div>
          <div className=''>
            <h1 className='text-2xl text-primary font-bold'>Alumni Network and job listings</h1>
            <p>The alumni Network that you always wished for in your college. We have a dedicated platform where students get to know each other, do projects, make agencies and join Hackathons. \n Our HR team also post regular job updates that you can apply directly whenever you are ready</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default BenifitsGrid