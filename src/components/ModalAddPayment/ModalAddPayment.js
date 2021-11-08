import React, { useContext, useState, useEffect } from "react";
import Router from "next/router";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
import AuthService from "../../services/auth.service";
import Error from "../Error/Error";
import { Select } from "../../components/Core";
import Loader from "react-loader-spinner";

import MediosPagoService from "../../services/mediosPago.service";
import Cookies from "js-cookie";

const ModalStyled = styled(Modal)`
  /* &.modal {
    z-index: 10050;
  } */
`;

const cardArray = [];
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

const ModalAddPayment = (props) => {
  const [tarjetas, setTarjetas] = React.useState([]);
  const gContext = useContext(GlobalContext);
  const [state, setState] = React.useState({
    loading: true,
    error: null,
    success: false,
    card: "",
    cardLabel: "",
  });

  const [postData, setPostData] = React.useState({
    descripcion: "",
    tipo_tarjeta_id: 0,
    usuario_id: 0,
    numero_tarjeta: "",
    fecha_vencimiento_tarjeta: getTodaysdate(),
    numero_cvc: "",
    secuencia: 1,
    mes_vencimiento: meses[0].value,
    mes_vencimiento_label: meses[0].label,
    anho_vencimiento: anhos[0].value,
    anho_vencimiento_label: anhos[0].label,
  });

  const handleClose = () => {
    gContext.toggleAddPaymentModal();
  };

  const handleChange = (e) => {
    const newPostData = { ...postData };
    newPostData[e.target.id] = e.target.value;
    setPostData(newPostData);
  };

  function isEmpty(value) {
    return (
      Boolean(value && typeof value === "object") && !Object.keys(value).length
    );
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  async function getCards() {
    setState({ loading: true, error: null });
    try {
      const cards = await MediosPagoService.getCards();
      cards.data.data.forEach((element) => {
        cardArray.push({
          value: element.id.toString(),
          label: element.nombre,
        });
      });
      setTarjetas(cardArray);
      setState({
        card: cardArray[0].value,
        cardLabel: cardArray[0].label,
      });

      setPostData({
        tipo_tarjeta_id: parseInt(cardArray[0].value),
        mes_vencimiento: meses[0].value,
        mes_vencimiento_label: meses[0].label,
        anho_vencimiento: anhos[0].value,
        anho_vencimiento_label: anhos[0].label,
        usuario_id: JSON.parse(Cookies.get("user")).id,
        secuencia: 1,
        fecha_vencimiento_tarjeta: getTodaysdate(),
      });
    } catch (error) {
      console.log(error);
      setState({ loading: false, error: error });
    }
  }

  useEffect(() => {
    if (state.loading) {
      gContext.showPageSpinner();
    }

    if (!tarjetas.length > 0) {
      getCards();
    }
    scrollToTop();
    //setState({ loading: false, error: null });
  }, [tarjetas]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    gContext.showPageSpinner();
    setState({ loading: true, error: null });
    try {
      const response = await MediosPagoService.postCard(
        postData.descripcion,
        postData.tipo_tarjeta_id,
        postData.usuario_id,
        postData.numero_tarjeta,
        postData.fecha_vencimiento_tarjeta,
        postData.numero_cvc,
        postData.secuencia
      );
      setState({ loading: false, error: null, success: true });
    } catch (error) {
      console.log(error);
      setState({ loading: false, error: error });
    }
  };

  const handleMesVencimiento = (e) => {
    const newPostData = { ...postData };
    newPostData["mes_vencimiento"] = e.value;
    newPostData["mes_vencimiento_label"] = e.label;
    setPostData(newPostData);
  };

  const handleAnhoVencimiento = (e) => {
    const newPostData = { ...postData };
    newPostData["anho_vencimiento"] = e.value;
    newPostData["anho_vencimiento_label"] = e.label;
    setPostData(newPostData);
  };

  return (
    <div>
      {state.loading && (
        <div className="spinner">
          <Loader
            type="ThreeDots"
            color="#00b074"
            height={50}
            width={50}
            visible={true}
          />
        </div>
      )}
      <ModalStyled
        {...props}
        size="lg"
        centered
        show={gContext.addPaymentModalVisible}
        onHide={gContext.toggleAddPaymentModal}
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
              <div className="col-lg-5 col-md-6">
                <div className="pt-10 pb-6 pl-11 pr-12 bg-black-2 h-100 d-flex flex-column dark-mode-texts">
                  <div className="pb-9">
                    <h3 className="font-size-8 text-white line-height-reset pb-4 line-height-1p4">
                      Medio de pago
                    </h3>
                    <p className="mb-0 font-size-4 text-white">
                      Agregue un nuevo medio de pago
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="bg-white-2 h-100 px-11 pt-11 pb-7">
                  <form action="/" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label
                        htmlFor="descripcion"
                        className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                      >
                        Descripción
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mi tarjeta visa"
                        id="descripcion"
                        value={postData.descripcion}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="select2"
                        className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                      >
                        Tipo de tarjeta
                      </label>
                      <Select
                        options={tarjetas}
                        className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                        border={false}
                        id="tipoTarjeta"
                        value={{
                          label: state.cardLabel,
                          value: state.card,
                        }}
                        // onChange={handleSelect}
                      />
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="numero_tarjeta"
                        className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                      >
                        Número de tarjeta
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="0214 1544 7845 4445"
                        id="numero_tarjeta"
                        value={postData.numero_tarjeta}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="nombre_titular"
                        className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                      >
                        Nombre del titular
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Pedro Gimenez"
                        id="nombre_titular"
                        // value={postData.no}
                        // onChange={handleChange}
                      />
                    </div>
                    <div className="row no-gutters">
                      <div className="col-lg-6 col-md-6 p-0 pr-2">
                        <div className="form-group">
                          <label
                            htmlFor="select2"
                            className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >
                            Mes vencimiento
                          </label>
                          <Select
                            options={meses}
                            className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                            border={false}
                            id="tipoTarjeta"
                            value={{
                              label: postData.mes_vencimiento_label,
                              value: postData.mes_vencimiento,
                            }}
                            onChange={handleMesVencimiento}
                          />
                        </div>{" "}
                      </div>

                      <div className="col-lg-6 col-md-6 pr-0 pl-2">
                        <div className="form-group">
                          <label
                            htmlFor="select2"
                            className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                          >
                            Año vencimiento
                          </label>
                          <Select
                            options={anhos}
                            className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                            border={false}
                            id="tipoTarjeta"
                            value={{
                              label: postData.anho_vencimiento_label,
                              value: postData.anho_vencimiento,
                            }}
                            onChange={handleAnhoVencimiento}
                          />
                        </div>{" "}
                      </div>
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="numero_cvc"
                        className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                      >
                        CVV
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="123"
                        id="numero_cvc"
                        value={postData.numero_cvc}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="datos_adicionales"
                        className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                      >
                        Datos adicionales
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="54846"
                        id="datos_adicionales"
                        // value={state.email}
                        // onChange={handleChange}
                      />
                    </div>

                    <div className="form-group mb-8">
                      <button
                        className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase"
                        type="submit"
                      >
                        Guardar{" "}
                      </button>
                    </div>
                    {state.success && (
                      <div className="alert alert-success" role="alert">
                        Tarjeta guardada exitosamente.
                      </div>
                    )}
                    {state.error && (
                      <div className="alert alert-danger" role="alert">
                        Ocurrió un error.
                      </div>
                    )}
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

export default ModalAddPayment;
