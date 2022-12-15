import * as React from "react";
import Header from "components/home/header/Header";
import DefaultLayout from "../components/layouts/DefaultLayout";

const IndexPage = () => {
  return (
    <DefaultLayout>
      <div className="container">
        <Header />
      </div>
    </DefaultLayout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
