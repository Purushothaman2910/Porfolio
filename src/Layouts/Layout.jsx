import React , { useRef } from 'react'
import { Home , Skills , About , Contact , Experience } from '../pages'
import {Header} from '../components'

function Layout() {
  let [homeRef , AboutRef , SkillsRef , ExperienceRef , ContactRef] = [useRef(null) , useRef(null) , useRef(null) , useRef(null) , useRef(null)]
  return (
    <div className='min-h-screen min-w-full '>
        <Header pageRefs={[homeRef ,ExperienceRef , SkillsRef ,  AboutRef , ContactRef]}/>
        <main>
          <div ref={homeRef}>            
                <Home />
          </div>
          <div ref={ExperienceRef}>            
                <Experience />
          </div>
          <div ref={SkillsRef}>            
                <Skills />
          </div>
          <div ref={AboutRef}>            
                <About />
          </div>
          <div ref={ContactRef}>            
                <Contact />
          </div>
        </main>
    </div>
  )
}

export default Layout