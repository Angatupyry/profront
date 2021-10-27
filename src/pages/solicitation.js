import React, { useEffect } from "react";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import Router, { useRouter } from "next/router";

import TransaccionService from "../services/transaccion.service";
import { numberFormat, showErrorAlert, showSuccessAlert } from "../utils/utils";

import imgF1 from "../assets/image/l2/png/featured-job-logo-1.png";
import iconD from "../assets/image/svg/icon-dolor.svg";
import iconB from "../assets/image/svg/icon-briefcase.svg";
import iconL from "../assets/image/svg/icon-location.svg";
import { offset } from "dom-helpers";
import Cookies from "js-cookie";

const horas = [
  { value: "8", label: "08:00 hs" },
  { value: "9", label: "09:00 hs" },
  { value: "10", label: "10:00 hs" },
  { value: "11", label: "11:00 hs" },
  { value: "12", label: "12:00 hs" },
  { value: "13", label: "13:00 hs" },
  { value: "14", label: "14:00 hs" },
  { value: "15", label: "15:00 hs" },
  { value: "16", label: "16:00 hs" },
  { value: "17", label: "17:00 hs" },
  { value: "18", label: "18:00 hs" },
  { value: "19", label: "19:00 hs" },
  { value: "20", label: "20:00 hs" },
  { value: "21", label: "21:00 hs" },
];

const JobDetails = () => {
  const data = useRouter();
  const {
    query: { id },
  } = data;

  const [state, setState] = React.useState({
    loading: true,
    error: null,
    success: null,
    servicioSeleccionado: "",
    montoServicioSeleccionado: "",
    fechaSeleccionada: "",
    horaDesdeSeleccionada: "8",
    horaHastaSeleccionada: "9",
    horaDesdeLabel: "",
    horaHastaLabel: "",
    tarifa: 0,
  });

  const [postData, setPostData] = React.useState({
    profesional_id: id,
    servicio_profesional_id: "",
    cliente_id: "",
    observacion: "",
    fecha: "",
    cant_horas: 0,
    monto: 0,
  });
  const [dataResult, setDataResult] = React.useState({});
  const [enableBtn, setEnableBtn] = React.useState(true);

  function isEmpty(value) {
    return (
      Boolean(value && typeof value === "object") && !Object.keys(value).length
    );
  }

  const getTodaysdate = (e) => {
    var today = new Date();
    return (
      today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
    );
  };

  async function fetchData(id) {
    setState({ loading: true, error: null });
    try {
      const response = await TransaccionService.getSolicitation(id);
      setDataResult(response.data.data[0]);
      setState({
        fechaSeleccionada: getTodaysdate(),
        horaDesdeSeleccionada: horas[0].value,
        horaDesdeLabel: horas[0].label,
        horaHastaSeleccionada: horas[1].value,
        horaHastaLabel: horas[1].label,
      });
    } catch (error) {
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

  const handleRadioBtn = async (e) => {
    let montoHora = e.target.getAttribute("montoHora");
    let servicio = e.target.getAttribute("servicio");
    let monto = e.target.getAttribute("monto");
    let servicioId = e.target.getAttribute("servicioId");
    let estadoServicio = dataResult.servicio_profesional.find(
      (element) => (element.id = servicioId)
    ).servicio.pendiente;

    setState({
      montoServicioSeleccionado: montoHora,
      servicioSeleccionado: servicio,
      tarifa: parseInt(monto),
      fechaSeleccionada: getTodaysdate(),
      horaDesdeSeleccionada: horas[0].value,
      horaDesdeLabel: horas[0].label,
      horaHastaSeleccionada: horas[1].value,
      horaHastaLabel: horas[1].label,
    });

    setPostData({
      monto: parseInt(monto),
      cant_horas: state.horaHastaSeleccionada - state.horaDesdeSeleccionada,
      servicio_profesional_id: parseInt(servicioId),
      cliente_id: JSON.parse(Cookies.get("user")).id,
      profesional_id: parseInt(id),
      fecha: getTodaysdate(),
      observacion: horas[0].label + " a " + horas[1].label,
    });

    if (estadoServicio) {
      setEnableBtn(false);
    }
  };

  const handleDate = (e) => {
    const newState = { ...state };
    newState["fechaSeleccionada"] =
      document.getElementById("serviceDate").value;
    setState(newState);

    const newPostData = { ...postData };
    newPostData["fecha"] = document.getElementById("serviceDate").value;
    setPostData(newPostData);
  };

  const handleHoraDesde = (e) => {
    const newState = { ...state };
    newState["horaDesdeSeleccionada"] = e.value;
    newState["horaDesdeLabel"] = e.label;
    setState(newState);
    let cant_horas = Math.abs(parseInt(state.horaHastaSeleccionada - e.value));
    let horario = e.label + " a " + state.horaHastaLabel;

    const newPostData = { ...postData };
    newPostData["cant_horas"] = cant_horas;
    newPostData["observacion"] = horario;
    setPostData(newPostData);
  };

  const handleHoraHasta = (e) => {
    const newState = { ...state };
    newState["horaHastaSeleccionada"] = e.value;
    newState["horaHastaLabel"] = e.label;
    setState(newState);
    let cant_horas = Math.abs(parseInt(e.value - state.horaDesdeSeleccionada));
    let horario = state.horaDesdeLabel + " a " + e.label;

    const newPostData = { ...postData };
    newPostData["cant_horas"] = cant_horas;
    newPostData["observacion"] = horario;
    setPostData(newPostData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ loading: true, error: null });
    try {
      const response = await TransaccionService.postSolicitation(
        postData.profesional_id,
        postData.servicio_profesional_id,
        postData.cliente_id,
        postData.observacion,
        postData.fecha,
        postData.cant_horas,
        postData.monto
      );

      setState({ loading: false, error: null, success: true });
    } catch (error) {
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
                    <Link href={"/candidate-profile?id=" + id}>
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
                  {state.success &&
                    showSuccessAlert("Solicitud creada exitosamente.")}
                  {state.error &&
                    showErrorAlert(
                      " Ocurrió un error al crear la solicitud. Por favor,intente más tarde."
                    )}

                  {!enableBtn &&
                    showErrorAlert(
                      "Servicio se encuentra pendiente. Por favor,intente con otro servicio."
                    )}

                  <div className="bg-white rounded-4 border border-mercury shadow-9">
                    {/* <!-- Single Featured Job --> */}
                    <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
                      <div className="row">
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
                                {dataResult.persona.nombre}{" "}
                                {dataResult.persona.apellido}
                              </h3>

                              <span className="font-size-3 text-gray line-height-2">
                                {dataResult.servicio_profesional.map(
                                  (servicio, index) => {
                                    let descripcion =
                                      servicio.servicio.descripcion;
                                    let tamanho =
                                      dataResult.servicio_profesional.length;
                                    if (servicio) {
                                      if (tamanho > 1) {
                                        if (
                                          index === 0 ||
                                          index === tamanho - 1
                                        ) {
                                          servicesText += descripcion;
                                        } else {
                                          servicesText +=
                                            " | " + descripcion + " | ";
                                        }
                                      } else {
                                        servicesText = descripcion;
                                      }
                                    }
                                  }
                                )}
                                {servicesText}
                              </span>
                            </div>
                            {/* <!-- media texts end --> */}
                          </div>
                          {/* <!-- media end --> */}
                        </div>
                        <div className="col-md-6 text-right pt-7 pt-md-0 mt-md-n1">
                          {/* <!-- media date start --> */}
                          <div className="media justify-content-md-end">
                            <p className="font-size-4 text-gray mb-0"></p>
                          </div>
                          {/* <!-- media date end --> */}
                        </div>
                      </div>
                      {/* <div className="row pt-9">
                      <div className="col-12">
                        <div className="card-btn-group">
                          <Link href="/#">
                            <a className="btn btn-green text-uppercase btn-medium rounded-3 w-180 mr-4 mb-5">
                              Apply to this job
                            </a>
                          </Link>
                          <Link href="/#">
                            <a className="btn btn-outline-mercury text-black-2 text-uppercase h-px-48 rounded-3 mb-5 px-5">
                              <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                              Save job
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div> */}
                    </div>
                    {/* <!-- End Single Featured Job --> */}
                    <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 border-bottom border-width-1 border-default-color light-mode-texts">
                      <div className="row mb-7">
                        <div className="col-md-12 mb-md-0 mb-12">
                          <div className="media justify-content-md-start">
                            <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                              Seleccione un servicio
                            </p>
                          </div>
                        </div>
                      </div>
                      {dataResult.servicio_profesional.map(
                        (servicio, index) => {
                          let key = "key-" + index;
                          let id = "id-" + index;
                          let descripcionMonto =
                            numberFormat(servicio.monto_hora) + " Gs. / hora";
                          return (
                            <div className="row" key={key}>
                              <div className="col-md-6 mb-lg-0 mb-6">
                                <p className="font-size-4 mb-0">
                                  {servicio.servicio.descripcion}
                                </p>
                              </div>
                              <div className="col-md-6 mb-lg-0 mb-6">
                                <div className="form-group d-flex flex-wrap justify-content-center mb-1">
                                  <label
                                    htmlFor={id}
                                    className="gr-check-input d-flex  mr-3"
                                  >
                                    <input
                                      className="d-none"
                                      type="radio"
                                      name="isProfesional"
                                      id={id}
                                      //value={state.isProfessional}
                                      onChange={handleRadioBtn}
                                      montohora={descripcionMonto}
                                      servicio={servicio.servicio.descripcion}
                                      monto={servicio.monto_hora}
                                      servicioId={servicio.id}
                                    />
                                    <span className="checkbox mr-5"></span>
                                    <span className="font-size-4 mb-0 line-height-reset d-block font-weight-semibold">
                                      <div className="text-primary">
                                        {descripcionMonto}
                                      </div>
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                    <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 border-bottom border-width-1 border-default-color light-mode-texts">
                      <div className="row mb-7">
                        <div className="col-md-12 mb-md-0 mb-12">
                          <div className="media justify-content-md-start">
                            <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                              Seleccione un horario
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4 mb-lg-0 mb-4">
                          <div className="form-group">
                            <label
                              htmlFor="name"
                              className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                            >
                              Fecha
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              placeholder="Ingrese la fecha"
                              id="serviceDate"
                              value={state.fechaSeleccionada}
                              onChange={handleDate}
                            />
                          </div>
                        </div>
                        <div className="col-md-4 mb-lg-0 mb-4">
                          <div className="form-group">
                            <label
                              htmlFor="select2"
                              className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                            >
                              Desde las
                            </label>
                            <Select
                              options={horas}
                              className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                              border={false}
                              id="sex"
                              value={{
                                label: state.horaDesdeLabel,
                                value: state.horaDesdeSeleccionada,
                              }}
                              onChange={handleHoraDesde}
                            />
                          </div>
                        </div>
                        <div className="col-md-4 mb-lg-0 mb-4">
                          <div className="form-group">
                            <label
                              htmlFor="select2"
                              className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                            >
                              Hasta las
                            </label>
                            <Select
                              options={horas}
                              className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                              border={false}
                              id="sex"
                              value={{
                                label: state.horaHastaLabel,
                                value: state.horaHastaSeleccionada,
                              }}
                              onChange={handleHoraHasta}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

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
                                {dataResult.persona.nombre}{" "}
                                {dataResult.persona.apellido}
                              </h3>
                              <span className="font-size-3 text-gray line-height-2">
                                {servicesText}
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
                            {state.servicioSeleccionado}
                          </p>
                        </div>
                        <div className="col-md-3 mb-lg-0 mb-3">
                          <div className="form-group d-flex flex-wrap justify-content-start mb-1">
                            <span className="font-size-4 mb-0 line-height-reset d-block font-weight-semibold">
                              <div className="text-primary">
                                {state.montoServicioSeleccionado}
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
                            {state.fechaSeleccionada &&
                              state.fechaSeleccionada +
                                " - " +
                                state.horaDesdeLabel +
                                " a " +
                                state.horaHastaLabel}
                          </p>
                        </div>
                        <div className="col-md-3 mb-lg-0 mb-3">
                          <div className="form-group d-flex flex-wrap justify-content-start mb-1">
                            <span className="font-size-4 mb-0 line-height-reset d-block font-weight-semibold">
                              <div className="text-primary">
                                {state.horaHastaSeleccionada -
                                  state.horaDesdeSeleccionada}{" "}
                                hora/s
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
                                {numberFormat(
                                  state.tarifa &&
                                    state.tarifa *
                                      (state.horaHastaSeleccionada -
                                        state.horaDesdeSeleccionada)
                                ) + " Gs."}
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-12">
                        <div className="col-md-12 mb-lg-0 mb-12 d-flex justify-content-end">
                          {!postData.fecha ||
                          !postData.monto ||
                          !postData.profesional_id ||
                          !postData.servicio_profesional_id ||
                          !postData.observacion ||
                          !postData.cliente_id ||
                          !postData.cant_horas ||
                          !enableBtn ? (
                            <Link href="/#">
                              <a
                                className="btn btn-green text-uppercase btn-medium w-180 h-px-48 rounded-3 mr-4 mt-6 disabled"
                                onClick={handleSubmit}
                              >
                                Enviar solicitud
                              </a>
                            </Link>
                          ) : (
                            <Link href="/#">
                              <a
                                className="btn btn-green text-uppercase btn-medium w-180 h-px-48 rounded-3 mr-4 mt-6"
                                onClick={handleSubmit}
                              >
                                Enviar solicitud
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
export default JobDetails;
