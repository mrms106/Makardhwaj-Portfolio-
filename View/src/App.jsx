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
import PwaInstall from './pwaApp';
import darkbg from '../src/assets/darkbg.jpg'
function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

 const[darkMode,setdarkMode]=useState(()=>{
  const setDarkMode=localStorage.getItem('darkMode')
  return setDarkMode==='true'
 })

 const handleBeforeInstallPrompt = (e) => {
  e.preventDefault(); 
  setDeferredPrompt(e); 
};
 useEffect(()=>{
  localStorage.setItem('darkMode',darkMode)
  window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }
 },[darkMode])
  return (
    
    <div className={darkMode ? "darkmode" : "body"}>
       <PwaInstall deferredPrompt={deferredPrompt} setDeferredPrompt={setDeferredPrompt}/>
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
