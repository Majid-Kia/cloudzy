import React from "react";
import Button from "components/buttons/Button";
import ArrowDown from "components/icons/ArrowDown";

const WhyChoose = () => {
  return (
    <div className="why-choose">
      <div className="container">
        <div className="why-choose__title">
          <h2>Why Choose Us?</h2>
          <Button
            text="join us now"
            type="primary"
            className="mt-40 text--white btn-large"
          >
            <ArrowDown color="#fff" />
          </Button>
        </div>
        <div className="why-choose__items">
          <div className="why-choose__item">
            <span>Affordable</span>
            <p>
              Get your hands on Cloudzy's cutting-edge technology built on
              top-tier infrastructure, starting at only $7.95!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
