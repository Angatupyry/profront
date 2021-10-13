import React, { useState, useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero";
import Brands from "../sections/landing1/Brands";
import Categories from "../sections/landing1/Categories";
import Content1 from "../sections/landing1/Content1";
import FeaturedJobs from "../sections/landing1/FeaturedJobs";
import Content2 from "../sections/landing1/Content2";

import Loader from "react-loader-spinner";

const IndexPage = () => {
  const gContext = useContext(GlobalContext);
  return (
    <>
      <div className="page-container">
        {gContext.showSpinner && (
          <div className="spinner">
            <Loader
              type="ThreeDots"
              color="#00b074"
              height={50}
              width={50}
              visible={gContext.showSpinner}
            />
          </div>
        )}

        <PageWrapper
          headerConfig={{
            bgClass: "dynamic-sticky-bg",
          }}
        >
          <Hero />
          {/* <Brands />
        <Categories />
        <Content1 />
        <FeaturedJobs />
        <Content2 /> */}
        </PageWrapper>
      </div>
    </>
  );
};
export default IndexPage;
