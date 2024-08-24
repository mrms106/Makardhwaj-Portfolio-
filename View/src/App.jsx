import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainBox from './elements/main/mainBox'
import NavBar from './elements/include/navBar'
import About from './elements/About/about'
import CvMain from './elements/CVmain/cvMain';
import Projects from './elements/project/project';
import ContactMe from './elements/contact/contactMe';
function App() {

  return (
    <>
    <div className='mainbox'>
      <Router>
      <MainBox/>
        <Routes>
          <Route path='/' element={ <About/>}></Route>
          <Route path='/Resume' element={ <CvMain/>}></Route>
          <Route path='/projects' element={ <Projects/>}></Route>
          <Route path='/contactme' element={ <ContactMe/>}></Route>
        </Routes>
        <NavBar/>
      </Router>
      
      </div>
    </>
  )
}

export default App
