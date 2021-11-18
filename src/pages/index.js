import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero";
import Brands from "../sections/landing1/Brands";
import Loader from "react-loader-spinner";

const IndexPage = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      <div className="page-container">
        {/* {gContext.showSpinner && (
          <div className="spinner">
            <Loader
              type="ThreeDots"
              color="#00b074"
              height={50}
              width={50}
              visible={false}
            />
          </div>
        )} */}

        <PageWrapper
          headerConfig={{
            bgClass: "dynamic-sticky-bg",
          }}
        >
          <Hero />
        </PageWrapper>
      </div>
    </>
  );
};
export default IndexPage;
