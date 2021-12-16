import React, { useEffect, useContext } from "react";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import GlobalContext from "../context/GlobalContext";
import FacturacionService from "../services/facturacion.service";
import {
  showErrorAlert,
  showSuccessAlert,
  getPaymentStates,
} from "../utils/utils";
import { constants, getPaymentStateId } from "../utils";
import ModalUpdatePayment from "../components/ModalUpdatePayment";
import Pagination from "react-js-pagination";

const PaymentsAdmin = () => {
  const gContext = useContext(GlobalContext);
  const [dataResult, setDataResult] = React.useState(null);
  const [activePage, setActivePage] = React.useState(1);
  const [pageResult, setPageResult] = React.useState(null);
  const [state, setState] = React.useState({
    loading: true,
    success: false,
    error: null,
    paymentId: 0,
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  async function fetchData(pageNumber) {
    setState({ loading: true, error: null });
    try {
      const response = await FacturacionService.getTransactionList(pageNumber);
      setPageResult(response.data.meta);
      setDataResult(response.data.data);
      console.log(response.data.meta);

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
    getPaymentStates();
  }, [dataResult]);

  const transformDate = (date) => {
    let jsDate = new Date(date);
    return jsDate.toLocaleDateString("en-GB");
  };

  const updatePayment = () => {
    setState({ loading: false, error: null, success: true });
    setTimeout(function () {
      fetchData(activePage);
    }, 1000);
  };

  const toggleUpdatePaymentModal = (id) => {
    setState({ paymentId: id });
    gContext.toggleUpdatePaymentModal();
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    fetchData(pageNumber);
  };

  if (dataResult && dataResult.length > 0) {
    return (
      <>
        <ModalUpdatePayment paymentId={state.paymentId} fetch={updatePayment} />
        <PageWrapper>
          <div className="bg-default-1 pt-26 pt-lg-28 pb-13 pb-lg-25">
            <div className="container">
              <div className="mb-14">
                <div className="row mb-3 align-items-center">
                  <div className="col-lg-12 mb-lg-0 mb-4">
                    {state.success &&
                      showSuccessAlert("Pago realizado exitosamente.")}
                    {state.error &&
                      showErrorAlert(
                        " Ocurrió un error al realizar el pago. Por favor,intente más tarde."
                      )}
                  </div>
                </div>
                <div className="row mb-11 align-items-center">
                  <div className="col-lg-6 mb-lg-0 mb-4">
                    <h3 className="font-size-6 mb-0">
                      Listado de pagos ({dataResult.length})
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
                            className="border-0 font-size-4 font-weight-normal"
                          >
                            Servicio
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
                            Fecha
                          </th>
                          <th
                            scope="col"
                            className="border-0 font-size-4 font-weight-normal"
                          >
                            Estado pago
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataResult.map((transaccion) => {
                          return (
                            <tr className="border border-color-2">
                              <td className="table-y-middle py-7 min-width-px-235 pr-0">
                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                                  {transaccion.id}
                                </h3>
                              </td>
                              <td className="table-y-middle py-7 min-width-px-235 pr-0">
                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                                  {
                                    transaccion.transaccion.servicio_profesional
                                      .servicio.descripcion
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
                                      {
                                        transaccion.transaccion.profesional
                                          .persona.nombre
                                      }{" "}
                                      {
                                        transaccion.transaccion.profesional
                                          .persona.apellido
                                      }
                                    </h4>
                                  </a>
                                </Link>
                              </th>
                              <td className="table-y-middle py-7 min-width-px-170 pr-0">
                                {transaccion.pago_estado.id ==
                                getPaymentStateId(
                                  constants.PAYMENT_STATE.PAGADO
                                ) ? (
                                  <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                                    {transformDate(transaccion.fecha)}
                                  </h3>
                                ) : (
                                  <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                                    N/A
                                  </h3>
                                )}
                              </td>
                              <td className="table-y-middle py-7 min-width-px-170 pr-0">
                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                                  {transaccion.pago_estado.nombre}
                                </h3>
                              </td>
                              <td className="table-y-middle py-7 min-width-px-110 pr-0">
                                {transaccion.pago_estado.id ==
                                  getPaymentStateId(
                                    constants.PAYMENT_STATE.PENDIENTE
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
                                        Pagar
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
export default PaymentsAdmin;
