import React from "react";

const BannerContactItem = ({ image, title, description }) => {
  return (
    <div ClassName="support-group-item">
      <div ClassName="support-thumb">
        <img src={`assets/images/${image}`} alt="support" />
      </div>
      <div ClassName="support-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BannerContactItem;
