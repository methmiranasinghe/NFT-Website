import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header"
import TopFold from "./components/TopFold"
import BrandsIntegration from "./components/BrandsIntegration"
import InfoSection from "./components/InfoSection";
import TrendingNFts from "./components/TrendingNFts";
const App  = () => {
  return (
    <div className="max-width"> 
      <Header/>
      <TopFold/>
      <BrandsIntegration/>
      <TrendingNFts/>
      <InfoSection/>
      <Footer/>

    </div>
  );
};

export default App ;
