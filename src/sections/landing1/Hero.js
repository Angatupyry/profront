import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Router from "next/router";
import { Select } from "../../components/Core";
import imgH from "../../assets/image/l1/png/hero-image-man.png";
import imgP from "../../assets/image/patterns/hero-pattern.png";
import BuscadorService from "../../services/buscador.service";

const defaultCountries = [
  { value: "1", label: "Asunción" },
  { value: "2", label: "Lambaré" },
  { value: "3", label: "Villa Elisa" },
  { value: "4", label: "Luque" },
  { value: "5", label: "Ñemby" },
];

console.log(defaultCountries);

const defaultServices = [
  { value: "1", label: "Manicure" },
  { value: "2", label: "Enseñanza de inglés" },
  { value: "3", label: "Personal training" },
  { value: "4", label: "Psicólogo" },
  { value: "5", label: "Enseñanza nivel inicial" },
];

const Hero = (props) => {
  const cityArray = [];
  const serviceArray = [];
  let route = useHistory();
  const [city, setCity] = React.useState([]);
  const [service, setService] = React.useState({});
  const [state, setState] = React.useState({
    loading: true,
    error: null,
    service: "",
    serviceLabel: "",
    city: "",
    cityLabel: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ loading: true, error: null });

    Router.push({
      pathname: "/search-list",
      query: { city: state.city, service: state.service },
    });
  };

  const handleService = (e) => {
    const newState = { ...state };
    newState["service"] = e.value;
    newState["serviceLabel"] = e.label;
    setState(newState);
    //console.log(newState);
  };

  const handleCity = (e) => {
    const newState = { ...state };
    newState["city"] = e.value;
    newState["cityLabel"] = e.label;
    setState(newState);
    //console.log(newState);
  };

  function isEmpty(value) {
    return (
      Boolean(value && typeof value === "object") && !Object.keys(value).length
    );
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
    async function fetchData() {
      setState({ loading: true, error: null });
      try {
        const ciudades = await BuscadorService.getCities();
        ciudades.data.data.forEach((element) => {
          cityArray.push({
            value: element.id.toString(),
            label: element.nombre,
          });
        });

        setCity(cityArray);

        const servicios = await BuscadorService.getServices();
        console.log(servicios);
        servicios.data.data.forEach((element) => {
          serviceArray.push({
            value: element.id.toString(),
            label: element.descripcion,
          });
        });
        setService(serviceArray);
        setState({
          city: cityArray[0].value,
          cityLabel: cityArray[0].label,
          service: serviceArray[0].value,
          serviceLabel: serviceArray[0].label,
        });
      } catch (error) {
        console.log(error);
        setState({ loading: false, error: error });
      }
    }
    if (isEmpty(city)) {
      fetchData();
    }
  }, [city]);

  if (city.length > 0 && service.length > 0) {
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
                        <div
                          className="form-group position-relative"
                          style={{ zIndex: 1000 }}
                        >
                          <Select
                            options={service}
                            className="pl-8 h-100 arrow-3 font-size-4 d-flex align-items-center w-100"
                            border={false}
                            id="service"
                            value={{
                              label: state.serviceLabel,
                              value: state.service,
                            }}
                            onChange={handleService}
                            menuPosition={"fixed"}
                          />

                          <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                            <i className="icon icon-business-agent text-primary font-weight-bold"></i>
                          </span>
                        </div>
                        {/* <!-- ./select-city ends --> */}

                        {/* <!-- .select-servicio starts --> */}
                        <div className="form-group position-relative">
                          <Select
                            options={city}
                            className="pl-8 h-100 arrow-3 font-size-4 d-flex align-items-center w-100"
                            border={false}
                            id="city"
                            value={{
                              label: state.cityLabel,
                              value: state.city,
                            }}
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
  } else {
    return <div>no hay datos</div>;
  }
};

export default Hero;
