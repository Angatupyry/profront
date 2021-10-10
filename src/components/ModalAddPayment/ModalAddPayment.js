import React, { useContext, useState } from "react";
import Router from "next/router";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
import AuthService from "../../services/auth.service";
import Error from "../Error/Error";
import { Select } from "../../components/Core";

const tarjetas = [{ value: "C", label: "Crédito" }];

const ModalStyled = styled(Modal)`
  /* &.modal {
    z-index: 10050;
  } */
`;

const ModalAddPayment = (props) => {
  const [showPass, setShowPass] = useState(true);
  const gContext = useContext(GlobalContext);
  const [state, setState] = React.useState({
    loading: true,
    error: null,
    email: "",
    password: "",
  });

  const handleClose = () => {
    gContext.toggleAddPaymentModal();
  };

  const togglePassword = () => {
    setShowPass(!showPass);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ loading: true, error: null });

    try {
      await AuthService.login(state.email, state.password);
      setState({ loading: false, error: null });
      handleClose();
      Router.push("/dashboard-main");
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
        show={gContext.addPaymentModalVisible}
        onHide={gContext.toggleAddPaymentModal}
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
                      Medio de pago
                    </h3>
                    <p className="mb-0 font-size-4 text-white">
                      Agregue un nuevo medio de pago
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="bg-white-2 h-100 px-11 pt-11 pb-7">
                  <form action="/">
                    <div className="form-group">
                      <label
                        htmlFor="description"
                        className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                      >
                        Descripción
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mi tarjeta visa"
                        id="description"
                        // value={state.email}
                        // onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="select2"
                        className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                      >
                        Tipo de tarjeta
                      </label>
                      <Select
                        options={tarjetas}
                        className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                        border={false}
                        id="select2"
                        // value={{ label: state.sexLabel, value: state.sex }}
                        // onChange={handleSelect}
                      />
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="description"
                        className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                      >
                        Número de tarjeta
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="0214 1544 7845 4445"
                        id="description"
                        // value={state.email}
                        // onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="description"
                        className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                      >
                        Nombre del titular
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Pedro Gimenez"
                        id="description"
                        // value={state.email}
                        // onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="description"
                        className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                      >
                        Fecha de vencimiento
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="12/24"
                        id="description"
                        // value={state.email}
                        // onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="description"
                        className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                      >
                        CVV
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="123"
                        id="description"
                        // value={state.email}
                        // onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="description"
                        className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                      >
                        Datos adicionales
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="54846"
                        id="description"
                        // value={state.email}
                        // onChange={handleChange}
                      />
                    </div>

                    <div className="form-group mb-8">
                      <button
                        className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase"
                        type="submit"
                      >
                        Guardar{" "}
                      </button>
                    </div>
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

export default ModalAddPayment;
