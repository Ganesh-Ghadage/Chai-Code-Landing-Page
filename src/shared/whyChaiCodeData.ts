
type chaiCode = {
  id: number,
  title: string,
  description: string,
  image?: string,
  title2?: string,
  description2?: string,
  className: string
}

export const chaiCodeData: chaiCode[] = [
  {
    id: 1,
    title: "Comprehensive Curriculum",
    description: "Master key concepts and hands-on skills with clarity and confidence. Learn what truly matters, the right way, thorough, practical, and easy to understand.",
    className: "row-span-1"
  },
  {
    id: 2,
    title: "Hitesh Choudhary",
    description: "retired from corporate and full time YouTuber, x founder of LCO (acquired), x CTO, Sr. Director at PW. 2 YT channels (950k & 470k), stepped into 43 countries.",
    image: "./src/assets/image.png",
    title2: "Approach",
    description2: "Project based courses with peer learning and bouties with many activities",
    className: "row-span-1 row-start-1 md:row-start-2 md:row-span-2 lg:row-span-3"
  },
  {
    id: 3,
    title: "Code and Chill",
    description: "Coding should be fun, not frightening. It might feel tough at first, but with time and practice, everything starts to click and fall into place.",
    className: "row-span-1"
  },
  {
    id: 4,
    title: "You finish it",
    description: "Our cohorts are a collaborative journey, students learn together, stay motivated, and complete the course on time as a community.",
    className: "row-span-1"
  },
  {
    id: 5,
    title: "Improve Communication",
    description: "One of the best ways to boost communication skills is through practice. Our peer classes make it happen where co-learners teach, share, and grow together.",
    className: "row-span-1"
  },
  {
    id: 6,
    title: "Industry Guests",
    description: "We’re connected with industry experts and regularly bring them into our classes for engaging, fun, and insightful sessions with students.",
    className: "row-span-1"
  },
  {
    id: 7,
    title: "Bounties",
    description: "Every cohort comes with exciting cash prizes and some even feature a MacBook giveaway! It’s our way of keeping the motivation high and the learning fun.",
    className: "row-span-1"
  },
]