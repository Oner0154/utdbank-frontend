import React from "react";

const BannerContactItem = ({ image, title, description }) => {
  return (
    <div class="support-group-item">
      <div class="support-thumb">
        <img src={`assets/images/${image}`} alt="support" />
      </div>
      <div class="support-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BannerContactItem;
