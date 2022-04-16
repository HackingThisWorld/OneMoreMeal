import React from 'react';
import CountTextUp from '../components/CountUp';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <>
      <Hero />
      <CountTextUp start={0} end={150} duration={1} />
    </>
  );
};

export default Home;
