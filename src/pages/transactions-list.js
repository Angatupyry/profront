import React, { useEffect, useContext } from "react";

import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import GlobalContext from "../context/GlobalContext";
import TransaccionService from "../services/transaccion.service";
import Cookies from "js-cookie";
import {
  getUserTypeId,
  getTransactionStateId,
  constants,
  getTransactionTypeId,
} from "../utils";
import { showErrorAlert, showSuccessAlert } from "../utils/utils";
import ModalValoration from "../components/ModalValoration";
import ModalConfirmation from "../components/ModalConfirmation";
import Pagination from "react-js-pagination";

const TransactionList = () => {
  const userCookie = null;
  if (typeof Cookies.get("user") !== "undefined") {
    userCookie = JSON.parse(Cookies.get("user"));
  }
  const filteredIds = [];
  const pages = [];
  const gContext = useContext(GlobalContext);
  const [dataResult, setDataResult] = React.useState(null);
  const [pageResult, setPageResult] = React.useState(null);
  const [activePage, setActivePage] = React.useState(1);
  const [state, setState] = React.useState({
    loading: true,
    error: null,
    success: false,
    isValorated: false,
    isCancelled: false,
    isAccepted: false,
  });
  const [clientUserTypeId, setClientUserTypeId] = React.useState("");

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

  async function fetchData(pageNumber) {
    setState({ loading: true, error: null });
    try {
      let userTypeId = userCookie?.usuario_tipo_id;
      let cliente_id = userCookie?.id;
      let clientUserTypeId = getUserTypeId(constants.CLIENT_TYPE.CLIENTE);
      const response = await TransaccionService.getTransactionList(
        cliente_id,
        userTypeId,
        pageNumber
      );
      console.log(response);
      setPageResult(response.data.meta);

      // if (userCookie.usuario_tipo_id == clientUserTypeId) {
      response.data.data.forEach((x) => {
        if (
          x.transaccion_tipo.id ==
            getTransactionTypeId(constants.TRANSACTION_TYPE.CONSULTA) &&
          x.transaccion_estado.id ==
            getTransactionStateId(constants.TRANSACTION_STATE.APROBADO)
        ) {
          filteredIds.push(x.id);
        }
      });

      const arr = response.data.data.filter(function (value) {
        return filteredIds.indexOf(value.id) == -1;
      });
      setDataResult(arr);
      // } else {
      //   setDataResult(response.data.data);
      // }

      setClientUserTypeId(clientUserTypeId);
      setState({ loading: false, error: null });
    } catch (error) {
      console.log(error);
      setState({ loading: false, error: error });
    }
  }

  useEffect(() => {
    scrollToTop();
    if (dataResult == undefined || null) {
      fetchData(activePage);
    }
  }, [dataResult]);

  // const transformDate = (date) => {
  //   let jsDate = new Date(date);
  //   let options = { timeZone: "UTC" };
  //   return jsDate.toLocaleString("en-GB", options);
  // };

  const transformDate = (date) => {
    let jsDate = new Date(date);
    return jsDate.toLocaleDateString("en-GB");
  };

  const toggleModal = (id) => {
    gContext.setTransactionId(id);
    gContext.toggleConfirmationModal();
  };

  const toggleValorationModal = (id, transaction_id) => {
    gContext.setUserId(id);
    gContext.setTransactionId(transaction_id);
    gContext.toggleValorationModal();
  };

  const valorate = () => {
    setState({ loading: false, error: null, isValorated: true });
    setTimeout(function () {
      fetchData(activePage);
    }, 2000);
  };

  const cancel = () => {
    setState({ loading: false, error: null, isCancelled: true });
    setTimeout(function () {
      fetchData(activePage);
    }, 2000);
  };

  const acceptTransaction = async (transaccion_id) => {
    setState({ loading: true, error: null });
    try {
      const response = await TransaccionService.updateTransaction(
        transaccion_id,
        "A"
      );
      setState({ loading: false, error: null, isAccepted: true });
      setTimeout(function () {
        fetchData(activePage);
      }, 2000);
    } catch (error) {
      console.log(error);
      setState({ loading: false, error: error });
    }
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    fetchData(pageNumber);
  };

  if (dataResult && dataResult.length > 0) {
    return (
      <>
        <ModalValoration fetch={valorate} />
        <ModalConfirmation fetch={cancel} />
        <PageWrapper>
          <div className="bg-default-1 pt-26 pt-lg-28 pb-13 pb-lg-25">
            <div className="container">
              <div className="mb-14">
                <div className="row mb-3 align-items-center">
                  <div className="col-lg-12 mb-lg-0 mb-4">
                    {state.isValorated &&
                      showSuccessAlert("Valoración realizada exitosamente.")}
                    {state.isAccepted &&
                      showSuccessAlert(
                        "Confirmación de servicio realizada exitosamente."
                      )}
                    {state.isCancelled &&
                      showSuccessAlert("Cancelación realizada exitosamente.")}
                    {state.error &&
                      showErrorAlert(
                        " Ocurrió un error al actualizar la transacción. Por favor,intente más tarde."
                      )}
                  </div>
                </div>
                <div className="row mb-11 align-items-center">
                  <div className="col-lg-6 mb-lg-0 mb-4">
                    <h3 className="font-size-6 mb-0">
                      Listado de solicitudes ({dataResult.length})
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
                            Id
                          </th>
                          <th
                            scope="col"
                            className="pl-0  border-0 font-size-4 font-weight-normal"
                          >
                            Servicio
                          </th>
                          <th
                            scope="col"
                            className="border-0 font-size-4 font-weight-normal"
                          >
                            {userCookie?.usuario_tipo_id == clientUserTypeId
                              ? "Profesional"
                              : "Cliente"}
                          </th>
                          <th
                            scope="col"
                            className="border-0 font-size-4 font-weight-normal"
                          >
                            Fecha
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
                        {dataResult.map((transaccion) => {
                          return (
                            <tr className="border border-color-2">
                              <td className="table-y-middle py-7 min-width-px-100 pr-0">
                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                                  {transaccion.id}
                                </h3>
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
                                      {userCookie?.usuario_tipo_id ==
                                      clientUserTypeId
                                        ? transaccion.profesional.persona
                                            .nombre +
                                          " " +
                                          transaccion.profesional.persona
                                            .apellido
                                        : transaccion.cliente.persona.nombre +
                                          " " +
                                          transaccion.cliente.persona.apellido}
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
                              <td className="table-y-middle py-7 min-width-px-110 pr-0">
                                {userCookie?.usuario_tipo_id ==
                                  clientUserTypeId &&
                                  transaccion.transaccion_estado.id ==
                                    getTransactionStateId(
                                      constants.TRANSACTION_STATE.PENDIENTE_PAGO
                                    ) && (
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

                                {userCookie?.usuario_tipo_id !=
                                  clientUserTypeId &&
                                  transaccion.transaccion_estado.id ==
                                    getTransactionStateId(
                                      constants.TRANSACTION_STATE
                                        .PENDIENTE_APROBACION
                                    ) && (
                                    <div className="">
                                      <Link href="/">
                                        <a
                                          className="font-size-3 font-weight-bold text-green text-uppercase"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            acceptTransaction(transaccion.id);
                                          }}
                                        >
                                          Aceptar
                                        </a>
                                      </Link>
                                    </div>
                                  )}
                              </td>

                              <td className="table-y-middle py-7 min-width-px-170 pr-0">
                                {userCookie?.usuario_tipo_id ==
                                  clientUserTypeId &&
                                  transaccion.transaccion_estado.id ==
                                    getTransactionStateId(
                                      constants.TRANSACTION_STATE
                                        .PENDIENTE_VALORACION
                                    ) && (
                                    <div className="d-flex justify-content-center">
                                      <Link href="/#">
                                        <a
                                          href="/#"
                                          className="font-size-3 font-weight-bold text-black-2 text-uppercase"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            toggleValorationModal(
                                              transaccion.profesional.id,
                                              transaccion.id
                                            );
                                          }}
                                        >
                                          Valorar
                                        </a>
                                      </Link>
                                    </div>
                                  )}
                              </td>

                              <td className="table-y-middle py-7 min-width-px-100 pr-0">
                                {transaccion.transaccion_estado.id ==
                                  getTransactionStateId(
                                    constants.TRANSACTION_STATE
                                      .PENDIENTE_APROBACION
                                  ) ||
                                transaccion.transaccion_estado.id ==
                                  getTransactionStateId(
                                    constants.TRANSACTION_STATE.PENDIENTE_PAGO
                                  ) ? (
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
                  <Pagination
                    activePage={activePage}
                    totalItemsCount={pageResult.registrosFiltro}
                    pageRangeDisplayed={5}
                    onChange={handlePageChange.bind(this)}
                  />
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
            <div className="mb-14">
              <div className="row mb-3 align-items-center">
                <div className="col-lg-12 mb-lg-0 mb-4"></div>
              </div>
              <div className="row mb-11 align-items-center">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <h3 className="font-size-6 mb-0">
                    Listado de solicitudes (0)
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
                          Id
                        </th>
                        <th
                          scope="col"
                          className="pl-0  border-0 font-size-4 font-weight-normal"
                        >
                          Servicio
                        </th>
                        <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >
                          {userCookie?.usuario_tipo_id == clientUserTypeId
                            ? "Profesional"
                            : "Cliente"}
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
                    <tbody></tbody>
                  </table>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                      <div>No hay datos para mostrar</div>
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
export default TransactionList;
