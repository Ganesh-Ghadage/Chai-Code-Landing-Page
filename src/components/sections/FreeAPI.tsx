import Heading from '../heading'
import { Button } from '../ui/button'

function FreeAPI() {
  return (
    <div className='w-full relative overflow-hidden'>

      <Heading heading='Free API' description='Open Source' />

      <div className='relative w-full flex flex-col md:flex-row gap-4 justify-center items-center'>
        <div className='w-full h-full flex items-center p-4'>
          <iframe 
            className='w-full rounded-xl object-cover aspect-video' 
            src="https://www.youtube.com/embed/DxedlhTyR7Q?si=o5SRwaVHRBhgiM8e" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
        <div className='relative w-full h-full text-secondary text-center md:text-start flex flex-col gap-6 p-4 justify-evenly'>
          <h1 className='text-2xl md:text-5xl text-wrap font-bold'>Unlock Your Potential <br/> with Our API Hub</h1>
          <p className='text-wrap md:text-lg'>Our API Hub is designed to streamline your learning experience in API handling across various programming languages. With this resource, you can effortlessly build and showcase your front-end portfolio in both web and mobile applications. Join us to enhance your skills and take your coding projects to the next level!</p>
          <Button 
            className='w-fit px-4 py-2 self-center cursor-pointer hover:bg-primary/60 hover:text-secondary-foreground'
          >
            <a href="https://freeapi.app/">
              Check FreeAPI Docs
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FreeAPI