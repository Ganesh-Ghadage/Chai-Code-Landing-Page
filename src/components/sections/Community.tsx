import AnimateText from "../animate-text"
import Heading from "../heading"
import { Button } from "../ui/button"
import { motion } from "motion/react"

function Community() {
  return (
    <div className="mx-4">
      <Heading heading="Community" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-10 justify-center">
          <AnimateText text={"Join our community where creativity thrives."} className={"text-secondary text-4xl md:text-6xl text-wrap text-center md:text-start font-bold mx-auto"} />
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
                type: "spring",
              }
            }}
            viewport={{ once: true }}
            key={`active-btn`}
            className="w-fit p-4 self-center md:self-start"
          >
            <Button>80,000 Active coders in Discord</Button>
          </motion.div>
          <motion.div 
            initial={{
              x: -20,
              opacity: 0
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                delay: 0.4,
                type: "spring",
              }
            }}
            viewport={{ once: true }}
            key={`join-btn`}
            className="w-fit self-center bg-transparent cursor-pointer"
          >
            <Button 
              className="w-fit self-center bg-transparent border text-[#5865F2] py-8 px-4 hover:bg-[#E0E3FF]"
            >
              <a href="https://hitesh.ai/discord"
                className="w-full flex gap-4"
              >
                <img 
                  src="./assets/Discord-Symbol-Blurple.png"  
                  alt="discord logo"
                  className="w-10 object-contain cursor-pointer"  
                />
                <span className="text-lg font-bold">Join Discord</span>
              </a>
            </Button>
          </motion.div>
        </div>
        <motion.div 
          className="max-w-xl min-h-[25rem] mx-auto overflow-hidden rounded-4xl"
          initial={{
            scale: 0.8,
            opacity: 0
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: {
              delay: 1,
              type: "spring",
            }
          }}
          viewport={{ once: true }}
        >
          <motion.img 
            whileHover={{
              scale: 1.1
            }}
            whileTap={{
              scale: [1.1, 1, 1.1]
            }}
            src="./assets/Discord-Banner_8.png" 
            alt="DiscordBanner" 
            className="object-cover w-full h-full rounded-4xl"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Community