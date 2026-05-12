import React from 'react';

import HeroSection from './Hero/HeroSection';
import AboutSection from './About/AboutSection';
import CoffeeProducts from './Products/CoffeeProducts';
import TeaBrewSection from './Products/TeaBrewSection';
import ContactSection from './Contact/ContactSection';
import PremixSection from './PremixSection/PremixSection';
// import VisionValues from './VisionValues/VisionValues';
// import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import Testimonials from './Testimonials/Testimonials'; 

const Home = () => {
  return (

    <div>

      <HeroSection />

      <AboutSection />

      <CoffeeProducts />

      <TeaBrewSection />
      <PremixSection />
      {/* <VisionValues /> */}
      {/* <WhyChooseUs /> */}
      <Testimonials />

      <ContactSection />

    </div>

  )
}

export default Home;