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

const ModalAddStudy = (props) => {
  const [showPassFirst, setShowPassFirst] = useState(true);
  const [showPassSecond, setShowPassSecond] = useState(true);
  const [state, setState] = useState({
    loading: true,
    error: null,
    email2: "",
    password: "",
    name: "",
    lastName: "",
    birthDate: "",
    sex: "F",
    sexLabel: "Femenino",
    isProfessional: false,
  });

  const gContext = useContext(GlobalContext);
  const handleClose = () => {
    gContext.toggleAddStudyModal();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ loading: true, error: null });

    try {
      getUserType();
      getTransactionStates();
      await AuthService.register(
        state.name,
        state.lastName,
        state.email2,
        state.birthDate,
        state.sex,
        state.password,
        state.isProfessional
      );
      setState({ loading: false });
      handleClose();
      // Cookies.set("token", response.data.token);
      // Cookies.set("user", response.data.user);
      //Router.push("/dashboard-main");
    } catch (error) {
      error.message = ERRORMSG;
      setState({ loading: false, error: error });
      window.scrollTo(0, 0);
    }
  };

  const handleChange = (e) => {
    const newState = { ...state };
    newState[e.target.id] = e.target.value;
    setState(newState);
  };

  const handleSelect = (e) => {
    const newState = { ...state };
    newState["sex"] = e.value;
    newState["sexLabel"] = e.label;
    setState(newState);
  };

  useEffect(() => {
    setState({ loading: false, error: null });
  }, []);

  return (
    <ModalStyled
      {...props}
      size="lg"
      centered
      show={gContext.addStudyModalVisible}
      onHide={gContext.toggleAddStudyModal}
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
            <div className="col-lg-5 col-md-6">
              <div className="pt-10 pb-6 pl-11 pr-12 bg-black-2 h-100 d-flex flex-column dark-mode-texts">
                <div className="pb-9">
                  <h3 className="font-size-8 text-white line-height-reset pb-4 line-height-1p4">
                    Cree una cuenta gratuita hoy
                  </h3>
                  <p className="mb-0 font-size-4 text-white">
                    Soy agregar estudios
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="bg-white-2 h-100 px-11 pt-11 pb-7">
                <form action="/" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label
                      htmlFor="name"
                      className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ingrese su nombre"
                      id="name"
                      value={state.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="lastName"
                      className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                    >
                      Apellido
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ingrese su apellido"
                      id="lastName"
                      value={state.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="email2"
                      className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="ejemplo@gmail.com"
                      id="email2"
                      value={state.email2}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="name"
                      className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                    >
                      Fecha de nacimiento
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Ingrese su fecha de nacimiento"
                      id="birthDate"
                      value={state.birthDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="select2"
                      className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                    >
                      Sexo
                    </label>
                    <Select
                      options={sexo}
                      className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                      border={false}
                      id="sex"
                      value={{ label: state.sexLabel, value: state.sex }}
                      onChange={handleSelect}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="password"
                      className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                    >
                      Contraseña
                    </label>
                    <div className="position-relative">
                      <input
                        type={showPassFirst ? "password" : "text"}
                        className="form-control"
                        id="password"
                        placeholder="Ingrese su contraseña"
                        value={state.password}
                        onChange={handleChange}
                      />
                      <a
                        href="/#"
                        className="show-password pos-abs-cr fas mr-6 text-black-2"
                        onClick={(e) => {
                          e.preventDefault();
                          togglePasswordFirst();
                        }}
                      >
                        <span className="d-none">none</span>
                      </a>
                    </div>
                  </div>

                  <div className="form-group d-flex flex-wrap justify-content-center mb-1">
                    <label
                      htmlFor="isProfesional"
                      className="gr-check-input d-flex  mr-3"
                    >
                      <input
                        className="d-none"
                        type="checkbox"
                        id="isProfesional"
                        value={state.isProfessional}
                        onChange={toggleIsProfessional}
                      />
                      <span className="checkbox mr-5"></span>
                      <span className="font-size-4 mb-0 line-height-reset d-block font-weight-semibold">
                        {/* Agree to the{" "} */}
                        <a href="/#" className="text-primary">
                          Soy profesional
                        </a>
                      </span>
                    </label>
                  </div>
                  <div className="form-group mb-8">
                    <button className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase">
                      Registrarse{" "}
                    </button>
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

export default ModalAddStudy;
