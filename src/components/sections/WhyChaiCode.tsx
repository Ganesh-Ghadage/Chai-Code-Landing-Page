import Heading from "../heading"
import JoinCohortBtn from "../join-cohort-btn"
import ChaiCodeGrid from "../whyChaiCode-grid"

function WhyChaiCode() {
  return (
    <div className="my-10">
      <Heading heading="But Why ChaiCode ?" description="ChaiCode exists because we love tech and teaching" />
      <ChaiCodeGrid />
      <JoinCohortBtn />
    </div>
  )
}

export default WhyChaiCode