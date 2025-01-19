import React from 'react'
import Header from './component/Header'
import About from './component/About'
import Projects from './component/Projects'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Projects/>
    </div>
  )
}

export default App
