import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import Sidebar from "../components/Sidebar";
import { Select } from "../components/Core";
import Router, { useRouter } from "next/router";
import BuscadorService from "../services/buscador.service";
import { numberFormat } from "../utils/utils";
import GlobalContext from "../context/GlobalContext";

import imgF1 from "../assets/image/l2/png/featured-job-logo-2.png";
import imgF2 from "../assets/image/l2/png/featured-job-logo-2.png";
import imgF3 from "../assets/image/l2/png/featured-job-logo-3.png";
import imgF4 from "../assets/image/l2/png/featured-job-logo-4.png";
import imgF5 from "../assets/image/l2/png/featured-job-logo-5.png";

import imgF from "../assets/image/svg/icon-fire-rounded.svg";
import iconL from "../assets/image/svg/icon-loaction-pin-black.svg";
import iconS from "../assets/image/svg/icon-suitecase.svg";
import iconC from "../assets/image/svg/icon-clock.svg";
import TransaccionService from "../services/transaccion.service";
import Cookies from "js-cookie";

const PaymentsAdmin = () => {
  const gContext = useContext(GlobalContext);
  const [transactionStates, setTransactionStates] = React.useState([]);
  const [dataResult, setDataResult] = React.useState([]);
  const [state, setState] = React.useState({
    loading: true,
    error: null,
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

  async function fetchData() {
    setState({ loading: true, error: null });
    try {
      const transactionStates = await TransaccionService.getTransactionStates();
      console.log(transactionStates.data.data);
      setTransactionStates(transactionStates.data.data);
      let state = transactionStates.data.data.find(
        (x) => x.nombre.toLowerCase() == "pendiente pago"
      );
      const response = await TransaccionService.getTransactionListByState(
        state.id
      );
      setDataResult(response.data.data);
      console.log(response.data.data);
      setState({ loading: false, error: null });
    } catch (error) {
      console.log(error);
      setState({ loading: false, error: error });
    }
  }

  useEffect(() => {
    if (!dataResult) {
      return;
    }

    scrollToTop();
    if (dataResult.length == 0) {
      fetchData();
    }
  }, [dataResult]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setState({ loading: true, error: null });

  //   Router.push({
  //     pathname: "/search-list",
  //     query: {
  //       city: state.city,
  //       service: state.service,
  //       price: state.price,
  //       sex: state.sex,
  //       score: state.score,
  //     },
  //   });
  //   fetchData(state.city, state.service);
  // };

  const transformDate = (date) => {
    let jsDate = new Date(date);
    let options = { timeZone: "UTC" };
    return jsDate.toLocaleString("en-GB", options);
  };

  const toggleModal = (id) => {
    gContext.setTransactionId(id);
    gContext.toggleConfirmationModal();
  };

  const toggleValorationModal = (id) => {
    gContext.setUserId(id);
    gContext.toggleValorationModal();
  };

  const handleAllRadioBtn = async (e) => {
    let id = e.target.id;
    if (condition) {
    }
  };

  if (dataResult.length > 0) {
    return (
      <>
        <PageWrapper>
          {console.log(dataResult)}
          <div className="bg-default-1 pt-26 pt-lg-28 pb-13 pb-lg-25">
            <div className="container">
              <div className="mb-14">
                <div className="row mb-11 align-items-center">
                  <div className="col-lg-6 mb-lg-0 mb-4">
                    <h3 className="font-size-6 mb-0">
                      Listado de pagos pendientes ({dataResult.length})
                    </h3>
                  </div>
                </div>
                <div className="bg-white shadow-8 pt-7 rounded pb-8 px-11">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="pl-0  border-0 font-size-4 font-weight-normal"
                          >
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="all"
                              />
                              <label class="custom-control-label" for="all">
                                Servicio
                              </label>
                            </div>
                          </th>
                          <th
                            scope="col"
                            className="border-0 font-size-4 font-weight-normal"
                          >
                            Profesional
                          </th>
                          <th
                            scope="col"
                            className="border-0 font-size-4 font-weight-normal"
                          >
                            Fecha/Hora
                          </th>
                          <th
                            scope="col"
                            className="border-0 font-size-4 font-weight-normal"
                          >
                            Estado
                          </th>
                          <th
                            scope="col"
                            className="border-0 font-size-4 font-weight-normal"
                          ></th>
                          <th
                            scope="col"
                            className="border-0 font-size-4 font-weight-normal"
                          ></th>
                          <th
                            scope="col"
                            className="border-0 font-size-4 font-weight-normal"
                          ></th>
                          <th
                            scope="col"
                            className="border-0 font-size-4 font-weight-normal"
                          ></th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataResult.map((transaccion, index) => {
                          return (
                            <tr className="border border-color-2">
                              <td className="table-y-middle py-7 min-width-px-235 pr-0">
                                <div class="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id={"check-" + index}
                                  />
                                  <label
                                    class="custom-control-label"
                                    for={"check-" + index}
                                  >
                                    {index}
                                  </label>
                                </div>
                              </td>
                              <td className="table-y-middle py-7 min-width-px-235 pr-0">
                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                                  {
                                    transaccion.servicio_profesional.servicio
                                      .descripcion
                                  }
                                </h3>
                              </td>
                              <th
                                scope="row"
                                className="pl-6 border-0 py-7 pr-0"
                              >
                                <Link
                                  href={
                                    "/candidate-profile?id=" +
                                    transaccion.profesional_id
                                  }
                                >
                                  <a className="media min-width-px-235 align-items-center">
                                    <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">
                                      {transaccion.profesional.persona.nombre}{" "}
                                      {transaccion.profesional.persona.apellido}
                                    </h4>
                                  </a>
                                </Link>
                              </th>
                              <td className="table-y-middle py-7 min-width-px-170 pr-0">
                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                                  {transformDate(transaccion.fecha)}
                                </h3>
                              </td>
                              <td className="table-y-middle py-7 min-width-px-170 pr-0">
                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                                  {transaccion.transaccion_estado.nombre}
                                </h3>
                              </td>
                              <td className="table-y-middle py-7 min-width-px-110 pr-0">
                                {transaccion.transaccion_estado.id == 4 && (
                                  <div className="">
                                    <Link
                                      href={"/payment?id=" + transaccion.id}
                                    >
                                      <a className="font-size-3 font-weight-bold text-green text-uppercase">
                                        Pagar
                                      </a>
                                    </Link>
                                  </div>
                                )}
                              </td>
                              <td className="table-y-middle py-7 min-width-px-110 pr-0">
                                <div className="">
                                  <Link
                                    href={
                                      "/transaction-detail?id=" + transaccion.id
                                    }
                                  >
                                    <a className="font-size-3 font-weight-bold text-black-2 text-uppercase">
                                      Ver detalle
                                    </a>
                                  </Link>
                                </div>
                              </td>

                              <td className="table-y-middle py-7 min-width-px-170 pr-0">
                                <div className="d-flex justify-content-center">
                                  <Link href="/#">
                                    <a
                                      href="/#"
                                      className="font-size-3 font-weight-bold text-black-2 text-uppercase"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        toggleValorationModal(
                                          transaccion.profesional.id
                                        );
                                      }}
                                    >
                                      Valorar
                                    </a>
                                  </Link>
                                </div>
                              </td>

                              <td className="table-y-middle py-7 min-width-px-100 pr-0">
                                {transaccion.transaccion_estado.id == 2 ||
                                transaccion.transaccion_estado.id == 5 ? (
                                  <div className="">
                                    <Link href="/#">
                                      <a
                                        className="font-size-3 font-weight-bold text-red-2 text-uppercase"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          toggleModal(transaccion.id);
                                        }}
                                      >
                                        Cancelar
                                      </a>
                                    </Link>
                                  </div>
                                ) : (
                                  <div className=""></div>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  {/* <div className="pt-2">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination pagination-hover-primary rounded-0 ml-n2 d-flex justify-content-center">
                        <li className="page-item rounded-0 flex-all-center">
                          <a
                            href="/#"
                            className="page-link rounded-0 border-0 px-3active"
                            aria-label="Previous"
                          >
                            <i className="fas fa-chevron-left"></i>
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            href="/#"
                            className="page-link border-0 font-size-4 font-weight-semibold px-3"
                          >
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            href="/#"
                            className="page-link border-0 font-size-4 font-weight-semibold px-3"
                          >
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            href="/#"
                            className="page-link border-0 font-size-4 font-weight-semibold px-3"
                          >
                            3
                          </a>
                        </li>
                        <li className="page-item disabled">
                          <a
                            href="/#"
                            className="page-link border-0 font-size-4 font-weight-semibold px-3"
                          >
                            ...
                          </a>
                        </li>
                        <li className="page-item ">
                          <a
                            href="/#"
                            className="page-link border-0 font-size-4 font-weight-semibold px-3"
                          >
                            7
                          </a>
                        </li>
                        <li className="page-item rounded-0 flex-all-center">
                          <a
                            href="/#"
                            className="page-link rounded-0 border-0 px-3"
                            aria-label="Next"
                          >
                            <i className="fas fa-chevron-right"></i>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </PageWrapper>
      </>
    );
  } else {
    return <div>no hay datos</div>;
  }
};
export default PaymentsAdmin;
