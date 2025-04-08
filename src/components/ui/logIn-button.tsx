import { cn } from "@/lib/utils"

function LogInButton({className} : {className?: string}) {
  return (
    <button className={cn(
      'px-4 py-2 bg-[#1167B1] hover:bg-[#1166b1cf] rounded-[20px] text-white border-none',
      className
    )}>
      Log In
    </button>
  )
}

export default LogInButton