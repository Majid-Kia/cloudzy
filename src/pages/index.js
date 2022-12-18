import * as React from "react";
import Header from "components/home/header/Header";
import DefaultLayout from "components/layouts/DefaultLayout";
import WhyChoose from "components/home/why-choose/WhyChoose";
import NowCloud from "components/home/now-cloud/NowCloud";
import PriceCards from "components/home/price-cards/PriceCards";
import MapSection from "../components/home/map-section/MapSection";

const IndexPage = () => {
  return (
    <DefaultLayout>
      <div className="container">
        <Header />
        <PriceCards />
        <MapSection />
      </div>
      <WhyChoose />
      <div className="container">
        <NowCloud />
      </div>
    </DefaultLayout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
