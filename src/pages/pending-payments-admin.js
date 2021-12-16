import React, { useEffect, useContext } from "react";

import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import GlobalContext from "../context/GlobalContext";
import TransaccionService from "../services/transaccion.service";
import {
  getTransactionStateId,
  constants,
  getTransactionTypeId,
} from "../utils";
import { showErrorAlert, showSuccessAlert } from "../utils/utils";
import Pagination from "react-js-pagination";
import ModalUpdatePendingPayment from "../components/ModalUpdatePendingPayment";
import { __RouterContext } from "react-router";

const PendingPaymentsAdmin = () => {
  const filteredIds = [];
  const gContext = useContext(GlobalContext);
  const [dataResult, setDataResult] = React.useState(null);
  const [pageResult, setPageResult] = React.useState(null);
  const [activePage, setActivePage] = React.useState(1);
  const [state, setState] = React.useState({
    loading: true,
    error: null,
    success: false,
    paymentId: 0,
  });
  const [clientUserTypeId, setClientUserTypeId] = React.useState("");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const pendingTrx = (trx) => {
    const trxAprobado = getTransactionStateId(
      constants.TRANSACTION_STATE.APROBADO
    );
    const trxPendientePago = getTransactionStateId(
      constants.TRANSACTION_STATE.PENDIENTE_PAGO
    );

    return (
      trx.transaccion_estado.id === trxAprobado ||
      trx.transaccion_estado.id === trxPendientePago
    );
  };

  async function fetchData(pageNumber) {
    setState({ loading: true, error: null });
    try {
      const trxTipoConsulta = getTransactionTypeId(
        constants.TRANSACTION_TYPE.CONSULTA
      );

      const response = await TransaccionService.getTransactionList(
        "",
        "",
        pageNumber
      );

      const trxsConsulta = response.data.data.filter((r) => {
        return r.transaccion_tipo.id === trxTipoConsulta;
      });

      trxsConsulta.forEach((t) => {
        const trxSuccess = pendingTrx(t);
        if (trxSuccess) filteredIds.push(t.id);
      });

      setPageResult(response.data.meta);

      const arr = response.data.data.filter(function (value) {
        return filteredIds.indexOf(value.id) != -1;
      });

      setDataResult(arr);
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

  const transformDate = (date) => {
    let jsDate = new Date(date);
    return jsDate.toLocaleDateString("en-GB");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ loading: true, error: null });
    try {
      for (const id of checksArray) {
        const response = await TransaccionService.postTransaction(parseInt(id));
      }
      setState({ loading: false, error: null, success: true });
      emptyChecksArray();
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

  const toggleUpdatePaymentModal = (id) => {
    setState({ paymentId: id });
    gContext.toggleUpdatePendingPaymentModal();
  };

  const updatePayment = () => {
    setState({ loading: false, error: null, success: true });
    setTimeout(function () {
      fetchData(activePage);
    }, 1000);
  };

  if (dataResult && dataResult.length > 0) {
    return (
      <>
        <ModalUpdatePendingPayment
          paymentId={state.paymentId}
          fetch={updatePayment}
        />
        <PageWrapper>
          <div className="bg-default-1 pt-26 pt-lg-28 pb-13 pb-lg-25">
            <div className="container">
              <div className="mb-14">
                <div className="row mb-3 align-items-center">
                  <div className="col-lg-12 mb-lg-0 mb-4">
                    {state.success &&
                      showSuccessAlert(
                        "Confirmación de pago realizada exitosamente."
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
                            Id transacción
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
                            Cliente
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
                              <td
                                scope="row"
                                className="table-y-middle py-7 min-width-px-235 pr-0 "
                              >
                                <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">
                                  {transaccion.cliente.persona.nombre +
                                    " " +
                                    transaccion.cliente.persona.apellido}
                                </h4>
                              </td>

                              <td className="table-y-middle py-7 min-width-px-170 pr-0">
                                {transaccion.transaccion_estado_id ==
                                getTransactionStateId(
                                  constants.TRANSACTION_STATE.PENDIENTE_PAGO
                                ) ? (
                                  <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                                    N/A
                                  </h3>
                                ) : (
                                  <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                                    {transformDate(transaccion.fecha)}
                                  </h3>
                                )}
                              </td>
                              <td className="table-y-middle py-7 min-width-px-170 pr-0">
                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                                  {transaccion.transaccion_estado.nombre}
                                </h3>
                              </td>
                              <td className="table-y-middle py-7 min-width-px-110 pr-0">
                                {transaccion.transaccion_estado_id ==
                                  getTransactionStateId(
                                    constants.TRANSACTION_STATE.PENDIENTE_PAGO
                                  ) && (
                                  <div className="">
                                    <Link href="#">
                                      <a
                                        className="font-size-3 font-weight-bold text-green text-uppercase"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          toggleUpdatePaymentModal(
                                            transaccion.id
                                          );
                                        }}
                                      >
                                        Confirmar
                                      </a>
                                    </Link>
                                  </div>
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
    return <div>no hay datos</div>;
  }
};
export default PendingPaymentsAdmin;
