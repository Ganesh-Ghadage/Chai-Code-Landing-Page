import { cn } from "@/lib/utils"

function BottomLine({className} : {className?: string}) {
  return (
    <div className={cn(
      'flex justify-center bg-primary/30 w-[180px] h-1 rounded-full transition-all slide',
      className
    )}>
      <div className='flex justify-center bg-primary/60 w-[70%] h-1 rounded-full '>
        <div className='bg-primary w-[30%] h-1 rounded-full '></div>
      </div>
    </div>
  )
}

export default BottomLine