import { useEffect } from "react";
import './App.css';

import Navbar from './components/Navbar';
import Education from './pages/Education';
import Home from './pages/Home';
import Projects from './pages/Projects';
import TechStack from './pages/TechStack';
import Workxperience from './pages/Workxperience';
import Contactpage from './components/contact';
import AnimatedBot from './components/AnimatedBot';

function App() {

  // Prewarm backend
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/heartbeat`)
      .catch(err => console.log("Prewarm failed:", err));
  }, []);

  return (
    <>
      <AnimatedBot />   
      <Navbar />
      <Home />
      <Education />
      <TechStack />
      <Projects />
      <Workxperience />
      <Contactpage />
    </>
  );
}

export default App;
