import React from 'react'
import Banner from '../components/Baner'
import Carusel from '../components/Carusel'
import CaruselCard from '../components/CaruselCard'
import DestinationsBanner from '../components/DestinationsBanner'
import ExploreDestinations from '../components/ExploreDestinations'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Carusel/>
      <DestinationsBanner/>
      <ExploreDestinations/>
    </div>
  )
}

export default Home