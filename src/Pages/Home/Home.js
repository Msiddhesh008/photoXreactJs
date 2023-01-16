import React from "react";
import { Banner } from "../../Components/Banner";
import { Collections } from "../../Components/Collections";
import Mission from "../../Components/Mission";
import Navbar from "../../Components/Navbar";
import Gallery from "../../Components/Gallery";
import Custumers from "../../Components/Custumers";
import Pricing from "../../Components/Pricing";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Mission />
      <Collections />
      <Gallery />
      <Custumers />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
