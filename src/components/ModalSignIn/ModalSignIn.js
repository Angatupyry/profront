import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
import AuthService from "../../services/auth.service";
import Error from "../Error/Error";
import Cookies from "js-cookie";
import { getUserType } from "../../utils";

const ModalStyled = styled(Modal)`
  /* &.modal {
    z-index: 10050;
  } */
`;

const ModalSignIn = (props) => {
  const [showPass, setShowPass] = useState(true);
  const gContext = useContext(GlobalContext);
  const [state, setState] = React.useState({
    loading: true,
    error: null,
    email: "",
    password: "",
  });

  const handleClose = () => {
    gContext.toggleSignInModal();
  };

  const togglePassword = () => {
    setShowPass(!showPass);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ loading: true, error: null });

    try {
      const response = await AuthService.login(state.email, state.password);
      setState({ loading: false, error: null });
      Cookies.set("token", JSON.stringify(response.data.token));
      Cookies.set("user", JSON.stringify(response.data.user));
      getUserType();
      handleClose();
    } catch (error) {
      console.log(error);
      setState({ loading: false, error: error });
    }
  };

  const handleChange = (e) => {
    const newState = { ...state };
    newState[e.target.id] = e.target.value;
    setState(newState);
  };

  return (
    <div>
      <ModalStyled
        {...props}
        size="lg"
        centered
        show={gContext.signInModalVisible}
        onHide={gContext.toggleSignInModal}
      >
        <Modal.Body className="p-0">
          {/* {state.error && <Error error={state.error} />} */}
          <button
            type="button"
            className="circle-32 btn-reset bg-white pos-abs-tr mt-md-n6 mr-lg-n6 focus-reset z-index-supper"
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
                      Bienvenido/a
                    </h3>
                    <p className="mb-0 font-size-4 text-white">
                      Inicie sesión para acceder a su cuenta y contratar
                      profesionales.
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
                        Log in with LinkedIn
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
                        Log in with Google
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
                        Log in with Facebook
                      </span>
                    </a>
                  </div>
                </div> */}
                  {/* <div className="or-devider">
                  <span className="font-size-3 line-height-reset ">Or</span>
                </div> */}
                  <form action="/" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label
                        htmlFor="email"
                        className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                      >
                        E-mail
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="ejemplo@gmail.com"
                        id="email"
                        value={state.email}
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
                          type={showPass ? "password" : "text"}
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
                            togglePassword();
                          }}
                        >
                          <span className="d-none">none</span>
                        </a>
                      </div>
                    </div>
                    {/* <div className="form-group d-flex flex-wrap justify-content-between">
                    <label
                      htmlFor="terms-check"
                      className="gr-check-input d-flex  mr-3"
                    >
                      <input
                        className="d-none"
                        type="checkbox"
                        id="terms-check"
                      />
                      <span className="checkbox mr-5"></span>
                      <span className="font-size-3 mb-0 line-height-reset mb-1 d-block">
                        Remember password
                      </span>
                    </label>
                    <a
                      href="/#"
                      className="font-size-3 text-dodger line-height-reset"
                    >
                      Forget Password
                    </a>
                  </div> */}
                    <div className="form-group mb-8">
                      <button
                        className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase"
                        type="submit"
                      >
                        Iniciar sesión{" "}
                      </button>
                    </div>
                    <p className="font-size-4 text-center heading-default-color">
                      ¿No posee una cuenta?{" "}
                      <a href="/#" className="text-primary">
                        Cree una cuenta gratuita
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </ModalStyled>
    </div>
  );
};

export default ModalSignIn;
