import { FocusCards } from '../ui/focus-cards'
import { cohortData } from '@/shared/cohortData'
import BottomLine from '../bottom-line'
import Heading from '../heading'

function Cohort() {


  return (
    <div className='mx-4'>
      <Heading heading='Cohort' description='Live Traning classes' />
      <FocusCards cards={cohortData} />
    </div>
  )
}

export default Cohort