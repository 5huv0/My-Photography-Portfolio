import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSec from './components/HeroSec'
// import MainSec from './components/MainSec'
import YearSecData from './components/YearSecData'
import MySkillSec from './components/MySkillSec'
import AchievementSec from './components/AchievementSec'
import AboutMeSec from './components/AboutMeSec'
import MyServiceSec from './components/MyServiceSec'

function App() {
  const YearSec = YearSecData.map(data => {
    return <MySkillSec
            {...data}
            />
})
  return (
    <>
     <Navbar/>
     <HeroSec/>
     <AchievementSec/>
     <AboutMeSec/>
     <MyServiceSec/>
     <section className="my-skill-sec">
        <p>My Skills</p>
        <h2>Experiences & Educations</h2>
        {YearSec}
     </section>
     
    </>
  )
}

export default App
