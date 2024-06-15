import React from "react";
import Nav from "../../Components/Portfolio/Common/Nav";
import Footer from "../../Components/Portfolio/Footer";
import Banner from "../../Components/Portfolio/Home/Banner";
import SectionCard from "../../Components/Portfolio/Home/SectionCard";
import Features from "../../Components/Portfolio/Home/Features";
import Cards from "../../Components/Portfolio/Home/Cards";
import Sectiontwo from "../../Components/Portfolio/Home/Sectiontwo";
import Figure from "../../Components/Portfolio/Home/Figure";
import Semifooter from "../../Components/Portfolio/Home/Semifooter";
import Slider from "../../Components/Portfolio/Home/Slider";


const Home = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <SectionCard />
      <div id="about-us">
        <Cards />
      </div>
      <Slider />
      <h2 className="text-center font-pop text-4xl font-bold py-6">
        Instagram <span className="text-[#8B668B]">Feeds </span>
      </h2>
      <Figure />
      <Semifooter />
      <Footer />
    </div>
  );
};

export default Home;
