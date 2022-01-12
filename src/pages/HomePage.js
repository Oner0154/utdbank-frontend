import React from "react";
import TopBar from "../components/common/TopBar";
import Banner from "../components/home/banner/Banner";
import BannerContact from "../components/home/banner/BannerContact";

const HomePage = () => {
  return (
    <>
      <TopBar />
      <Banner />
      <BannerContact />
    </>
  );
};

export default HomePage;
