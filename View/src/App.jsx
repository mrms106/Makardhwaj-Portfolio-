import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainBox from './elements/main/mainBox'
import NavBar from './elements/include/navBar'
import About from './elements/About/about'
import CvMain from './elements/CVmain/cvMain';
import Projects from './elements/project/project';
import ContactMe from './elements/contact/contactMe';
import DarkModeBtn from './elements/darkModebtn';
import './style/darkmode.css'
import ScrollWindow from './elements/srollWindow';
function App() {
 const[darkMode,setdarkMode]=useState(()=>{
  const setDarkMode=localStorage.getItem('darkMode')
  return setDarkMode==='true'
 })
 useEffect(()=>{
  localStorage.setItem('darkMode',darkMode)
 },[darkMode])
  return (
   
    <div className={darkMode ? "darkmode" : "body"}>
     <DarkModeBtn darkMode={darkMode} setdarkMode={setdarkMode}/>
    <div className='mainbox'>
      <Router>
      <ScrollWindow/>
      <MainBox/>
      
        <Routes>
          <Route path='/' element={ <About/>}></Route>
          <Route path='/about' element={ <About/>}></Route>
          <Route path='/Resume' element={ <CvMain/>}></Route>
          <Route path='/projects' element={ <Projects/>}></Route>
          <Route path='/contactme' element={ <ContactMe/>}></Route>
        </Routes>
        <NavBar/>
      </Router>
      
      </div>
      </div>
    
  )
}

export default App
