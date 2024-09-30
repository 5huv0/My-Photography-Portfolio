import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSec from './components/HeroSec'
import YearSecData from './components/YearSecData'
import MySkillSec from './components/MySkillSec'
import AchievementSec from './components/AchievementSec'
import AboutMeSec from './components/AboutMeSec'
import MyServiceSec from './components/MyServiceSec'
import EventSec from './components/EventsSec'
import EventSecData from './components/EventSecData'
import ClientSec from './components/ClientSec'
import ClientData from './components/ClientData'

function App() {
  const YearSec = YearSecData.map(data => {
    return <MySkillSec
            {...data}
            />
})


const Client = ClientData.map(x => {
  return <ClientSec
          {...x}
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

     <section className='event-sec'>
        <EventSec/>
     </section>

     <section >
        <p>
          My Partners
        </p>
        <p>
          Meet my trusted partners
        </p>
        <button>
          View All
        </button>
        {Client}
     </section>
     
    </>
  )
}

export default App
