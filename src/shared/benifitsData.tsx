import { CodeXml, GraduationCap, Hotel, LucideIcon, Repeat, Trophy, Users } from "lucide-react"

type benifits = {
  id: number,
  icon: LucideIcon,
  title: string,
  description: string,
}

export const benifitsData:benifits[] = [
  {
    id: 1,
    icon: GraduationCap,
    title: "Taught by Professionals",
    description: "Our cohorts are being taught by top industry experts and educators",
  },
  {
    id: 2,
    icon: Trophy,
    title: "Bounties",
    description: "Earn rewards, from Cash to MacBook. Keeps you motivated to work hard",
  },
  {
    id: 3,
    icon: Hotel,
    title: "Coding hostels",
    description: "There is nothing like late night discussion with fellow learners and solving bugs",
  },
  {
    id: 4,
    icon: Users,
    title: "Peer Code Reviews",
    description: "With Our internal tools like Masterji, every code assignment gets feedback to improve your code",
  },
  {
    id: 5,
    icon: CodeXml,
    title: "Leet Lab",
    description: "Our in-house built LeetCode style platform that helps you to understand foundation of programming language",
  },
  {
    id: 6,
    icon: Repeat,
    title: "Revision classes",
    description: "We have so many peer classes by fellow learners that you get so many chances to learn that topic",
  },
]