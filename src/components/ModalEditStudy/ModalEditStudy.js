import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
import { Select } from "../Core";
import Error from "../Error/Error";
import {
  scrollToTop,
  showErrorAlert,
  showSuccessAlert,
  showWarningAlert,
} from "../../utils/utils";
import BuscadorService from "../../services/buscador.service";
import ProfesionalService from "../../services/profesional.service";
import Cookies from "js-cookie";

const ERRORMSG =
  "Lo sentimos. Ha ocurrido un error, por favor intente más tarde.";
const ModalStyled = styled(Modal)`
  /* &.modal {
    z-index: 10050;
  } */
`;

const servicio_modalidad = [{ value: "1", label: "Presencial" }];
const servicio_tipo = [{ value: "1", label: "Por hora" }];

const ModalEditStudy = (props) => {
  const serviceArray = [];
  const [state, setState] = useState({
    loading: true,
    error: null,
  });
  const [service, setService] = useState(null);
  const gContext = useContext(GlobalContext);
  const handleClose = () => {
    gContext.toggleEditStudyModal();
  };

  const handleService = (e) => {
    const newState = { ...serviceData };
    newState["servicio"] = e.value;
    newState["servicio_label"] = e.label;
    setServiceData(newState);
  };

  async function fetchData() {
    scrollToTop();
    setState({ loading: true, error: null });
    try {
      const servicios = await BuscadorService.getServices();
      servicios.data.data.forEach((element) => {
        serviceArray.push({
          value: element.id.toString(),
          label: element.descripcion,
        });
      });
      setService(serviceArray);
      setState({
        loading: false,
        error: null,
      });
    } catch (error) {
      console.log(error);
      setState({ loading: false, error: error });
    }
  }

  useEffect(() => {
    if (service == undefined || service == null) {
      fetchData();
    }
  }, [service]);

  return (
    <ModalStyled
      {...props}
      size="lg"
      centered
      show={gContext.editStudyModalVisible}
      onHide={gContext.toggleEditStudyModal}
    >
      <Modal.Body className="p-0">
        {state.error && <Error error={state.error} />}
        {state.fieldsIncomplete &&
          showWarningAlert("Por favor complete todos los campos.")}
        {state.success && showSuccessAlert("Servicio agregado exitosamente.")}
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
                  Editar servicio
                </h4>
                <form action="/" onSubmit={props.onSubmit}>
                  <div className="form-group">
                    <label
                      htmlFor="descripcion"
                      className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                    >
                      Título
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ej. Lic en lengua portuguesa"
                      id="descripcion"
                      value={props.studyData.descripcion}
                      onChange={props.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="lugar"
                      className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                    >
                      Lugar de estudio
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ej. Universidad Nacional de Asunción"
                      id="lugar"
                      value={props.studyData.lugar}
                      onChange={props.onChange}
                    />
                  </div>

                  <div className="row no-gutters">
                    <div className="col-lg-6 col-md-6 p-0 pr-2">
                      <div className="row no-gutters">
                        <div className="col-12 p-0 pr-2">
                          <div className="form-group">
                            <label
                              htmlFor="fecha_desde"
                              className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                            >
                              Fecha inicio (mm/dd/yyyy)
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              placeholder="Ingrese su fecha de nacimiento"
                              id="fecha_desde"
                              value={props.studyData.fecha_desde}
                              onChange={props.onChange}
                              autoComplete="off"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 p-0 pr-2">
                      <div className="row no-gutters">
                        <div className="col-12 p-0 pr-2">
                          <div className="form-group">
                            <label
                              htmlFor="fecha_hasta"
                              className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                            >
                              Fecha fin (mm/dd/yyyy)
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              placeholder="Ingrese su fecha de nacimiento"
                              id="fecha_hasta"
                              value={props.studyData.fecha_hasta}
                              onChange={props.onChange}
                              autoComplete="off"
                            />
                          </div>
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

export default ModalEditStudy;
