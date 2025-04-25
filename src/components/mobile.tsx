import { BellIcon, Book, Home, MenuIcon, NotepadText, PhoneCall, Search } from "lucide-react"

function Mobile() {
  return (
    <div className="text-white text-start w-[260px] h-[500px]  bg-gray-950 p-[5px] rounded-xl">
      <div className="bg-gray-900 rounded-xl p-[10px] h-full w-full">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <MenuIcon className="h-[16px]" />
            <span className="font-bold text-[15px]">Chai Code</span>
          </div>

          <div className="flex gap-2 items-center">
            <BellIcon className="h-[16px]" />
            <Search className="h-[16px]" />
          </div>
        </div>
        
        <div className="mt-2">
          <div className="flex flex-col gap-1">
            <h1 className="self-start text-[12px] font-bold">Continue Learning</h1>
            <div className="flex gap-4 border border-border bg-gray-800 p-[4px] rounded-md">
              <img className="w-15 aspect-auto rounded-sm" src="./assets/image.png" alt="web dev Cohort" />
              <div className="flex flex-col items-start">
                <h1 className="font-bold text-[12px]">Web Dev Cohort</h1>
                <span className="px-[3px] bg-amber-200 text-black text-[8px] rounded-[4px]">PURCHASED</span>
                <p className="text-[10px]">26 Products</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 mt-2">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-[12px]">Upcoming Live Classes</h1>
              <p className="text-[10px]">View All</p>
            </div>
            <div className="flex gap-6 ">
              <div className="bg-[url(./assets/image.png)] bg-center bg-cover w-[250px] h-[90px] rounded-lg">
                <div className="bg-black/60  h-full w-full flex flex-col items-start justify-between p-2 rounded-lg">
                  <span className="bg-amber-400 text-black rounded-[2px] text-[8px] px-[2px]">Live</span>

                  <p className="text-[10px] font-semibold mt-[6px]">DEVOPS FOR DEVELO...</p>
                  <h1 className="text-[12px] font-bold">User Manage...</h1>
                  <p className="text-[10px]">9:00 PM - Hitesh</p>
                </div>
              </div>
              <div className="bg-[url(./assets/image.png)] bg-center bg-cover w-[250px] h-[90px] rounded-lg">
                <div className="bg-black/60  h-full w-full flex flex-col items-start justify-between p-2 rounded-lg">
                  <span className="bg-amber-400 text-black rounded-[2px] text-[8px] px-[2px]">Live</span>

                  <p className="text-[10px] font-semibold mt-[6px]">Full STACK DATA SCIENCE</p>
                  <h1 className="text-[12px] font-bold text-wrap">Operators...</h1>
                  <p className="text-[10px]">11:00 AM - Priya</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 mt-2">
            <h1 className="font-bold self-start text-[12px]">Batches (4)</h1>
            
            <div className="flex flex-col gap-2 overflow-hidden">
              <div className="flex gap-4 border border-border bg-gray-800 p-[3px] rounded-sm">
                <img className="w-15 aspect-auto rounded-sm" src="./assets/image.png" alt="web dev Cohort" />
                <div className="flex flex-col items-start">
                  <h1 className="font-bold text-[12px]">Web Dev Cohort</h1>
                  <p className="text-[10px]">26 Products</p>
                </div>
              </div>

              <div className="flex gap-4 border border-border bg-gray-800 p-[3px] rounded-sm">
                <img className="w-15 aspect-auto rounded-sm" src="./assets/image.png" alt="web dev Cohort" />
                <div className="flex flex-col items-start">
                  <h1 className="font-bold text-[12px]">GenAI with Python</h1>
                  <p className="text-[10px]">1 Products</p>
                </div>
              </div>

              <div className="flex gap-4 border border-border bg-gray-800 p-[3px] rounded-sm">
                <img className="w-15 aspect-auto rounded-sm" src="./assets/image.png" alt="web dev Cohort" />
                <div className="flex flex-col items-start">
                  <h1 className="font-bold text-[12px]">Javascript</h1>
                  <p className="text-[10px]">2 Products</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        <div className="flex justify-between mt-4">
          <div className="flex flex-col justify-center items-center text-sm">
            <NotepadText className="h-[16px]" />
            <span className="text-[12px]">Activity</span>
          </div>
          <div className="flex flex-col justify-center items-center text-sm">
            <Book className="h-[16px]" />
            <span className="text-[12px]">Courses</span>
          </div>
          <div className="flex flex-col justify-center items-center text-sm">
            <Home className="text-primary h-[16px]" />
            <span className="text-primary text-[12px]">Home</span>
          </div>
          <div className="flex flex-col justify-center items-center text-sm">
            <Search className="h-[16px]" />
            <span className="text-[12px]">Search</span>
          </div>
          <div className="flex flex-col justify-center items-center text-sm">
            <PhoneCall className="h-[16px]" />
            <span className="text-[12px]">Contact</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mobile