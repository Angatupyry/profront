import React, { useContext, useState } from "react";
import Router from "next/router";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
import AuthService from "../../services/auth.service";

const ModalStyled = styled(Modal)`
  /* &.modal {
    z-index: 10050;
  } */
`;

const ModalSignUp = (props) => {
  const [showPassFirst, setShowPassFirst] = useState(true);
  const [showPassSecond, setShowPassSecond] = useState(true);
  const [state, setState] = useState({
    loading: true,
    error: null,
    email2: "",
    password: "",
    name: "",
    lastName: "",
    isProfessional: false,
  });

  const gContext = useContext(GlobalContext);
  const handleClose = () => {
    gContext.toggleSignUpModal();
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

    // if (state.isProfessional) {
    //   setState({ isProfessional: false });
    // } else {
    //   setState({ isProfessional: true });
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ loading: true, error: null });

    try {
      await AuthService.register(
        state.name,
        state.lastName,
        state.email2,
        state.password,
        state.isProfessional
      );
      setState({ loading: false });
      handleClose();
      Router.push("/dashboard-main");
    } catch (error) {
      setState({ loading: false, error: error });
    }
  };

  const handleChange = (e) => {
    const newState = { ...state };
    console.log(e.target.value);
    newState[e.target.id] = e.target.value;
    setState(newState);
    console.log(newState);
  };

  return (
    <ModalStyled
      {...props}
      size="lg"
      centered
      show={gContext.signUpModalVisible}
      onHide={gContext.toggleSignUpModal}
    >
      <Modal.Body className="p-0">
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
                    Cree su cuenta para continuar y explorar a los profesionales
                    disponibles.
                  </p>
                </div>
                {/* <div className="border-top border-default-color-2 mt-auto">
                  <div className="d-flex mx-n9 pt-6 flex-xs-row flex-column">
                    <div className="pt-5 px-9">
                      <h3 className="font-size-7 text-white">295</h3>
                      <p className="font-size-3 text-white gr-opacity-5 line-height-1p4">
                        New jobs posted today
                      </p>
                    </div>
                    <div className="pt-5 px-9">
                      <h3 className="font-size-7 text-white">14</h3>
                      <p className="font-size-3 text-white gr-opacity-5 line-height-1p4">
                        New companies registered
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="bg-white-2 h-100 px-11 pt-11 pb-7">
                {/* <div className="row">
                  <div className="col-4 col-xs-12">
                    <a
                      href="/#"
                      className="font-size-4 font-weight-semibold position-relative text-white bg-allports h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"
                    >
                      <i className="fab fa-linkedin pos-xs-abs-cl font-size-7 ml-xs-4"></i>{" "}
                      <span className="d-none d-xs-block">
                        Import from LinkedIn
                      </span>
                    </a>
                  </div>
                  <div className="col-4 col-xs-12">
                    <a
                      href="/#"
                      className="font-size-4 font-weight-semibold position-relative text-white bg-poppy h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"
                    >
                      <i className="fab fa-google pos-xs-abs-cl font-size-7 ml-xs-4"></i>{" "}
                      <span className="d-none d-xs-block">
                        Import from Google
                      </span>
                    </a>
                  </div>
                  <div className="col-4 col-xs-12">
                    <a
                      href="/#"
                      className="font-size-4 font-weight-semibold position-relative text-white bg-marino h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"
                    >
                      <i className="fab fa-facebook-square pos-xs-abs-cl font-size-7 ml-xs-4"></i>{" "}
                      <span className="d-none d-xs-block">
                        Import from Facebook
                      </span>
                    </a>
                  </div>
                </div>
                <div className="or-devider">
                  <span className="font-size-3 line-height-reset">Or</span>
                </div> */}
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
                  {/* <div className="form-group">
                    <label
                      htmlFor="password2"
                      className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                    >
                      Confirmar Contraseña
                    </label>
                    <div className="position-relative">
                      <input
                        type={showPassSecond ? "password" : "text"}
                        className="form-control"
                        id="password2"
                        placeholder="Ingrese su contraseña"
                      />
                      <a
                        href="/#"
                        className="show-password pos-abs-cr fas mr-6 text-black-2"
                        onClick={(e) => {
                          e.preventDefault();
                          togglePasswordSecond();
                        }}
                      >
                        <span className="d-none">none</span>
                      </a>
                    </div>
                  </div> */}
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
                    {/* <a
                      href="/#"
                      className="font-size-3 text-dodger line-height-reset"
                    >
                      Forget Password
                    </a> */}
                  </div>
                  <div className="form-group mb-8">
                    <button className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase">
                      Registrarse{" "}
                    </button>
                  </div>
                  {/* <p className="font-size-4 text-center heading-default-color">
                    Don’t have an account?{" "}
                    <a href="/#" className="text-primary">
                      Create a free account
                    </a>
                  </p> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </ModalStyled>
  );
};

export default ModalSignUp;
