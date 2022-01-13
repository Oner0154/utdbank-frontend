import React from "react";
import SectionTitle from "../common/SectionTitle";

const HomeAboutItem = () => {
  return (
    <div className="row align-items-center">
      <div className="col-sm-12 col-md-12 col-lg-6 order-2 order-lg-1">
        <div className="home-about-item desk-pad-right-10 pb-30">
          <SectionTitle
            title="Small to medium-sized businesses"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod cste et dolore magnam aliquam quaerat
            voluptatem."
          />

          <div className="home-about-list">
            <div className="home-about-list-item">
              <img src="assets/images/check.png" alt="checl" />
              International Payments
            </div>
            <div className="home-about-list-item">
              <img src="assets/images/check.png" alt="checl" />
              Request Features
            </div>
            <div className="home-about-list-item">
              <img src="assets/images/check.png" alt="checl" />
              Premium Support
            </div>
            <div className="home-about-list-item">
              <img src="assets/images/check.png" alt="checl" />
              Direct Debit
            </div>
            <div className="home-about-list-item">
              <img src="assets/images/check.png" alt="checl" />
              Automated Accounting
            </div>
            <div className="home-about-list-item">
              <img src="assets/images/check.png" alt="checl" />
              Web Design
            </div>
          </div>
          <div className="home-about-animation">
            <div className="home-animation-item">
              <img src="assets/images/curve-line.png" alt="animated-icon" />
            </div>
            <div className="home-animation-item">
              <img src="assets/images/triangle.png" alt="animated-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-6 order-1 order-lg-2">
        <div className="home-about-item home-about-image pb-30 about-image-ellipsis">
          <div className="home-image-content">
            <img
              src="assets/images/enterprise.png"
              alt="about"
              className="scale-one-zero-one"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutItem;