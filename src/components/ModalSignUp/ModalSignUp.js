import React, { useContext, useState, useEffect } from "react";
import Router from "next/router";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
import AuthService from "../../services/auth.service";
import BuscadorService from "../../services/buscador.service";
import { Select } from "../../components/Core";
import Error from "../Error/Error";
import { getUserType, getUserTypeId, constants } from "../../utils";
import {
  scrollToTop,
  isEmpty,
  showErrorAlert,
  showSuccessAlert,
  showWarningAlert,
  getTransactionStates,
} from "../../utils/utils";
import Cookies from "js-cookie";

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

const pais = [{ value: "1", label: "Paraguay" }];

const ModalSignUp = (props) => {
  const cityArray = [];
  const docTypeArray = [];
  const neighborhoodArray = [];
  const [city, setCity] = React.useState([]);
  const [docType, setDocType] = React.useState([]);
  const [neighborhood, setNeighborhood] = React.useState([]);
  const [showPassFirst, setShowPassFirst] = useState(true);
  const [showPassSecond, setShowPassSecond] = useState(true);
  const [state, setState] = useState({
    loading: true,
    error: null,
    fieldsIncomplete: false,
    email: "",
    password: "",
    name: "",
    lastName: "",
    birthDate: "",
    city: "",
    cityLabel: "",
    docType: "",
    docTypeLabel: "",
    sex: sexo[0].value,
    sexLabel: sexo[0].label,
    isProfessional: false,
    document_number: "",
    phone_number: "",
    phone_country: pais[0].value,
    phone_type_id: 0,
    isCellPhone: false,
    addressStreet: "",
    addressNumber: 0,
    neighborhood: 0,
    neighborhoodLabel: "",
  });

  const gContext = useContext(GlobalContext);
  const handleClose = () => {
    gContext.toggleSignUpModal();
  };

  const togglePasswordFirst = () => {
    setShowPassFirst(!showPassFirst);
  };

  const stateIsNotEmpty = () => {
    let stateArr = [
      state.name,
      state.lastName,
      state.email,
      state.birthDate,
      state.sex,
      state.password,
      state.docType,
      state.document_number,
      state.phone_number,
      state.addressStreet,
      state.addressNumber,
      state.city,
      state.neighborhood,
    ];

    for (const element of stateArr) {
      if (typeof element == "undefined" || element == null || element == "") {
        return false;
        break;
      }
    }
    return true;
  };

  const toggleIsProfessional = () => {
    const newState = { ...state };
    if (newState.isProfessional) {
      newState["isProfessional"] = false;
    } else {
      newState["isProfessional"] = true;
    }
    setState(newState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ loading: true, error: null });

    try {
      getUserType();
      getTransactionStates();
      if (stateIsNotEmpty()) {
        const response = await AuthService.register(
          state.name,
          state.lastName,
          state.email,
          state.birthDate,
          state.sex,
          state.password,
          state.isProfessional,
          state.docType,
          state.document_number,
          state.phone_number,
          1,
          1,
          state.isCellPhone,
          state.addressStreet,
          state.addressNumber,
          state.city,
          state.neighborhood
        );
        setState({ loading: false, error: null, success: true });
        console.log(response);
        setTimeout(() => {
          handleClose();
          setState({ loading: false, error: null, success: false });
        }, 2000);
      } else {
        setState({ fieldsIncomplete: true });
      }
    } catch (error) {
      console.log(error);
      error.message = ERRORMSG;
      setState({ loading: false, error: error });
      setTimeout(() => {
        handleClose();
        setState({ loading: false, error: null, success: false });
      }, 2000);
    }
  };

  async function getNeighborhoods(cityId) {
    try {
      const barrio = await AuthService.getNeighborhoods(cityId);
      barrio.data.data.forEach((element) => {
        neighborhoodArray.push({
          value: element.id.toString(),
          label: element.nombre,
        });
      });
      return neighborhoodArray;
    } catch (error) {
      console.log(error);
      setState({ loading: false, error: error });
    }
  }

  async function updateNeighborhoods(cityId) {
    const arr = await getNeighborhoods(cityId);
    setNeighborhood(arr);
    return arr;
  }

  const handleChange = (e) => {
    const newState = { ...state };
    newState[e.target.id] = e.target.value;
    setState(newState);
  };

  const handleSexSelect = (e) => {
    const newState = { ...state };
    newState["sex"] = e.value;
    newState["sexLabel"] = e.label;
    setState(newState);
  };

  const handleDocTypeSelect = (e) => {
    const newState = { ...state };
    newState["docType"] = e.value;
    newState["docTypeLabel"] = e.label;
    setState(newState);
  };

  const handleCitySelect = async (e) => {
    const newState = { ...state };
    const arr = await updateNeighborhoods(e.value);
    newState["country"] = pais[0].value;
    newState["countryLabel"] = pais[0].label;
    newState["city"] = e.value;
    newState["cityLabel"] = e.label;
    newState["neighborhood"] = arr[0].value;
    newState["neighborhoodLabel"] = arr[0].label;
    setState(newState);
  };

  const handleNeighborhoodSelect = (e) => {
    const newState = { ...state };
    newState["neighborhood"] = e.value;
    newState["neighborhoodLabel"] = e.label;
    setState(newState);
  };

  useEffect(() => {
    scrollToTop();
    async function fetchData() {
      setState({ loading: true, error: null });
      try {
        const ciudades = await BuscadorService.getCities();
        ciudades.data.data.forEach((element) => {
          cityArray.push({
            value: element.id.toString(),
            label: element.nombre,
          });
        });

        const tipoDocumento = await AuthService.getDocumentTypes();
        tipoDocumento.data.data.forEach((element) => {
          docTypeArray.push({
            value: element.id.toString(),
            label: element.abreviatura + "( " + element.nombre + " )",
          });
        });

        setCity(cityArray);
        setDocType(docTypeArray);
        const neighborhoodArray = await getNeighborhoods(cityArray[0].value);
        setNeighborhood(neighborhoodArray);
        setState({
          city: cityArray[0].value,
          cityLabel: cityArray[0].label,
          country: pais[0].value,
          countryLabel: pais[0].label,
          sex: sexo[0].value,
          sexLabel: sexo[0].label,
          docType: docTypeArray[0].value,
          docTypeLabel: docTypeArray[0].label,
          neighborhood: neighborhoodArray[0].value,
          neighborhoodLabel: neighborhoodArray[0].label,
        });
      } catch (error) {
        console.log(error);
        setState({ loading: false, error: error });
      }
    }
    if (isEmpty(city)) {
      fetchData();
    }
  }, [city]);

  const handleRadioBtn = async (e) => {
    let id = e.target.getAttribute("id");
    const newState = { ...state };
    if (id.toLowerCase() == "cellphone") {
      newState["isCellPhone"] = true;
    } else {
      newState["isCellPhone"] = false;
    }

    setState(newState);
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
        {state.error && <Error error={state.error} />}
        {state.fieldsIncomplete &&
          showWarningAlert("Por favor complete todos los campos.")}
        {state.success &&
          showSuccessAlert(
            "Registro exitoso.Por favor inicie sesión con su nueva cuenta."
          )}
        <button
          type="button"
          className="circle-32 btn-reset bg-white pos-abs-tr mt-n6 mr-lg-n6 focus-reset shadow-10"
          onClick={handleClose}
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="login-modal-main bg-white rounded-8 overflow-hidden">
          <div className="row no-gutters">
            <div className="col-lg-12">
              <div className="bg-white-2 h-100 px-11 pt-11 pb-7">
                <h3 className="font-size-8 line-height-reset pb-4 line-height-1p4">
                  Crear cuenta
                </h3>
                <form action="/" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-6">
                      {" "}
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
                          placeholder="ej. Alberto"
                          id="name"
                          value={state.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-6">
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
                          placeholder="ej. Sosa"
                          id="lastName"
                          value={state.lastName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
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
                          placeholder="ej. ejemplo@gmail.com"
                          id="email"
                          value={state.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      {" "}
                      <div className="form-group">
                        <label
                          htmlFor="name"
                          className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                        >
                          Fecha de nacimiento
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          placeholder="Ingrese su fecha de nacimiento"
                          id="birthDate"
                          value={state.birthDate}
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
                          Sexo
                        </label>
                        <Select
                          options={sexo}
                          className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                          border={false}
                          id="sex"
                          value={{ label: state.sexLabel, value: state.sex }}
                          onChange={handleSexSelect}
                        />
                      </div>
                    </div>
                    <div className="col-6">
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
                    </div>
                  </div>
                  <h6 className="font-size-6 line-height-reset pb-4 line-height-1p4">
                    Documento
                  </h6>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label
                          htmlFor="select2"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                          Tipo documento
                        </label>
                        <Select
                          options={docType}
                          className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                          border={false}
                          id="docType"
                          value={{
                            label: state.docTypeLabel,
                            value: state.docType,
                          }}
                          onChange={handleDocTypeSelect}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label
                          htmlFor="document_number"
                          className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                        >
                          Nro documento
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="ej. 123456"
                          id="document_number"
                          value={state.document_number}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <h6 className="font-size-6 line-height-reset pb-4 line-height-1p4">
                    Dirección
                  </h6>

                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label
                          htmlFor="addressStreet"
                          className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                        >
                          Calle
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Avda. xxx"
                          id="addressStreet"
                          value={state.addressStreet}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label
                          htmlFor="addressNumber"
                          className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                        >
                          Número de casa/edificio
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="ej. 456"
                          id="addressNumber"
                          value={state.addressNumber}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label
                          htmlFor="country"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                          País
                        </label>
                        <Select
                          options={pais}
                          className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                          border={false}
                          id="country"
                          value={{ label: pais[0].label, value: pais[0].value }}
                          isDisabled={true}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label
                          htmlFor="city"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                          Ciudad
                        </label>
                        <Select
                          options={city}
                          className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                          border={false}
                          id="city"
                          value={{ label: state.cityLabel, value: state.city }}
                          onChange={handleCitySelect}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label
                          htmlFor="neighborhood"
                          className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                        >
                          Barrio
                        </label>
                        <Select
                          options={neighborhood}
                          className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                          border={false}
                          id="neighborhood"
                          value={{
                            label: state.neighborhoodLabel,
                            value: state.neighborhood,
                          }}
                          onChange={handleNeighborhoodSelect}
                        />
                      </div>
                    </div>
                  </div>
                  <h6 className="font-size-6 line-height-reset pb-4 line-height-1p4">
                    Teléfono
                  </h6>

                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label
                          htmlFor="phone_number"
                          className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                        >
                          Número de teléfono
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="ej. 0987 xxx xxx"
                          id="phone_number"
                          value={state.phone_number}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-6 d-flex align-items-end">
                      <div className="form-group d-flex flex-wrap justify-content-start mb-1">
                        <label
                          htmlFor="cellphone"
                          className="gr-check-input d-flex  mr-3"
                        >
                          <input
                            className="d-none"
                            type="radio"
                            name="number"
                            id="cellphone"
                            onChange={handleRadioBtn}
                          />
                          <span className="checkbox mr-5"></span>
                          <span className="font-size-4 mb-0 line-height-reset d-block font-weight-semibold">
                            <div className="text-primary">Celular</div>
                          </span>
                        </label>
                      </div>
                      <div className="form-group d-flex flex-wrap justify-content-start mb-1">
                        <label
                          htmlFor="fixedNumber"
                          className="gr-check-input d-flex  mr-3"
                        >
                          <input
                            className="d-none"
                            type="radio"
                            name="number"
                            id="fixedNumber"
                            onChange={handleRadioBtn}
                          />
                          <span className="checkbox mr-5"></span>
                          <span className="font-size-4 mb-0 line-height-reset d-block font-weight-semibold">
                            <div className="text-primary">Línea fija</div>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <h6 className="font-size-6 line-height-reset pb-4 line-height-1p4">
                    ¿Es usted un profesional?
                  </h6>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group d-flex flex-wrap justify-content-start mb-1">
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
                              Sí, soy profesional
                            </a>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-9"></div>
                    <div className="col-3">
                      <div className="form-group mb-8">
                        <button className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase ">
                          Registrarse{" "}
                        </button>
                      </div>
                    </div>
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

export default ModalSignUp;
