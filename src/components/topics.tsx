import { Magnetic } from './ui/magnetic';
import { topics } from '@/shared/topicsData';

export function Topics() {
  const springOptions = { bounce: 0.1 };

  return (
    <div className='flex flex-wrap gap-10 md:gap-15 max-w-6xl mx-auto justify-center items-center'>
      {
        topics.map((topic, i) => (
          <Magnetic
            intensity={0.2}
            springOptions={springOptions}
            actionArea='global'
            range={200}
            key={`topic-${i}`}
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
                <a href={topic.link} className='flex flex-col gap-2 '>
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
                    range={400}
                  >
                    <span className='text-secondary text-lg font-semibold'>{topic.topic}</span>
                  </Magnetic>
                </a>
              </Magnetic>
            </button>
          </Magnetic>
        ))
      }
    </div>
  );
}
