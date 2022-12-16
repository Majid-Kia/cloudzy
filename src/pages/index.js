import * as React from "react";
import Header from "components/home/header/Header";
import DefaultLayout from "components/layouts/DefaultLayout";
import WhyChoose from "components/home/why-choose/WhyChoose";
import NowCloud from "components/home/now-cloud/NowCloud";

const IndexPage = () => {
  return (
    <DefaultLayout>
      <div className="container">
        <Header />
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
