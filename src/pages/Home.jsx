import React from 'react'
import Banner from '../components/Baner'
import Carusel from '../components/Carusel'
import DestinationsBanner from '../components/DestinationsBanner'
import ExploreDestinations from '../components/ExploreDestinations'
import OurServices from '../components/OurServices'
import PlanYourTrip from '../components/PlanYourTrip'
import VideoBanner from '../components/VideoBanner'
import PricingPlans from '../components/PricingPlans'
import MapBanner from '../components/MapBanner'
import ContactBanner from '../components/ContactBanner'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Carusel/>
      <DestinationsBanner/>
      <ExploreDestinations/>
      <OurServices/>
      <div className=' container mx-auto px-4 h-[2px] bg-slate-200'></div>
      <PlanYourTrip/>
      <VideoBanner/>
      <PricingPlans/>
      <MapBanner/>
      <ContactBanner/>
      <div className=' h-[1px] bg-slate-200'></div>
      <Footer/>
    </div>
  )
}

export default Home