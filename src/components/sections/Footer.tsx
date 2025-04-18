import { Github, Instagram, Linkedin, MessageCircleMore, Twitter, Youtube } from "lucide-react"
import ChaicodeLogo from "../chaicode-logo"


function Footer() {
  return (
    <div className="relative z-10 w-full min-h-[49rem] md:min-h-[25rem] lg:min-h-[26rem] h-fit flex flex-col text-secondary bg-foreground">
      <div className="w-full flex flex-col md:flex-row gap-10 justify-between px-10 py-5">
        <div className="flex text-start flex-col gap-4">
          <ChaicodeLogo />
          <p>Home for Programmers</p>

          <div className="flex gap-4">
            <a href="https://www.youtube.com/@chaiaurcode">
              <Youtube className="hover:text-primary hover:scale-105" />
            </a>
            <a href="https://www.instagram.com/hiteshchoudharyofficial/?hl=en">
              <Instagram className="hover:text-primary hover:scale-105" />
            </a>
            <a href="https://github.com/hiteshchoudhary">
              <Github className="hover:text-primary hover:scale-105" />
            </a>
            <a href="https://x.com/hiteshdotcom">
              <Twitter className="hover:text-primary hover:scale-105" />
            </a>
            <a href="https://in.linkedin.com/in/hiteshchoudhary">
              <Linkedin className="hover:text-primary hover:scale-105" />
            </a>
            <a href="https://hitesh.ai/discord">
              <MessageCircleMore className="hover:text-primary hover:scale-105" />
            </a>
          </div>

          <p>&#169; 2025 ChaiCode. All rights reserved.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="flex flex-col gap-4 items-start">
            <h1 className="font-bold">Products</h1>
            <a href="https://courses.chaicode.com/learn">
              <p className="hover:text-primary hover:scale-105" >Courses</p>
            </a>
            <a href="https://courses.chaicode.com/learn/view-all?show=batch&type=17">
              <p className="hover:text-primary hover:scale-105">Cohort</p>
            </a>
            <a href="https://courses.chaicode.com/learn/batch/about?bundleId=226894">
              <p className="hover:text-primary hover:scale-105">Coding Hero</p>
            </a>
            <a href="https://freeapi.app/">
              <p className="hover:text-primary hover:scale-105">FreeAPI</p>
            </a>
            <a href="https://masterji.co/login">
              <p className="hover:text-primary hover:scale-105">Masterji</p>
            </a>
          </div>

          <div className="flex flex-col gap-4 items-start">
            <h1 className="font-bold">Resources</h1>
            <a href="#">
              <p className="hover:text-primary hover:scale-105">Docs</p>
            </a>
            <a href="#">
              <p className="hover:text-primary hover:scale-105">Privacy Policy</p>
            </a>
            <a href="#">
              <p className="hover:text-primary hover:scale-105">Terms of Service</p>
            </a>
            <a href="#">
              <p className="hover:text-primary hover:scale-105">Pricing Policy</p>
            </a>
            <a href="#">
              <p className="hover:text-primary hover:scale-105">Refund Policy</p>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 -z-10 w-full h-28 lg:h-50 mx-auto overflow-hidden fade-bottom">
        <h1 className='w-full text-[4rem] md:text-[9rem] lg:text-[12rem] mt-10 md:-mt-12 lg:-mt-4 font-bold opacity-100 transform-none'>
          <span className='bg-gradient-to-r from-orange-400 to-amber-700 text-transparent bg-clip-text'>CHAICODE</span>
        </h1>
      </div>
    </div>
  )
}

export default Footer