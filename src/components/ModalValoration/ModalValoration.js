import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
import { Select } from "../../components/Core";
import AuthService from "../../services/auth.service";
import Error from "../Error/Error";
import Cookies from "js-cookie";
import CalificacionService from "../../services/calificacion.service";

const ModalStyled = styled(Modal)`
  /* &.modal {
    z-index: 10050;
  } */
`;

const ModalValoration = (props) => {
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

  const handleClose = () => {
    gContext.toggleValorationModal();
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
        show={gContext.valorationModalVisible}
        onHide={gContext.toggleValorationModal}
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
                    Valorar servicio
                  </h3>
                  <p className="mb-0 font-size-4">
                    En un rango del 1 al 5, ¿qué le pareció el servicio?
                  </p>
                  <div className="row no-gutters mt-5">
                    <div className="col-lg-4 col-md-4">
                      <div className="form-group">
                        <label
                          htmlFor="select2"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                          Calificación
                        </label>
                        <Select
                          options={calificaciones}
                          className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                          border={false}
                          id="calification"
                          value={{
                            label: state.calificationLabel,
                            value: state.calification,
                          }}
                          onChange={handleSelect}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row no-gutters mt-5">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label
                          htmlFor="lastName"
                          className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                        >
                          Comentario
                        </label>
                        <textarea
                          type="text"
                          className="form-control"
                          placeholder="Ingrese un comentario"
                          id="comment"
                          cols="40"
                          rows="5"
                          value={state.comment}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row pt-10 d-flex justify-content-between">
                    <div className="col-3">
                      <button
                        className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase"
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                          handleValoration();
                        }}
                      >
                        Valorar{" "}
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

export default ModalValoration;
