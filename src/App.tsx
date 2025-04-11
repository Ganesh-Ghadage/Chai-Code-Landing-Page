import './App.css'
import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import POW from './components/sections/ProofOfWork'
import Tweets from './components/sections/Tweets'

function App() {

  return (
    <>
      <div>
        <Header />

        <div className='my-20 min-h-screen'>
          <Hero />
        </div>

        <div className='mb-20 mt-40'>
          <Tweets />
        </div>

        <div className='mb-20'>
          <POW />
        </div>
        
      </div>
    </>
  )
}

export default App
