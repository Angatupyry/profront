import React, { useContext } from "react";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import GlobalContext from "../context/GlobalContext";

import imgF1 from "../assets/image/l2/png/featured-job-logo-1.png";
import iconD from "../assets/image/svg/icon-dolor.svg";
import iconB from "../assets/image/svg/icon-briefcase.svg";
import iconL from "../assets/image/svg/icon-location.svg";

const horas = [
  { value: "1", label: "08:00 hs" },
  { value: "2", label: "09:00 hs" },
  { value: "3", label: "10:00 hs" },
  { value: "4", label: "11:00 hs" },
  { value: "5", label: "12:00 hs" },
  { value: "6", label: "13:00 hs" },
  { value: "7", label: "14:00 hs" },
];

const JobDetails = () => {
  const gContext = useContext(GlobalContext);
  return (
    <>
      <PageWrapper headerConfig={{ button: "profile" }}>
        <div className="jobDetails-section bg-default-1 pt-28 pt-lg-27 pb-xl-25 pb-12">
          <div className="container">
            <div className="row justify-content-center">
              {/* <!-- back Button --> */}
              <div className="col-xl-10 col-lg-11 mt-4 ml-xxl-32 ml-xl-15 dark-mode-texts">
                <div className="mb-9">
                  <Link href="/">
                    <a className="d-flex align-items-center ml-4">
                      <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8"></i>
                      <span className="text-uppercase font-size-3 font-weight-bold text-gray">
                        Regresar al perfil
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
              {/* <!-- back Button End --> */}
              <div className="col-xl-9 col-lg-11 mb-8 px-xxl-15 px-xl-0">
                <div className="bg-white rounded-4 border border-mercury shadow-9">
                  <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 border-bottom border-width-1 border-default-color light-mode-texts">
                    <div className="row mb-7">
                      <div className="col-md-12 mb-md-0 mb-12">
                        <div className="media justify-content-md-start">
                          <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                            Resumen de solicitud
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        {/* <!-- media start --> */}
                        <div className="media align-items-center">
                          {/* <!-- media logo start --> */}
                          <div className="square-72 d-block mr-8">
                            <img src={imgF1} alt="" />
                          </div>
                          {/* <!-- media logo end --> */}
                          {/* <!-- media texts start --> */}
                          <div>
                            <h3 className="font-size-6 mb-0">Adri Moreno</h3>
                            <span className="font-size-3 text-gray line-height-2">
                              Personal Training | Nutrición | Entrenador
                            </span>
                          </div>
                          {/* <!-- media texts end --> */}
                        </div>
                        {/* <!-- media end --> */}
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-md-12 mb-lg-0 mb-0 mt-5">
                        <span className="font-size-4 font-weight-semibold text-black-2 mb-4">
                          Servicio
                        </span>
                      </div>
                      <div className="col-md-9 mb-lg-0 mb-9">
                        <p className="font-size-4 mb-0">Personal Training</p>
                      </div>
                      <div className="col-md-3 mb-lg-0 mb-3">
                        <div className="form-group d-flex flex-wrap justify-content-start mb-1">
                          <span className="font-size-4 mb-0 line-height-reset d-block font-weight-semibold">
                            <div className="text-primary">60.000 Gs./hora </div>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="row mt-5">
                      <div className="col-md-12 mb-lg-0 mb-0 mt-5">
                        <span className="font-size-4 font-weight-semibold text-black-2 mb-4">
                          Fecha y hora
                        </span>
                      </div>
                      <div className="col-md-9 mb-lg-0 mb-9">
                        <p className="font-size-4 mb-0">
                          21/05/2021 - 17:00 a 18:00 hs.
                        </p>
                      </div>
                      <div className="col-md-3 mb-lg-0 mb-3">
                        <div className="form-group d-flex flex-wrap justify-content-start mb-1">
                          <span className="font-size-4 mb-0 line-height-reset d-block font-weight-semibold">
                            <div className="text-primary">1 hora </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 border-bottom border-width-1 border-default-color light-mode-texts">
                    <div className="row mb-7">
                      <div className="col-md-12 mb-md-0 mb-12">
                        <div className="media justify-content-md-start">
                          <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                            Monto a pagar
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-9 mb-lg-0 mb-9">
                        <p className="font-size-4 mb-0">Servicio</p>
                      </div>
                      <div className="col-md-3 mb-lg-0 mb-3">
                        <div className="form-group d-flex flex-wrap justify-content-start mb-1">
                          <span className="font-size-4 mb-0 line-height-reset d-block font-weight-semibold">
                            <div className="text-primary">60.000 Gs </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 border-bottom border-width-1 border-default-color light-mode-texts">
                    <div className="row mb-7">
                      <div className="col-md-12 mb-md-0 mb-12">
                        <div className="media justify-content-md-start">
                          <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                            Seleccione un medio de pago
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-8 mb-lg-0 mb-8">
                        <p className="font-size-4 mb-0">5508-0214-2225-8745</p>
                      </div>
                      <div className="col-md-4 mb-lg-0 mb-4">
                        <div className="form-group d-flex flex-wrap justify-content-start mb-1">
                          <label
                            htmlFor="radio1"
                            className="gr-check-input d-flex  mr-3"
                          >
                            <input
                              className="d-none"
                              type="radio"
                              name="isProfesional"
                              id="radio1"
                              // value={state.isProfessional}
                              // onChange={toggleIsProfessional}
                            />
                            <span className="checkbox mr-5"></span>
                            <span className="font-size-4 mb-0 line-height-reset d-block font-weight-semibold">
                              <div className="text-primary">
                                Visa - Banco Familiar{" "}
                              </div>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-8 mb-lg-0 mb-8">
                        <p className="font-size-4 mb-0">5508-0214-2225-8745</p>
                      </div>
                      <div className="col-md-4 mb-lg-0 mb-4">
                        <div className="form-group d-flex flex-wrap justify-content-start mb-1">
                          <label
                            htmlFor="radio2"
                            className="gr-check-input d-flex  mr-3"
                          >
                            <input
                              className="d-none"
                              type="radio"
                              name="isProfesional"
                              id="radio2"
                              // value={state.isProfessional}
                              // onChange={toggleIsProfessional}
                            />
                            <span className="checkbox mr-5"></span>
                            <span className="font-size-4 mb-0 line-height-reset d-block font-weight-semibold">
                              <div className="text-primary">
                                Mi tarjeta principal{" "}
                              </div>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-md-12 mb-lg-0 mb-12 d-flex justify-content-end">
                        <Link href="/#">
                          <a
                            className="btn btn-outline-mercury text-black-2 text-uppercase h-px-48 rounded-3 mb-5 px-5 mr-4"
                            href="/#"
                            onClick={(e) => {
                              e.preventDefault();
                              gContext.toggleAddPaymentModal();
                              //gContext.toggleSignUpModal();
                            }}
                          >
                            Agregar nuevo medio de pago
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="row mt-12">
                      <div className="col-md-12 mb-lg-0 mb-12 d-flex justify-content-end">
                        <Link href="/#">
                          <a className="btn btn-green text-uppercase btn-medium w-180 h-px-48 rounded-3 mr-4 mt-6">
                            Pagar
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default JobDetails;
