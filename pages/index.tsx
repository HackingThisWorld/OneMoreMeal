import React from "react";
import CountTextUp from "../components/CountUp";
import Hero from "../components/Hero";
import CountWrapper from "../components/CountWrapper";
import Cards from "../components/Cards";
import Text from "../components/Text";
import CTA1 from "../components/CTA1";
import CTA2 from "../components/CTA2";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <CountWrapper />
      <Cards />
      <Text />
      <CTA1 />
      <CTA2 />
      <Footer />
    </>
  );
};

export default Home;
