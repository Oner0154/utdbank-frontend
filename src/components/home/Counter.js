import React from "react";
import SectionTitle from "../common/SectionTitle";

const Counter = () => {
  return (
    <section className="counter-section pt-100 pb-70">
      <div className="container">
        <SectionTitle
          title="We always try to evaluate customers Values"
          description=""
        />

        <div className="counter-content">
          <div className="counter-item">
            <h3>
              <span className="counter">70</span>
              <span className="counter-text-lg">+</span>
            </h3>
            <p>Contributors</p>
          </div>

          <div className="counter-item">
            <h3>
              <span className="counter">40</span>
              <span className="counter-text-sm">K</span>
            </h3>
            <p>Feedback</p>
            <div className="counter-loader">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="counter-item">
            <h3>
              <span className="counter">1000</span>
              <span className="counter-text-sm">k</span>
            </h3>
            <p>Downloaded</p>
            <div className="counter-loader">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="counter-item">
            <h3>
              <span className="counter">590</span>
              <span className="counter-text-lg">+</span>
            </h3>
            <p>Workers</p>
            <div className="counter-loader">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
