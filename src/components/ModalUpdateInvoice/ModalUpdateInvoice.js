import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
import Error from "../Error/Error";
import FacturacionService from "../../services/facturacion.service";
const ModalStyled = styled(Modal)`
  /* &.modal {
    z-index: 10050;
  } */
`;

const ModalUpdateInvoice = (props) => {
  const gContext = useContext(GlobalContext);
  const [state, setState] = useState({
    loading: true,
    error: null,
    invoice_number: "",
    date: "",
  });

  const fetch = () => {
    props.fetch();
  };

  const handleClose = () => {
    gContext.toggleUpdateInvoiceModal();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleChange = (e) => {
    const newState = { ...state };
    newState[e.target.id] = e.target.value;
    setState(newState);
    console.log(newState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ loading: true, error: null });
    try {
      let id = props.invoiceId;
      let date = new Date(state.date + "T14:00:00").toISOString();
      const response = await FacturacionService.updateInvoice(
        id,
        state.invoice_number,
        date
      );
      handleClose();
      setState({ loading: false, error: null, success: true });
      setTimeout(function () {
        fetch();
      }, 2000);
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
        show={gContext.updateInvoiceModalVisible}
        onHide={gContext.toggleUpdateInvoiceModal}
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
                    Información de factura
                  </h4>

                  <form action="/" onSubmit={props.onSubmit}>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group">
                          <label
                            htmlFor="invoice_number"
                            className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                          >
                            Nro. de factura
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ej. 001-005-689"
                            id="invoice_number"
                            value={state.invoice_number}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label
                            htmlFor="date"
                            className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                          >
                            Fecha de facturación (mm/dd/yyyy)
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            placeholder="Ingrese su fecha de nacimiento"
                            id="date"
                            value={state.date}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-lg-12 p-0 pr-2 d-flex justify-content-end">
                        <div className="form-group mb-8">
                          <button
                            className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase"
                            onClick={handleSubmit}
                          >
                            Facturar{" "}
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
    </div>
  );
};

export default ModalUpdateInvoice;
