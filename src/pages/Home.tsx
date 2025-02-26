import React from 'react';
import Hero from '../components/Hero';
import ImpactStats from '../components/ImpactStats';
import SuccessStories from '../components/SuccessStories';
import Partners from '../components/Partners';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <>
      <Hero />
      <ImpactStats />
      <SuccessStories />
      <Partners />
      <CallToAction />
    </>
  );
};

export default Home;