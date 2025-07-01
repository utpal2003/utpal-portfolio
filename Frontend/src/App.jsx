
import './App.css'
import Navbar from './components/navbar'
import Education from './pages/Education'
import Home from './pages/Home'
import Projects from './pages/Projects'
import TechStack from './pages/TechStack'
import Workxperience from './pages/Workxperience'
import Contactpage from '../src/components/contact'
import AnimatedBot from './components/AnimatedBot'


function App() {


  return (
    <>
    <AnimatedBot/>   
      <Navbar />
      <Home/>
      <Education/>
      <TechStack/>
      <Projects/>
      <Workxperience/>
     <Contactpage/>
    </>
  )
}

export default App
