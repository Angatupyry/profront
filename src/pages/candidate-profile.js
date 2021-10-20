import React, { useEffect } from "react";
import Router, { useRouter } from "next/router";
import { Nav, Tab } from "react-bootstrap";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import ProfileSidebar from "../components/ProfileSidebar";

import imgB1 from "../assets/image/l2/png/featured-job-logo-1.png";
import imgB2 from "../assets/image/l1/png/feature-brand-1.png";
import imgB3 from "../assets/image/svg/harvard.svg";
import imgB4 from "../assets/image/svg/mit.svg";

import imgT1 from "../assets/image/l3/png/team-member-1.png";
import imgT2 from "../assets/image/l3/png/team-member-2.png";
import imgT3 from "../assets/image/l3/png/team-member-3.png";
import imgT4 from "../assets/image/l3/png/team-member-4.png";
import imgT5 from "../assets/image/l3/png/team-member-5.png";
import imgF from "../assets/image/svg/icon-fire-rounded.svg";

import imgL from "../assets/image/svg/icon-loaction-pin-black.svg";
import ProfesionalService from "../services/profesional.service";

const CandidateProfile = () => {
  const data = useRouter();
  const {
    query: { id },
  } = data;

  const [state, setState] = React.useState({
    loading: true,
    error: null,
  });
  const [dataResult, setDataResult] = React.useState({});

  function isEmpty(value) {
    return (
      Boolean(value && typeof value === "object") && !Object.keys(value).length
    );
  }

  async function fetchData(id) {
    setState({ loading: true, error: null });
    try {
      const response = await ProfesionalService.getProfile(id);
      setDataResult(response.data.data[0]);
    } catch (error) {
      console.log(error);
      setState({ loading: false, error: error });
    }
  }

  useEffect(() => {
    if (!id) {
      return;
    }
    if (isEmpty(dataResult)) {
      fetchData(id);
    }
  }, [dataResult, id]);

  const transformDate = (date) => {
    let jsDate = new Date(date);
    let options = { year: "numeric", month: "long" };
    return jsDate.toLocaleDateString("es-ES", options);
  };

  if (!isEmpty(dataResult)) {
    console.log(dataResult);
    return (
      <>
        <PageWrapper headerConfig={{ button: "profile" }}>
          <div className="bg-default-2 pt-22 pt-lg-25 pb-13 pb-xxl-32">
            <div className="container">
              {/* <!-- back Button --> */}
              <div className="row justify-content-center">
                <div className="col-12 dark-mode-texts">
                  <div className="mb-9" onClick={() => data.back()}>
                    {/* <Link href="#"> */}
                    <a className="d-flex align-items-center ml-4">
                      <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8"></i>
                      <span className="text-uppercase font-size-3 font-weight-bold text-gray">
                        Atrás
                      </span>
                    </a>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
              {/* <!-- back Button End --> */}
              <div className="row">
                {/* <!-- Left Sidebar Start --> */}
                <div className="col-12 col-xxl-3 col-lg-4 col-md-5 mb-11 mb-lg-0">
                  <ProfileSidebar data={dataResult} />
                </div>
                {/* <!-- Left Sidebar End --> */}
                {/* <!-- Middle Content --> */}
                <div className="col-12 col-xxl-6 col-lg-8 col-md-7 order-2 order-xl-1">
                  <Tab.Container id="left-tabs-example" defaultActiveKey="one">
                    <div className="bg-white rounded-4 shadow-9">
                      {/* <!-- Tab Section Start --> */}

                      {/* <!-- Tab Content --> */}
                      <Tab.Content>
                        <Tab.Pane eventKey="one">
                          {/* <!-- Excerpt Start --> */}
                          <div className="pr-xl-0 pr-xxl-14 p-5 px-xs-12 pt-7 pb-5">
                            <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                              Descripción
                            </h4>
                            <p className="font-size-4 mb-8">
                              {dataResult.descripcion}
                            </p>
                          </div>
                          {/* <!-- Excerpt End --> */}

                          {/* <!-- Card Section Start --> */}
                          <div className="border-top p-5 pl-xs-12 pt-7 pb-5">
                            <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                              Experiencias laborales
                            </h4>
                            {dataResult.experiencia_laboral.map(
                              (experiencia) => {
                                return (
                                  <div className="w-100">
                                    <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
                                      <div className="w-100 mt-n2">
                                        <h3 className="mb-0">
                                          <Link href="/#">
                                            <a className="font-size-5 text-black-2 font-weight-semibold">
                                              {experiencia.descripcion}
                                            </a>
                                          </Link>
                                        </h3>
                                        <Link href="/#">
                                          <a className="font-size-4 text-default-color line-height-2">
                                            {experiencia.lugar}
                                          </a>
                                        </Link>
                                        <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                                          <Link href="/#">
                                            <a className="font-size-3 text-gray mr-5">
                                              {transformDate(
                                                experiencia.fecha_desde
                                              )}
                                            </a>
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                          {/* <!-- Card Section End --> */}
                          {/* <!-- Card Section Start --> */}
                          <div className="border-top p-5 pl-xs-12 pt-7 pb-5">
                            <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                              Educación
                            </h4>
                            {dataResult.estudio_academico.map((educacion) => {
                              return (
                                <div className="w-100">
                                  <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
                                    <div className="w-100 mt-n2">
                                      <h3 className="mb-0">
                                        <Link href="/#">
                                          <a className="font-size-5 text-black-2">
                                            {educacion.descripcion}
                                          </a>
                                        </Link>
                                      </h3>
                                      <Link href="/#">
                                        <a className="font-size-4 text-default-color line-height-2">
                                          {
                                            educacion.carrera_universitaria
                                              .universidad.nombre
                                          }
                                        </a>
                                      </Link>
                                      <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                                        <Link href="/#">
                                          <a className="font-size-3 text-gray mr-5">
                                            Jun 2013 - Jun 2015- 2 años
                                          </a>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          {/* <!-- Card Section End --> */}
                          <div className="border-top p-5 pl-xs-12 pt-7 pb-5">
                            <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                              Valoraciones
                            </h4>
                            {dataResult.comentario_profesional.map(
                              (comentario) => {
                                return (
                                  <div className="w-100">
                                    <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
                                      <div className="w-100 mt-n2">
                                        <h3 className="mb-0">
                                          <Link href="/#">
                                            <a className="font-size-5 text-black-2">
                                              Enseñanza de inglés
                                            </a>
                                          </Link>
                                        </h3>
                                        <div className="col-md-12 text-right pt-7 pt-md-5 pl-0">
                                          <div className="media justify-content-md-start">
                                            <div className="font-size-3 text-gray mr-5">
                                              22/03/2021
                                            </div>
                                            <p className="font-weight-bold font-size-4 text-hit-gray mb-0">
                                              <span className="text-black-2">
                                                {
                                                  comentario.comentario
                                                    .calificacion.puntuacion
                                                }
                                              </span>{" "}
                                            </p>
                                            <div className="image mr-5 ml-2">
                                              <img src={imgF} alt="" />
                                            </div>
                                          </div>
                                        </div>

                                        <div className="font-size-4 text-default-color line-height-2 pt-4">
                                          {
                                            comentario.comentario.calificacion
                                              .descripcion
                                          }
                                        </div>
                                        <div className="d-flex align-items-center justify-content-md-between flex-wrap"></div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                          {/* <!-- Card Section End --> */}
                        </Tab.Pane>
                        <Tab.Pane eventKey="two">
                          {/* <!-- Excerpt Start --> */}
                          <div className="pr-xl-11 p-5 pl-xs-12 pt-9 pb-11">
                            <form action="/">
                              <div className="row">
                                <div className="col-12 mb-7">
                                  <label
                                    htmlFor="name3"
                                    className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                                  >
                                    Your Name
                                  </label>
                                  <input
                                    id="name3"
                                    type="text"
                                    className="form-control"
                                    placeholder="Jhon Doe"
                                  />
                                </div>
                                <div className="col-lg-6 mb-7">
                                  <label
                                    htmlFor="email3"
                                    className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                                  >
                                    E-mail
                                  </label>
                                  <input
                                    id="email3"
                                    type="email"
                                    className="form-control"
                                    placeholder="example@gmail.com"
                                  />
                                </div>
                                <div className="col-lg-6 mb-7">
                                  <label
                                    htmlFor="subject3"
                                    className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                                  >
                                    Subject
                                  </label>
                                  <input
                                    id="subject3"
                                    type="text"
                                    className="form-control"
                                    placeholder="Special contract"
                                  />
                                </div>
                                <div className="col-lg-12 mb-7">
                                  <label
                                    htmlFor="message3"
                                    className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                                  >
                                    Message
                                  </label>
                                  <textarea
                                    name="message"
                                    id="message3"
                                    placeholder="Type your message"
                                    className="form-control h-px-144"
                                  ></textarea>
                                </div>
                                <div className="col-lg-12 pt-4">
                                  <button className="btn btn-primary text-uppercase w-100 h-px-48">
                                    Send Now
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                          {/* <!-- Excerpt End --> */}
                        </Tab.Pane>
                      </Tab.Content>
                      {/* <!-- Tab Content End --> */}
                      {/* <!-- Tab Section End --> */}
                    </div>
                  </Tab.Container>
                </div>
                {/* <!-- Middle Content --> */}
              </div>
            </div>
          </div>
        </PageWrapper>
      </>
    );
  } else {
    return (
      <PageWrapper headerConfig={{ button: "profile" }}>
        <div>Hubo un error</div>
      </PageWrapper>
    );
  }
};
export default CandidateProfile;
