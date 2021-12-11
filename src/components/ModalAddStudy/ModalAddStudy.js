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
import Cookies from "js-cookie";
import ProfesionalService from "../../services/profesional.service";

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

const meses = [
  { value: "1", label: "Enero" },
  { value: "2", label: "Febrero" },
  { value: "3", label: "Marzo" },
  { value: "4", label: "Abril" },
  { value: "5", label: "Mayo" },
  { value: "6", label: "Junio" },
  { value: "7", label: "Julio" },
  { value: "8", label: "Agosto" },
  { value: "9", label: "Setiembre" },
  { value: "10", label: "Octubre" },
  { value: "11", label: "Noviembre" },
  { value: "12", label: "Diciembre" },
];

const anhos = [
  { value: "2021", label: "2021" },
  { value: "2022", label: "2022" },
  { value: "2023", label: "2023" },
  { value: "2024", label: "2024" },
  { value: "2025", label: "2025" },
  { value: "2026", label: "2026" },
  { value: "2027", label: "2027" },
  { value: "2028", label: "2028" },
  { value: "2029", label: "2029" },
  { value: "2030", label: "2030" },
];

const getTodaysdate = (e) => {
  var today = new Date();
  return (
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
  );
};

const getAYearFromNowDate = (e) => {
  var date = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
  return (
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
};

const ModalAddStudy = (props) => {
  const carreraArray = [];
  const [studyData, setStudyData] = useState({
    descripcion: "",
    carrera_universitaria: "",
    carrera_universitaria_label: "",
    profesional_id: "",
    fecha_desde: "",
    fecha_hasta: "",
    lugar: "",
  });
  const [state, setState] = useState({
    loading: true,
    error: null,
  });
  const [carrera, setCarrera] = useState(null);

  const gContext = useContext(GlobalContext);
  const handleClose = () => {
    gContext.toggleAddStudyModal();
  };

  const fetch = () => {
    props.fetch();
  };

  async function fetchData() {
    scrollToTop();
    setState({ loading: true, error: null });
    try {
      const carreras = await ProfesionalService.getCareers();
      carreras.data.data.forEach((element) => {
        carreraArray.push({
          value: element.id.toString(),
          label: element.descripcion,
        });
      });
      setCarrera(carreraArray);
      setStudyData({
        carrera_universitaria: carreraArray[0].value,
        carrera_universitaria_label: carreraArray[0].label,
        fecha_desde: getTodaysdate(),
        fecha_hasta: getAYearFromNowDate(),
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
    const newState = { ...studyData };
    newState[e.target.id] = e.target.value;
    setStudyData(newState);
    console.log(newState);
  };

  const handleCareer = (e) => {
    const newState = { ...studyData };
    newState["carrera_universitaria"] = e.value;
    newState["carrera_universitaria_label"] = e.label;
    setStudyData(newState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ loading: true, error: null });
    try {
      let cliente_id = JSON.parse(Cookies.get("user")).id;
      const response = await ProfesionalService.postStudies(
        studyData.descripcion,
        studyData.lugar,
        cliente_id,
        studyData.fecha_desde,
        studyData.fecha_hasta
      );
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
    if (carrera == undefined || carrera == null) {
      fetchData();
    }
  }, [carrera]);

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
        {state.success &&
          showSuccessAlert("Estudio académico agregado exitosamente.")}
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
                  Estudio académico
                </h4>
                <form action="/" onSubmit={handleSubmit}>
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
                      value={studyData.descripcion}
                      onChange={handleChange}
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
                      value={studyData.lugar}
                      onChange={handleChange}
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
                              value={studyData.fecha_desde}
                              onChange={handleChange}
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
                              value={studyData.fecha_hasta}
                              onChange={handleChange}
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

export default ModalAddStudy;
