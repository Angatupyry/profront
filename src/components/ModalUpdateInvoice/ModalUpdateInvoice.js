import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
import { Select } from "../Core";
import AuthService from "../../services/auth.service";
import Error from "../Error/Error";
import Cookies from "js-cookie";
import CalificacionService from "../../services/calificacion.service";
import { TransactionList } from "../../pages/transactions-list";

const ModalStyled = styled(Modal)`
  /* &.modal {
    z-index: 10050;
  } */
`;

const ModalUpdateInvoice = (props) => {
  const calificationArray = [];
  const [calificaciones, setCalificaciones] = React.useState([]);
  const gContext = useContext(GlobalContext);
  const usuario_id = gContext.userId;
  const transaccion_id = gContext.transactionId;
  const [state, setState] = useState({
    loading: true,
    error: null,
    calification: "1",
    calificationLabel: "5 (Excelente)",
    comment: "",
  });

  const fetch = () => {
    props.fetch();
  };

  const handleClose = () => {
    gContext.toggleUpdateInvoiceModal();
  };

  const handleValoration = async () => {
    setState({ loading: true, error: null });
    try {
      const response = await CalificacionService.postComment(
        state.comment,
        state.calification,
        usuario_id,
        transaccion_id
      );
      handleClose();
      gContext.setUserId(null);
      gContext.setTransactionId(null);
      setState({ loading: false, error: null });
      fetch();
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

  const handleSelect = (e) => {
    const newState = { ...state };
    newState["calification"] = e.value;
    newState["calificationLabel"] = e.label;
    setState(newState);
  };

  async function getCalifications() {
    setState({ loading: true, error: null });
    try {
      const califications = await CalificacionService.getCalification();
      califications.data.data.forEach((element) => {
        calificationArray.push({
          value: element.id.toString(),
          label: element.puntuacion + " (" + element.descripcion + ")",
        });
      });
      setCalificaciones(calificationArray);
      setState({
        calification: calificationArray[0].value,
        calificationLabel: calificationArray[0].label,
      });
    } catch (error) {
      console.log(error);
      setState({ loading: false, error: error });
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!calificaciones.length > 0) {
      getCalifications();
    }
    scrollToTop();
  }, [calificaciones]);

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
                            htmlFor="nro_factura"
                            className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                          >
                            Nro. de factura
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ej. 001-005-689"
                            id="nro_factura"
                            // value={props.data.title}
                            // onChange={props.onChange}
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label
                            htmlFor="name"
                            className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                          >
                            Fecha de facturación
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            placeholder="Ingrese su fecha de nacimiento"
                            id="birthDate"
                            // value={state.birthDate}
                            // onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-lg-12 p-0 pr-2 d-flex justify-content-end">
                        <div className="form-group mb-8">
                          <button className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase">
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
