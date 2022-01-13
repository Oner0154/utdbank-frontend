import React from "react";
import TopBar from "../components/common/TopBar";
import Banner from "../components/home/banner/Banner";
import BannerContact from "../components/home/banner/BannerContact";
import Features from "../components/home/Features";
import HomeAboutItem from "../components/home/HomeAboutItem";

const HomePage = () => {
  return (
    <>
      <TopBar />
      <Banner />
      <BannerContact />
      <Features />
      <HomeAboutItem />
    </>
  );
};

export default HomePage;
