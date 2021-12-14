import React, { useEffect, useContext } from "react";

import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import GlobalContext from "../context/GlobalContext";
import TransaccionService from "../services/transaccion.service";
import {
  getPaymentStateId,
  getTransactionStateId,
  constants,
  getTransactionTypeId,
} from "../utils";
import { showErrorAlert, showSuccessAlert } from "../utils/utils";
import Pagination from "react-js-pagination";

const PendingPaymentsAdmin = () => {
  const filteredIds = [];
  const gContext = useContext(GlobalContext);
  const [dataResult, setDataResult] = React.useState(null);
  const [checksArray, setChecksArray] = React.useState([]);
  const [pageResult, setPageResult] = React.useState(null);
  const [activePage, setActivePage] = React.useState(1);
  const [state, setState] = React.useState({
    loading: true,
    error: null,
    success: false,
    isChecked: false,
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
      const response = await TransaccionService.getTransactionList(
        "",
        "",
        pageNumber
      );
      response.data.data.forEach((x) => {
        if (
          (x.transaccion_tipo.id ==
            getTransactionTypeId(constants.TRANSACTION_TYPE.CONSULTA) &&
            x.transaccion_estado.id ==
              getTransactionStateId(constants.TRANSACTION_STATE.APROBADO)) ||
          x.transaccion_estado.id ==
            getTransactionStateId(constants.TRANSACTION_STATE.PENDIENTE_PAGO)
        ) {
          filteredIds.push(x.id);
        }
      });

      setPageResult(response.data.meta);

      const arr = response.data.data.filter(function (value) {
        return filteredIds.indexOf(value.id) != -1;
      });

      console.log(arr);
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
    let options = { timeZone: "UTC" };
    return jsDate.toLocaleString("en-GB", options);
  };

  const emptyChecksArray = () => {
    const check = document.getElementById("all");
    const checkboxes = document.getElementsByName("payments-checkbox");
    var arr = checksArray;
    for (var checkbox of checkboxes) {
      checkbox.checked = false;
      arr = arr.filter((e) => e !== parseInt(checkbox.id));
    }

    check.checked = false;

    setChecksArray(arr);
  };

  const setCheckedState = (value) => {
    const newState = { ...state };
    newState["isChecked"] = value;
    setState(newState);
  };

  const handleCheckAll = () => {
    const check = document.getElementById("all");
    const checkboxes = document.getElementsByName("payments-checkbox");

    if (check.checked) {
      checksArray.splice(0, checksArray.length);
      for (var checkbox of checkboxes) {
        if (!checkbox.disabled) {
          checkbox.checked = true;
          checksArray.push(parseInt(checkbox.id));
          setCheckedState(true);
        }
      }
    } else {
      var arr = checksArray;
      for (var checkbox of checkboxes) {
        checkbox.checked = false;
        arr = arr.filter((e) => e !== parseInt(checkbox.id));
      }
      setChecksArray(arr);
      setCheckedState(false);
    }
  };

  const handleCheckbox = (e) => {
    const id = e.target.id;
    const check = document.getElementById(id);
    const checkAll = document.getElementById("all");
    if (check.checked) {
      checksArray.push(parseInt(check.id));
      setCheckedState(true);
    } else {
      var arr = checksArray;
      arr = arr.filter((e) => e !== parseInt(check.id));
      setChecksArray(arr);
      if (checkAll.checked) {
        checkAll.checked = false;
      }
      if (arr.length < 1) {
        setCheckedState(false);
      } else {
        setCheckedState(true);
      }
    }
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

  if (dataResult && dataResult.length > 0) {
    return (
      <>
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
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="all"
                                onChange={handleCheckAll}
                              />
                              <label class="custom-control-label" for="all">
                                Id transacción
                              </label>
                            </div>
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
                            Fecha/Hora
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
                              <td className="table-y-middle py-7 min-width-px-235 pr-0">
                                {transaccion.transaccion_estado_id ==
                                getPaymentStateId(
                                  constants.PAYMENT_STATE.PAGADO
                                ) ? (
                                  <div class="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      name="payments-checkbox"
                                      id={transaccion.id}
                                      disabled
                                    />
                                    <label
                                      class="custom-control-label"
                                      for={transaccion.id}
                                    >
                                      {transaccion.id}
                                    </label>
                                  </div>
                                ) : (
                                  <div class="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      name="payments-checkbox"
                                      id={transaccion.id}
                                      onChange={handleCheckbox}
                                    />
                                    <label
                                      class="custom-control-label"
                                      for={transaccion.id}
                                    >
                                      {transaccion.id}
                                    </label>
                                  </div>
                                )}
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

                  <div className="row mt-12">
                    <div className="col-md-12 mb-lg-0 mb-12 d-flex justify-content-end">
                      {!state.isChecked ? (
                        <Link href="/#">
                          <a className="btn btn-green text-uppercase btn-medium w-180 h-px-48 rounded-3 mr-4 mt-6 disabled">
                            Confirmar pago
                          </a>
                        </Link>
                      ) : (
                        <Link href="/#">
                          <a
                            className="btn btn-green text-uppercase btn-medium w-180 h-px-48 rounded-3 mr-4 mt-6"
                            onClick={handleSubmit}
                          >
                            Confirmar pago
                          </a>
                        </Link>
                      )}
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
    return <div>no hay datos</div>;
  }
};
export default PendingPaymentsAdmin;
