import React from "react";
import TopBar from "../components/common/TopBar";
import Banner from "../components/home/banner/Banner";
import BannerContact from "../components/home/banner/BannerContact";
import Counter from "../components/home/Counter";
import Features from "../components/home/Features";
import HomeAbout from "../components/home/HomeAbout";

const HomePage = () => {
  return (
    <>
      <TopBar />
      <Banner />
      <BannerContact />
      <Features />
      <HomeAbout />
      <Counter />
    </>
  );
};

export default HomePage;
