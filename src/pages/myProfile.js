import React, { useEffect, useContext, useState } from "react";
import Link from "next/link";

import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import { scrollToTop, showErrorAlert, showSuccessAlert } from "../utils/utils";
import { getUserTypeId, constants } from "../utils";
import ModalAddStudies from "../components/ModalAddStudies";
import GlobalContext from "../context/GlobalContext";
import ModalAddWorkExperience from "../components/ModalAddWorkExperience";
import ModalAddService from "../components/ModalAddService";
import UsuarioService from "../services/usuario.service";
import BuscadorService from "../services/buscador.service";
import AuthService from "../services/auth.service";
import Cookies from "js-cookie";

const ERRORMSG =
  "Lo sentimos. Ha ocurrido un error, por favor intente más tarde.";

const sexo = [
  { value: "M", label: "Masculino" },
  { value: "F", label: "Femenino" },
];

const pais = [{ value: "1", label: "Paraguay" }];

const MyProfile = () => {
  const departmentArray = [];
  const cityArray = [];
  const docTypeArray = [];
  const neighborhoodArray = [];
  const [department, setDepartment] = React.useState([]);
  const [city, setCity] = React.useState([]);
  const [sex, setSex] = React.useState({
    label: "",
    value: "",
  });
  const [docType, setDocType] = React.useState([]);
  const [neighborhood, setNeighborhood] = React.useState([]);
  const gContext = useContext(GlobalContext);
  const [profesionalUserTypeId, setProfesionalUserTypeId] = React.useState("");
  const [personalData, setPersonalData] = React.useState(null);

  const [state, setState] = useState({
    loading: true,
    error: null,
  });

  const [workExperience, setWorkExperience] = useState({
    title: "",
    company: "",
    dateFrom: "",
    dateTo: "",
  });

  async function updateNeighborhoods(cityId) {
    try {
      const barrio = await AuthService.getNeighborhoods(cityId);
      let arr = [];
      barrio.data.data.forEach((element) => {
        arr.push({
          value: element.id.toString(),
          label: element.nombre,
        });
      });
      setNeighborhood(arr);
      return arr;
    } catch (error) {
      console.log(error);
      setState({ loading: false, error: error });
    }
  }

  async function updateCities(departmentId) {
    try {
      const ciudad = await BuscadorService.getCities(departmentId);
      let arr = [];
      ciudad.data.data.forEach((element) => {
        arr.push({
          value: element.id.toString(),
          label: element.nombre,
        });
      });
      setCity(arr);
      return arr;
    } catch (error) {
      console.log(error);
      setState({ loading: false, error: error });
    }
  }

  async function getNeighborhoods(cityId) {
    try {
      const barrio = await AuthService.getNeighborhoods(cityId);
      let arr = [];
      barrio.data.data.forEach((element) => {
        arr.push({
          value: element.id.toString(),
          label: element.nombre,
        });
      });
      return arr;
    } catch (error) {
      console.log(error);
      setState({ loading: false, error: error });
    }
  }

  async function fetchData() {
    scrollToTop();
    setState({ loading: true, error: null });
    try {
      let cliente_id = JSON.parse(Cookies.get("user")).id;
      const personalData = await UsuarioService.getProfilePersonalData(
        cliente_id
      );

      const departamentos = await BuscadorService.getDepartments();
      departamentos.data.data.forEach((element) => {
        departmentArray.push({
          value: element.id.toString(),
          label: element.nombre,
        });
      });

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

      const neighborhoodArray = await getNeighborhoods(
        personalData.data.data.persona_direccion[0].ciudad.id
      );

      const sexLabel = personalData.data.data.sexo_masculino
        ? sexo[0].label
        : sexo[1].label;

      const sexValue = personalData.data.data.sexo_masculino
        ? sexo[0].value
        : sexo[1].value;

      setDepartment(departmentArray);
      setCity(cityArray);
      setDocType(docTypeArray);
      setNeighborhood(neighborhoodArray);
      setSex({ label: sexLabel, value: sexValue });
      console.log(personalData.data.data);
      setPersonalData(personalData.data.data);
      setState({ loading: false, error: null });
    } catch (error) {
      console.log(error);
      setState({ loading: false, error: error });
    }
  }

  const handleSex = (e) => {
    const newState = { ...personalData };
    const newSex = { ...sex };
    if (e.value.toUpperCase() == "M") {
      newState["sexo_masculino"] = true;
      newSex["label"] = sexo[0].label;
      newSex["value"] = sexo[0].value;
    } else {
      newState["sexo_masculino"] = false;
      newSex["label"] = sexo[1].label;
      newSex["value"] = sexo[1].value;
    }

    setSex(newSex);
    setPersonalData(newState);
  };

  const handleAddress = (e) => {
    const newState = { ...personalData };
    const newAddress = { ...personalData.persona_direccion[0] };
    newAddress[e.target.id] = e.target.value;
    newState.persona_direccion[0] = newAddress;
    setPersonalData(newState);
    console.log(newState);
  };

  const handleDocument = (e) => {
    const newState = { ...personalData };
    const newDocument = { ...personalData.persona_documento[0] };
    newDocument[e.target.id] = e.target.value;
    newState.persona_documento[0] = newDocument;
    setPersonalData(newState);
    console.log(newState);
  };

  const handleDocumentType = (e) => {
    const newState = { ...personalData };
    const newDocumentType = {
      ...personalData.persona_documento[0].documento_tipo,
    };

    let arr = e.label.split("(");
    newDocumentType["id"] = e.value;
    newDocumentType["nombre"] = arr[1].replace(/\s/g, "").replace(")", "");
    newDocumentType["abreviatura"] = arr[0].replace(/\s/g, "");
    newState.persona_documento[0].documento_tipo = newDocumentType;
    setPersonalData(newState);
    console.log(newState);
  };

  const handleDepartment = async (e) => {
    const newState = { ...personalData };
    const newDepartment = {
      ...personalData.persona_direccion[0].ciudad.departamento,
    };

    const newCity = {
      ...personalData.persona_direccion[0].ciudad,
    };

    const newNeighborhood = {
      ...personalData.persona_direccion[0].barrio,
    };

    newDepartment["id"] = e.value;
    newDepartment["nombre"] = e.label;

    const cities = await updateCities(e.value);

    newCity["id"] = cities[0].value;
    newCity["nombre"] = cities[0].label;
    const neighborhoods = await updateNeighborhoods(cities[0].value);

    newNeighborhood["id"] = neighborhoods[0].value;
    newNeighborhood["nombre"] = neighborhoods[0].label;

    newState.persona_direccion[0].ciudad = newCity;
    newState.persona_direccion[0].ciudad.departamento = newDepartment;
    newState.persona_direccion[0].barrio = newNeighborhood;

    setPersonalData(newState);
  };

  const handleCity = async (e) => {
    const newState = { ...personalData };

    const newDepartment = {
      ...personalData.persona_direccion[0].ciudad.departamento,
    };

    const newCity = {
      ...personalData.persona_direccion[0].ciudad.departamento,
    };

    const newNeighborhood = {
      ...personalData.persona_direccion[0].barrio,
    };

    newCity["id"] = e.value;
    newCity["nombre"] = e.label;
    const neighborhoods = await updateNeighborhoods(e.value);

    newNeighborhood["id"] = neighborhoods[0].value;
    newNeighborhood["nombre"] = neighborhoods[0].label;

    newState.persona_direccion[0].ciudad = newCity;
    newState.persona_direccion[0].ciudad.departamento = newDepartment;
    newState.persona_direccion[0].barrio = newNeighborhood;

    setPersonalData(newState);
  };

  const handleNeighborhood = async (e) => {
    const newState = { ...personalData };
    const newNeighborhood = {
      ...personalData.persona_direccion[0].barrio,
    };

    newNeighborhood["id"] = e.value;
    newNeighborhood["nombre"] = e.label;

    newState.persona_direccion[0].barrio = newNeighborhood;

    setPersonalData(newState);
  };

  const handlePhoneNumber = (e) => {
    const newState = { ...personalData };
    const newPhone = { ...personalData.persona_telefono[0] };
    newPhone[e.target.id] = e.target.value;
    newState.persona_telefono[0] = newPhone;
    setPersonalData(newState);
    console.log(newState);
  };

  const handleRadioBtn = async (e) => {
    let id = e.target.getAttribute("id");
    let isCellPhone = false;
    if (id.toLowerCase() == "cellphone") {
      isCellPhone = true;
    }
    const newState = { ...personalData };
    const newPhone = { ...personalData.persona_telefono[0] };
    newPhone["celular"] = isCellPhone;
    newState.persona_telefono[0] = newPhone;
    setPersonalData(newState);
    console.log(newState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ loading: true, error: null });

    try {
      const updatePerson = await UsuarioService.updatePerson(
        personalData.id,
        personalData.nombre,
        personalData.apellido,
        personalData.nacionalidad_id,
        personalData.fecha_nacimiento,
        personalData.fecha_alta,
        personalData.sexo_masculino
      );
      const updatePersonDocument = await UsuarioService.updatePersonDocument(
        personalData.persona_documento[0].id,
        personalData.persona_documento[0].numero,
        personalData.persona_documento[0].documento_tipo.id
      );

      const updatePersonAddress = await UsuarioService.updatePersonAddress(
        personalData.persona_direccion[0].id,
        personalData.persona_direccion[0].direccion,
        personalData.persona_direccion[0].numero,
        personalData.persona_direccion[0].ciudad.id,
        personalData.persona_direccion[0].barrio.id,
        personalData.persona_direccion[0].ciudad.departamento.id
      );

      const updatePersonPhone = await UsuarioService.updatePersonPhone(
        personalData.persona_telefono[0].id,
        personalData.persona_telefono[0].numero,
        personalData.persona_telefono[0].celular
      );

      setState({ loading: false, error: null, success: true });
    } catch (error) {
      console.log(error);
      error.message = ERRORMSG;
      setState({ loading: false, error: error });
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    if (personalData == undefined || null) {
      fetchData();
    }
    let profesionalUserTypeId = getUserTypeId(
      constants.CLIENT_TYPE.PROFESIONAL
    );
    setProfesionalUserTypeId(profesionalUserTypeId);
  }, [personalData]);

  const handleChange = (e) => {
    const newState = { ...personalData };
    newState[e.target.id] = e.target.value;
    setPersonalData(newState);
    console.log(newState);
  };

  if (personalData) {
    return (
      <>
        <ModalAddStudies />
        <ModalAddWorkExperience
          onSubmit={handleSubmit}
          onChange={handleChange}
          data={workExperience}
        />
        <ModalAddService />
        <PageWrapper>
          <div className=" mt-24 mt-lg-31" id="dashboard-body">
            <div className="container">
              <div className="mb-15 mb-lg-23">
                <div className="row">
                  <div className="col-xxxl-9 px-lg-13 px-6">
                    {state.success &&
                      showSuccessAlert("Perfil actualizado exitosamente.")}
                    {state.error &&
                      showErrorAlert(
                        " Ocurrió un error al actualizar el perfil. Por favor, intente más tarde."
                      )}
                    <h5 className="font-size-6 font-weight-semibold mb-11">
                      Mi perfil
                    </h5>
                    <div className="contact-form bg-white shadow-8 rounded-4 pl-sm-10 pl-4 pr-sm-11 pr-4 pt-15 pb-13">
                      <div className="upload-file mb-16 text-center">
                        <div
                          id="userActions"
                          className="square-144 m-auto px-6 mb-7"
                        >
                          <label
                            htmlFor="fileUpload"
                            className="mb-0 font-size-4 text-smoke"
                          >
                            Seleccione o arrastre una foto
                          </label>
                          <input
                            type="file"
                            id="fileUpload"
                            className="sr-only"
                          />
                        </div>
                      </div>
                      <form action="/" onSubmit={handleSubmit}>
                        <fieldset>
                          <div className="row mb-xl-1 mb-9">
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label
                                  htmlFor="nombre"
                                  className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                >
                                  Nombre
                                </label>
                                <input
                                  type="text"
                                  className="form-control h-px-48"
                                  id="nombre"
                                  placeholder="ej. Adriana"
                                  value={personalData.nombre}
                                  onChange={handleChange}
                                  autoComplete="off"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label
                                  htmlFor="apellido"
                                  className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                >
                                  Apellido
                                </label>
                                <input
                                  type="text"
                                  className="form-control h-px-48"
                                  id="apellido"
                                  placeholder="ej. Estigarribia"
                                  value={personalData.apellido}
                                  onChange={handleChange}
                                  autoComplete="off"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="row mb-8">
                            <div className="col-lg-6">
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
                                  value={{
                                    label: sex.label,
                                    value: sex.value,
                                  }}
                                  onChange={handleSex}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label
                                  htmlFor="fecha_nacimiento"
                                  className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                                >
                                  Fecha de nacimiento (mm/dd/yyyy)
                                </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  placeholder="Ingrese su fecha de nacimiento"
                                  id="fecha_nacimiento"
                                  value={personalData.fecha_nacimiento}
                                  onChange={handleChange}
                                  autoComplete="off"
                                />
                              </div>
                            </div>
                          </div>
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                            Documento
                          </h4>
                          <div className="row mb-8">
                            <div className="col-lg-6">
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
                                  value={{
                                    label:
                                      personalData.persona_documento[0]
                                        .documento_tipo.abreviatura +
                                      "( " +
                                      personalData.persona_documento[0]
                                        .documento_tipo.nombre +
                                      " )",
                                    value:
                                      personalData.persona_documento[0]
                                        .documento_tipo.id,
                                  }}
                                  onChange={handleDocumentType}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label
                                  htmlFor="numero"
                                  className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                >
                                  Nro. de documento
                                </label>
                                <input
                                  type="text"
                                  className="form-control h-px-48"
                                  id="numero"
                                  placeholder="ej. 356475"
                                  value={
                                    personalData.persona_documento[0].numero
                                  }
                                  onChange={handleDocument}
                                  autoComplete="off"
                                />
                              </div>
                            </div>
                          </div>
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                            Domicilio
                          </h4>
                          <div className="row mb-8">
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
                                  value={{
                                    label: pais[0].label,
                                    value: pais[0].value,
                                  }}
                                  isDisabled={true}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group position-relative">
                                <label
                                  htmlFor="address"
                                  className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                >
                                  Departamento
                                </label>
                                <Select
                                  options={department}
                                  className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                  border={false}
                                  value={{
                                    label:
                                      personalData.persona_direccion[0].ciudad
                                        .departamento.nombre,
                                    value:
                                      personalData.persona_direccion[0].ciudad
                                        .departamento.id,
                                  }}
                                  onChange={handleDepartment}
                                />
                                <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"></span>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-8">
                            <div className="col-lg-6">
                              <div className="form-group position-relative">
                                <label
                                  htmlFor="address"
                                  className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                >
                                  Ciudad
                                </label>
                                <Select
                                  options={city}
                                  className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                  border={false}
                                  value={{
                                    label:
                                      personalData.persona_direccion[0].ciudad
                                        .nombre,
                                    value:
                                      personalData.persona_direccion[0].ciudad
                                        .id,
                                  }}
                                  onChange={handleCity}
                                />
                                <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"></span>
                              </div>
                            </div>
                            <div className="col-lg-6 mb-xl-0 mb-7">
                              <div className="form-group position-relative">
                                <label
                                  htmlFor="select3"
                                  className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                >
                                  Barrio
                                </label>
                                <Select
                                  options={neighborhood}
                                  className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                  border={false}
                                  value={{
                                    label:
                                      personalData.persona_direccion[0].barrio
                                        .nombre,
                                    value:
                                      personalData.persona_direccion[0].barrio
                                        .id,
                                  }}
                                  onChange={handleNeighborhood}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row mb-8">
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label
                                  htmlFor="direccion"
                                  className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                >
                                  Calle
                                </label>
                                <input
                                  type="text"
                                  className="form-control h-px-48"
                                  id="direccion"
                                  placeholder="ej. San Blas casi Molas"
                                  value={
                                    personalData.persona_direccion[0].direccion
                                  }
                                  onChange={handleAddress}
                                  autoComplete="off"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label
                                  htmlFor="numero"
                                  className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                >
                                  Nro. de casa
                                </label>
                                <input
                                  type="text"
                                  className="form-control h-px-48"
                                  id="numero"
                                  placeholder="ej. 123"
                                  value={
                                    personalData.persona_direccion[0].numero
                                  }
                                  onChange={handleAddress}
                                  autoComplete="off"
                                />
                              </div>
                            </div>
                          </div>

                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                            Teléfono
                          </h4>
                          <div className="row mb-8">
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label
                                  htmlFor="numero"
                                  className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                                >
                                  Nro. de teléfono
                                </label>
                                <input
                                  type="text"
                                  className="form-control h-px-48"
                                  id="numero"
                                  placeholder="ej. 0987-xxx-xxx"
                                  value={
                                    personalData.persona_telefono[0].numero
                                  }
                                  onChange={handlePhoneNumber}
                                  autoComplete="off"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-end">
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
                                    checked={
                                      personalData.persona_telefono[0].celular
                                    }
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
                                    checked={
                                      personalData.persona_telefono[0].celular
                                        ? false
                                        : true
                                    }
                                    onChange={handleRadioBtn}
                                  />
                                  <span className="checkbox mr-5"></span>
                                  <span className="font-size-4 mb-0 line-height-reset d-block font-weight-semibold">
                                    <div className="text-primary">
                                      Línea fija
                                    </div>
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                          {JSON.parse(Cookies.get("user")).usuario_tipo_id ==
                            profesionalUserTypeId && (
                            <div>
                              <h4 className="font-size-6 mt-5 text-black-2 font-weight-semibold">
                                Servicios
                              </h4>
                              <div className="row mb-8">
                                <div className="col-lg-4 mb-xl-0 mb-7 d-flex justify-content-start">
                                  {/* <!-- Start Feature One --> */}
                                  <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                                    <h2 className="mt-n4 d-flex justify-content-center">
                                      <Link href="/#">
                                        <a className="font-size-6 text-black-2 font-weight-bold mb-4">
                                          Enseñanza de inglés
                                        </a>
                                      </Link>
                                    </h2>
                                    <ul className="list-unstyled mb-1 card-tag-list d-flex justify-content-center">
                                      <li>
                                        <Link href="/#">
                                          <a className="bg-regent-opacity-15 text-green font-size-3 rounded-3">
                                            <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                                            Presencial
                                          </a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                                            <i className="fa fa-clock mr-2 font-weight-bold"></i>{" "}
                                            Por hora
                                          </a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                                            <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                                            60.000 Gs
                                          </a>
                                        </Link>
                                      </li>
                                    </ul>

                                    <div className="card-btn-group mt-7 d-flex justify-content-center">
                                      <Link href="/#">
                                        <a
                                          className="text-green font-weight-bold text-uppercase font-size-3 d-flex align-items-center justify-content-center mx-4"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            gContext.toggleAddServiceModal();
                                          }}
                                        >
                                          Editar{" "}
                                          <i className="fas fa-edit ml-3 mt-n2 font-size-4"></i>
                                        </a>
                                      </Link>
                                      <Link href="/#">
                                        <a
                                          className="text-green font-weight-bold text-uppercase font-size-3 d-flex align-items-center justify-content-center mx-4"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            gContext.toggleAddServiceModal();
                                          }}
                                        >
                                          Borrar{" "}
                                          <i className="fas fa-trash-alt ml-3 mt-n2 font-size-4"></i>
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                  {/* <!-- End Feature One --> */}
                                </div>
                                <div className="col-lg-4 mb-xl-0 mb-7 d-flex justify-content-start">
                                  <div className="text-center pt-5 pt-lg-13">
                                    <Link href="/#">
                                      <a
                                        className="text-green font-weight-bold text-uppercase font-size-3 d-flex align-items-center justify-content-center"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          gContext.toggleAddServiceModal();
                                        }}
                                      >
                                        Agregar{" "}
                                        <i className="fas fa-plus ml-3 mt-n2 font-size-4"></i>
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                              </div>

                              <h4 className="font-size-6 mt-5 text-black-2 font-weight-semibold">
                                Experiencias laborales
                              </h4>
                              <div className="row mb-8">
                                <div className="col-lg-4 mb-xl-0 mb-7 d-flex justify-content-start">
                                  {/* <!-- Start Feature One --> */}
                                  <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                                    <Link href="/#">
                                      <a className="font-size-3 d-block mb-0 text-gray">
                                        CCPA
                                      </a>
                                    </Link>
                                    <h2 className="mt-n4">
                                      <Link href="/#">
                                        <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                                          Profesor de inglés
                                        </a>
                                      </Link>
                                    </h2>
                                    <ul className="list-unstyled mb-1 card-tag-list">
                                      <li>
                                        <Link href="/#">
                                          <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                                            <i className="fa fa-clock mr-2 font-weight-bold"></i>{" "}
                                            Marzo 2019 - Agosto 2021
                                          </a>
                                        </Link>
                                      </li>
                                    </ul>

                                    <div className="card-btn-group mt-7">
                                      <Link href="/#">
                                        <a
                                          className="text-green font-weight-bold text-uppercase font-size-3 d-flex align-items-center justify-content-center mx-4"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            gContext.toggleAddWorkExperienceModal();
                                          }}
                                        >
                                          Editar{" "}
                                          <i className="fas fa-edit ml-3 mt-n2 font-size-4"></i>
                                        </a>
                                      </Link>
                                      <Link href="/#">
                                        <a
                                          className="text-green font-weight-bold text-uppercase font-size-3 d-flex align-items-center justify-content-center mx-4"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            gContext.toggleAddWorkExperienceModal();
                                          }}
                                        >
                                          Borrar{" "}
                                          <i className="fas fa-trash-alt ml-3 mt-n2 font-size-4"></i>
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                  {/* <!-- End Feature One --> */}
                                </div>
                                <div className="col-lg-4 mb-xl-0 mb-7 d-flex justify-content-start">
                                  <div className="text-center pt-5 pt-lg-13">
                                    <Link href="/#">
                                      <a
                                        className="text-green font-weight-bold text-uppercase font-size-3 d-flex align-items-center justify-content-center"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          gContext.toggleAddWorkExperienceModal();
                                        }}
                                      >
                                        Agregar{" "}
                                        <i className="fas fa-plus ml-3 mt-n2 font-size-4"></i>
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          <div className="row">
                            <div className="col-md-12 d-flex justify-content-end">
                              <input
                                type="submit"
                                value="Guardar"
                                className="btn btn-green btn-h-60 text-white min-width-px-210 rounded-5 text-uppercase"
                              />
                            </div>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageWrapper>
      </>
    );
  } else {
    return <div>no hay datos</div>;
  }
};
export default MyProfile;
