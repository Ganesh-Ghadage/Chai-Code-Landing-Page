import './App.css'
import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import Tweets from './components/sections/Tweets'

function App() {

  return (
    <>
      <div>
        <Header />

        <div className='mt-20 min-h-screen'>
          <Hero />
        </div>

        <div className='mb-20'>
          <Tweets />
        </div>
      </div>
    </>
  )
}

export default App
