import React from "react";
import Hero from "../Home/Hero";
import Services from "../Home/Services";
import Popular from "../Home/Popular";
import Contact from "../Home/Contact";

const Home = () => {
  return (
    <div className="p-8">
      <Hero></Hero>
      <Services></Services>
      <Popular></Popular>
      <Contact></Contact>
    </div>
  );
};

export default Home;
