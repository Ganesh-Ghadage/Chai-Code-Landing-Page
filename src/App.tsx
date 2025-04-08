import './App.css'
import Header from './components/sections/Header'
import Hero from './components/sections/Hero'

function App() {

  return (
    <>
      <div>
        <Header />

        <div className='mt-20'>
          <Hero />
        </div>
      </div>
    </>
  )
}

export default App
