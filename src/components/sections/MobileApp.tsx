import { Bell, Smartphone, Zap } from "lucide-react"
import Mobile from "../mobile"
import { useMobileView } from "@/hooks/useMobileView"
import { AuroraText } from "../magicui/aurora-text"

function MobileApp() {
  const isMobile = useMobileView()

  return (
    <div className="flex flex-col gap-4 mx-4 ">
      {isMobile && <h1 className="text-primary text-4xl font-bold">
        <AuroraText>Learn on the go</AuroraText>
      </h1> }
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <div className="w-full h-full flex justify-center" >
          <Mobile />
        </div>
        <div className="flex flex-col gap-3 md:gap-6 mt-2">
          {!isMobile && <h1 className="text-primary text-6xl font-bold">
              <AuroraText>Learn on the go</AuroraText>
          </h1>}
          <p className="text-secondary text-lg md:text-xl ">Take your coding journey anywhere with the ChaiCode mobile app. Access courses, join live sessions, and connect with the community - all from your pocket.</p>

          <div className="flex flex-col mx-auto gap-3 md:gap-6"> 
            <div className="flex items-center gap-3 md:gap-6">
              <div className="w-8 md:w-10 h-8 md:h-10 bg-primary/30 rounded-full flex items-center justify-center">
                <Zap className="w-5 md:w-8 text-primary" />
              </div>
              <p className="text-secondary text-md md:text-lg font-semibold">Offline course access</p>
            </div>
            <div className="flex items-center gap-3 md:gap-6">
              <div className="w-8 md:w-10 h-8 md:h-10 bg-primary/30 rounded-full flex items-center justify-center">
                <Bell className="w-5 md:w-8 text-primary" />
              </div>
              <p className="text-secondary text-md md:text-lg font-semibold">Live session notifications</p>
            </div>
            <div className="flex items-center gap-3 md:gap-6">
              <div className="w-8 md:w-10 h-8 md:h-10 bg-primary/30 rounded-full flex items-center justify-center">
                <Smartphone className="w-5 md:w-8 text-primary" />
              </div>
              <p className="text-secondary text-md md:text-lg font-semibold">Revision while commuting</p>
            </div>
          </div>

          <div className="flex gap-10 justify-center items-center w-full h-20">
            <a href="https://play.google.com/store/apps/details?id=com.chaicode.courses&pcampaignid=web_share"
              className="w-50 h-fit cursor-pointer hover:scale-105"
            >
              <img className="w-full h-full" src="./src/assets/google-play.svg" alt="Play Store" />
            </a>
            <a href="https://apps.apple.com/in/app/chaicode/id6504993143"
              className="w-50 h-fit cursor-pointer hover:scale-105"
            >
              <img className="w-full h-full" src="./src/assets/app-store.svg" alt="Play Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileApp