import React from 'react'
import Header from './component/Header'
import About from './component/About'
import Projects from './component/Projects'
import Testimonials from './component/Testimonials'
import Contact from './component/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default App
