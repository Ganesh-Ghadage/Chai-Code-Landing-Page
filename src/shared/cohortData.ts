interface CohortData {
  youTubeEndedLink: string,
  title: string,
  description: string,
  startDate: string,
  duration: string,
  originalPrice: number,
  discountedPrice: number,
  discount: number,
  link: string
}

export const cohortData: CohortData[] = [
  {
    youTubeEndedLink: "https://www.youtube.com/embed/Kjd-SWpe1do?si=X7-eksIy9KVMePSu",
    title: 'Full Stack Data Science 1.0',
    description: 'From Python basics to project deployment',
    startDate: 'April 12, 2025',
    duration: '6 months',
    originalPrice: 8999,
    discountedPrice: 6999,
    discount: 22,
    link: 'https://courses.chaicode.com/learn/batch/about?bundleId=227817'
  },
  {
    youTubeEndedLink: "https://www.youtube.com/embed/VNb_LawBBWU?si=Ht2kXU4ZwxV0Nej3",
    title: 'GenAI with Python',
    description: 'Development side of AI application',
    startDate: ' April 7, 2025',
    duration: '1-2 months',
    originalPrice: 7999,
    discountedPrice: 4999,
    discount: 38,
    link: 'https://courses.chaicode.com/learn/batch/about?bundleId=227321'
  },
  {
    youTubeEndedLink: "https://www.youtube.com/embed/oBLpqSHc3lA?si=oxDj0iA2l_Gc-El6",
    title: 'DevOps for developers 1.0',
    description: 'Perfect guide to get started with DevOps',
    startDate: ' April 15, 2025',
    duration: '1-2 months',
    originalPrice: 7999,
    discountedPrice: 4999,
    discount: 38,
    link: 'https://courses.chaicode.com/learn/batch/about?bundleId=227963'
  },
  {
    youTubeEndedLink: "https://www.youtube.com/embed/yG8JMlldoCE?si=FIuE_Mq__iYw6fXo",
    title: 'Web Dev Cohort 1.0',
    description: 'Ultimate guide to build software on web',
    startDate: 'January 11, 2025',
    duration: '6 months',
    originalPrice: 8999,
    discountedPrice: 6999,
    discount: 22,
    link: 'https://courses.chaicode.com/learn/batch/about?bundleId=214297'
  },
  {
    youTubeEndedLink: "https://www.youtube.com/embed/Fw3FezexzV0?si=2eg7riP1-etMCnFD",
    title: 'Coding Hero 2025',
    description: 'Our Community focused program for students',
    startDate: 'Always running',
    duration: 'Constantly going',
    originalPrice: 599,
    discountedPrice: 299,
    discount: 50,
    link: 'https://courses.chaicode.com/learn/batch/about?bundleId=226894'
  },
]