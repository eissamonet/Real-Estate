import React from 'react'
import Header from './component/Header'
import About from './component/About'
import Projects from './component/Projects'
import Testimonials from './component/Testimonials'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
    </div>
  )
}

export default App
