import React from "react";
import "../styles/delivery.scss";
const Delivery = () => {
  return (
    <div className="delivery">
      <div className="title">
        <div className="store_title">
          <h3>BS store</h3>
        </div>
        <div className="order_title">
          <h3>Happy order delivery</h3>
        </div>
      </div>
      <div className="delivery_img">
        <a href="#">
          <div className="store"></div>
        </a>
        <a href="#">
          <div className="order"></div>
        </a>
      </div>
    </div>
  );
};

export default Delivery;
