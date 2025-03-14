import React from 'react'
import Hero from '../components/Hero Section/Hero'
import TeamCards from './OurTeam'
import FeatureSection from '../components/Feature Section/FeatureSection';
import StatisticsSection from '../components/Statistic Sections/StatisticsSection';



const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <StatisticsSection/>
      <FeatureSection/>
      <TeamCards/>
    </div>
  )
}

export default Home