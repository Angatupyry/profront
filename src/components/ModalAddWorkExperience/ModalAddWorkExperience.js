import React, { useContext, useState, useEffect } from "react";
import Router from "next/router";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
import AuthService from "../../services/auth.service";
import { Select } from "../Core";
import Error from "../Error/Error";
import { getUserType, getTransactionStates } from "../../utils";

const ERRORMSG =
  "Lo sentimos. Ha ocurrido un error, por favor intente más tarde.";
const ModalStyled = styled(Modal)`
  /* &.modal {
    z-index: 10050;
  } */
`;

const sexo = [
  { value: "F", label: "Femenino" },
  { value: "M", label: "Masculino" },
];

const meses = [
  { value: "1", label: "Enero" },
  { value: "2", label: "Febrero" },
  { value: "3", label: "Marzo" },
  { value: "4", label: "Abril" },
  { value: "5", label: "Mayo" },
  { value: "6", label: "Junio" },
  { value: "7", label: "Julio" },
  { value: "8", label: "Agosto" },
  { value: "9", label: "Setiembre" },
  { value: "10", label: "Octubre" },
  { value: "11", label: "Noviembre" },
  { value: "12", label: "Diciembre" },
];

const anhos = [
  { value: "2021", label: "2021" },
  { value: "2022", label: "2022" },
  { value: "2023", label: "2023" },
  { value: "2024", label: "2024" },
  { value: "2025", label: "2025" },
  { value: "2026", label: "2026" },
  { value: "2027", label: "2027" },
  { value: "2028", label: "2028" },
  { value: "2029", label: "2029" },
  { value: "2030", label: "2030" },
];

const ModalAddWorkExperience = (props) => {
  const [showPassFirst, setShowPassFirst] = useState(true);
  const [showPassSecond, setShowPassSecond] = useState(true);
  const [state, setState] = useState({
    loading: true,
    error: null,
  });

  const gContext = useContext(GlobalContext);
  const handleClose = () => {
    gContext.toggleAddWorkExperienceModal();
  };

  const togglePasswordFirst = () => {
    setShowPassFirst(!showPassFirst);
  };

  const togglePasswordSecond = () => {
    setShowPassSecond(!showPassSecond);
  };

  const toggleIsProfessional = () => {
    const newState = { ...state };
    if (newState.isProfessional) {
      newState["isProfessional"] = false;
    } else {
      newState["isProfessional"] = true;
    }
    setState(newState);
  };

  const handleSelect = (e) => {
    const newState = { ...state };
    newState["sex"] = e.value;
    newState["sexLabel"] = e.label;
    setState(newState);
  };

  const handleMesVencimiento = (e) => {
    const newPostData = { ...postData };
    newPostData["mes_vencimiento"] = e.value;
    newPostData["mes_vencimiento_label"] = e.label;
    setPostData(newPostData);
  };

  const handleAnhoVencimiento = (e) => {
    const newPostData = { ...postData };
    newPostData["anho_vencimiento"] = e.value;
    newPostData["anho_vencimiento_label"] = e.label;
    setPostData(newPostData);
  };

  useEffect(() => {
    setState({ loading: false, error: null });
  }, []);

  return (
    <ModalStyled
      {...props}
      size="lg"
      centered
      show={gContext.addWorkExperienceModalVisible}
      onHide={gContext.toggleAddWorkExperienceModal}
    >
      <Modal.Body className="p-0">
        {state.error && <Error error={state.error} />}
        <button
          type="button"
          className="circle-32 btn-reset bg-white pos-abs-tr mt-n6 mr-lg-n6 focus-reset shadow-10"
          onClick={handleClose}
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="login-modal-main bg-white rounded-8 overflow-hidden">
          <div className="row no-gutters">
            <div className="col-lg-12 col-md-12">
              <div className="bg-white-2 h-100 px-11 pt-11 pb-7">
                <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                  Experiencia laboral
                </h4>
                <form action="/" onSubmit={props.onSubmit}>
                  <div className="form-group">
                    <label
                      htmlFor="name"
                      className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                    >
                      Título
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ej.Profesor"
                      id="name"
                      value={props.data.title}
                      onChange={props.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="lastName"
                      className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                    >
                      Empresa
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ej.Empresa XXX"
                      id="lastName"
                      value={props.data.company}
                      onChange={props.onChange}
                    />
                  </div>

                  <div className="row no-gutters">
                    <div className="col-lg-6 col-md-6 p-0 pr-2">
                      <div className="row no-gutters">
                        <div className="col-lg-12 p-0 pr-2">
                          <p className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">
                            Fecha inicio
                          </p>
                        </div>
                        <div className="col-lg-6 col-md-6 p-0 pr-2">
                          <div className="form-group">
                            <label
                              htmlFor="select2"
                              className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                            ></label>
                            <Select
                              options={meses}
                              className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                              border={false}
                              id="tipoTarjeta"
                              value={{
                                label: meses[0].label,
                                value: meses[0].value,
                              }}
                              onChange={handleMesVencimiento}
                            />
                          </div>{" "}
                        </div>
                        <div className="col-lg-6 col-md-6 p-0 pr-2">
                          <div className="form-group">
                            <label
                              htmlFor="select2"
                              className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                            ></label>
                            <Select
                              options={anhos}
                              className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                              border={false}
                              id="tipoTarjeta"
                              value={{
                                label: anhos[0].label,
                                value: anhos[0].value,
                              }}
                              onChange={handleAnhoVencimiento}
                            />
                          </div>{" "}
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 p-0 ">
                      <div className="row no-gutters">
                        <div className="col-lg-12 p-0 pr-2">
                          <p className="d-block text-black-2 font-size-4 font-weight-semibold mb-4">
                            Fecha fin
                          </p>
                        </div>
                        <div className="col-lg-6 col-md-6 p-0 pr-2">
                          <div className="form-group">
                            <label
                              htmlFor="select2"
                              className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                            ></label>
                            <Select
                              options={meses}
                              className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                              border={false}
                              id="tipoTarjeta"
                              value={{
                                label: meses[1].label,
                                value: meses[1].value,
                              }}
                              onChange={handleMesVencimiento}
                            />
                          </div>{" "}
                        </div>
                        <div className="col-lg-6 col-md-6 p-0">
                          <div className="form-group">
                            <label
                              htmlFor="select2"
                              className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                            ></label>
                            <Select
                              options={anhos}
                              className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                              border={false}
                              id="tipoTarjeta"
                              value={{
                                label: anhos[1].label,
                                value: anhos[1].value,
                              }}
                              onChange={handleAnhoVencimiento}
                            />
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row no-gutters">
                    <div className="col-lg-12 p-0 pr-2 d-flex justify-content-end">
                      <div className="form-group mb-8">
                        <button className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase">
                          Agregar{" "}
                        </button>
                      </div>
                    </div>{" "}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </ModalStyled>
  );
};

export default ModalAddWorkExperience;
