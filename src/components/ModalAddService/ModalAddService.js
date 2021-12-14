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

const ModalAddService = (props) => {
  const serviceArray = [];
  const [serviceData, setServiceData] = useState({
    servicio: "",
    servicio_label: "",
    servicio_modalidad: "",
    servicio_modalidad_label: "",
    servicio_tipo: "",
    servicio_tipo_label: "",
    tarifa: 0,
    accion: "post",
  });
  const [state, setState] = useState({
    loading: true,
    error: null,
  });
  const [service, setService] = useState(null);
  const gContext = useContext(GlobalContext);
  const handleClose = () => {
    gContext.toggleAddServiceModal();
  };

  const fetch = () => {
    props.fetch();
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
      setServiceData({
        servicio_label: serviceArray[0].label,
        servicio: serviceArray[0].value,
        servicio_modalidad: servicio_modalidad[0].value,
        servicio_modalidad_label: servicio_modalidad[0].label,
        servicio_tipo: servicio_tipo[0].value,
        servicio_tipo_label: servicio_tipo[0].label,
      });
      setState({
        loading: false,
        error: null,
      });
    } catch (error) {
      console.log(error);
      setState({ loading: false, error: error });
    }
  }

  const handleChange = (e) => {
    const newState = { ...serviceData };
    newState[e.target.id] = e.target.value;
    newState["accion"] = "post";
    setServiceData(newState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ loading: true, error: null });
    try {
      let cliente_id = JSON.parse(Cookies.get("user")).id;
      let persona_id = JSON.parse(Cookies.get("user")).persona_id;
      const response = await ProfesionalService.postProfesionalService(
        serviceData.servicio,
        cliente_id,
        serviceData.tarifa,
        serviceData.servicio_tipo,
        serviceData.servicio_modalidad
      );
      console.log(response);
      scrollToTop();
      setState({
        loading: false,
        error: null,
        success: true,
      });

      fetch();

      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (error) {
      scrollToTop();
      console.log(error);
      setState({ loading: false, error: error });
    }
  };

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
      show={gContext.addServiceModalVisible}
      onHide={gContext.toggleAddServiceModal}
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
                  Servicio
                </h4>
                <form action="/" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label
                          htmlFor="servicio"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                          Servicio
                        </label>
                        <Select
                          options={service}
                          className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                          border={false}
                          id="servicio"
                          value={{
                            label: serviceData.servicio_label,
                            value: serviceData.servicio,
                          }}
                          onChange={handleService}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label
                          htmlFor="tarifa"
                          className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                        >
                          Tarifa (Gs.)
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="ej. 50.000"
                          id="tarifa"
                          autoComplete="off"
                          value={serviceData.tarifa}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label
                          htmlFor="select2"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                          Servicio tipo
                        </label>
                        <Select
                          options={servicio_tipo}
                          className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 isDisabled"
                          border={false}
                          value={{
                            label: serviceData.servicio_tipo_label,
                            value: serviceData.servicio_tipo,
                          }}
                          isDisabled={true}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label
                          htmlFor="select2"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                          Servicio modalidad
                        </label>
                        <Select
                          options={servicio_tipo}
                          className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 isDisabled"
                          border={false}
                          id="sex"
                          value={{
                            label: serviceData.servicio_modalidad_label,
                            value: serviceData.servicio_modalidad,
                          }}
                          isDisabled={true}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row no-gutters">
                    <div className="col-lg-12 p-0 pr-2 d-flex justify-content-end">
                      <div className="form-group mb-8">
                        <button
                          className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase"
                          type="submit"
                        >
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

export default ModalAddService;
