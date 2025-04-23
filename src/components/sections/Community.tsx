import Heading from "../heading"
import { Button } from "../ui/button"


function Community() {
  return (
    <div className="mx-4">
      <Heading heading="Community" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-10 justify-center">
          <h1 className="text-secondary text-4xl md:text-6xl text-wrap text-center md:text-start font-bold">Join our community where creativity thrives.</h1>
          <Button className="w-fit p-4 self-center md:self-start">80,000 Active coders in Discord</Button>
          <Button 
            className="w-fit self-center bg-transparent border text-[#5865F2] py-8 px-4 hover:bg-[#E0E3FF]"
          >
            <a href="https://hitesh.ai/discord"
              className="w-full flex gap-4"
            >
              <img 
                src="./src/assets/Discord-Symbol-Blurple.png"  
                alt="discord logo"
                className="w-10 object-contain cursor-pointer"  
              />
              <span className="text-lg font-bold">Join Discord</span>
            </a>
          </Button>
        </div>
        <div className="max-w-xl min-h-[25rem] mx-auto overflow-hidden rounded-4xl">
          <img 
            src="./src/assets/Discord-Banner_8.png" 
            alt="DiscordBanner" 
            className="object-cover w-full h-full rounded-4xl hover:scale-110 ease-in-out"
          />
        </div>
      </div>
    </div>
  )
}

export default Community