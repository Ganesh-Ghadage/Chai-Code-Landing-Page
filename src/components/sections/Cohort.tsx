import { FocusCards } from '../ui/focus-cards'
import { cohortData } from '@/shared/cohortData'
import BottomLine from '../bottom-line'

function Cohort() {


  return (
    <div className='mx-4'>
      <div className='mb-6 flex flex-col items-center'>
        <h1 className='text-4xl md:text-5xl font-bold  opacity-100 transform-none'>
          <span className='bg-gradient-to-r from-orange-400 to-amber-500 text-transparent bg-clip-text'>Cohort</span>
        </h1>
        <BottomLine />
        <p className='text-secondary text-xl font-semibold'>Live Traning classes</p>
      </div>
      <FocusCards cards={cohortData} />
    </div>
  )
}

export default Cohort