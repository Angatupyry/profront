import Cookies from "js-cookie";
import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import UsuarioService from "../services/usuario.service";
import TransactionService from "../services/transaccion.service";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const numberFormat = (value) =>
  new Intl.NumberFormat("es-PY", {
    style: "decimal",
    currency: "PYG",
  }).format(value);

export const showErrorAlert = (text) => {
  scrollToTop();
  return (
    <div className="row no-gutters">
      <div className="col-md-12">
        <div className="alert alert-danger" role="alert">
          {text}
        </div>
      </div>
    </div>
  );
};

export const showSuccessAlert = (text) => {
  scrollToTop();
  return (
    <div className="row no-gutters">
      <div className="col-md-12">
        <div className="alert alert-success" role="alert">
          {text}
        </div>
      </div>
    </div>
  );
};

export async function getUserType() {
  try {
    const response = await UsuarioService.getUserType();
    Cookies.set("userTypes", JSON.stringify(response.data.data));
    console.log(response.data.data);
  } catch (error) {
    console.log(error);
  }
}

export function getUserTypeId(user) {
  try {
    let userTypes = JSON.parse(Cookies.get("userTypes"));
    const res = userTypes.find(
      (element) => element.nombre.toLowerCase() == user.toLowerCase()
    ).id;
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getTransactionStates() {
  try {
    const response = await TransactionService.getTransactionStates();
    Cookies.set("transactionStates", JSON.stringify(response.data.data));
  } catch (error) {
    console.log(error);
  }
}

export function getTransactionStateId(transaction) {
  try {
    let transactionStates = JSON.parse(Cookies.get("transactionStates"));
    const res = transactionStates.find(
      (element) => element.nombre.toLowerCase() == transaction.toLowerCase()
    ).id;
    return res;
  } catch (error) {
    console.log(error);
  }
}
