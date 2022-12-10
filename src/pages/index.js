import * as React from "react";
import Header from "../components/header/Header";
import DefaultLayout from "../components/layouts/DefaultLayout";

const IndexPage = () => {
  return (
    <DefaultLayout>
      <Header />
    </DefaultLayout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
