import React, { useEffect, useContext } from "react";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import GlobalContext from "../context/GlobalContext";
import FacturacionService from "../services/facturacion.service";
import ModalUpdateInvoice from "../components/ModalUpdateInvoice";
import {
  showErrorAlert,
  showSuccessAlert,
  getInvoiceStates,
  numberFormat,
  getInvoiceStateId,
} from "../utils/utils";
import { constants } from "../utils";

const InvoicesAdmin = () => {
  const gContext = useContext(GlobalContext);
  const [dataResult, setDataResult] = React.useState(null);
  const [checksArray, setChecksArray] = React.useState([]);
  const [state, setState] = React.useState({
    loading: true,
    success: false,
    error: null,
    isChecked: false,
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  async function fetchData() {
    setState({ loading: true, error: null });
    try {
      const response = await FacturacionService.getInvoicesList();
      setDataResult(response.data.data);
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
    getInvoiceStates();
  }, [dataResult]);

  const transformDate = (date) => {
    let jsDate = new Date(date);
    return jsDate.toLocaleDateString("en-GB");
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
        const response = await FacturacionService.updateInvoice(id);
      }
      setState({ loading: false, error: null, success: true });
      emptyChecksArray();
      setTimeout(function () {
        fetchData();
      }, 2000);
    } catch (error) {
      console.log(error);
      setState({ loading: false, error: error });
    }
  };

  const toggleUpdateInvoiceModal = (id) => {
    // gContext.setUserId(id);
    // gContext.setTransactionId(transaction_id);
    gContext.toggleUpdateInvoiceModal();
  };

  if (dataResult && dataResult.length > 0) {
    return (
      <>
        <ModalUpdateInvoice />
        <PageWrapper>
          <div className="bg-default-1 pt-26 pt-lg-28 pb-13 pb-lg-25">
            <div className="container">
              <div className="mb-14">
                <div className="row mb-3 align-items-center">
                  <div className="col-lg-12 mb-lg-0 mb-4">
                    {state.success &&
                      showSuccessAlert(
                        "Estados factura actualizados exitosamente."
                      )}
                    {state.error &&
                      showErrorAlert(
                        " Ocurrió un error actualizar el estado de la/s factura/as. Por favor,intente más tarde."
                      )}
                  </div>
                </div>
                <div className="row mb-11 align-items-center">
                  <div className="col-lg-6 mb-lg-0 mb-4">
                    <h3 className="font-size-6 mb-0">
                      Listado de facturas ({dataResult.length})
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
                                Nro factura
                              </label>
                            </div>
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
                            Importe total
                          </th>
                          <th
                            scope="col"
                            className="border-0 font-size-4 font-weight-normal"
                          >
                            Estado factura
                          </th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataResult.map((factura) => {
                          return (
                            <tr className="border border-color-2">
                              <td className="table-y-middle py-7 min-width-px-235 pr-0">
                                {factura.factura_estado.id == 1 ? (
                                  <div class="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      name="payments-checkbox"
                                      id={factura.id}
                                      disabled
                                    />
                                    <label
                                      class="custom-control-label"
                                      for={factura.id}
                                    >
                                      {factura.nro_factura}
                                    </label>
                                  </div>
                                ) : (
                                  <div class="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      name="payments-checkbox"
                                      id={factura.id}
                                      onChange={handleCheckbox}
                                    />
                                    <label
                                      class="custom-control-label"
                                      for={factura.id}
                                    >
                                      {factura.nro_factura}
                                    </label>
                                  </div>
                                )}
                              </td>

                              <td
                                scope="row"
                                className="pl-6 border-0 py-7 pr-0"
                              >
                                <Link href="#">
                                  <a className="media min-width-px-235 align-items-center">
                                    <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">
                                      {
                                        factura.transaccion.cliente.persona
                                          .nombre
                                      }{" "}
                                      {
                                        factura.transaccion.cliente.persona
                                          .apellido
                                      }
                                    </h4>
                                  </a>
                                </Link>
                              </td>
                              <td className="table-y-middle py-7 min-width-px-170 pr-0">
                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                                  {transformDate(factura.fecha)}
                                </h3>
                              </td>
                              <td className="table-y-middle py-7 min-width-px-235 pr-0">
                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                                  {numberFormat(factura.importe_total)}
                                </h3>
                              </td>
                              <td className="table-y-middle py-7 min-width-px-170 pr-0">
                                <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                                  {factura.factura_estado.nombre}
                                </h3>
                              </td>
                              <td className="table-y-middle py-7 min-width-px-110 pr-0">
                                {factura.factura_estado.id ==
                                  getInvoiceStateId(
                                    constants.INVOICE_STATE.PENDIENTE
                                  ) && (
                                  <div className="">
                                    <Link href="#">
                                      <a
                                        className="font-size-3 font-weight-bold text-green text-uppercase"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          toggleUpdateInvoiceModal(factura.id);
                                        }}
                                      >
                                        Facturar
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
                  <div className="row mt-12">
                    <div className="col-md-12 mb-lg-0 mb-12 d-flex justify-content-end">
                      {!state.isChecked ? (
                        <Link href="/#">
                          <a className="btn btn-green text-uppercase btn-medium w-180 h-px-48 rounded-3 mr-4 mt-6 disabled">
                            Facturar
                          </a>
                        </Link>
                      ) : (
                        <Link href="/#">
                          <a
                            className="btn btn-green text-uppercase btn-medium w-180 h-px-48 rounded-3 mr-4 mt-6"
                            onClick={handleSubmit}
                          >
                            Facturar
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
export default InvoicesAdmin;
