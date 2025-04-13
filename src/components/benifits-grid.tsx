import { benifitsData } from '@/shared/benifitsData'
import { Network } from './network'
import { AnimatedBackground } from './ui/animated-background'

function BenifitsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4 text-secondary">
      {
        benifitsData.map((data, i) => {
          const Icon = data.icon

          return (
            <AnimatedBackground
              className='rounded-lg bg-zinc-100 dark:bg-zinc-800'
              transition={{
                type: 'spring',
                bounce: 0.2,
                duration: 0.6,
              }}
              enableHover
            >
              <div key={i} className="border-2 border-border p-4 rounded-xl col-span-1" data-id={`card-${i}`}>
                <div className='flex justify-center items-center gap-4 text-start'>
                  <Icon className='min-w-15 h-10 text-primary' /> 
                  <div className=''>
                    <h1 className='text-2xl text-primary font-semibold'>{data.title}</h1>
                    <p>{data.description}</p>
                  </div>
                </div>
              </div>
            </AnimatedBackground>
          )
        })
      }
      <AnimatedBackground
        className='rounded-lg bg-zinc-100 dark:bg-zinc-800'
        transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 0.6,
        }}
        enableHover
      >
        <div className="border-2 border-border p-4 rounded-xl col-span-1 md:col-span-2 lg:col-span-3">
          <div className='flex flex-col md:flex-row justify-center items-center gap-4 text-start'>
            <div className='w-full'>
              <Network />
            </div>
            <div className=''>
              <h1 className='text-2xl text-primary font-bold'>Alumni Network and job listings</h1>
              <p>The alumni Network that you always wished for in your college. We have a dedicated platform where students get to know each other, do projects, make agencies and join Hackathons. \n Our HR team also post regular job updates that you can apply directly whenever you are ready</p>
            </div>
          </div>
        </div>
      </AnimatedBackground>
    </div>
  )
}

export default BenifitsGrid