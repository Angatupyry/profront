import React, { useEffect, useContext } from "react";

import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import GlobalContext from "../context/GlobalContext";
import TransaccionService from "../services/transaccion.service";
import Cookies from "js-cookie";
import { getUserTypeId, getTransactionStateId, constants } from "../utils";
import { showErrorAlert, showSuccessAlert } from "../utils/utils";
import ModalValoration from "../components/ModalValoration";
import ModalConfirmation from "../components/ModalConfirmation";

const TransactionList = () => {
  const filteredIds = [];
  const gContext = useContext(GlobalContext);
  const [dataResult, setDataResult] = React.useState(null);
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

  async function fetchData() {
    setState({ loading: true, error: null });
    try {
      let userTypeId = JSON.parse(Cookies.get("user")).usuario_tipo_id;
      let cliente_id = JSON.parse(Cookies.get("user")).id;
      const response = await TransaccionService.getTransactionList(
        cliente_id,
        userTypeId
      );
      console.log(response.data.data);

      if (JSON.parse(Cookies.get("user")).usuario_tipo_id == clientUserTypeId) {
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
      } else {
        setDataResult(response.data.data);
      }

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
      fetchData();
    }
  }, [dataResult]);

  const transformDate = (date) => {
    let jsDate = new Date(date);
    let options = { timeZone: "UTC" };
    return jsDate.toLocaleString("en-GB", options);
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
      fetchData();
    }, 2000);
  };

  const cancel = () => {
    setState({ loading: false, error: null, isCancelled: true });
    setTimeout(function () {
      fetchData();
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
        fetchData();
      }, 2000);
    } catch (error) {
      console.log(error);
      setState({ loading: false, error: error });
    }
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
                            Servicio
                          </th>
                          <th
                            scope="col"
                            className="border-0 font-size-4 font-weight-normal"
                          >
                            {JSON.parse(Cookies.get("user")).usuario_tipo_id ==
                            clientUserTypeId
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
                      <tbody>
                        {dataResult.map((transaccion) => {
                          return (
                            <tr className="border border-color-2">
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
                                      {JSON.parse(Cookies.get("user"))
                                        .usuario_tipo_id == clientUserTypeId
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
                                {JSON.parse(Cookies.get("user"))
                                  .usuario_tipo_id == clientUserTypeId &&
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

                                {JSON.parse(Cookies.get("user"))
                                  .usuario_tipo_id != clientUserTypeId &&
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
                                {JSON.parse(Cookies.get("user"))
                                  .usuario_tipo_id == clientUserTypeId &&
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
export default TransactionList;
