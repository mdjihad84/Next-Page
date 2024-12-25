import React from "react";
import Hero from "../Home/Hero";
import About from "../Home/About";
import Services from "../Home/Services";
import Popular from "../Home/Popular";
import { Helmet } from "react-helmet-async";
import { useNavigation } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Home = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Helmet>
        <title>Next-Page | Home</title>
      </Helmet>
      <div className="p-4 lg:p-8">
        <Hero />
        <About />
        <Services />
        <Popular />
      </div>
    </>
  );
};

export default Home;
