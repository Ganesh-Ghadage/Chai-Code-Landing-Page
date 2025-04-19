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
import Seperator from './components/seperator'

function App() {

  return (
    <>
      <Header />
      <div className='max-w-[1280px] mx-auto mt-20'>
        <div className='mb-20 min-h-screen'>
          <Hero /> 
        </div>

        <div className='-mt-72 md:-mt-20'>
          <Seperator />
        </div>

        <div id='review' className='my-10'>
          <Tweets />
        </div>

        <Seperator />
        
        <div className='my-10'>
          <POW />
        </div>

        <Seperator />

        <div id='cohort' className='my-10'>
          <Cohort />
        </div>

        <Seperator />

        <div id='udemy' className='my-10'>
          <Udemy />
        </div>

        <Seperator />
        
        <div className='my-10'>
          <KeyBenifits />
        </div>

        <Seperator />

        <div className='my-10'>
          <WhyChaiCode />
        </div>

        <Seperator />
        
        <div className='my-10'>
          <TopicsCloud />
        </div>

        <Seperator />
        
        <div className='my-10'>
          <Community />
        </div>

        <Seperator />

        <div className='my-10'>
          <FreeAPI />
        </div>

        <Seperator />

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
