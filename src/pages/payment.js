import React, { useContext, useEffect } from "react";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import GlobalContext from "../context/GlobalContext";
import { useRouter } from "next/router";

import MediosPagoService from "../services/mediosPago.service";
import TransaccionService from "../services/transaccion.service";
import { numberFormat } from "../utils/utils";
import imgM from "../assets/image/WhatsApp_Logo_1.png";
import imgF1 from "../assets/image/l2/png/featured-job-logo-1.png";
import ModalAddPayment from "../components/ModalAddPayment";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Payment = () => {
  const data = useRouter();
  const {
    query: { id },
  } = data;

  const [state, setState] = React.useState({
    loading: true,
    error: null,
    success: null,
    user_id: "",
    payment_method: "",
  });
  const gContext = useContext(GlobalContext);

  const [dataResult, setDataResult] = React.useState({});
  const [dataPago, setDataPago] = React.useState([]);
  const [enableBtn, setEnableBtn] = React.useState(false);

  function isEmpty(value) {
    return (
      Boolean(value && typeof value === "object") && !Object.keys(value).length
    );
  }

  async function fetchData(id) {
    setState({ loading: true, error: null });
    try {
      const response = await TransaccionService.getTransaction(id);
      setDataResult(response.data.data);
      console.log(response.data.data);

      const tarjetaResponse = await MediosPagoService.getUserCards(
        response.data.data.cliente.id
      );
      setDataPago(tarjetaResponse.data.data);
      console.log(tarjetaResponse);

      setState({ loading: false, error: null });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ loading: true, error: null });
    try {
      // let payment_method = state.payment_method;
      // const response = await TransaccionService.postTransaction(
      //   parseInt(id),
      //   payment_method
      // );
      // console.log(response);
      scrollToTop();
      setState({
        loading: false,
        error: null,
        success: true,
        payment_method: "",
      });
    } catch (error) {
      scrollToTop();
      console.log(error);
      setState({ loading: false, error: error });
    }
  };

  const handleRadioBtn = async (e) => {
    setEnableBtn(true);
  };

  const handlePayments = async (e) => {
    var card = document.getElementsByClassName("cardsPayment")[0];
    var transfer = document.getElementsByClassName("transferPayment")[0];
    if (e.target.id == "card") {
      card.classList.remove("d-none");
      transfer.classList.add("d-none");
    } else {
      card.classList.add("d-none");
      transfer.classList.remove("d-none");
      setEnableBtn(true);
    }

    setState({
      payment_method: e.target.id,
    });
  };

  if (!isEmpty(dataResult)) {
    let servicesText = "";
    return (
      <>
        <ModalAddPayment />
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
                          Regresar al dashboard
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
                {/* <!-- back Button End --> */}
                <div className="col-xl-9 col-lg-11 mb-8 px-xxl-15 px-xl-0">
                  {state.success && (
                    <div className="row no-gutters">
                      <div className="col-md-12">
                        <div className="alert alert-success" role="alert">
                          Pago pendiente. Env??e su comprobante de transferencia
                          para concretar el pago.
                        </div>
                      </div>
                    </div>
                  )}
                  {state.success && state.payment_method == "transfer" && (
                    <div className="row no-gutters">
                      <div className="col-md-12">
                        <div className="alert alert-success" role="alert">
                          Pago pendiente. Env??e su comprobante de transferencia
                          para concretar el pago.
                        </div>
                      </div>
                    </div>
                  )}
                  {state.error && (
                    <div className="row no-gutters">
                      <div className="col-md-12">
                        <div className="alert alert-danger" role="alert">
                          Ocurri?? un error al pagar la transacci??n. Por favor,
                          intente m??s tarde.
                        </div>
                      </div>
                    </div>
                  )}
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
                              <h3 className="font-size-6 mb-0">
                                {dataResult.profesional.persona.nombre}{" "}
                                {dataResult.profesional.persona.apellido}
                              </h3>
                              <span className="font-size-3 text-gray line-height-2">
                                {
                                  dataResult.servicio_profesional.servicio
                                    .descripcion
                                }
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
                          <p className="font-size-4 mb-0">
                            {" "}
                            {
                              dataResult.servicio_profesional.servicio
                                .descripcion
                            }
                          </p>
                        </div>
                        <div className="col-md-3 mb-lg-0 mb-3">
                          <div className="form-group d-flex flex-wrap justify-content-start mb-1">
                            <span className="font-size-4 mb-0 line-height-reset d-block font-weight-semibold">
                              <div className="text-primary">
                                {numberFormat(
                                  dataResult.servicio_profesional.monto_hora
                                )}{" "}
                                Gs. / hora{" "}
                              </div>
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
                            {dataResult.fecha.substring(0, 10)} -{" "}
                            {dataResult.observacion}
                          </p>
                        </div>
                        <div className="col-md-3 mb-lg-0 mb-3">
                          <div className="form-group d-flex flex-wrap justify-content-start mb-1">
                            <span className="font-size-4 mb-0 line-height-reset d-block font-weight-semibold">
                              <div className="text-primary">
                                {dataResult.cant_horas} hora/s{" "}
                              </div>
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
                              <div className="text-primary">
                                {numberFormat(dataResult.monto)} Gs.{" "}
                              </div>
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
                        <div className="col-md-4 mb-lg-0 mb-4">
                          <div className="form-group d-flex flex-wrap justify-content-start mb-1">
                            <label
                              htmlFor="card"
                              className="gr-check-input d-flex  mr-3"
                            >
                              <input
                                className="d-none"
                                type="radio"
                                name="payments"
                                id="card"
                                disabled="true"
                                onChange={handlePayments}
                              />
                              <span className="checkbox mr-5"></span>
                              <span className="font-size-4 mb-0 line-height-reset d-block font-weight-semibold">
                                <div className="text-primary">Mis tarjetas</div>
                              </span>
                            </label>
                          </div>
                          <div className="form-group d-flex flex-wrap justify-content-start mb-1">
                            <label
                              htmlFor="transfer"
                              className="gr-check-input d-flex  mr-3"
                            >
                              <input
                                className="d-none"
                                type="radio"
                                name="payments"
                                id="transfer"
                                onChange={handlePayments}
                              />
                              <span className="checkbox mr-5"></span>
                              <span className="font-size-4 mb-0 line-height-reset d-block font-weight-semibold">
                                <div className="text-primary">
                                  Transferencia
                                </div>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="cardsPayment d-none">
                        {dataPago.map((medioPago, index) => {
                          let id = "id-" + index;
                          return (
                            <div className="row">
                              <div className="col-md-8 mb-lg-0 mb-8">
                                <h3 className="font-size-6 mb-0">
                                  Mis tarjetas
                                </h3>
                              </div>
                              <div className="col-md-8 mb-lg-0 mb-8 mt-10">
                                <p className="font-size-4 mb-0">
                                  {medioPago.numero_tarjeta}
                                </p>
                              </div>
                              <div className="col-md-4 mb-lg-0 mb-4 mt-10">
                                <div className="form-group d-flex flex-wrap justify-content-start mb-1">
                                  <label
                                    htmlFor={id}
                                    className="gr-check-input d-flex  mr-3"
                                  >
                                    <input
                                      className="d-none"
                                      type="radio"
                                      name="isProfesional"
                                      id={id}
                                      onChange={handleRadioBtn}
                                    />
                                    <span className="checkbox mr-5"></span>
                                    <span className="font-size-4 mb-0 line-height-reset d-block font-weight-semibold">
                                      <div className="text-primary">
                                        {medioPago.descripcion}{" "}
                                      </div>
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                        <div className="row mt-4">
                          <div className="col-md-12 mb-lg-0 mb-12 d-flex justify-content-end">
                            <Link href="/#">
                              <a
                                className="btn btn-outline-mercury text-black-2 text-uppercase h-px-48 rounded-3 mb-5 px-5 mr-4"
                                href="/#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  gContext.toggleAddPaymentModal();
                                }}
                              >
                                Agregar nuevo medio de pago
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="transferPayment d-none">
                        <div className="row">
                          <div className="col-md-8 mb-lg-0 mb-8">
                            <h3 className="font-size-6 mb-0">
                              Datos de transferencia
                            </h3>
                          </div>
                        </div>
                        <div className="row mt-5">
                          <div className="col-md-12 mb-lg-0 mb-0 mt-5">
                            <span className="font-size-4 font-weight-semibold text-black-2 mb-4">
                              BANCO
                            </span>
                          </div>
                          <div className="col-md-9 mb-lg-0 mb-9">
                            <p className="font-size-4 mb-0">Banco Familiar</p>
                          </div>
                        </div>
                        <div className="row mt-5">
                          <div className="col-md-12 mb-lg-0 mb-0 mt-5">
                            <span className="font-size-4 font-weight-semibold text-black-2 mb-4">
                              N??mero de cuenta
                            </span>
                          </div>
                          <div className="col-md-9 mb-lg-0 mb-9">
                            <p className="font-size-4 mb-0">7845481</p>
                          </div>
                        </div>
                        <div className="row mt-5">
                          <div className="col-md-12 mb-lg-0 mb-0 mt-5">
                            <span className="font-size-4 font-weight-semibold text-black-2 mb-4">
                              Titular
                            </span>
                          </div>
                          <div className="col-md-9 mb-lg-0 mb-9">
                            <p className="font-size-4 mb-0">
                              TODO SERVICIO S.A
                            </p>
                          </div>
                        </div>
                        <div className="row mt-5">
                          <div className="col-md-12 mb-lg-0 mb-0 mt-5">
                            <span className="font-size-4 font-weight-semibold text-black-2 mb-4">
                              RUC
                            </span>
                          </div>
                          <div className="col-md-9 mb-lg-0 mb-9">
                            <p className="font-size-4 mb-0">8006213-7</p>
                          </div>
                        </div>
                        <div className="row mt-5">
                          <div className="col-md-12 mb-lg-0 mb-0 mt-5">
                            <span className="font-size-4 font-weight-semibold text-black-2 mb-4">
                              Obs: Envie su comprobante a
                              transaccion@todoservicio.com o al siguiente link
                              de Whatsapp para confirmar esta transacci??n:
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-2">
                            <a
                              href="https://wa.me/595971500066/?text=??Hola! Adjunto mi comprobante de pago"
                              target="_blank"
                            >
                              <img src={imgM} width="35" height="35" />
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="row mt-12">
                        <div className="col-md-12 mb-lg-0 mb-12 d-flex justify-content-end">
                          {enableBtn ? (
                            <Link href="/#">
                              <a
                                className="btn btn-green text-uppercase btn-medium w-180 h-px-48 rounded-3 mr-4 mt-6"
                                onClick={handleSubmit}
                              >
                                Pagar
                              </a>
                            </Link>
                          ) : (
                            <Link href="/#">
                              <a className="btn btn-green text-uppercase btn-medium w-180 h-px-48 rounded-3 mr-4 mt-6 disabled">
                                Pagar
                              </a>
                            </Link>
                          )}
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
  } else {
    return (
      <PageWrapper headerConfig={{ button: "profile" }}>
        <div>Hubo un error</div>
      </PageWrapper>
    );
  }
};
export default Payment;
