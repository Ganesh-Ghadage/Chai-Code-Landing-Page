import './App.css'
import Udemy from './components/sections/Udemy'
import Cohort from './components/sections/Cohort'
import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import POW from './components/sections/ProofOfWork'
import Tweets from './components/sections/Tweets'
import KeyBenifits from './components/sections/KeyBenifits'
import WhyChaiCode from './components/sections/WhyChaiCode'
import TopicsCloud from './components/sections/TopicsCloud'
import Community from './components/sections/Community'
import FreeAPI from './components/sections/FreeAPI'
import MobileApp from './components/sections/MobileApp'
import Footer from './components/sections/Footer'

function App() {

  return (
    <>
      <Header />
      <div className='max-w-[1280px] mx-auto'>
        <div className='my-20 min-h-screen'>
          <Hero />
        </div>

        <div className='mb-20 -mt-20'>
          <Tweets />
        </div>

        <div className=''>
          <POW />
        </div>

        <div className='mb-20'>
          <Cohort />
        </div>

        <div>
          <Udemy />
        </div>
        
        <div>
          <KeyBenifits />
        </div>

        <div>
          <WhyChaiCode />
        </div>
        
        <div>
          <TopicsCloud />
        </div>
        
        <div className='my-10'>
          <Community />
        </div>

        <div>
          <FreeAPI />
        </div>

        <div className='my-10'>
          <MobileApp />
        </div>

      </div>

      <div className='w-full h-full'>
        <Footer />
      </div>
    </>
  )
}

export default App
