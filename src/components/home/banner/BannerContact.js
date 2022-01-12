import React from "react";

const BannerContact = () => {
  return (
    <div className="header-suuport">
      <div className="container">
        <div className="header-support-group">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg order-md-2 order-lg-4">
              <div className="support-bank">
                <div className="support-bank-info">
                  <ul className="review-star">
                    <li className="full-star">
                      <i className="bx bxs-star"></i>
                    </li>
                    <li className="full-star">
                      <i className="bx bxs-star"></i>
                    </li>
                    <li className="full-star">
                      <i className="bx bxs-star"></i>
                    </li>
                    <li className="full-star">
                      <i className="bx bxs-star"></i>
                    </li>
                    <li className="full-star">
                      <i className="bx bxs-star"></i>
                    </li>
                  </ul>
                  <p>
                    Migration dolor sit amet etur divelit conseetur diisci velit
                    sed tempora incidunt
                  </p>
                  <div className="support-logo">
                    <img src="assets/images/logo.png" alt="logo" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg order-md-1 order-lg-1">
              <div className="support-group-item">
                <div className="support-thumb">
                  <img src="assets/images/envelop.png" alt="support" />
                </div>
                <div className="support-details">
                  <h3>
                    <a href="mailto:info@udtbank.com">info@udtbank.com</a>
                  </h3>
                  <p>Support 24/7</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-12 col-lg order-md-3 order-lg-2">
              <div className="support-group-item">
                <div className="support-thumb">
                  <img src="assets/images/phone.png" alt="support" />
                </div>
                <div className="support-details">
                  <h3>
                    <a href="tel:(+00)67834598">(+00) 678 345 98</a>
                  </h3>
                  <p>Free Consultation</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-12 col-lg order-md-4 order-lg-3">
              <div className="support-group-item">
                <div className="support-thumb">
                  <img src="assets/images/map.png" alt="support" />
                </div>
                <div className="support-details">
                  <h3>456 Labisto Parkways</h3>
                  <p>CA, United States</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerContact;
