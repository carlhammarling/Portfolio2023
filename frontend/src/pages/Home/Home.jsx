import React from 'react'
import './Home.scss'
import Intro from '../../components/Intro/Intro'
import Projects from '../../components/Projects/Projects'
import Tech from '../../components/Tech/Tech'

const Home = () => {
  return (
    <div className='Home'>
        <Intro />
        <Projects />
        <Tech />
    </div>
  )
}

export default Home