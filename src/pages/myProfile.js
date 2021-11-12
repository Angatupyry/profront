import React, { useEffect, useContext, useState } from "react";
import Link from "next/link";

import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import { scrollToTop } from "../utils/utils";
import { getUserTypeId, constants } from "../utils";
import ModalAddStudies from "../components/ModalAddStudies";
import GlobalContext from "../context/GlobalContext";
import ModalAddWorkExperience from "../components/ModalAddWorkExperience";
const sex = [
  { value: "M", label: "Masculino" },
  { value: "F", label: "Femenino" },
];

const neighborhood = [
  { value: "1", label: "Sol de América" },
  { value: "2", label: "Villa Bonita" },
  { value: "3", label: "Santa Ana" },
  { value: "4", label: "29 de setiembre" },
];

const city = [
  { value: "1", label: "Villa Elisa" },
  { value: "2", label: "Lambaré" },
  { value: "3", label: "Ñemby" },
  { value: "4", label: "Asunción" },
];

const MyProfile = () => {
  const gContext = useContext(GlobalContext);
  const [clientUserTypeId, setClientUserTypeId] = React.useState("");

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

  useEffect(() => {
    scrollToTop();
    // if (dataResult == undefined || null) {
    //   fetchData();
    // }
    let clientUserTypeId = getUserTypeId(constants.CLIENT_TYPE.CLIENTE);
    setClientUserTypeId(clientUserTypeId);
  }, []);

  const handleChange = (e) => {
    console.log("entra en handleChange myProfile");
    const newState = { ...workExperience };
    newState[e.target.id] = e.target.value;
    setWorkExperience(newState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    gContext.showPageSpinner();
    setState({ loading: true, error: null });
    try {
      console.log(workExperience);
      setState({ loading: false, error: null, success: true });
    } catch (error) {
      console.log(error);
      setState({ loading: false, error: error });
    }
  };
  return (
    <>
      <ModalAddStudies />
      <ModalAddWorkExperience
        onSubmit={handleSubmit}
        onChange={handleChange}
        data={workExperience}
      />
      <PageWrapper>
        <div className=" mt-24 mt-lg-31" id="dashboard-body">
          <div className="container">
            <div className="mb-15 mb-lg-23">
              <div className="row">
                <div className="col-xxxl-9 px-lg-13 px-6">
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
                    <form action="/">
                      <fieldset>
                        <div className="row mb-xl-1 mb-9">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Nombre
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                id="namedash"
                                placeholder="ej. Adriana"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Apellido
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                id="namedash"
                                placeholder="ej. Estigarribia"
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
                                options={sex}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
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
                                //value={state.birthDate}
                                //onChange={handleChange}
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
                                Tipo documento
                              </label>
                              <Select
                                options={sex}
                                className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                                border={false}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Nro. de documento
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                id="namedash"
                                placeholder="ej. 356475"
                              />
                            </div>
                          </div>
                        </div>
                        <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                          Domicilio
                        </h4>
                        <div className="row mb-8">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Calle
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                id="namedash"
                                placeholder="ej. San Blas casi Molas"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Nro. de casa
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                id="namedash"
                                placeholder="ej. 123"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mb-8">
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
                              />
                            </div>
                          </div>
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
                              />
                              <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"></span>
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
                                htmlFor="namedash"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                                Nro. de teléfono
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                id="namedash"
                                placeholder="ej. 0987-xxx-xxx"
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
                                  //onChange={handlePayments}
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
                                  //onChange={handlePayments}
                                />
                                <span className="checkbox mr-5"></span>
                                <span className="font-size-4 mb-0 line-height-reset d-block font-weight-semibold">
                                  <div className="text-primary">Línea fija</div>
                                </span>
                              </label>
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

                        <div className="row">
                          <div className="col-md-12 d-flex justify-content-end">
                            <input
                              type="button"
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
};
export default MyProfile;
