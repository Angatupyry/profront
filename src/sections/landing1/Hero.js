import React from "react";
import Router from "next/router";
import { Select } from "../../components/Core";
import imgH from "../../assets/image/l1/png/hero-image-man.png";
import imgP from "../../assets/image/patterns/hero-pattern.png";

const defaultCountries = [
  { value: "sp", label: "Asunción" },
  { value: "bd", label: "Lambaré" },
  { value: "usa", label: "Villa Elisa" },
  { value: "uae", label: "Luque" },
  { value: "pk", label: "Ñemby" },
];

const defaultServices = [
  { value: "1", label: "Manicure" },
  { value: "2", label: "Enseñanza de inglés" },
  { value: "3", label: "Personal training" },
  { value: "4", label: "Psicólogo" },
  { value: "5", label: "Enseñanza nivel inicial" },
];

const Hero = () => {
  const [state, setState] = React.useState({
    loading: true,
    error: null,
    service: "1",
    serviceLabel: "Manicure",
    city: "sp",
    cityLabel: "Asunción",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ loading: true, error: null });

    try {
      //await AuthService.login(state.email, state.password);
      setState({ loading: false });
      Router.push("/search-list");
    } catch (error) {
      setState({ loading: false, error: error });
    }
  };

  const handleService = (e) => {
    const newState = { ...state };
    newState["service"] = e.value;
    newState["serviceLabel"] = e.label;
    setState(newState);
    console.log(newState);
  };

  const handleCity = (e) => {
    const newState = { ...state };
    newState["city"] = e.value;
    newState["cityLabel"] = e.label;
    setState(newState);
    console.log(newState);
  };

  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className="bg-gradient-1 pt-26 pt-md-32 pt-lg-33 pt-xl-35 position-relative z-index-1 overflow-hidden">
        {/* <!-- .Hero pattern --> */}
        <div className="pos-abs-tr w-50 z-index-n2">
          <img src={imgP} alt="" className="gr-opacity-1" />
        </div>
        {/* <!-- ./Hero pattern --> */}
        <div className="container">
          <div className="row position-relative align-items-center">
            <div
              className="col-xxl-6 col-xl-7 col-lg-8 col-md-12 pt-lg-13 pb-lg-33 pb-xl-34 pb-md-33 pb-10"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <h1 className="font-size-11 mb-12 pr-md-30 pr-lg-0">
                Encuentra al profesional ideal.
              </h1>
              <div className="">
                {/* <!-- .search-form --> */}
                <form
                  action="/"
                  className="search-form shadow-6"
                  onSubmit={handleSubmit}
                >
                  <div className="filter-search-form-1 bg-white rounded-sm shadow-4">
                    <div className="filter-inputs">
                      {/* <div className="form-group position-relative">
                        <input
                          className="form-control focus-reset pl-13"
                          type="text"
                          id="keyword"
                          placeholder="Job title"
                        />
                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                          <i className="icon icon-zoom-2 text-primary font-weight-bold"></i>
                        </span>
                      </div> */}
                      {/* <!-- .select-city starts --> */}
                      <div className="form-group position-relative">
                        <Select
                          options={defaultServices}
                          className="pl-8 h-100 arrow-3 font-size-4 d-flex align-items-center w-100"
                          border={false}
                          id="service"
                          value={{
                            label: state.serviceLabel,
                            value: state.service,
                          }}
                          onChange={handleService}
                        />

                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                          <i className="icon icon-business-agent text-primary font-weight-bold"></i>
                        </span>
                      </div>
                      {/* <!-- ./select-city ends --> */}

                      {/* <!-- .select-servicio starts --> */}
                      <div className="form-group position-relative">
                        <Select
                          options={defaultCountries}
                          className="pl-8 h-100 arrow-3 font-size-4 d-flex align-items-center w-100"
                          border={false}
                          id="city"
                          value={{ label: state.cityLabel, value: state.city }}
                          onChange={handleCity}
                        />

                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                          <i className="icon icon-pin-3 text-primary font-weight-bold"></i>
                        </span>
                      </div>
                      {/* <!-- ./select-servicio ends --> */}
                    </div>
                    {/* <!-- .Hero Button --> */}
                    <div className="button-block">
                      <button className="btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase">
                        Buscar
                      </button>
                    </div>
                    {/* <!-- ./Hero Button --> */}
                  </div>
                </form>
                {/* <!-- ./search-form --> */}
                {/* <p className="heading-default-color font-size-3 pt-7">
                  <span className="text-smoke">Search keywords e.g.</span>{" "}
                  Product Designer
                </p> */}
              </div>
            </div>
            {/* <!-- Hero Right Image --> */}
            <div
              className="col-lg-6 col-md-4 col-sm-6 col-xs-6 col-8 pos-abs-br z-index-n1 position-static position-md-absolute mx-auto ml-md-auto"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <div className=" ml-xxl-23 ml-xl-12 ml-md-7">
                <img src={imgH} alt="" className="w-100" />
              </div>
            </div>
            {/* <!-- ./Hero Right Image --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
