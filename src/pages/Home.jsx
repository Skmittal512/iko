import React from 'react'
import HeroSection from '../components/HeroSection'
import Brand from '../components/Brand';
import Feature from '../components/Feature';
import Intro from '../components/Intro';
import Roadmap from '../components/Roadmap';
import Invest from '../components/Invest';
import Team from '../components/Team';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Brand />
      <Feature/>
      <Intro/>
      <Roadmap/>
      <Invest/>
      <Team/>
    </>
  )
}

export default Home
