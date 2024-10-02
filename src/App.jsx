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

    <section className='container client-sec-heading'>
      <div>
        <p className='client-sec-title'>
          My Partners
        </p>
        <p className='client-sec-moto'>
          Meet my trusted <br /> Patners
        </p>
      </div>
      <div>
        <button className='client-sec-btn'>
          View All
        </button>
      </div>
    </section>

     <section className="client">
      {Client}
     </section>
     
    </>
  )
}

export default App
