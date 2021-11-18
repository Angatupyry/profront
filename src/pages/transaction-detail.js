import React, { useContext, useEffect } from "react";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import GlobalContext from "../context/GlobalContext";
import { useRouter } from "next/router";

import ProfesionalService from "../services/profesional.service";
import TransaccionService from "../services/transaccion.service";
import { numberFormat } from "../utils/utils";

import imgF1 from "../assets/image/l2/png/featured-job-logo-1.png";

import Cookies from "js-cookie";
import { getUserTypeId, constants } from "../utils";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const TransactionDetail = () => {
  const data = useRouter();
  const {
    query: { id },
  } = data;

  const [state, setState] = React.useState({
    loading: true,
    error: null,
    success: null,
    user_id: "",
  });

  const [dataResult, setDataResult] = React.useState({});
  const [profileData, setProfileData] = React.useState({});

  function isEmpty(value) {
    return (
      Boolean(value && typeof value === "object") && !Object.keys(value).length
    );
  }

  async function fetchData(id) {
    setState({ loading: true, error: null });
    try {
      let usuario_tipo = JSON.parse(Cookies.get("user")).usuario_tipo_id;
      let clientUserTypeId = getUserTypeId(constants.CLIENT_TYPE.CLIENTE);
      let isProfessional = usuario_tipo != clientUserTypeId ? true : false;
      const response = await TransaccionService.getTransactionDetail(
        id,
        usuario_tipo,
        clientUserTypeId
      );
      console.log(response);
      setDataResult(response.data.data[0]);

      if (!isProfessional) {
        let profesional_id = response.data.data[0].profesional.id;
        const res = await ProfesionalService.getProfile(profesional_id);
        setProfileData(res.data.data[0]);
      }

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
      const response = await TransaccionService.postTransaction(parseInt(id));
      console.log(response);
      scrollToTop();
      setState({ loading: false, error: null, success: true });
    } catch (error) {
      scrollToTop();
      console.log(error);
      setState({ loading: false, error: error });
    }
  };

  if (!isEmpty(dataResult)) {
    let servicesText = "";
    return (
      <>
        <PageWrapper headerConfig={{ button: "profile" }}>
          <div className="jobDetails-section bg-default-1 pt-28 pt-lg-27 pb-xl-25 pb-12">
            <div className="container">
              <div className="row justify-content-center">
                {/* <!-- back Button --> */}
                <div className="col-xl-10 col-lg-11 mt-4 ml-xxl-32 ml-xl-15 dark-mode-texts">
                  <div className="mb-9">
                    <Link href="/transactions-list">
                      <a className="d-flex align-items-center ml-4">
                        <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8"></i>
                        <span className="text-uppercase font-size-3 font-weight-bold text-gray">
                          Regresar al listado de solicitudes
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
                          Pago realizado exitosamente.
                        </div>
                      </div>
                    </div>
                  )}
                  {state.error && (
                    <div className="row no-gutters">
                      <div className="col-md-12">
                        <div className="alert alert-danger" role="alert">
                          Ocurrió un error al pagar la transacción. Por favor,
                          intente más tarde.
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="bg-white rounded-4 border border-mercury shadow-9">
                    <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 border-bottom border-width-1 border-default-color light-mode-texts">
                      <div className="row mb-7">
                        <div className="col-md-12 mb-md-0 mb-12">
                          <div className="media justify-content-md-start">
                            <h3 className="font-size-6 mb-0">
                              Resumen de solicitud
                            </h3>
                          </div>
                        </div>
                      </div>
                      {dataResult.profesional && (
                        <div className="row mt-5">
                          <div className="col-md-12 mb-lg-0 mb-0 mt-5">
                            <span className="font-size-4 font-weight-semibold text-black-2 mb-4">
                              Profesional
                            </span>
                          </div>
                          <div className="col-md-12">
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
                                  {!isEmpty(profileData)
                                    ? profileData.servicio_profesional.map(
                                        (servicio, index) => {
                                          if (
                                            index ==
                                              profileData.servicio_profesional
                                                .length -
                                                1 ||
                                            index == 0
                                          ) {
                                            return (
                                              <span className="text-gray font-size-4">
                                                {" "}
                                                {
                                                  servicio.servicio.descripcion
                                                }{" "}
                                              </span>
                                            );
                                          } else {
                                            return (
                                              <span className="text-gray font-size-4">
                                                {" | " +
                                                  servicio.servicio
                                                    .descripcion +
                                                  " | "}
                                              </span>
                                            );
                                          }
                                        }
                                      )
                                    : ""}
                                </span>
                              </div>
                              {/* <!-- media texts end --> */}
                            </div>
                            {/* <!-- media end --> */}
                          </div>
                        </div>
                      )}
                      {dataResult.cliente && (
                        <div className="row mt-5">
                          <div className="col-md-12 mb-lg-0 mb-0 mt-5">
                            <span className="font-size-4 font-weight-semibold text-black-2 mb-4">
                              Cliente
                            </span>
                          </div>
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
                                  {dataResult.cliente.persona.nombre}{" "}
                                  {dataResult.cliente.persona.apellido}
                                </h3>
                                <span className="font-size-3 text-gray line-height-2">
                                  {dataResult.cliente.username} -{" "}
                                  {
                                    dataResult.cliente.persona
                                      .persona_telefono[0].numero
                                  }
                                </span>
                              </div>
                              {/* <!-- media texts end --> */}
                            </div>
                            {/* <!-- media end --> */}
                          </div>
                        </div>
                      )}

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
                      {dataResult.cliente && (
                        <div className="row mt-5">
                          <div className="col-md-12 mb-lg-0 mb-0 mt-5">
                            <span className="font-size-4 font-weight-semibold text-black-2 mb-4">
                              Dirección
                            </span>
                          </div>
                          <div className="col-md-9 mb-lg-0 mb-9">
                            <p className="font-size-4 mb-0">
                              {
                                dataResult.cliente.persona.persona_direccion[0]
                                  .direccion
                              }{" "}
                              {
                                dataResult.cliente.persona.persona_direccion[0]
                                  .numero
                              }{" "}
                              -{" "}
                              {
                                dataResult.cliente.persona.persona_direccion[0]
                                  .barrio.nombre
                              }{" "}
                              -{" "}
                              {
                                dataResult.cliente.persona.persona_direccion[0]
                                  .ciudad.nombre
                              }
                            </p>
                          </div>
                        </div>
                      )}
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

                    {/* <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 border-bottom border-width-1 border-default-color light-mode-texts">
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
                    </div> */}
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
export default TransactionDetail;
