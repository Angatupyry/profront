import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
import AuthService from "../../services/auth.service";
import Error from "../Error/Error";
import Cookies from "js-cookie";
import TransaccionService from "../../services/transaccion.service";

const ModalStyled = styled(Modal)`
  /* &.modal {
    z-index: 10050;
  } */
`;

const ModalConfirmation = (props) => {
  const gContext = useContext(GlobalContext);
  const transaccion_id = gContext.transactionId;
  const [state, setState] = React.useState({
    loading: true,
    error: null,
  });

  const fetch = () => {
    props.fetch();
  };

  const handleClose = () => {
    gContext.toggleConfirmationModal();
  };

  const handleCancelation = async () => {
    setState({ loading: true, error: null });
    try {
      const response = await TransaccionService.updateTransaction(
        transaccion_id,
        "R"
      );
      handleClose();
      gContext.setTransactionId(null);
      setState({ loading: false, error: null });
      fetch();
    } catch (error) {
      console.log(error);
      setState({ loading: false, error: error });
    }
  };

  return (
    <div>
      <ModalStyled
        {...props}
        size="lg"
        centered
        show={gContext.confirmationModalVisible}
        onHide={gContext.toggleConfirmationModal}
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
              <div className="col-lg-12 col-md-12">
                <div className="bg-white-2 h-100 px-11 pt-11 pb-7">
                  <h3 className="font-size-8 line-height-reset pb-4 line-height-1p4">
                    Cancelar servicio
                  </h3>
                  <p className="mb-0 font-size-4">
                    ¿Está seguro que desea cancelar el servicio?
                  </p>
                  <div className="row pt-10 d-flex justify-content-between">
                    <div className="col-3">
                      <button
                        className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase"
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                          handleCancelation();
                        }}
                      >
                        Sí, cancelar{" "}
                      </button>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                      <div className="text-center">
                        <a
                          className="btn btn-outline-black-2 btn-lg text-uppercase"
                          onClick={handleClose}
                        >
                          Cerrar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </ModalStyled>
    </div>
  );
};

export default ModalConfirmation;
