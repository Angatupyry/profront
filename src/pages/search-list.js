import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import Sidebar from "../components/Sidebar";
import { Select } from "../components/Core";
import Router, { useRouter } from "next/router";
import BuscadorService from "../services/buscador.service";
import { numberFormat } from "../utils/utils";

import imgF1 from "../assets/image/l2/png/featured-job-logo-2.png";
import imgF2 from "../assets/image/l2/png/featured-job-logo-2.png";
import imgF3 from "../assets/image/l2/png/featured-job-logo-3.png";
import imgF4 from "../assets/image/l2/png/featured-job-logo-4.png";
import imgF5 from "../assets/image/l2/png/featured-job-logo-5.png";

import imgF from "../assets/image/svg/icon-fire-rounded.svg";
import iconL from "../assets/image/svg/icon-loaction-pin-black.svg";
import iconS from "../assets/image/svg/icon-suitecase.svg";
import iconC from "../assets/image/svg/icon-clock.svg";

const SearchGrid = () => {
  const cityArray = [];
  const serviceArray = [];
  const data = useRouter();
  const {
    query: { city, service },
  } = data;

  const [cities, setCities] = React.useState([]);
  const [services, setServices] = React.useState([]);
  const [dataResult, setDataResult] = React.useState(null);
  const [state, setState] = React.useState({
    loading: true,
    error: null,
    service: "",
    serviceLabel: "",
    city: "",
    cityLabel: "",
    price: "",
    sex: "",
    score: "",
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function isEmpty(value) {
    return (
      Boolean(value && typeof value === "object") && !Object.keys(value).length
    );
  }

  async function fetchData(city, service) {
    setState({ loading: true, error: null });
    try {
      const response = await BuscadorService.search(city, service);
      setDataResult(response.data.data);
      console.log(response);
      const ciudades = await BuscadorService.getCities();
      ciudades.data.data.forEach((element) => {
        cityArray.push({
          value: element.id.toString(),
          label: element.nombre,
        });
      });

      setCities(cityArray);

      const servicios = await BuscadorService.getServices();
      servicios.data.data.forEach((element) => {
        serviceArray.push({
          value: element.id.toString(),
          label: element.descripcion,
        });
      });
      setServices(serviceArray);
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

  useEffect(() => {
    if (!city && !service) {
      return;
    }
    scrollToTop();
    if (dataResult == undefined || null) {
      fetchData(city, service);
    }
  }, [dataResult, city, service]);

  const handleService = (e) => {
    const newState = { ...state };
    newState["service"] = e.value;
    newState["serviceLabel"] = e.label;
    setState(newState);
  };

  const handleCity = (e) => {
    const newState = { ...state };
    newState["city"] = e.value;
    newState["cityLabel"] = e.label;
    setState(newState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ loading: true, error: null });

    Router.push({
      pathname: "/search-list",
      query: {
        city: state.city,
        service: state.service,
        price: state.price,
        sex: state.sex,
        score: state.score,
      },
    });
    fetchData(state.city, state.service);
  };

  if (dataResult && dataResult.length > 0) {
    return (
      <>
        <PageWrapper>
          <div className="bg-default-1 pt-26 pt-lg-28 pb-13 pb-lg-25">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-4 col-md-5 col-xs-8">
                  <Sidebar />
                </div>
                {/* <!-- Main Body --> */}
                <div className="col-12 col-xl-8 col-lg-8">
                  {/* <!-- form --> */}
                  <form
                    action="/"
                    className="search-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="filter-search-form-2 search-1-adjustment bg-white rounded-sm shadow-7 pr-6 py-6 pl-6">
                      <div className="filter-inputs">
                        {/* <!-- .select-city starts --> */}
                        <div className="form-group position-relative w-lg-50 w-xl-50 w-xxl-50">
                          <Select
                            options={services}
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
                            <i className="icon icon-pin-3 text-primary font-weight-bold"></i>
                          </span>
                        </div>
                        {/* <!-- ./select-city ends --> */}
                        {/* <!-- .select-city starts --> */}
                        <div className="form-group position-relative w-lg-50 w-xl-50 w-xxl-50">
                          <Select
                            options={cities}
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
                        {/* <!-- ./select-city ends --> */}
                      </div>
                      <div className="button-block">
                        <button className="btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase">
                          Buscar
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="pt-12">
                    <div className="d-flex align-items-center justify-content-between mb-6">
                      <h5 className="font-size-4 font-weight-normal text-gray">
                        <span className="heading-default-color">
                          {dataResult.length}
                        </span>{" "}
                        resultados obtenidos
                        {/* <span className="heading-default-color">
                          {state.serviceLabel} y {state.cityLabel}
                        </span> */}
                      </h5>
                      <div className="d-flex align-items-center result-view-type">
                        <Link href="/search-list">
                          <a className="heading-default-color pl-5 font-size-6 hover-text-hitgray active">
                            <i className="fa fa-list-ul"></i>
                          </a>
                        </Link>
                        <Link href="/search-grid">
                          <a className="heading-default-color pl-5 font-size-6 hover-text-hitgray">
                            <i className="fa fa-th-large"></i>
                          </a>
                        </Link>
                      </div>
                    </div>

                    {dataResult.map((profesional) => {
                      return (
                        <div className="mb-8">
                          <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 ">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="media align-items-center">
                                  <div className="square-72 d-block mr-8">
                                    <img src={imgF1} alt="" />
                                  </div>
                                  <div>
                                    <h3 className="mb-0">
                                      <Link href="/#">
                                        <a className="font-size-6 heading-default-color">
                                          {profesional.persona.nombre}{" "}
                                          {profesional.persona.apellido}
                                        </a>
                                      </Link>
                                    </h3>
                                    <Link href="/#">
                                      <a className="font-size-3 text-default-color line-height-2">
                                        {profesional.nombre}
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 text-right pt-7 pt-md-5">
                                <div className="media justify-content-md-end">
                                  <div className="image mr-5 mt-2">
                                    <img src={imgF} alt="" />
                                  </div>
                                  <p className="font-weight-bold font-size-7 text-hit-gray mb-0">
                                    <span className="text-black-2">
                                      {numberFormat(
                                        profesional.servicio_profesional[0]
                                          .monto_hora
                                      )}
                                    </span>{" "}
                                    Gs.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="row pt-8">
                              <div className="col-md-7">
                                <ul className="d-flex list-unstyled mr-n3 flex-wrap">
                                  {profesional.servicio_profesional.map(
                                    (servicio) => {
                                      return (
                                        <li>
                                          <Link href="">
                                            <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2">
                                              {servicio.servicio.descripcion}
                                            </a>
                                          </Link>
                                        </li>
                                      );
                                    }
                                  )}
                                </ul>
                              </div>
                              <div className="col-md-5">
                                <ul className="d-flex list-unstyled mr-n3 flex-wrap mr-n8 justify-content-md-end">
                                  <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                                    <span
                                      className="mr-4"
                                      css={`
                                        margin-top: -2px;
                                      `}
                                    >
                                      <img src={iconL} alt="" />
                                    </span>
                                    <span className="font-weight-semibold">
                                      {
                                        profesional.persona.persona_direccion[0]
                                          .ciudad.nombre
                                      }
                                    </span>
                                  </li>
                                  {/* <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                                  <span
                                    className="mr-4"
                                    css={`
                                      margin-top: -2px;
                                    `}
                                  >
                                    <img src={iconS} alt="" />
                                  </span>
                                  <span className="font-weight-semibold">
                                    Full-time
                                  </span>
                                </li>
                                <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                                  <span
                                    className="mr-4"
                                    css={`
                                      margin-top: -2px;
                                    `}
                                  >
                                    <img src={iconC} alt="" />
                                  </span>
                                  <span className="font-weight-semibold">
                                    9d ago
                                  </span>
                                </li> */}
                                </ul>
                              </div>
                              <div className="col-md-12 d-flex justify-content-end pr-0">
                                <a
                                  className="btn btn-transparent text-uppercase font-size-3 heading-default-color focus-reset text-primary"
                                  href={
                                    "/candidate-profile?id=" + profesional.id
                                  }
                                >
                                  Ver perfil
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="text-center pt-5 pt-lg-13">
                      <Link href="/#">
                        <a className="text-green font-weight-bold text-uppercase font-size-3">
                          Cargar más <i className="fas fa-sort-down ml-3"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageWrapper>
      </>
    );
  } else {
    return (
      <PageWrapper>
        <div className="bg-default-1 pt-26 pt-lg-28 pb-13 pb-lg-25">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4 col-md-5 col-xs-8">
                <Sidebar />
              </div>
              {/* <!-- Main Body --> */}
              <div className="col-12 col-xl-8 col-lg-8">
                {/* <!-- form --> */}
                <form
                  action="/"
                  className="search-form"
                  onSubmit={handleSubmit}
                >
                  <div className="filter-search-form-2 search-1-adjustment bg-white rounded-sm shadow-7 pr-6 py-6 pl-6">
                    <div className="filter-inputs">
                      {/* <!-- .select-city starts --> */}
                      <div className="form-group position-relative w-lg-50 w-xl-50 w-xxl-50">
                        <Select
                          options={services}
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
                          <i className="icon icon-pin-3 text-primary font-weight-bold"></i>
                        </span>
                      </div>
                      {/* <!-- ./select-city ends --> */}
                      {/* <!-- .select-city starts --> */}
                      <div className="form-group position-relative w-lg-50 w-xl-50 w-xxl-50">
                        <Select
                          options={cities}
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
                      {/* <!-- ./select-city ends --> */}
                    </div>
                    <div className="button-block">
                      <button className="btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase">
                        Buscar
                      </button>
                    </div>
                  </div>
                </form>
                <div className="pt-12">
                  <div className="d-flex align-items-center justify-content-between mb-6">
                    <h5 className="font-size-4 font-weight-normal text-gray">
                      <span className="heading-default-color"></span>0
                      resultados obtenidos
                    </h5>
                    <div className="d-flex align-items-center result-view-type">
                      <Link href="/search-list">
                        <a className="heading-default-color pl-5 font-size-6 hover-text-hitgray active">
                          <i className="fa fa-list-ul"></i>
                        </a>
                      </Link>
                      <Link href="/search-grid">
                        <a className="heading-default-color pl-5 font-size-6 hover-text-hitgray">
                          <i className="fa fa-th-large"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    );
  }
};
export default SearchGrid;
