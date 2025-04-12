import { CalendarDays, Clock } from 'lucide-react'
import { Button } from './ui/button'

type card = {
  youTubeEndedLink: string,
  title: string,
  description: string,
  startDate: string,
  duration: string,
  originalPrice: number,
  discountedPrice: number,
  discount: number,
  link: string
}

type cardProps = {
  card: card
}

function CohortCard( {card} : cardProps) {
  return (
    <div className='bg-border p-4 rounded-lg md:w-full max-w-lg'>
      <div className='w-full flex flex-col text-secondary text-start'>
        <div className='rounded-xl mb-3'>
          <iframe 
            className='max-h-50 lg:min-h-50 h-fil w-full rounded-xl object-cover' 
            src={card.youTubeEndedLink} 
            title={card.title} 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          >
          </iframe>
        </div>
        <div className='flex flex-col items-start w-full gap-4'>
          <div className='flex flex-col items-start '>
            <h1 className='text-xl lg:text-2xl font-semibold '>{card.title}</h1>
            <h3 className='lg:text-lg w-full text-wrap'>{card.description}</h3>
          </div>
          <div className='flex gap-4 lg:gap-10 w-full'>
            <p className='flex justify-center items-center gap-1 lg:gap-2 w-fit'>
              <CalendarDays className='text-primary scale-80' />
              <span className='text-xs lg:text-lg'>{card.startDate}</span>
            </p>
            <p className='flex justify-center items-center gap-1 md:gap-2 w-fit'>
              <Clock className='text-primary scale-80' />
              <span className='text-xs lg:text-lg'>{card.duration}</span>
            </p>
          </div>
          <p>{`> We ❤️ Code`}</p>
          <div className='flex flex-col items-start'>
            <div className='flex gap-4 items-end'>
              <h1 className='text-2xl lg:text-3xl font-bold'>{card.discountedPrice} INR</h1>
              <h1 className='text-md font-light line-through'>{card.originalPrice} INR</h1>
            </div>
            <p className='text-primary font-semibold'>Save {card.discount}%</p>
          </div>
          
          <Button className='w-full h-10 border-2 border-primary hover:bg-transparent hover:text-primary'>
            <a href={card.link}>
              Learn More
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CohortCard