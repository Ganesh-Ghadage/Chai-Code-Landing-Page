import { Bell, Smartphone, Zap } from "lucide-react"
import Mobile from "../mobile"
import { useMobileView } from "@/hooks/useMobileView"
import { AuroraText } from "../magicui/aurora-text"
import { motion, useAnimate, useInView, stagger } from "motion/react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

function MobileApp() {
  const isMobile = useMobileView()
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(
        "#mobile-motion", 
        {
          opacity: 1,
          y: 0,
          x: 0
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
    <div ref={scope} className="flex flex-col gap-4 mx-4 ">
      {isMobile && <Title className="text-4xl" /> }

      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        
        <motion.div 
          id="mobile-motion"
          className="w-full h-full flex justify-center" 
          style={{
            opacity: 0,
            x: -20,
            y: 0
          }}
        >
          <Mobile />
        </motion.div>
        <div className="flex flex-col gap-3 md:gap-6 mt-2">
          {!isMobile && <Title className="text-6xl" />}
          <motion.p 
            id="mobile-motion"
            className="text-secondary text-lg md:text-xl "
            style={{
              opacity: 0,
              x: 0,
              y: 20
            }}
          >
            Take your coding journey anywhere with the ChaiCode mobile app. Access courses, join live sessions, and connect with the community - all from your pocket.
          </motion.p>

          <div className="flex flex-col mx-auto gap-3 md:gap-6"> 
            <motion.div 
              id="mobile-motion"
              className="flex items-center gap-3 md:gap-6"
              style={{
                opacity: 0,
                x: 0,
                y: 20
              }}
            >
              <div className="w-8 md:w-10 h-8 md:h-10 bg-primary/30 rounded-full flex items-center justify-center">
                <Zap className="w-5 md:w-8 text-primary" />
              </div>
              <p className="text-secondary text-md md:text-lg font-semibold">Offline course access</p>
            </motion.div>
            <motion.div 
              id="mobile-motion"
              className="flex items-center gap-3 md:gap-6"
              style={{
                opacity: 0,
                x: 0,
                y: 20
              }}
            >
              <div className="w-8 md:w-10 h-8 md:h-10 bg-primary/30 rounded-full flex items-center justify-center">
                <Bell className="w-5 md:w-8 text-primary" />
              </div>
              <p className="text-secondary text-md md:text-lg font-semibold">Live session notifications</p>
            </motion.div>
            <motion.div 
              id="mobile-motion"
              className="flex items-center gap-3 md:gap-6"
              style={{
                opacity: 0,
                x: 0,
                y: 20
              }}
            >
              <div className="w-8 md:w-10 h-8 md:h-10 bg-primary/30 rounded-full flex items-center justify-center">
                <Smartphone className="w-5 md:w-8 text-primary" />
              </div>
              <p className="text-secondary text-md md:text-lg font-semibold">Revision while commuting</p>
            </motion.div>
          </div>

          <div className="flex gap-10 justify-center items-center w-full h-20">
            <motion.a 
              id="mobile-motion"
              href="https://play.google.com/store/apps/details?id=com.chaicode.courses&pcampaignid=web_share"
              className="w-50 h-fit cursor-pointer hover:scale-105"
              style={{
                opacity: 0,
                x: -20,
                y: 0
              }}
            >
              <img className="w-full h-full" src="./src/assets/google-play.svg" alt="Play Store" />
            </motion.a>
            <motion.a 
              id="mobile-motion"
              href="https://apps.apple.com/in/app/chaicode/id6504993143"
              className="w-50 h-fit cursor-pointer hover:scale-105"
              style={{
                opacity: 0,
                x: 20,
                y: 0
              }}
            >
              <img className="w-full h-full" src="./src/assets/app-store.svg" alt="Play Store" />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileApp

function Title({className}: {className?: String}) {
  return (
    <motion.h1 
      id="mobile-motion"
      className={cn("text-primary font-bold", className)}
      style={{
        opacity: 0,
        x: 0,
        y: 20
      }}
    >
      <AuroraText>Learn on the go</AuroraText>
    </motion.h1>
  )
}