import { Magnetic } from './ui/magnetic';
import { topics } from '@/shared/topicsData';
import { motion } from 'motion/react'

export function Topics() {
  const springOptions = { bounce: 0.1 };

  return (
    <div className='flex flex-wrap gap-10 md:gap-15 max-w-6xl mx-auto justify-center items-center'>
      {
        topics.map((topic, i) => (
          <motion.div
            key={`topic-${i}`}
            initial={{
              opacity: 0,
              filter: 'blur(5px)',
              y: (i % 2 === 0 ? -20 : 20),
              x: (i % 2 === 0 ? 20 : -20)
            }}
            whileInView={{
              opacity: 1,
              filter: 'blur(0px)',
              y: 0,
              x: 0,
              transition: {
                delay: (i * 0.1),
                duration: 0.3,
                ease: "easeInOut"
              }
            }}
            viewport={{ once: true }}
          >
            <Magnetic
              intensity={0.2}
              springOptions={springOptions}
              actionArea='global'
              range={200}
            >
              <button
                type='button'
                className='inline-flex items-center rounded-lg border border-border bg-foreground/40 px-4 py-2 text-sm transition-all duration-200 hover:bg-primary/10'
              >
                <Magnetic
                  intensity={0.1}
                  springOptions={springOptions}
                  actionArea='global'
                  range={200}
                >
                  <a href={topic.link} className='flex flex-col gap-2 min-w-10'>
                    <Magnetic
                      intensity={0.3}
                      springOptions={springOptions}
                      actionArea='global'
                      range={300}
                    >
                      {<img height="20" src={`https://cdn.simpleicons.org/${topic.slug}?viewbox=auto`} alt={topic.topic} />}
                    </Magnetic>
                    <Magnetic
                      intensity={0.1}
                      springOptions={springOptions}
                      actionArea='global'
                      range={300}
                    >
                      <span className='text-secondary text-lg font-semibold'>{topic.topic}</span>
                    </Magnetic>
                  </a>
                </Magnetic>
              </button>
            </Magnetic>
          </motion.div>
        ))
      }
    </div>
  );
}
